// ApiHandler.tsx

import React, { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../Contexts/Context";
import { ApiHandlerProps } from "../Types/Types";

const ApiHandler: React.FC<ApiHandlerProps> = ({
  searchQuery,
  season,
  seasonYear,
  seasonSearch,
  page,
  upcomingAnime,
  onDataFetch,
  onPageFetch,
}) => {
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);
  const { setIsLoading } = useContext(LoadingContext);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          upcomingAnime
            ? page
              ? `https://api.jikan.moe/v4/seasons/upcoming?page=${page}`
              : `https://api.jikan.moe/v4/seasons/upcoming`
            : seasonSearch
            ? page
              ? `https://api.jikan.moe/v4/seasons/${seasonYear}/${season}?page=${page}`
              : `https://api.jikan.moe/v4/seasons/${seasonYear}/${season}`
            : searchQuery
            ? page
              ? `https://api.jikan.moe/v4/anime?q=${searchQuery}&sfw&page=${page}`
              : `https://api.jikan.moe/v4/anime?q=${searchQuery}&sfw`
            : page
            ? `https://api.jikan.moe/v4/seasons/now?page=${page}`
            : `https://api.jikan.moe/v4/seasons/now`
        );
        const resData = await res.json();
        onDataFetch(resData.data);
        onPageFetch(resData.pagination);
        console.log(searchQuery, page, upcomingAnime);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500);

    setTypingTimeout(timeoutId);

    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [searchQuery, page]);

  return null;
};

export default ApiHandler;
