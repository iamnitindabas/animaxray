import { AnimeListProps } from '../types'

const BASE_URL = 'https://api.jikan.moe/v4'

export const getCurrentSeasons = async () => {
  const res = await fetch(`${BASE_URL}/seasons/now`)
  if (res.status < 200 || res.status > 299) {
    throw Error('Error during fetching getCurrentSeasons')
  }

  const data = await res.json()
  return data.data as AnimeListProps[]
}

export const getSearchAnime = async (searchQuery: string) => {
  const res = await fetch(`${BASE_URL}/anime?q=${searchQuery}&sfw`)
  if (res.status < 200 || res.status > 299) {
    throw Error('Error during fetching getSearchAnime')
  }
  const data = await res.json()
  return data.data as AnimeListProps[]
}
