// ApiHandler.tsx

import React, { useEffect, useState } from "react";

interface ApiHandlerProps {
  page?: number;
  season?: string;
  seasonYear?: number;
  searchQuery?: string;
  seasonSearch?: boolean;
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
  onDataFetch,
  onPageFetch,
}) => {
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const res = await fetch(
          seasonSearch
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
        console.log(searchQuery, page);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // finally {
      //   // setIsLoading(false);
      // }
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
