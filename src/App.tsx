// App.tsx
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appRoutes from "./App Components/Routes.tsx";
import "./index.css";

const router = createBrowserRouter(appRoutes);
const App: React.FC = () => {
  return (
    <>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </>
  );
};

export default App;
