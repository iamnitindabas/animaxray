// App.tsx

import React, { useState } from "react";
import AnimeList from "./Components/AnimeList";
import { NextUIProvider } from "@nextui-org/react";
import Navigationbar from "./Components/Navbar";

const App: React.FC = () => {
  const [animeData, setAnimeData] = useState<[] | null>(null);
  const [isDark, setIsDark] = useState<boolean>(false);
  const handleDataFetch = (data: []) => {
    setAnimeData(data);
    console.log(data);
  };

  const appModeChange = (isDarkvalue: boolean) => {
    setIsDark(isDarkvalue);
  };
  return (
    <>
      <NextUIProvider>
        <main className={isDark ? "dark" : "light"}>
          <Navigationbar
            onDataFetch={handleDataFetch}
            onModeChange={appModeChange}
          />
          <div className=" dark:bg-background light:bg-white">
            <div className="flex align-center justify-center p-5"></div>
            <div className="flex flex-grow-0 flex-wrap gap-5 p-5 m-10 justify-center ">
              <AnimeList animeData={animeData} />
            </div>
          </div>
        </main>
      </NextUIProvider>
    </>
  );
};

export default App;
