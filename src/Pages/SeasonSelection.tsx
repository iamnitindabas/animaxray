import React from "react";
import AnimeLists from "../Components/Animelists";
import FullSearchbar from "../Components/FullSearchbar";

const SeasonSelection: React.FC = () => {
  return (
    <>
      <div className="m-auto max-w-[1400px]">
        <div className="font-bold text-[#647380] text-4xl text-center md:text-left p-4 ">
          <p>Seasonal Anime</p>
        </div>
        <FullSearchbar />
        <div className="bg-[#d6e0ef] dark:bg-[#13171d] bg-center bg-no-repeat bg-cover ">
          <div className="px-3">
            <AnimeLists
              seasonSearch={true}
              seasonYear={2023}
              season={"spring"}
              smallCards={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeasonSelection;
