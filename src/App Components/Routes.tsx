// routesConfig.js

import AnimeDetails from "../Pages/AnimeDetails";
import NotFoundPage from "../Pages/NotFoundPage";
import SeasonLists from "../Pages/SeasonLists";
import SeasonSelection from "../Pages/SeasonSelection";
import TopAnime from "../Pages/TopAnime";
import Homepage from "../Pages/Homepage";
import MainLayout from "../Layouts/MainLayout";
import UpcomingAnimePage from "../Pages/UpcomingAnimePage";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/anime/:malid",
        element: <AnimeDetails />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/topanime",
        element: <TopAnime />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/seasons",
        element: <SeasonSelection />,
        errorElement: <NotFoundPage />,
        children: [
          {
            path: "/seasons/:year/",
            element: <SeasonLists />,
            errorElement: <NotFoundPage />,
          },
        ],
      },
      {
        path: "/upcoming",
        element: <UpcomingAnimePage />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
