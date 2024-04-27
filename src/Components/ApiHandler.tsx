// ApiHandler.tsx

import React, { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../Contexts/Context";

interface ApiHandlerProps {
  page?: number;
  season?: string;
  seasonYear?: number;
  searchQuery?: string;
  seasonSearch?: boolean;
  upcomingAnime?: boolean;
  onDataFetch: (apidata: [], searchQuery?: string) => void;
  onPageFetch: (pageData: pageData) => void;
}
interface pageData {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}
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
            ? `https://api.jikan.moe/v4/seasons/upcoming`
            : seasonSearch
            ? `https://api.jikan.moe/v4/seasons/${seasonYear}/${season}`
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
