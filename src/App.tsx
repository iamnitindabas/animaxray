// App.tsx

import React, { useState } from "react";
import AnimeList from "./Components/AnimeList";
import Navigationbar from "./Components/Navbar";
import { Input } from "@nextui-org/react";
import ApiHandler from "./Components/ApiHandler";

const App: React.FC = () => {
  const [animeData, setAnimeData] = useState<[] | null>(null);

  const handleDataFetch = (data: []) => {
    setAnimeData(data);
    console.log(data);
  };

  return (
    <>
      <Navigationbar onDataFetch={handleDataFetch} />
      <div className="">
        <div className="flex align-center justify-center p-5"></div>
        <div className="flex flex-grow-0 flex-wrap gap-5 p-5 m-10 justify-center ">
          <AnimeList animeData={animeData} />
        </div>
      </div>
    </>
  );
};

export default App;
