import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Buses from "../Pages/Buses/Buses";
import BusRoutes from "../Pages/Routes/Routes";
import Drivers from "../Pages/Drivers/Drivers";
import BusDetails from "../Pages/BusDetails/BusDetails";
import Stoppage from "../Pages/Routes/Stoppage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "buses",
        element: <Buses />,
      },
      {
        path: "busdetails/:id",
        element: <BusDetails />,
      },
      {
        path: "routes",
        element: <BusRoutes />,
      },
      {
        path: "stoppage/:id",
        element: <Stoppage />,
      },
      {
        path: "drivers",
        element: <Drivers />,
      },
    ],
  },
  {
    path: "/errorpage",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
