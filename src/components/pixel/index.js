import clsx from "clsx";
import { baseColors } from "../../config/colors";

const PixelComp = ({ colorId, isItMe, ...props }) => {
  return (
    <div
      style={{ backgroundColor: baseColors[+colorId].colorCode }}
      className={clsx(
        " w-[4px] h-[4px] m-[2px]",
        isItMe && " border-[2px] border-solid border-[#222]"
      )}
    ></div>
  );
};

export default PixelComp;
