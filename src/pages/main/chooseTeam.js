import * as React from "react";
import MainLayout from "../../components/layout/mainLayout";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo";
// import styled from "styled-components";
import clsx from "clsx";
import Button from "../../components/button/button";
import Input from "../../components/Input/input";
import Link from "../../components/link/link";
import teams from "../../assets/front-dbs/teams";
import "./chooseTeam.css";
import CheckIcon from "../../components/checked/checked";
// const FormComp = styled.form`
//   background-image: linear-gradient(180deg, aqua, #c886c8);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width:800px
//   min-width:400px;
//   width:50vw;
//   margin:auto
// `;

const ChooseTeam = () => {
  const [selectedTeams, setSelectedTeams] = React.useState([]);
  const navigate = useNavigate();
  return (
    <MainLayout backPath={"/"} isLogin={"true"}>
      <div
        className={clsx("choose-team-container flex flex-col w-full px-5  ")}
      >
        <Input labelText="نام شما در همنما" />
        <div>
          <p className={clsx("text-[20px] text-right mt-5 mb-2 font-bold")}>
            طرفدار چه تیمی هستی ؟
          </p>
          <p className={clsx("text-right mb-5")}>
            سه تیم محبوب خودت رو انتخاب کن
          </p>
          <div class={`choose-teams grid grid-cols-3 gap-2 `}>
            {teams.map(ele => {
              return (
                <div
                  className={clsx("teams")}
                  onClick={e => {
                    if (selectedTeams.includes(ele.id)) {
                      setSelectedTeams(
                        selectedTeams.filter(item => item !== ele.id)
                      );
                    } else {
                      setSelectedTeams([...selectedTeams, ele.id]);
                    }
                  }}
                >
                  <img
                    className={clsx("rounded-lg")}
                    src={`${ele.logo}`}
                    alt="team_0"
                  />
                  <p>{ele.name}</p>
                  <CheckIcon
                    className={clsx(
                      "check-icon",
                      selectedTeams.includes(ele.id) ? "show" : "hide"
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Button text="تایید" className={clsx("mt-auto mb-4 w-2/3 mx-auto")} />
      </div>
    </MainLayout>
  );
};

export default ChooseTeam;
