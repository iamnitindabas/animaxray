import React, { createContext } from "react";

interface LoadingContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SeasonContextProps {
  season: string | undefined;
  setSeason: React.Dispatch<React.SetStateAction<string>>;
}

interface YearContextProps {
  year: number | undefined;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

const LoadingContext = createContext<LoadingContextProps>({
  isLoading: false,
  setIsLoading: () => {},
});

const YearContext = createContext<YearContextProps>({
  year: undefined,
  setYear: () => {},
});

const SeasonContext = createContext<SeasonContextProps>({
  season: undefined,
  setSeason: () => {},
});

export { LoadingContext };
export { YearContext };
export { SeasonContext };
