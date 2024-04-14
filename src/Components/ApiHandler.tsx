// ApiHandler.tsx

import React, { useEffect, useState } from "react";

interface ApiHandlerProps {
  searchQuery: string;
  onDataFetch: (data: []) => void;
}

const ApiHandler: React.FC<ApiHandlerProps> = ({
  searchQuery,
  onDataFetch,
}) => {
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          searchQuery
            ? `https://api.jikan.moe/v4/anime?q=${searchQuery}&sfw`
            : `https://api.jikan.moe/v4/seasons/now`
        );
        const resData = await res.json();
        onDataFetch(resData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
  }, [searchQuery]);

  return null;
};

export default ApiHandler;
