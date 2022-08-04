import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
// import {useHistory}

import MainLayout from "../components/layout/mainLayout";
import styled from "styled-components";
import Logo from "../components/logo/logo";
import Button from "../components/button/button";

import { ReactComponent as FootballFanImg } from "../components/welcome/footballFan.svg";

import axios from "axios";

const DivInstance = styled.div``;

const HomeComp = styled(DivInstance)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? true
    : false;
const port = isLocal ? window.location.port : "";
// const Logo = styled(DivInstance)`
//   width: 100px;
//   height: 100px;
//   background-color: pink;
// `;

const Home = () => {
  const navigate = useNavigate();
  console.log(isLocal);
  const { data: packet } = useQuery("packetdd", () =>
    axios.get("http://localhost:3000/courses")
  );

  return (
    <MainLayout isHome={true}>
      <div className="flex justify-center mt-[30px]">
        <FootballFanImg />
      </div>
      <section>
        <p className="text-[16px] font-bold text-bold">هم نما</p>
        <p className="mt-2">تجربه ای متفاوت از هواداری</p>
      </section>
      <Button text="ورود به حساب کاربری" />

      {/* <HomeComp>
        {console.log(packet)}
        <Logo>صفحه اصلی</Logo>
        <Button
          onClick={() => {
            // navigate("/login");
          }}
        >
          ورود
        </Button>
        <Button
          onClick={() => {
            // navigate("/register");
          }}
        >
          ثبت نام
        </Button>
        <Button
          onClick={() => {
            navigate("/scanQRCode");
          }}
        >
           اسکن بارکد
        </Button>
      </HomeComp> */}
    </MainLayout>
  );
};

export default Home;
