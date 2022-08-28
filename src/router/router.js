import SignIn from "../pages/login/signin";
import SignUp from "../pages/login/signup";
import Otp from "../pages/otp";
import WhichPage from "../pages/whichPage";
import Register from "../pages/register";
import Home from "../pages/home";
import ScanQRCode from "../pages/scanQRCode";
import getBaseUrl from "../config/getBase";
import ChooseTeam from "../pages/main/chooseTeam";
import MainPage from "../pages/main/mainPage";
import ScanQrCode from "../pages/main/scanQRcode";
import ColorsCards from "../pages/main/colorsPage";
import ColorsPage from "../pages/main/colorsPage";

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
  },
  {
    path: `${getBaseUrl()}/mainPage`,
    component: <MainPage />,
    isPrivate: true,
    key: 10
  },
  {
    path: `${getBaseUrl()}/qrCOde`,
    component: <ScanQrCode />,
    isPrivate: true,
    key: 11
  },
  {
    path: `${getBaseUrl()}/colorsCards`,
    component: <ColorsPage />,
    isPrivate: true,
    key: 12
  }
];

export default routes;
