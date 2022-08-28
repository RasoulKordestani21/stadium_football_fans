import { data } from "autoprefixer";
import clsx from "clsx";

const ColorCardsComp = ({ data }) => {
  return (
    <div
      className={clsx(
        `w-[180px] h-[270px] ${data.color} absolute  rounded-[6px] flex ${data.right}   ${data.index} text-white`
      )}
    >
      {console.log(data.color)}
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
