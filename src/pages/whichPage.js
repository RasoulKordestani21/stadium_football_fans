import MainLayout from "../components/layout/mainLayout";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Logo from "../components/logo/logo";

const WhichPageWrapper = styled.div`
  background-image: linear-gradient(180deg, aqua, #c886c8);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:800px
  min-width:400px;
  width:50vw;
  margin:20px auto;
`;

const WhichPage = () => {
  console.log(useLocation().state.maskId);
  return (
    <MainLayout backPath={"/scanQRCode"}>
      <Logo>شماره صفحه</Logo>
      <WhichPageWrapper>صفحه مورد نظر شما : ۲</WhichPageWrapper>
    </MainLayout>
  );
};

export default WhichPage;
