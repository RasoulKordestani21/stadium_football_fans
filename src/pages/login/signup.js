// @flow
import * as React from "react";
import MainLayout from "../../components/layout/mainLayout";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo";
// import styled from "styled-components";

import Button from "../../components/button/button";
import Input from "../../components/Input/input";
import Link from "../../components/link/link";

import { instance } from "../../config/api";
import Error from "../../components/error/error";

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

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    instance.post("api/signup", null, { params: { ...data } }).then(res => {
      if (res.data.isSuccess) {
        navigate("/signin");
      } else {
        setError(res.data.message);
      }
    });
  };
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState("");
  return (
    <MainLayout backPath={"/"} isBgShifted={true}>
      <Logo> ثبت نام در هم نما</Logo>
      <form
        className="flex flex-col items-center m-auto"
        onSubmit={handleSubmit}
      >
        <Input
          onChange={e => setData({ ...data, username: e.target.value })}
          placeholder="شماره موبایل"
          labelText={"شماره همراه"}
          required
          minLength={11}
          maxLength={11}
          errorMessage={"شماره همراه باید ۱۱ رقم باشد."}
        />
        <Input
          onChange={e => setData({ ...data, password: e.target.value })}
          labelText={"کلمه عبور"}
          isPassword={true}
          required
          minLength={6}
          errorMessage={"کلمه عبور باید بیش از ۶ کاراکتر باشد."}
        />
        {error && <Error message={error}></Error>}
        <Button type="submit" text="ثبت‌نام" />
        <div className="flex items-baseline mt-2 text-xs gap-[5px]">
          <Link
            onClick={() => {
              navigate("/signin");
            }}
            className="mt-2 text-end"
            text=" ورود به حساب کاربری"
          />
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

export default SignUp;
