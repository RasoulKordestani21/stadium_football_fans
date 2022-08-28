import SignIn from "../pages/login/signin";
import SignUp from "../pages/login/signup";
import Otp from "../pages/otp";
import WhichPage from "../pages/whichPage";
import Register from "../pages/register";
import Home from "../pages/home";
import ScanQRCode from "../pages/scanQRCode";

import ChooseTeam from "../pages/main/chooseTeam";
import MainPage from "../pages/main/mainPage";
import ScanQrCode from "../pages/main/scanQRcode";
import ColorsCards from "../pages/main/colorsPage";
import ColorsPage from "../pages/main/colorsPage";

const routes = [
  {
    path: `/`,
    component: <Home />,
    isPrivate: true,
    key: 1
  },
  {
    path: `/signin`,
    component: <SignIn />,
    isPrivate: true,
    key: 3
  },
  {
    path: `/signup`,
    component: <SignUp />,
    isPrivate: true,
    key: 4
  },
  {
    path: `/otp`,
    component: <Otp />,
    isPrivate: true,
    key: 5
  },
  {
    path: `/displayPageNumber`,
    component: <WhichPage />,
    isPrivate: true,
    key: 6
  },
  {
    path: `/register`,
    component: <Register />,
    isPrivate: true,
    key: 7
  },
  {
    path: `/scanQRCode`,
    component: <ScanQRCode />,
    isPrivate: true,
    key: 8
  },
  {
    path: `/ChooseTeam`,
    component: <ChooseTeam />,
    isPrivate: true,
    key: 9
  },
  {
    path: `/mainPage`,
    component: <MainPage />,
    isPrivate: true,
    key: 10
  },
  {
    path: `/qrCOde`,
    component: <ScanQrCode />,
    isPrivate: true,
    key: 11
  },
  {
    path: `/colorsCards`,
    component: <ColorsPage />,
    isPrivate: true,
    key: 12
  }
];

export default routes;
