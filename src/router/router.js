import Login from "../pages/login";

const routes = [
  {
    path: "/",
    component: <Login />,
    isPrivate: true,
    key: 1
  }
];

export default routes;
