// ApiHandler.tsx

import React, { useEffect, useState } from "react";

interface ApiHandlerProps {
  searchQuery: string;
  onDataFetch: (data: any) => void;
}

const ApiHandler: React.FC<ApiHandlerProps> = ({
  searchQuery,
  onDataFetch,
}) => {
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

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery, onDataFetch]);

  return null;
};

export default ApiHandler;
