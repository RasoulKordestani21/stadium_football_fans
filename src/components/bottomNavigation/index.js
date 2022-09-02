// import { useState } from "react";
// import { useRouter } from "next/router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import classes from "./bottomNavigation.module.css";

import Button from "../button/button";
import PersonIcon from "../iconsComponent/personIcon";
import MessageIcon from "../iconsComponent/messageIcon";
import ScanIcon from "../iconsComponent/scanIcon";
import NewsIcon from "../iconsComponent/newsIcon";
import HomeIcon from "../iconsComponent/homeIcon";

const BottomNavigation = ({ className }) => {
  //initial params
  const navigate = useNavigate();

  //states
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  //functions
  const handleRouting = (path, state) => {
    navigate(path, state);
  };

  return (
    <div className="lg:hidden">
      <div className="fixed bottom-0 right-0 w-full">
        <div className={clsx(classes["bottom-nav"], className)}>
          <div
            className={classes["bottom-nav-item"]}
            onClick={e => {
              handleRouting("/mainPage", { state: { id: +localStorage.id } });
            }}
          >
            <div>
              <HomeIcon />
            </div>
            {/* <div className="pt-2">پروفایل</div> */}
          </div>
          <div
            className={classes["bottom-nav-item"]}
            onClick={e => {
              handleRouting("/home");
            }}
          >
            <div>
              <NewsIcon />
            </div>
            {/* <div className="pt-2">افزایش اعتبار</div> */}
          </div>
          <div
            className={classes["bottom-nav-item"]}
            onClick={e => {
              handleRouting("/qrCOde");
            }}
          >
            <div>
              <ScanIcon />
            </div>
            {/* <div className="pt-2">تایید اعتبار</div> */}
          </div>
          <div
            className={classes["bottom-nav-item"]}
            onClick={e => {
              handleRouting("/home");
            }}
          >
            <div>
              <MessageIcon />
            </div>
            {/* <div className="pt-2">تایید اعتبار</div> */}
          </div>
          <div
            className={classes["bottom-nav-item"]}
            onClick={e => {
              handleRouting("/ChooseTeam", { state: { id: +localStorage.id } });
            }}
          >
            <div>
              <PersonIcon />
            </div>
            {/* <div className="pt-2">بیشتر</div> */}
          </div>
        </div>
      </div>
      <div className={`h-[4rem] w-100 `}></div>
    </div>
  );
};

export default BottomNavigation;
