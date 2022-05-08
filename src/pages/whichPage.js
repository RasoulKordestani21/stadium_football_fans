import MainLayout from "../components/layout/mainLayout";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import axios from "axios";

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
  const chairNumber = +useLocation().state.chairNumber;

  //request
  const { data: packet } = useQuery("packetdd", () =>
    axios.get("http://localhost:3000/", { params: { chairNum: chairNumber } })
  );

  console.log(+useLocation().state.chairNumber);
  return (
    <MainLayout backPath={"/scanQRCode"}>
      <Logo>شماره صفحه</Logo>
      <WhichPageWrapper>صفحه مورد نظر شما : ۲</WhichPageWrapper>
    </MainLayout>
  );
};

export default WhichPage;
