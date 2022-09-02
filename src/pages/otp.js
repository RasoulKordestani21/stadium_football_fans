// @flow
import * as React from "react";
import MainLayout from "../components/layout/mainLayout";
import { useNavigate } from "react-router-dom";
import Logo from "../components/logo/logo";
// import styled from "styled-components";

import Button from "../components/button/button";
import Input from "../components/Input/input";
import Link from "../components/link/link";

const Otp = () => {
  const navigate = useNavigate();
  return (
    <MainLayout backPath={"/"} isBgOnTop={false} className="px-7">
      <Logo>ورود به هم نما</Logo>
      <p className="my-10 text-[.875rem] text-end">
        کد تایید شماره شما حد اکثر تا یک دقیقه دیگر برای شما ارسال می‌شود
      </p>
      <form className="flex flex-col items-center m-auto">
        <div className="flex gap-2">
          <Input smsbox={true} type="number" />
          <Input smsbox={true} type="number" />
          <Input smsbox={true} type="number" />
          <Input smsbox={true} type="number" />
          <Input smsbox={true} type="number" />
        </div>
        <Link
          className="mt-2 text-end w-full text-xs !text-left"
          text="رمز عبور خود را فراموش کرده‌ام"
        />  
        {/* <Input labelText={"کلمه عبور"} isPassword={true} isSignIn={true} /> */}
        <Button text="تایید" />

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
      </form>
    </MainLayout>
  );
};

export default Otp;
