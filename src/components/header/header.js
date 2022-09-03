// import { useState } from "react";
// import { useRouter } from "next/router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import classes from "../bottomNavigation/bottomNavigation.module.css";

const Header = ({ className, ...props }) => {
  //initial params
  const navigate = useNavigate();

  //states
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  //functions
  const handleRouting = path => {
    navigate.push(path);
  };

  return (
    <div className="lg:hidden ">
      <div className="fixed top-0 right-0 w-full" dir="rtl">
        <div
          className={clsx(
            classes["bottom-nav"],
            className,
            "top-0 !static flex items-center"
          )}
        >
          <div className={"flex h-6 w-6 items-center justify-center rounded-full  bg-slate-500 text-white mr-5"}>
            <p className="">{props.name && props.name[0]}</p>
          </div>
          <p className={clsx("pr-2")}>{props?.name}</p>
          <div className={clsx("bg-green mr-auto ml-4")}>alarm</div>
        </div>
      </div>
      <div className={`h-[4rem] w-100 `}></div>
    </div>
  );
};

export default Header;
