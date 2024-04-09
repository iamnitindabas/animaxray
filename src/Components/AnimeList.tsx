import React from "react";

interface Anime {
  title: string;
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
            <img src={anime.images.jpg.large_image_url} alt="Anime Poster" />
            <h4>{anime.title}</h4>
          </div>
        ))
      ) : (
        <p>No anime data available</p>
      )}
    </>
  );
};

export default AnimeList;
