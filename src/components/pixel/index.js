import clsx from "clsx";
import { baseColors } from "../../config/colors";

const PixelComp = ({ colorId, ...props }) => {
  return (
    <div
      style={{ backgroundColor: baseColors[+colorId].colorCode }}
      className={clsx(" w-[4px] h-[4px] m-[2px]",)}
    ></div>
  );
};

export default PixelComp;
