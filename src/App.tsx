import React, { useEffect, useState } from "react";
import AnimeList from "./Components/AnimeList";
import Navigationbar from "./Components/Navbar";
import { Card, CardHeader, CardBody, Image, Input } from "@nextui-org/react";

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [animeData, setAnimeData] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
        );
        const resData = await res.json();
        setAnimeData(resData.data); // Assuming API returns data in the format { data: Anime[] }
        console.log(resData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 1000);

    setTypingTimeout(timeoutId);

    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [search]);

  return (
    <>
      <Navigationbar />

      <div className="bg-sky-200">
        <div className=" flex align-center justify-center p-5">
          {/* <input
            className="w-96 h-12 rounded-3xl border-3 border-sky-600 px-6 bg-transparent"
            type="search"
            placeholder="Enter anime name"
            onChange={(e) => setSearch(e.target.value)}
          /> */}
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
            // startContent={<SearchIcon size={18} />}
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-grow-0 flex-wrap gap-5 p-5 m-10 justify-center ">
          <AnimeList animeData={animeData} />
        </div>
      </div>
    </>
  );
};

export default App;
