import MainLayout from "../components/layout/mainLayout";
import { useNavigate } from "react-router-dom";
// import Button "../components/button/button.js"
// import Button from "../components/button/button";
import styled from "styled-components";
import Button from "../components/button/button";
import Input from "../components/Input/input";
import Logo from "../components/logo/logo";

const FormComp = styled.form`
  background-image: linear-gradient(180deg, aqua, #c886c8);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:800px
  min-width:400px;
  width:50vw;
  margin:auto
`;

const Register = () => {
  const navigate = useNavigate();
  return (
    <MainLayout backPath={"/"}>
      <Logo>ثبت نام</Logo>
      <FormComp>
        <Input labelText={"نام کاربری"} />
        <Input labelText={"شماره تلفن یا ایمیل"} />
        <Input labelText={"کلمه عبور"} />
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          ثبت نام
        </Button>
      </FormComp>
    </MainLayout>
  );
};

export default Register;
