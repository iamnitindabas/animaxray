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
  smallCards?: boolean;
  seachQuery?: string;
  multiAnimeData: [] | null;
  paginationData: pageData | null;
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
