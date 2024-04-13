import AnimeList from "./AnimeList";

interface AnimeListProps {
  animeData: [] | null;
}

const Animelists: React.FC<AnimeListProps> = ({ animeData }) => {
  return (
    <>
      <section className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 mx-[10vw] my-[5vw]">
        <AnimeList animeData={animeData} />
      </section>
    </>
  );
};

export default Animelists;
