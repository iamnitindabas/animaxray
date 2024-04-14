// App.tsx

import React, { useState } from "react";
import AnimeLists from "./Components/Animelists";
import { NextUIProvider } from "@nextui-org/react";
import Navigationbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";

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
        <main className={isDark ? "dark " : "light"}>
          <Homepage />
          {/* <header className="w-full fixed top-0 h-[300px] bg-[#2b2d42]"></header> */}
          <div className="bg-[#d6e0ef] dark:bg-[#13171d] bg-center bg-no-repeat bg-cover ">
            <Navigationbar
              onDataFetch={handleDataFetch}
              onModeChange={appModeChange}
            />
            <div className="p-3">
              <AnimeLists multiAnimeData={animeData} />
            </div>
          </div>
        </main>
      </NextUIProvider>
    </>
  );
};

export default App;
