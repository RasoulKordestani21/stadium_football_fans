// @flow
import * as React from "react";
import MainLayout from "../../components/layout/mainLayout";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo";
import { useQuery } from "react-query";
// import styled from "styled-components";

import Button from "../../components/button/button";
import Input from "../../components/Input/input";
import Link from "../../components/link/link";
import BottomNavigation from "../../components/bottomNavigation";
import clsx from "clsx";
import MatchesFinal from "../../components/cards/matchesFinal";
import MatchesSoon from "../../components/cards/matchesSoon";
import Header from "../../components/header/header";
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

const MainPage = () => {
  const navigate = useNavigate();
  const id = useLocation().state.id;
  const { data } = useQuery("main-page-data", () =>
    instance.get("/api/personData", { params: { id } })
  );
  // );

  return (
    <MainLayout mainPage={true} backPath={"/"} isLogin={"true"}>
      <Header name={data?.data?.name} className={clsx("")} />
      <div
        className={clsx(
          "justify-end float-right h-1/2 mt-auto flex items-center w-full"
        )}
      >
        <div className={clsx("-mt-8  h-fit text-[#fff]")}>
          <p>تو ورزشگاهی ؟</p>
          <p>تصویر روی صندلی جلو رو اسکن کن</p>
          <Button
            onClick={() => navigate("/qrCOde")}
            text="اسکن بارکد"
            className={clsx(" mt-6 px-6 py-2 text-[#33334c] bg-[#f9d93d]")}
          />
        </div>
      </div>
      <div>
        <h3>بازی های هفته سوم</h3>
        <div className={clsx("flex overflow-x-scroll")}>
          <MatchesFinal />
          <MatchesFinal />
          <MatchesFinal />
        </div>
      </div>
      <div>
        <h3>بازی های حساس پیشرو</h3>
        <div className={clsx("flex overflow-x-scroll")}>
          <MatchesSoon />
          <MatchesSoon />
          <MatchesSoon />
        </div>
      </div>

      <BottomNavigation />
    </MainLayout>
  );
};

export default MainPage;
