interface ArrowProps {
  color?: string;
  size: "medium";
  direction: "left" | "right";
}

const Arrow = ({ color, size, direction }: ArrowProps) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "transparent",
  };

  const mediumProps = {
    width: "12",
    height: "22",
    viewBox: "0 0 12 22",
    ...commonProps,
  };

  return (
    <>
      {size === "medium" ? (
        direction === "left" ? (
          <svg {...mediumProps} aria-label="Seta">
            <path
              d="M11 21L1 11L11 1"
              stroke={color ? color : "#313234"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : direction === "right" ? (
          <svg {...mediumProps} aria-label="Seta">
            <path
              d="M1 1L11 11L1 21"
              stroke={color ? color : "#313234"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null
      ) : null}
    </>
  );
};

export default Arrow;
