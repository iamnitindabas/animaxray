// App.tsx

import React, { useState } from "react";
import AnimeLists from "./Components/Animelists";
import { NextUIProvider } from "@nextui-org/react";
import Navigationbar from "./Components/Navbar";
// import Homepage from "./Pages/Homepage";

interface pageData {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

const App: React.FC = () => {
  const [animeData, setAnimeData] = useState<[] | null>(null);
  const [pageData, setPageData] = useState<pageData | null>();
  const [isDark, setIsDark] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>();

  const handleDataFetch = (apidata: [], searchQuery: string) => {
    setAnimeData(apidata);
    setSearchQuery(searchQuery);
    console.log(apidata);
    console.log("handle app data fetch executed");
  };
  const handlePageFetch = (pageData: pageData | null) => {
    setPageData(pageData);
    console.log(pageData);
    console.log("handle app page fetch executed");
  };

  const appModeChange = (isDarkvalue: boolean) => {
    setIsDark(isDarkvalue);
  };
  return (
    <>
      <NextUIProvider>
        <main className={isDark ? "dark " : "light"}>
          {/* <header className="w-full fixed top-0 h-[300px] bg-[#2b2d42]"></header> */}
          <div className="bg-[#d6e0ef] dark:bg-[#13171d] bg-center bg-no-repeat bg-cover ">
            <Navigationbar
              onDataFetch={handleDataFetch}
              onPageFetch={handlePageFetch}
              onModeChange={appModeChange}
            />
            <div className="p-3">
              <AnimeLists
                seachQuery={searchQuery}
                multiAnimeData={animeData}
                paginationData={pageData!}
              />
            </div>
          </div>
        </main>
      </NextUIProvider>
    </>
  );
};

export default App;
