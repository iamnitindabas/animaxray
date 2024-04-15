// routesConfig.js
import App from "../App";
import AnimeDetails from "../Pages/AnimeDetails";
import NotFoundPage from "../Pages/NotFoundPage";
import SeasonLists from "../Pages/SeasonLists";
import SeasonSelection from "../Pages/SeasonSelection";
import TopAnime from "../Pages/TopAnime";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/anime/:malid/:name",
    element: <AnimeDetails />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/anime/top",
    element: <TopAnime />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/anime/seasons",
    element: <SeasonSelection />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/anime/seasons/:year/:season",
        element: <SeasonLists />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/anime/seasons/upcoming",
    element: <SeasonLists />,
    errorElement: <NotFoundPage />,
  },
];

export default routes;
