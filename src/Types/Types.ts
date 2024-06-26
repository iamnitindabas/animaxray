export interface genre {
  name: string;
  url: string;
}

export interface AnimeListProps {
  smallCards?: boolean;
  singleAnimeData: {
    title: string;
    synopsis: string;
    episodes: number;
    duration: string;
    popularity: number;
    score: number;
    genres: genre[] | null;
    trailer: {
      youtube_id: string;
    };
    images: {
      jpg: {
        // Mark jpg property as optional
        large_image_url: string;
      };
    };
  };
}

export interface AnimeListsProps {
  seasonSearch?: boolean;
  seasonYear?: string;
  season?: string;
  smallCards?: boolean;
  seachQuery?: string;
  upcomingAnime?: boolean;
  multiAnimeData?: [] | null;
  paginationData?: pageData | null;
}

export interface pageData {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface NavbarProps {
  onModeChange: (Value: boolean) => void;
}
export interface ListsPaginationProps {
  paginationData: pageData | null;
  onPageChange: (pageValue: number) => void;
}

export interface ApiHandlerProps {
  page?: number;
  season?: string;
  seasonYear?: string;
  searchQuery?: string;
  seasonSearch?: boolean;
  upcomingAnime?: boolean;
  onDataFetch: (apidata: [], searchQuery?: string) => void;
  onPageFetch: (pageData: pageData) => void;
}

export interface FullSearchbarProps {
  onSeasonYearchange: (selectedYear: string, selectedSeason: string) => void;
}
