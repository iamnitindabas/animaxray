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
          `https://api.jikan.moe/v4/anime?q=${searchQuery}&limit=20`
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
    }, 1000);

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
