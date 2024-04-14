import { useEffect, useState } from 'react'
import { getCurrentSeasons } from '../api/anime'
import ListCard from '../components/ListCard'
import { AnimeListProps } from '../types'

export default function Home() {
  const [data, setData] = useState<AnimeListProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const data = await getCurrentSeasons()
      setData(data)
      setLoading(false)
    }

    getData()
  })

  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    )
  }

  return (
    <section className="grid  gap-7 py-[5vw] mx-[1vw] 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 2xl:mx-[1vw] xl:mx-[2vw] md:mx-[10vw] sm:mx-[3vw]">
      {data.map((animeData, index) => {
        return <ListCard key={index} animeData={animeData} />
      })}
    </section>
  )
}
