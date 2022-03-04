import MainLayout from "../components/layout/mainLayout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/logo/logo";
import ArrowIcon from "../components/iconsComponent/arrowIcon";
import Button from "../components/button/button";

const DivInstance = styled.div``;

const HomeComp = styled(DivInstance)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const Logo = styled(DivInstance)`
//   width: 100px;
//   height: 100px;
//   background-color: pink;
// `;

const Home = () => {
  const navigate = useNavigate();
  return (
    <MainLayout isHome={true}>
      <HomeComp>
        <Logo>صفحه اصلی</Logo>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          ورود
        </Button>
        <Button
          onClick={() => {
            navigate("/register");
          }}
        >
          ثبت نام
        </Button>
      </HomeComp>
    </MainLayout>
  );
};

export default Home;
