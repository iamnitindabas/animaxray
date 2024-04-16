import AnimeList from "./AnimeList";
import ListsPagination from "./ListsPagination";
import ApiHandler from "./ApiHandler";
import { useEffect, useState } from "react";

interface AnimeListProps {
  seachQuery?: string;
  multiAnimeData: [] | null;
  paginationData: pageobject | null;
}
interface pageobject {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

const Animelists: React.FC<AnimeListProps> = ({
  seachQuery,
  multiAnimeData,
  paginationData,
}) => {
  const [page, setPage] = useState<number>();
  const [animeData, setAnimeData] = useState<[] | null>(multiAnimeData);
  const [pageData, setPageData] = useState<pageobject | null>();

  useEffect(() => {
    setAnimeData(multiAnimeData);
  }, [multiAnimeData]);

  const handleDataFetch = (animePageData: []) => {
    setAnimeData(animePageData);
    console.log(animePageData);
    console.log("handle AL data fetch executed");
  };
  const handlePageFetch = (pageData: pageobject | null) => {
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
      <section className="grid  gap-7 py-[2vw] mx-[1vw] 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 2xl:mx-[1vw] xl:mx-[2vw] md:mx-[10vw] sm:mx-[3vw]">
        {animeData ? (
          animeData.map((singleanime, index) => {
            return <AnimeList key={index} singleAnimeData={singleanime} />;
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
