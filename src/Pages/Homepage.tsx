import React, { useState } from "react";
import AnimeLists from "../Components/Animelists";
import { Input } from "@nextui-org/react";
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

const Homepage: React.FC = () => {
  const [animeData, setAnimeData] = useState<[] | null>(null);
  const [pageData, setPageData] = useState<pageData | null>();
  const [searchQuery, setSearchQuery] = useState<string>();
  const [search, setSearch] = useState<string>("");

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

  return (
    <>
      <div className="grid place-items-center p-4">
        <Input
          classNames={{
            base: "h-12 w-[57vw] sm:w-[75vw] md:w-72 ",
            mainWrapper: "h-full",
            input: "text-medium ",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search anime..."
          size="md"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ApiHandler
          searchQuery={search}
          onDataFetch={handleDataFetch}
          onPageFetch={handlePageFetch}
        />
      </div>
      <div className="bg-[#d6e0ef] dark:bg-[#13171d] bg-center bg-no-repeat bg-cover ">
        <div className="p-3">
          <AnimeLists
            seachQuery={searchQuery}
            multiAnimeData={animeData}
            paginationData={pageData!}
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
