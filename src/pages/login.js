// @flow
import * as React from "react";
import MainLayout from "../components/layout/mainLayout";
import { useNavigate } from "react-router-dom";
import Logo from "../components/logo/logo";
import styled from "styled-components";

import Button from "../components/button/button";
import Input from "../components/Input/input";
import getBaseUrl from "../config/getBase";

const FormComp = styled.form`
  background-image: linear-gradient(180deg, aqua, #c886c8);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:800px
  min-width:400px;
  width:50vw;
  margin:auto
`;

const Login = () => {
  const navigate = useNavigate();
  return (
    <MainLayout backPath={"/"}>
      <Logo>ورود</Logo>
      <FormComp>
        <Input labelText={"نام و نام خانوادگی"} />
        <Input labelText={"کلمه عبور"} />
        <Button
          onClick={() => {
            navigate(`${getBaseUrl()}/displayPageNumber`);
          }}
        >
          ورود
        </Button>
      </FormComp>
    </MainLayout>
  );
};

export default Login;
