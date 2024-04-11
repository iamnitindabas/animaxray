// App.tsx

import React, { useState } from "react";
import AnimeList from "./Components/AnimeList";
import Navigationbar from "./Components/Navbar";
import { Input } from "@nextui-org/react";
import ApiHandler from "./Components/ApiHandler";

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [animeData, setAnimeData] = useState<[] | null>(null);

  const handleDataFetch = (data: []) => {
    setAnimeData(data);
    console.log(data);
  };

  return (
    <>
      <Navigationbar />
      <div className="">
        <div className="flex align-center justify-center p-5">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-medium",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="md"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ApiHandler searchQuery={search} onDataFetch={handleDataFetch} />
        <div className="flex flex-grow-0 flex-wrap gap-5 p-5 m-10 justify-center ">
          <AnimeList animeData={animeData} />
        </div>
      </div>
    </>
  );
};

export default App;
