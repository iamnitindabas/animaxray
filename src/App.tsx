import { NextUIProvider } from '@nextui-org/react'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <NextUIProvider>
      {/* NOTE: light mode ? seriously ? */}
      <main className="dark">
        {/* <header className="w-full fixed top-0 h-[300px] bg-[#2b2d42]"></header> */}
        <div className="bg-[#d6e0ef] dark:bg-[#13171d] bg-center bg-no-repeat bg-cover ">
          {/* <Navigationbar */}
          {/*   onDataFetch={handleDataFetch} */}
          {/*   onModeChange={appModeChange} */}
          {/* /> */}
          <div className="p-3">
            <Home />
          </div>
        </div>
      </main>
    </NextUIProvider>
  )
}

export default App
