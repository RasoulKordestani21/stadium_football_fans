import clsx from "clsx";
import { baseColors } from "../../config/colors";

const ColorCardsComp = ({ data, className, ...props }) => {
  return (
    <div
      style={props.style}
      className={clsx(
        `w-[180px] h-[270px] absolute  rounded-[6px] flex  text-white `
      )}
    >
      {console.log(data)}
      <div
        className={clsx(`w-[140px] h-[230px]  border-l-stone-300
       border-solid border-[2px] rounded-[6px] m-auto flex flex-col 
     
       `)}
      >
        <div className={clsx(`m-auto `)}>
          <p className={clsx("mb-4")}>{data.number}</p>
          <p>{data.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorCardsComp;
