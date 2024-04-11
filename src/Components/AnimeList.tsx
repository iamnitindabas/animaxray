import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface Anime {
  title: string;
  background: string;
  episodes: number;
  images: {
    jpg: {
      // Mark jpg property as optional
      large_image_url: string;
    };
  };
}
interface AnimeListProps {
  animeData: Anime[] | null;
}

const AnimeList: React.FC<AnimeListProps> = ({ animeData }) => {
  return (
    <>
      {animeData ? (
        animeData.map((anime, index) => (
          <div key={index}>
            {/* <Card>
              <CardBody>
                <div className="flex">
                  <div>
                    <Image
                      isBlurred
                      alt="Anime Poster"
                      className="object-cover rounded-xl "
                      src={anime.images.jpg.large_image_url}
                      width={270}
                      height={270}
                    />
                  </div>
                  <CardBody>
                    <p className="text-tiny uppercase font-bold">
                      Episodes : {anime.episodes}
                    </p>
                    <h4 className="font-bold text-large max-w-60">
                      {anime.title}
                    </h4>
                    <small className="text-default-500 max-w-64 h-auto">
                      {anime.background}
                    </small>
                  </CardBody>
                </div>
              </CardBody>
            </Card> */}
            <Card className="py-4">
              <div className="">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">
                    Episodes : {anime.episodes}
                  </p>
                  <h4 className="font-bold text-large max-w-60">
                    {anime.title}
                  </h4>
                  {/* <small className="text-default-500 w-72 h-auto">
                  {anime.background}
                </small> */}
                </CardHeader>
                <CardBody className="overflow-visible py-2 ">
                  <Image
                    isBlurred
                    alt="Anime Poster"
                    className="object-cover rounded-xl "
                    src={anime.images.jpg.large_image_url}
                    width={270}
                  />
                </CardBody>
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
