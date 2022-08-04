// @flow
import * as React from "react";
import MainLayout from "../components/layout/mainLayout";
import { useNavigate } from "react-router-dom";
import Logo from "../components/logo/logo";
// import styled from "styled-components";

import Button from "../components/button/button";
import Input from "../components/Input/input";
import Link from "../components/link/link";

// const FormComp = styled.form`
//   background-image: linear-gradient(180deg, aqua, #c886c8);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width:800px
//   min-width:400px;
//   width:50vw;
//   margin:auto
// `;

const Login = () => {
  const navigate = useNavigate();
  console.log(useNavigate());
  return (
    <MainLayout backPath={"/"}>
      <Logo>ورود به هم نما</Logo>
      <form className="flex flex-col items-center m-auto">
        <Input labelText={"نام و نام خانوادگی"} />
        <Input labelText={"کلمه عبور"} isPassword={true} />
        <Button text="ورود به حساب کاربری" />

        <div className="flex items-baseline mt-2 text-xs">
          <Link className="mt-2 text-end" text="ثبت نام" />
          <p> قبلا حساب کاربری نداشته‌اید؟</p>
        </div>
        {/* <Button
          onClick={() => {
            navigate("/displayPageNumber");
          }}
        >
          ورود
        </Button> */}
      </form>
    </MainLayout>
  );
};

export default Login;
