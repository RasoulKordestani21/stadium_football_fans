import clsx from "clsx";

const Button = props => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={clsx(
        "bg-[#5f53ea] text-white py-[.875rem] px-[2.5rem]  mt-10  rounded-lg",
        props.className
      )}
    >
      {props.text}
    </button>
  );
};

export default Button;
