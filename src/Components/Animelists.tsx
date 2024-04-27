import AnimeList from "./AnimeList";
import ListsPagination from "./ListsPagination";
import ApiHandler from "./ApiHandler";
import { useEffect, useState } from "react";
import { AnimeListsProps, pageData } from "../Types/Types";

const Animelists: React.FC<AnimeListsProps> = ({
  smallCards,
  seachQuery,
  multiAnimeData,
  paginationData,
}) => {
  const gridClass = smallCards
    ? "grid gap-3  py-[1vw] mx-[0.5vw] grid-cols-3 xl:gap-6 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 "
    : "grid gap-7 py-[2vw] mx-[1vw] 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 2xl:mx-[1vw] xl:mx-[2vw] md:mx-[10vw] sm:mx-[3vw]";
  const [page, setPage] = useState<number>();
  const [animeData, setAnimeData] = useState<[] | null>(multiAnimeData);
  const [pageData, setPageData] = useState<pageData | null>();

  useEffect(() => {
    setAnimeData(multiAnimeData);
  }, [multiAnimeData]);

  const handleDataFetch = (animePageData: []) => {
    setAnimeData(animePageData);
    console.log(animePageData);
    console.log("handle AL data fetch executed");
  };
  const handlePageFetch = (pageData: pageData | null) => {
    setPageData(pageData);
    console.log(pageData);
    console.log("handle AL page fetch executed");
  };
  const handlePageChange = (pageValue: number) => {
    setPage(pageValue);
  };
  return (
    <>
      {paginationData ? (
        paginationData && ( // Adding a conditional check for paginationData
          <ListsPagination
            onPageChange={handlePageChange}
            paginationData={paginationData}
          />
        )
      ) : pageData ? (
        <ListsPagination
          onPageChange={handlePageChange}
          paginationData={pageData}
        />
      ) : (
        <p>no page data available</p>
      )}
      <ApiHandler
        searchQuery={seachQuery}
        page={page}
        onDataFetch={handleDataFetch}
        onPageFetch={handlePageFetch}
      />
      <section className={gridClass}>
        {animeData ? (
          animeData.map((singleanime, index) => {
            return (
              <AnimeList
                key={index}
                singleAnimeData={singleanime}
                smallCards={smallCards}
              />
            );
          })
        ) : multiAnimeData ? (
          multiAnimeData.map((singleanime, index) => {
            return <AnimeList key={index} singleAnimeData={singleanime} />;
          })
        ) : (
          <p>No data found</p>
        )}
      </section>
    </>
  );
};

export default Animelists;
