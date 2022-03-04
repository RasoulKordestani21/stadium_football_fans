// @flow
import * as React from "react";
import ArrowIcon from "../iconsComponent/arrowIcon";
// import "./mainLayout.scss";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const DivInstance = styled.div``;

const MainLayoutComp = styled(DivInstance)`
  height: 100vh;
  object-fit: contain;
  margin: 0;
  direction: rtl;
  background-image: url(https://www.stirworld.com/images/see/1370_XianStadium_1.jpg?0);
  background-size: cover;
`;

const HeaderComp = styled.header`
  background-color: aqua;
  display: ${props => (props?.isHome ? "none" : "flex")};
`;
const MainLayout = ({ children, backPath, isHome }) => {
  const navigate = useNavigate();
  return (
    <MainLayoutComp style={{}}>
      <HeaderComp isHome={isHome}>
        <ArrowIcon
          onClick={() => {
            navigate(backPath);
          }}
          color={"#424242"}
          style={{ transform: "rotate(180deg)" }}
        />
      </HeaderComp>
      {children}
    </MainLayoutComp>
  );
};

export default MainLayout;
