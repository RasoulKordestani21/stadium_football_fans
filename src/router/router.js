import Login from "../pages/login";
import WhichPage from "../pages/whichPage";
import Register from "../pages/register";
import Home from "../pages/home";
import getBaseUrl from "../config/getBase";

const routes = [
  {
    path: `${getBaseUrl()}/`,
    component: <Home />,
    isPrivate: true,
    key: 1
  },
  {
    path: `${getBaseUrl()}/login`,
    component: <Login />,
    isPrivate: true,
    key: 2
  },
  {
    path: `${getBaseUrl()}/displayPageNumber`,
    component: <WhichPage />,
    isPrivate: true,
    key: 3
  },
  {
    path: `${getBaseUrl()}/register`,
    component: <Register />,
    isPrivate: true,
    key: 4
  }
];

export default routes;
