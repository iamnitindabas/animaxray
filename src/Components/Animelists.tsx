import AnimeList from "./AnimeList";

interface AnimeListProps {
  animeData: [] | null;
}

const Animelists: React.FC<AnimeListProps> = ({ animeData }) => {
  return (
    <>
      <section className="grid py-[5vw] mx-[1vw] 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-5 2xl:mx-[1vw] xl:mx-[2vw] md:mx-[10vw] sm:mx-[3vw] ">
        <AnimeList animeData={animeData} />
      </section>
    </>
  );
};

export default Animelists;
