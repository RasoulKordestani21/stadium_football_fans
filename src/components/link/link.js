import clsx from "clsx";

const Link = ({ text, className, onClick }) => {
  return (
    <p onClick={onClick} className={clsx("text-[#244ba0]", className)}>
      {text}
    </p>
  );
};

export default Link;
