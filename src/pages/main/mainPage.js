// @flow
import * as React from "react";
import MainLayout from "../../components/layout/mainLayout";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo";
// import styled from "styled-components";

import Button from "../../components/button/button";
import Input from "../../components/Input/input";
import Link from "../../components/link/link";
import BottomNavigation from "../../components/bottomNavigation";

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

const MainPage = () => {
  const navigate = useNavigate();
  console.log(useNavigate());
  return (
    <MainLayout backPath={"/"} isLogin={"true"}>
      <BottomNavigation />
    </MainLayout>
  );
};

export default MainPage;
