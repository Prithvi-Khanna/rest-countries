import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Screens/Home";
import CountryDetails from "../Screens/CountryDetails";
import ErrorScreen from "../Screens/ErrorScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorScreen />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "details/:ticker",
        element: <CountryDetails />,
      },
    ],
  },
]);
