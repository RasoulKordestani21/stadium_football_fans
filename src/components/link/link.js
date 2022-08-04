import clsx from "clsx";

const Link = ({ text, className }) => {
  return <p className={clsx("text-[#244ba0]", className)}>{text}</p>;
};

export default Link;
