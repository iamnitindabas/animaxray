import React from "react";
import {
  Card,
  CardBody,
  Image,
  Button,
  Link,
  CardFooter,
} from "@nextui-org/react";

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
      <div className="flex grow flex-wrap gap-5 justify-center mx-[5vw] my-[3vw]">
        {animeData ? (
          animeData.map((anime, index) => (
            <div key={index}>
              <Card className=" flex basis-full">
                <div className="flex gap-3 ">
                  <div className="w-1/3 ">
                    <Image
                      isBlurred
                      isZoomed
                      alt="Anime Poster"
                      className="object-cover object-center rounded-xl w-full h-[300px]"
                      src={anime.images.jpg.large_image_url}
                      // width={270}
                      // height={270}
                    />
                  </div>

                  <div className="flex flex-col">
                    <CardBody className=" max-w-md ">
                      <div>
                        <p className="text-tiny uppercase font-bold">
                          Episodes : {anime.episodes ? anime.episodes : "N/A"}
                        </p>
                        <h4 className="font-bold  text-violet-600 text-xl max-w-60 ">
                          {anime.title}
                        </h4>
                        <div className="max-h-36 overflow-auto text-ellipsis ">
                          <small className="text-default-500 text-wrap text-ellipsis">
                            {anime.background}
                            {/* // && anime.background.length > 250
                            // ? anime.background.substring(0, 1000) + "......"
                            // : anime.background} */}
                          </small>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter className="flex align-middle flex-wrap h-16 overflow-hidden">
                      {anime.genres ? (
                        anime.genres.map((genre, index) => (
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
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </div>
          ))
        ) : (
          <p>No anime data available</p>
        )}
      </div>
    </>
  );
};

export default AnimeList;
