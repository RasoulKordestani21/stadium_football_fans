import SignIn from "../pages/login/signin";
import SignUp from "../pages/login/signup";
import Otp from "../pages/otp";
import WhichPage from "../pages/whichPage";
import Register from "../pages/register";
import Home from "../pages/home";
import ScanQRCode from "../pages/scanQRCode";
import getBaseUrl from "../config/getBase";
import ChooseTeam from "../pages/main/chooseTeam";

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
    path: `${getBaseUrl()}/otp`,
    component: <Otp />,
    isPrivate: true,
    key: 5
  },
  {
    path: `${getBaseUrl()}/displayPageNumber`,
    component: <WhichPage />,
    isPrivate: true,
    key: 6
  },
  {
    path: `${getBaseUrl()}/register`,
    component: <Register />,
    isPrivate: true,
    key: 7
  },
  {
    path: `${getBaseUrl()}/scanQRCode`,
    component: <ScanQRCode />,
    isPrivate: true,
    key: 8
  },
  {
    path: `${getBaseUrl()}/ChooseTeam`,
    component: <ChooseTeam />,
    isPrivate: true,
    key: 9
  }
];

export default routes;
