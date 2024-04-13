import React from "react";
import YouTube from "react-youtube";
import {
  Card,
  Image,
  Button,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

interface Anime {
  title: string;
  background: string;
  episodes: number;
  duration: string;
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
}
interface genre {
  name: string;
  url: string;
}

interface AnimeListProps {
  animeData: Anime[] | null;
}

const AnimeList: React.FC<AnimeListProps> = ({ animeData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleOpen = (size: string) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      {animeData ? (
        animeData.map((anime, index) => (
          <div key={index} className="">
            <Modal
              backdrop="transparent"
              size="2xl"
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      {anime.title}
                    </ModalHeader>
                    <ModalBody>
                      <YouTube videoId={anime.trailer.youtube_id} />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="danger"
                        variant="bordered"
                        onPress={onClose}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
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
                  <div className="p-5 overflow-auto transition-all">
                    <div className="flex gap-5 justify-between">
                      <p className="text-xs uppercase font-bold">
                        Episodes : {anime.episodes ? anime.episodes : "N/A"}
                      </p>
                      <p className="text-tiny font-bold">
                        Duration: {anime.duration}
                      </p>
                      <Button key={size} onPress={() => handleOpen(size)}>
                        Open {size}
                      </Button>
                    </div>
                    <h4 className="font-bold text-2xl text-violet-600 py-2">
                      {anime.title}
                    </h4>
                    <div className="line-clamp-4 overflow-hidden hover:line-clamp-none ">
                      <small className=" text-ellipsis overflow-hidden text-default-500 ">
                        {anime.background
                          ? anime.background
                          : "No description available."}
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
