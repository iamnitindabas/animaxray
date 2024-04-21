import { NextUIProvider } from "@nextui-org/react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigationbar from "../Components/Navigationbar";

const MainLayout: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const appModeChange = (isDarkvalue: boolean) => {
    setIsDark(isDarkvalue);
  };
  return (
    <>
      <NextUIProvider>
        <main className={isDark ? "dark " : "light"}>
          <div className="bg-[#d6e0ef] dark:bg-[#13171d] bg-center bg-no-repeat bg-cover ">
            <Navigationbar onModeChange={appModeChange} />
            <Outlet />
          </div>
        </main>
      </NextUIProvider>
    </>
  );
};

export default MainLayout;
