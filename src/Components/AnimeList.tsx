import { useContext } from "react";
import { Card, Image, Button, Link, Skeleton } from "@nextui-org/react";
import star from "../assets/star.svg";
import heart from "../assets/red-heart.svg";
import { AnimeListProps } from "../Types/Types";
import { LoadingContext } from "../Contexts/Context";

const AnimeList: React.FC<AnimeListProps> = ({
  singleAnimeData,
  smallCards,
}) => {
  const colorType: (
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "success"
  )[] = ["primary", "secondary", "danger", "warning", "success"];
  const { isLoading } = useContext(LoadingContext);
  const getRandomColor = (): (typeof colorType)[number] => {
    const randomIndex = Math.floor(Math.random() * colorType.length);
    return colorType[randomIndex];
  };
  const randomColor = getRandomColor();

  return smallCards ? (
    isLoading ? (
      <>
        <Card className="w-[200px] space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      </>
    ) : (
      <>
        <div className="mb-5">
          <Card radius="sm" className="bg-[#f5f6f9] dark:bg-[#1f232d] w-fit">
            <div>
              <Image
                radius="none"
                isZoomed
                alt="Anime Poster"
                className="h-[170px] w-[130px] sm:h-[320px] sm:w-[230px] object-cover object-center min-w-full  min-h-full "
                src={singleAnimeData.images.jpg.large_image_url}
              />
            </div>
          </Card>
          <div className="line-clamp-2">
            <p className="font-bold text-lg text-[#576f84] max-w-[230px]">
              {singleAnimeData.title}
            </p>
          </div>
        </div>
      </>
    )
  ) : (
    <>
      <Card className="bg-[#f5f6f9] dark:bg-[#1f232d] h-[200px] min-w-[345px] sm:h-[320px] sm:min-w-[500px]">
        <div className="grid grid-cols-[130px_auto] sm:grid-cols-[230px_auto] rounded-none ">
          <div>
            <Image
              radius="none"
              isZoomed
              alt="Anime Poster"
              className="h-[200px] w-[130px] sm:h-[320px] sm:w-[230px] object-cover object-center min-w-full  min-h-full "
              src={singleAnimeData.images.jpg.large_image_url}
            />
          </div>

          <div className="grid  gap-1 sm:gap-1.5 grid-cols-[100%] grid-rows-[auto_40px]  max-h-[200px] sm:grid-rows-[auto_50px]  sm:max-h-[320px] ">
            <div className="p-5 overflow-auto transition-all max-h-[150px] sm:max-h-[270px] text-[#495b6e]  dark:text-[#9fadbd]">
              <div className="grid grid-cols-2">
                <div className="flex flex-col items-start justify-center">
                  <p className="text-xs font-bold">
                    Episodes :
                    {singleAnimeData.episodes
                      ? singleAnimeData.episodes
                      : "N/A"}
                  </p>
                  <p className="text-tiny font-bold hidden sm:block">
                    Duration:{" "}
                    {singleAnimeData.duration
                      ? singleAnimeData.duration
                      : "N/A"}
                  </p>
                </div>
                <div className="flex items-center justify-end gap-5">
                  <div className="flex items-center justify-between ">
                    <img
                      src={heart}
                      alt=""
                      className="size-4 sm:size-7 sm:pr-2"
                    />
                    <p className="text-[12px] sm:text-lg">
                      #
                      {singleAnimeData.popularity
                        ? singleAnimeData.popularity
                        : "N/A"}
                    </p>
                  </div>
                  <div className="flex items-center justify-evenly">
                    <img
                      src={star}
                      alt=""
                      className="size-4 sm:size-7 sm:pr-2"
                    />
                    <p className="text-[12px] pl-1 sm:text-lg sm:pl-0 ">
                      {singleAnimeData.score ? singleAnimeData.score : "NA"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <h4 className="line-clamp-2 hover:line-clamp-none transition-all font-bold text-md leading-4 py-2 sm:text-2xl sm:leading-8">
                  {singleAnimeData.title}
                </h4>
                <div className="line-clamp-3 leading-4 overflow-hidden sm:leading-6 sm:line-clamp-5 hover:line-clamp-none ">
                  <small className=" text-ellipsis overflow-hidden">
                    {singleAnimeData.synopsis
                      ? singleAnimeData.synopsis
                      : "No description available."}
                  </small>
                </div>
              </div>
            </div>
            <div className="flex items-center px-3 pt-1 overflow-hidden  bg-[#e5e9f5] dark:bg-[#191d26]">
              {singleAnimeData.genres ? (
                singleAnimeData.genres.slice(0, 3).map((genre, index) => (
                  <div key={index} className="flex align-bottom flex-wrap">
                    <Button
                      className="mr-1 mb-1 rounded-full h-6 w-10 sm:h-8 sm:w-20"
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
                <p>Not available</p>
              )}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AnimeList;
