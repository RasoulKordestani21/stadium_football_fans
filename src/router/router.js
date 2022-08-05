import SignIn from "../pages/login/signin";
import SignUp from "../pages/login/signup";
import WhichPage from "../pages/whichPage";
import Register from "../pages/register";
import Home from "../pages/home";
import ScanQRCode from "../pages/scanQRCode";
import getBaseUrl from "../config/getBase";

const routes = [
  {
    path: `${getBaseUrl()}/`,
    component: <Home />,
    isPrivate: true,
    key: 1
  },
  {
    path: `${getBaseUrl()}/signin`,
    component: <SignIn />,
    isPrivate: true,
    key: 3
  },
  {
    path: `${getBaseUrl()}/signup`,
    component: <SignUp />,
    isPrivate: true,
    key: 4
  },
  {
    path: `${getBaseUrl()}/displayPageNumber`,
    component: <WhichPage />,
    isPrivate: true,
    key: 5
  },
  {
    path: `${getBaseUrl()}/register`,
    component: <Register />,
    isPrivate: true,
    key: 6
  },
  {
    path: `${getBaseUrl()}/scanQRCode`,
    component: <ScanQRCode />,
    isPrivate: true,
    key: 7
  }
];

export default routes;
