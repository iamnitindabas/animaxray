import React from "react";
import { Card, Image, Button, Link } from "@nextui-org/react";

interface Anime {
  title: string;
  background: string;
  episodes: number;
  genres: genre[] | null;
  images: {
    jpg: {
      // Mark jpg property as optional
      large_image_url: string;
    };
  };
}
interface genre {
  name: string;
  url: string;
}
interface AnimeListProps {
  animeData: Anime[] | null;
}

const AnimeList: React.FC<AnimeListProps> = ({ animeData }) => {
  return (
    <>
      {animeData ? (
        animeData.map((anime, index) => (
          <div key={index} className="">
            <Card className="bg-white dark:bg-[#1f232d] h-72 min-w-[500px]">
              <div className="grid grid-cols-[200px_auto] gap-3 ">
                <Image
                  isZoomed
                  alt="Anime Poster"
                  className="h-72 w-[200px] object-cover object-center rounded-xl min-w-full  min-h-full "
                  src={anime.images.jpg.large_image_url}
                  // width={270}
                  // height={270}
                />

                <div className="grid grid-cols-[100%] grid-rows-[auto_50px] gap-1.5 max-h-72">
                  <div className="p-3 overflow-auto transition-all">
                    <p className="text-tiny uppercase font-bold">
                      Episodes : {anime.episodes ? anime.episodes : "N/A"}
                    </p>
                    <h4 className="font-bold text-2xl text-violet-600 py-2">
                      {anime.title}
                    </h4>
                    <div className="line-clamp-5 overflow-hidden hover:line-clamp-none ">
                      <small className=" text-ellipsis overflow-hidden text-default-500 ">
                        {anime.background
                          ? anime.background
                          : "No description available."}
                        {/* // && anime.background.length > 250
                            // ? anime.background.substring(0, 1000) + "......"
                            // : anime.background} */}
                      </small>
                    </div>
                  </div>
                  <div className="flex items-center px-3 overflow-hidden">
                    {anime.genres ? (
                      anime.genres.slice(0, 3).map((genre, index) => (
                        <div
                          key={index}
                          className="flex align-bottom flex-wrap"
                        >
                          <Button
                            className="mr-1 mb-1 rounded-full"
                            size="sm"
                            href={genre.url}
                            as={Link}
                            color="secondary"
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
          </div>
        ))
      ) : (
        <p>No anime data available</p>
      )}
    </>
  );
};

export default AnimeList;
