export type genre = {
  name: string
  url: string
}

export type AnimeListProps = {
  title: string
  synopsis: string
  episodes: number
  duration: string
  popularity: number
  score: number
  genres: genre[] | null
  trailer: {
    youtube_id: string
  }
  images: {
    jpg: {
      large_image_url: string
    }
  }
}
