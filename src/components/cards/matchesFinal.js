import clsx from "clsx";
import teams from "../../assets/front-dbs/teams";

const MatchesFinal = props => {
  return (
    <div
      className={clsx("flex  min-w-[250px] m-4 rounded-[14px] p-4 shadow-lg")}
    >
      <div className={clsx("flex items-center")}>
        <div className={clsx(" ")}>
          <img
            className={clsx("rounded-full w-1/2 h-1/2 mx-auto ")}
            src={teams.find(ele => ele.id === props.firstTeam.id).logo}
            alt="first-team"
          />
          <p> {teams.find(ele => ele.id === props.firstTeam.id).name}</p>
        </div>
        <h4>{props.firstTeam.goals}</h4>
      </div>
      <div className={clsx("flex items-center")}>
        <h4>{props.secondTeam.goals}</h4>
        <div className={clsx(" ")}>
          <img
            className={clsx("rounded-full w-1/2 h-1/2 mx-auto ")}
            src={teams.find(ele => ele.id === props.secondTeam.id).logo}
            alt="second-team"
          />
          <p>{teams.find(ele => ele.id === props.secondTeam.id).name}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchesFinal;
