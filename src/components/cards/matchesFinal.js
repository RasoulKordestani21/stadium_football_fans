import clsx from "clsx";

const MatchesFinal = props => {
  return (
    <div className={clsx("flex  min-w-[250px] m-4 rounded-[14px] p-4 shadow-lg")}>
      <div className={clsx("flex items-center")}>
        <div className={clsx(" ")}>
          <img
            className={clsx("rounded-full w-1/2 h-1/2 mx-auto ")}
            src="https://w0.peakpx.com/wallpaper/853/281/HD-wallpaper-esteghlal-fc-silk-texture-logo-emblem-blue-silk-flag-iranian-football-club-tehran-iran-football-persian-gulf-pro-league-thumbnail.jpg"
            alt="first-team"
          />
          <p>فولاد خوزستان</p>
        </div>
        <h4>1</h4>
      </div>
      <div className={clsx("flex items-center")}>
        <h4>1</h4>
        <div className={clsx(" ")}>
          <img
            className={clsx("rounded-full w-1/2 h-1/2 mx-auto ")}
            src="https://w0.peakpx.com/wallpaper/853/281/HD-wallpaper-esteghlal-fc-silk-texture-logo-emblem-blue-silk-flag-iranian-football-club-tehran-iran-football-persian-gulf-pro-league-thumbnail.jpg"
            alt="second-team"
          />
          <p>فولاد خوزستان</p>
        </div>
      </div>
    </div>
  );
};

export default MatchesFinal;
