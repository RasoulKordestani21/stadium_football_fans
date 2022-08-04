// @flow
import * as React from "react";
import ArrowIcon from "../iconsComponent/arrowIcon";
// import "./mainLayout.scss";
import { useNavigate } from "react-router-dom";
import LayoutBackground from "../layoutBg/layoutBackground";
import styled from "styled-components";

import getBaseUrl from "../../config/getBase";

const DivInstance = styled.div``;

const MainLayoutComp = styled(DivInstance)`
  background-image: url(../../assets/svg/layoutBackground.svg);
`;

const MainLayout = ({ children, backPath, isHome, isLogin }) => {
  const navigate = useNavigate();
  return (
    <MainLayoutComp>
      {/* <HeaderComp isHome={isHome}>
        <ArrowIcon
          onClick={() => {
            navigate(getBaseUrl()+ backPath);
          }}
          color={"#424242"}
          style={{ transform: "rotate(180deg)" }}
        />
      </HeaderComp> */}

      <LayoutBackground isLogin={isLogin} />
      {children}
    </MainLayoutComp>
  );
};

export default MainLayout;
