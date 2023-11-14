import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Game from "./pages/Game";
import HowTo from "./pages/HowTo";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/how-to",
        element: <HowTo />,
      },
    ],
  },
]);
