import React, { useEffect, useState } from "react";
import AnimeList from "./Components/AnimeList";

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("Naruto");
  const [animeData, setAnimeData] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
        );
        const resData = await res.json();
        setAnimeData(resData.data); // Assuming API returns data in the format { data: Anime[] }
        console.log(resData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 1000);

    setTypingTimeout(timeoutId);

    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [search]);

  return (
    <div>
      <h1>My Anime List</h1>
      <div>
        <input
          type="search"
          placeholder="Enter anime name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <AnimeList animeData={animeData} />
      </div>
    </div>
  );
};

export default App;
