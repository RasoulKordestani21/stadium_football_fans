import styled from "styled-components";

const ButtonComp = styled.button`
  background-color: lime;
  padding: 2px 30px;
  display: block;
  margin: 20px auto 0;
  border-radius: 7px;
  margin: 1em;
`;

const Button = props => {
  //   console.log(children);
  return <ButtonComp onClick={props.onClick}>{props.children}</ButtonComp>;
};

export default Button;
