import clsx from "clsx";

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
            src="https://w0.peakpx.com/wallpaper/853/281/HD-wallpaper-esteghlal-fc-silk-texture-logo-emblem-blue-silk-flag-iranian-football-club-tehran-iran-football-persian-gulf-pro-league-thumbnail.jpg"
            alt="first-team"
          />
          <p>استقلال خوزستان</p>
        </div>
        <div className={clsx("flex")}>
          <img
            className={clsx("rounded-full w-1/2 h-1/2 mx-auto mb-3")}
            src="https://w0.peakpx.com/wallpaper/853/281/HD-wallpaper-esteghlal-fc-silk-texture-logo-emblem-blue-silk-flag-iranian-football-club-tehran-iran-football-persian-gulf-pro-league-thumbnail.jpg"
            alt="first-team"
          />
          <p>استقلال خوزستان</p>
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
