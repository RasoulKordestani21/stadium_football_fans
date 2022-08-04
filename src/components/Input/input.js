import { FormControlUnstyledContext } from "@mui/base";
import styled from "styled-components";
import Link from "../link/link";

// const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-size: 12px;
//   align-items: flex-start;
// `;

// const Label = styled.label`
//   margin-bottom: 4px;
// `;

// const InputComp = styled.input`
//   border-radius: 7px;
// `;
const rtlClass = { direction: "rtl" };
const Input = props => {
  return (
    <div className="flex flex-col items-start mt-5" style={rtlClass}>
      <label className="mb-2">{props.labelText}</label>
      <input
        className="rounded-[8px] border-[1px] border-slate-400 text-base p-2 min-w-[250px]"
        onChange={props.onChange}
        type={props.type || "text"}
      />
      {props.isPassword ? (
        <Link
          className="mt-2 text-end w-full text-xs"
          text="رمز عبور خود را فراموش کرده‌ام"
        />
      ) : null}
    </div>
  );
};

export default Input;
