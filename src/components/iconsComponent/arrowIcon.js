const ArrowIcon = props => {
  return (
    <div onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props?.size || "24"}
        height={props?.size || "24"}
        viewBox="0 0 24 24"
        style={props.style}
      >
        <g fill="none">
          <path d="M0 0h24v24H0z" transform="rotate(90 12 12)" />
          <path
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            d="M8 10l4 4 4-4"
            transform="rotate(90 12 12)"
          />
        </g>
      </svg>
    </div>
  );
};
export default ArrowIcon;
