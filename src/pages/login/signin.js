// @flow
import * as React from "react";
import MainLayout from "../../components/layout/mainLayout";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo";
// import styled from "styled-components";

import Button from "../../components/button/button";
import Input from "../../components/Input/input";
import Link from "../../components/link/link";
import Error from "../../components/error/error";
import { instance } from "../../config/api";

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

const SignIn = () => {
  const handleSubmit = () => {
    instance.get("api/signin", { params: { ...data } }).then(res => {
      if (res.data.isSuccess) {
        localStorage.setItem("id", res.data.id);
        navigate(`/ChooseTeam`, { state: { id: +res.data.id } });
      } else {
        setError(res.data.message);
      }
    });
  };
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  console.log(useNavigate());
  return (
    <MainLayout backPath={"/"} isBgShifted={true}>
      <Logo>ورود به هم نما</Logo>
      <form className="flex flex-col items-center m-auto">
        <Input
          onChange={e => setData({ ...data, username: e.target.value })}
          placeholder="شماره موبایل"
          labelText={"نام و نام خانوادگی"}
        />
        <Input
          onChange={e => setData({ ...data, password: e.target.value })}
          labelText={"کلمه عبور"}
          isPassword={true}
          isSignIn={true}
        />
        {error && <Error message={error}></Error>}
        <Button
          onClick={handleSubmit}
          type="submit"
          text="ورود به حساب کاربری"
        />

        <div className="flex items-baseline mt-2 text-xs gap-[5px]">
          <Link
            onClick={() => {
              navigate("/signup");
            }}
            className="mt-2 text-end"
            text="ثبت نام"
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

export default SignIn;
