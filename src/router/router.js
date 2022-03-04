import Login from "../pages/login";
import WhichPage from "../pages/whichPage";
import Register from "../pages/register";
import Home from "../pages/home";

const routes = [
  {
    path: "/",
    component: <Home />,
    isPrivate: true,
    key: 1
  },
  {
    path: "/login",
    component: <Login />,
    isPrivate: true,
    key: 2
  },
  {
    path: "/displayPageNumber",
    component: <WhichPage />,
    isPrivate: true,
    key: 3
  },
  {
    path: "/register",
    component: <Register />,
    isPrivate: true,
    key: 4
  }
];

export default routes;
