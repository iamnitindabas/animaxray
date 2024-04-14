import { NextUIProvider } from '@nextui-org/react'
import { useState } from 'react'
import Animelists from './components/Animelists'
import Navigationbar from './components/Navbar'

const App: React.FC = () => {
  const [animeData, setAnimeData] = useState<[] | null>(null)
  const [isDark, setIsDark] = useState<boolean>(false)
  const handleDataFetch = (data: []) => {
    setAnimeData(data)
    console.log(data)
  }

  const appModeChange = (isDarkvalue: boolean) => {
    setIsDark(isDarkvalue)
  }
  return (
    <NextUIProvider>
      <main className={isDark ? 'dark ' : 'light'}>
        {/* <header className="w-full fixed top-0 h-[300px] bg-[#2b2d42]"></header> */}
        <div className="bg-[#d6e0ef] dark:bg-[#13171d] bg-center bg-no-repeat bg-cover ">
          <Navigationbar
            onDataFetch={handleDataFetch}
            onModeChange={appModeChange}
          />
          <div className="p-3">
            <Animelists multiAnimeData={animeData} />
          </div>
        </div>
      </main>
    </NextUIProvider>
  )
}

export default App
