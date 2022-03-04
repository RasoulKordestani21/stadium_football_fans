import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: flex-start;
`;

const Label = styled.label`
  margin-bottom: 4px;
`;

const InputComp = styled.input`
  border-radius: 7px;
`;
const Input = props => {
  console.log("this is props", props);
  return (
    <InputWrapper>
      <Label>{props.labelText}</Label>
      <InputComp type="text" />
    </InputWrapper>
  );
};

export default Input;
