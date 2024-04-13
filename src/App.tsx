// App.tsx

import React, { useState } from "react";
import AnimeLists from "./Components/Animelists";
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
          <div className="bg-lightbg dark:bg-darkbg bg-center bg-no-repeat bg-cover">
            <Navigationbar
              onDataFetch={handleDataFetch}
              onModeChange={appModeChange}
            />
            <div className=" ">
              <div className="">
                <AnimeLists animeData={animeData} />
              </div>
            </div>
          </div>
        </main>
      </NextUIProvider>
    </>
  );
};

export default App;
