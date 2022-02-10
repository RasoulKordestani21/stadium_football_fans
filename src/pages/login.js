// @flow
import * as React from "react";
import MainLayout from "../components/layout/mainLayout";
// type Props = {

// };
const Login = () => {
  return (
    <MainLayout>
      <div>شماره تلفن همراه خود را وارد کنید</div>
      <input placeholder="شماره تلفن" />
    </MainLayout>
  );
};

export default Login;
