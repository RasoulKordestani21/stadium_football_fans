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
  isBgOnTop,
  isBgShifted,
  isMainPage,
  withoutBg,
  className
}) => {
  const navigate = useNavigate();
  return (
    <div className={clsx(className, isMainPage && " main-layout")}>
      {console.log(isBgOnTop, isBgShifted)}
      <LayoutBackground
        withoutBg={withoutBg}
        className={clsx(
          isBgOnTop && "card-layout",
          isBgShifted && "shifted-layout"
        )}
      />
      {children}
    </div>
  );
};

export default MainLayout;
