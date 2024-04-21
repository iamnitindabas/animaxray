import React, { useState } from "react";
import AnimeLists from "../Components/Animelists";
import ApiHandler from "../Components/ApiHandler";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

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

const SeasonSelection: React.FC = () => {
  const [animeData, setAnimeData] = useState<[] | null>(null);
  const [pageData, setPageData] = useState<pageData | null>();
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, " "),
    [selectedKeys]
  );
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
          <p>Seasonal Anime</p>
        </div>
        <div className="flex gap-4">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="ghost"
                color="warning"
                className="text-black dark:text-white"
              >
                Select Season
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="Winter" color="warning">
                Winter
              </DropdownItem>
              <DropdownItem key="Spring" color="warning">
                Spring
              </DropdownItem>
              <DropdownItem key="Summer" color="warning">
                Summer
              </DropdownItem>
              <DropdownItem key="Fall" color="warning">
                Fall
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="ghost"
                color="warning"
                className="text-black dark:text-white"
              >
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              aria-label="Static Actions "
            >
              <DropdownItem key="Winter" color="warning">
                Winter
              </DropdownItem>
              <DropdownItem key="Spring" color="warning">
                Spring
              </DropdownItem>
              <DropdownItem key="Summer" color="warning">
                Summer
              </DropdownItem>
              <DropdownItem key="Fall" color="warning">
                Fall
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <ApiHandler
          seasonSearch={true}
          seasonYear={2023}
          season={"spring"}
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

export default SeasonSelection;
