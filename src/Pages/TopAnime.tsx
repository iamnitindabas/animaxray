import React, { useState } from "react";
import AnimeLists from "../Components/Animelists";
import ApiHandler from "../Components/ApiHandler";
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

const TopAnime: React.FC = () => {
  const [animeData, setAnimeData] = useState<[] | null>(null);
  const [pageData, setPageData] = useState<pageData | null>();

  const handleDataFetch = (apidata: []) => {
    setAnimeData(apidata);
    console.log(apidata);
    console.log("handle app data fetch executed");
  };
  const handlePageFetch = (pageData: pageData | null) => {
    setPageData(pageData);
    console.log(pageData);
    console.log("handle app page fetch executed");
  };

  return (
    <>
      <div className="m-auto max-w-[1400px]">
        <div className="font-bold text-[#647380] text-4xl text-center md:text-left p-4 ">
          <p>Top Anime</p>
        </div>
        <ApiHandler
          onDataFetch={handleDataFetch}
          onPageFetch={handlePageFetch}
        />
        <div className="bg-[#d6e0ef] dark:bg-[#13171d] bg-center bg-no-repeat bg-cover ">
          <div className="px-3">
            <AnimeLists
              multiAnimeData={animeData}
              paginationData={pageData!}
              smallCards={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopAnime;
