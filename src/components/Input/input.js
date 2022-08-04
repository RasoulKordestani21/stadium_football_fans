import { useState } from "react";

import clsx from "clsx";

import EyeIcon from "../iconsComponent/eye-icon/eyeIcon";
import HideEyeIcon from "../iconsComponent/hide-eye-icon/hideEyeIcon";
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
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col items-start mt-5" style={rtlClass}>
      <label className="mb-2">{props.labelText}</label>
      <div className="relative">
        <input
          className="rounded-[8px] border-[1px] border-slate-400 text-base p-3 min-w-[250px] relative"
          type={props.isPassword && !showPassword ? "password" : "text"}
          onChange={props.onChange}
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
