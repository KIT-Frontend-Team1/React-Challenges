import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Game from "../pages/detailPages/Game";
import Community from "../pages/detailPages/Community";
import Video from "../pages/detailPages/Video";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main/home",
    element: <Main />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/main/game",
    element: <Game />,
  },
  {
    path: "/main/community",
    element: <Community />,
  },
  {
    path: "/main/video",
    element: <Video />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
