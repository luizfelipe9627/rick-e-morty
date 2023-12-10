interface ArrowXProps {
  color?: string;
  size: "big";
}

const ArrowY = ({ color, size }: ArrowXProps) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "transparent",
  };

  const bigProps = {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    ...commonProps,
  };

  return (
    <>
      {size === "big" ? (
        <svg {...bigProps} aria-label="Seta">
          <path
            d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
            stroke={color ? color : "var(--color11)"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.7031 19.0469L20 13.75L25.2969 19.0469"
            stroke={color ? color : "var(--color11)"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 26.25V13.75"
            stroke={color ? color : "var(--color11)"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </>
  );
};

export default ArrowY;
