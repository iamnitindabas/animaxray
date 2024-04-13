import React from "react";
import { Card, Image, Button, Link } from "@nextui-org/react";
import star from "../assets/star.svg";
import heart from "../assets/red-heart.svg";

interface genre {
  name: string;
  url: string;
}

interface AnimeListProps {
  singleAnimeData: {
    title: string;
    synopsis: string;
    episodes: number;
    duration: string;
    popularity: number;
    score: number;
    genres: genre[] | null;
    trailer: {
      youtube_id: string;
    };
    images: {
      jpg: {
        // Mark jpg property as optional
        large_image_url: string;
      };
    };
  };
}

const AnimeList: React.FC<AnimeListProps> = ({ singleAnimeData }) => {
  const colorType = ["primary", "secondary", "danger", "warning", "success"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorType.length);
    return colorType[randomIndex];
  };
  const randomColor = getRandomColor();

  return (
    <>
      <Card className="bg-[#f5f6f9] dark:bg-[#1f232d] h-[320px] min-w-[500px]">
        <div className="grid grid-cols-[230px_auto] rounded-none ">
          <div>
            <Image
              radius="none"
              isZoomed
              alt="Anime Poster"
              className="h-[320px] w-[230px] object-cover object-center min-w-full  min-h-full "
              src={singleAnimeData.images.jpg.large_image_url}
            />
          </div>

          <div className="grid grid-cols-[100%] grid-rows-[auto_50px] gap-1.5 max-h-[320px]">
            <div className="p-5 overflow-auto transition-all  text-[#495b6e]  dark:text-[#9fadbd]">
              <div className="grid grid-cols-2">
                <div>
                  <p className="text-xs font-bold">
                    Episodes :
                    {singleAnimeData.episodes
                      ? singleAnimeData.episodes
                      : "N/A"}
                  </p>
                  <p className="text-tiny font-bold">
                    Duration:{" "}
                    {singleAnimeData.duration
                      ? singleAnimeData.duration
                      : "N/A"}
                  </p>
                </div>
                <div className="flex items-center justify-end gap-4">
                  <div className="flex items-center justify-between ">
                    <img src={heart} alt="" className="size-7 pr-2" />#
                    {singleAnimeData.popularity
                      ? singleAnimeData.popularity
                      : "N/A"}
                  </div>
                  <div className="flex items-center justify-evenly">
                    <img src={star} alt="" className="size-7 pr-2" />
                    <p>
                      {singleAnimeData.score ? singleAnimeData.score : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-2xl py-2">
                {singleAnimeData.title}
              </h4>

              <div className="line-clamp-5 overflow-hidden hover:line-clamp-none ">
                <small className=" text-ellipsis overflow-hidden  ">
                  {singleAnimeData.synopsis
                    ? singleAnimeData.synopsis
                    : "No description available."}
                </small>
              </div>
            </div>
            <div className="flex items-center px-3 pt-1 overflow-hidden  bg-[#e5e9f5] dark:bg-[#191d26]">
              {singleAnimeData.genres ? (
                singleAnimeData.genres.slice(0, 3).map((genre, index) => (
                  <div key={index} className="flex align-bottom flex-wrap">
                    <Button
                      className="mr-1 mb-1 rounded-full"
                      size="sm"
                      href={genre.url}
                      as={Link}
                      color={randomColor}
                      variant="flat"
                    >
                      {genre.name}
                    </Button>
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AnimeList;
