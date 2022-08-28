// @flow
import * as React from "react";
import ArrowIcon from "../iconsComponent/arrowIcon";
import "./mainLayout.scss";
import { useNavigate } from "react-router-dom";
import LayoutBackground from "../layoutBg/layoutBackground";
// import styled from "styled-components";
import clsx from "clsx";

import getBaseUrl from "../../config/getBase";

const MainLayout = ({
  children,
  backPath,
  isHome,
  isLogin,
  className,
  mainPage,
  colorsPage
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={clsx(
        className,
        mainPage && "main-layout",
      )}
    >
      {/* <HeaderComp isHome={isHome}>
        <ArrowIcon
          onClick={() => {
            navigate(getBaseUrl()+ backPath);
          }}
          color={"#424242"}
          style={{ transform: "rotate(180deg)" }}
        />
      </HeaderComp> */}
      {console.log(colorsPage)}
      {!mainPage && (
        <LayoutBackground isLogin={isLogin} className={clsx("card-layout")} />
      )}
      {children}
    </div>
  );
};

export default MainLayout;
