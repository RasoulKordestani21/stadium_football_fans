const Button = props => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="bg-[#5f53ea] text-white py-[.875rem] px-[2.5rem]  mt-10  rounded-lg"
    >
      {props.text}
    </button>
  );
};

export default Button;
