import { useState } from "react";

import clsx from "clsx";

import EyeIcon from "../iconsComponent/eye-icon/eyeIcon";
import HideEyeIcon from "../iconsComponent/hide-eye-icon/hideEyeIcon";
import Link from "../link/link";
import "./input.module.css";

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
  const [showPassword, setShowPassword] = useState(false);
  return props.smsbox ? (
    <input
      className={clsx(`
      small-box rounded-[8px] border-[1px] border-slate-300
       text-base w-14 h-16 flex justify-center relative
        hover:border-slate-500 p-5`)}
      type={"tell"}
      maxLength="1"
      onChange={e => console.log(e.target.value)}
      {...props}
    />
  ) : (
    <div className="flex flex-col items-start mt-5" style={rtlClass}>
      <label className="mb-2">{props.labelText}</label>
      <div className="relative">
        <input
          className="rounded-[8px] border-[1px] border-slate-300 
          text-base p-3 min-w-[250px] relative
           hover:border-slate-500 focus:outline-slate-500 invalid:focus:outline-red-500"
          placeholder={props.placeholder}
          type={props.isPassword && !showPassword ? "password" : "text"}
          onChange={props.onChange}
          onInvalid={e => e.target.setCustomValidity(props.errorMessage)}
          onInput={e => e.target.setCustomValidity("")}
          {...props}
        />
        {props.isPassword && (
          <>
            <HideEyeIcon
              className={clsx(
                "absolute left-2 top-[50%] translate-y-[-50%]",
                showPassword ? "hidden" : "block"
              )}
              onClick={() => {
                setShowPassword(!showPassword);
                console.log("not-eye");
              }}
            />
            <EyeIcon
              className={clsx(
                "absolute left-3 top-[50%] translate-y-[-50%]",
                showPassword ? "block" : "hidden"
              )}
              onClick={() => {
                setShowPassword(!showPassword);
                console.log("eye");
              }}
            />
          </>
        )}
      </div>
      {props.isSignIn ? (
        <Link
          className="mt-2 text-end w-full text-xs"
          text="رمز عبور خود را فراموش کرده‌ام"
        />
      ) : null}
    </div>
  );
};

export default Input;
