import AnimeList from "./AnimeList";

interface AnimeListProps {
  multiAnimeData: [] | null;
}

const Animelists: React.FC<AnimeListProps> = ({ multiAnimeData }) => {
  return (
    <>
      <section className="grid  gap-7 py-[5vw] mx-[1vw] 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 2xl:mx-[1vw] xl:mx-[2vw] md:mx-[10vw] sm:mx-[3vw]">
        {multiAnimeData ? (
          multiAnimeData.map((singleanime, index) => {
            return <AnimeList key={index} singleAnimeData={singleanime} />;
          })
        ) : (
          <p>No data found for individual anime</p>
        )}
      </section>
    </>
  );
};

export default Animelists;
