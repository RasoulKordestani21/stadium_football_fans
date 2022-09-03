import clsx from "clsx";
import teams from "../../assets/front-dbs/teams";

const MatchesSoon = props => {
  return (
    <div
      className={clsx(
        "flex  min-w-[250px] m-4 rounded-[14px] p-4 shadow-lg items-center"
      )}
      dir={"rtl"}
    >
      <div className={clsx("min-w-[150px]")}>
        <div className={clsx("flex")}>
          <img
            className={clsx("rounded-full w-1/2 h-1/2 mx-auto mb-3")}
            src={teams.find(ele => ele.id === props.firstTeam.id).logo}
            alt="first-team"
          />
          <p>{teams.find(ele => ele.id === props.firstTeam.id).name}</p>
        </div>
        <div className={clsx("flex")}>
          {console.log(teams.find(ele => ele.id === props.secondTeam.id).logo)}
          <img
            className={clsx("rounded-full w-1/2 h-1/2 mx-auto mb-3")}
            src={teams.find(ele => ele.id === props.secondTeam.id).logo}
            alt="second-team"
          />
          <p>{teams.find(ele => ele.id === props.secondTeam.id).name}</p>
        </div>
      </div>
      <div>
        <p>1400/8/3</p>
        <p>20:30</p>
        <p>ورزشگاه آزادی</p>
      </div>
    </div>
  );
};

export default MatchesSoon;
