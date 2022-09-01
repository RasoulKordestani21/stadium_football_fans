import clsx from "clsx";

const Error = ({ message, className, ...props }) => {
  return <div className={clsx(className,"text-red-800 w-[70%] text-end")}>{message}</div>;
};

export default Error;
