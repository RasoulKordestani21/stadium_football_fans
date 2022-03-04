import styled from "styled-components";

const LogoComp = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
  margin: 20px auto;
`;

const Logo = ({ children }) => {
  return <LogoComp>{children}</LogoComp>;
};

export default Logo;
