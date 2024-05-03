import React from "react";
import AnimeLists from "../Components/Animelists";

const UpcomingAnimePage: React.FC = () => {
  return (
    <>
      <div className="m-auto max-w-[1400px]">
        <div className="font-bold text-[#647380] text-4xl text-center md:text-left p-4 ">
          <p>Upcoming Anime</p>
        </div>
        <div className="bg-[#d6e0ef] dark:bg-[#13171d] bg-center bg-no-repeat bg-cover ">
          <div className="px-3">
            <AnimeLists smallCards={true} upcomingAnime={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingAnimePage;
