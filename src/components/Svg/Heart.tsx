interface HeartProps {
  color?: string;
  fill?: true | false;
  size: "small" | "medium" | "big" | "huge";
  onClick?: React.MouseEventHandler<SVGElement>;
}

const Heart = ({ color, fill, size, onClick }: HeartProps) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: color ? color : "#11B0C8",
  };

  const smallProps = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    ...commonProps,
  };

  const mediumProps = {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    ...commonProps,
  };

  const bigProps = {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    ...commonProps,
  };

  const hugeProps = {
    width: "56",
    height: "56",
    viewBox: "0 0 56 56",
    ...commonProps,
  };

  return (
    <>
      {size === "small" ? (
        fill ? (
          <svg {...smallProps} onClick={onClick} aria-label="Coração">
            <path d="M22.5 8.8125C22.5 15.375 12.7697 20.6869 12.3553 20.9062C12.2461 20.965 12.124 20.9958 12 20.9958C11.876 20.9958 11.7539 20.965 11.6447 20.9062C11.2303 20.6869 1.5 15.375 1.5 8.8125C1.50174 7.27146 2.11468 5.79404 3.20436 4.70436C4.29404 3.61468 5.77146 3.00174 7.3125 3C9.24844 3 10.9434 3.8325 12 5.23969C13.0566 3.8325 14.7516 3 16.6875 3C18.2285 3.00174 19.706 3.61468 20.7956 4.70436C21.8853 5.79404 22.4983 7.27146 22.5 8.8125Z" />
          </svg>
        ) : (
          <svg {...smallProps} onClick={onClick} aria-label="Coração">
            <path d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C5.77146 3.00174 4.29404 3.61468 3.20436 4.70436C2.11468 5.79404 1.50174 7.27146 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.7539 20.965 11.876 20.9958 12 20.9958C12.124 20.9958 12.2461 20.965 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4983 7.27146 21.8853 5.79404 20.7956 4.70436C19.706 3.61468 18.2285 3.00174 16.6875 3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.00149 7.66921 3.45632 6.57317 4.26475 5.76475C5.07317 4.95632 6.16921 4.50149 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.3628 7.16881 11.4589 7.28646 11.5824 7.36926C11.7059 7.45207 11.8513 7.49627 12 7.49627C12.1487 7.49627 12.2941 7.45207 12.4176 7.36926C12.5411 7.28646 12.6372 7.16881 12.6937 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C17.8308 4.50149 18.9268 4.95632 19.7353 5.76475C20.5437 6.57317 20.9985 7.66921 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875Z" />
          </svg>
        )
      ) : size === "medium" ? (
        fill ? (
          <svg {...mediumProps} onClick={onClick} aria-label="Coração">
            <path d="M30 11.75C30 20.5 17.0262 27.5825 16.4737 27.875C16.3281 27.9533 16.1654 27.9943 16 27.9943C15.8346 27.9943 15.6719 27.9533 15.5262 27.875C14.9738 27.5825 2 20.5 2 11.75C2.00232 9.69528 2.81958 7.72539 4.27248 6.27248C5.72539 4.81958 7.69528 4.00232 9.75 4C12.3313 4 14.5912 5.11 16 6.98625C17.4088 5.11 19.6688 4 22.25 4C24.3047 4.00232 26.2746 4.81958 27.7275 6.27248C29.1804 7.72539 29.9977 9.69528 30 11.75Z" />
          </svg>
        ) : (
          <svg {...mediumProps} onClick={onClick} aria-label="Coração">
            <path d="M22.25 4C19.6688 4 17.4088 5.11 16 6.98625C14.5912 5.11 12.3313 4 9.75 4C7.69528 4.00232 5.72539 4.81958 4.27248 6.27248C2.81958 7.72539 2.00232 9.69528 2 11.75C2 20.5 14.9738 27.5825 15.5262 27.875C15.6719 27.9533 15.8346 27.9943 16 27.9943C16.1654 27.9943 16.3281 27.9533 16.4737 27.875C17.0262 27.5825 30 20.5 30 11.75C29.9977 9.69528 29.1804 7.72539 27.7275 6.27248C26.2746 4.81958 24.3047 4.00232 22.25 4ZM16 25.85C13.7175 24.52 4 18.4613 4 11.75C4.00198 10.2256 4.60842 8.76423 5.68633 7.68633C6.76423 6.60842 8.22561 6.00198 9.75 6C12.1812 6 14.2225 7.295 15.075 9.375C15.1503 9.55841 15.2785 9.71528 15.4432 9.82569C15.6079 9.93609 15.8017 9.99503 16 9.99503C16.1983 9.99503 16.3921 9.93609 16.5568 9.82569C16.7215 9.71528 16.8497 9.55841 16.925 9.375C17.7775 7.29125 19.8188 6 22.25 6C23.7744 6.00198 25.2358 6.60842 26.3137 7.68633C27.3916 8.76423 27.998 10.2256 28 11.75C28 18.4513 18.28 24.5188 16 25.85Z" />
          </svg>
        )
      ) : size === "big" ? (
        fill ? (
          <svg {...bigProps} onClick={onClick} aria-label="Coração">
            <path d="M45 17.625C45 30.75 25.5394 41.3737 24.7106 41.8125C24.4922 41.93 24.248 41.9915 24 41.9915C23.752 41.9915 23.5078 41.93 23.2894 41.8125C22.4606 41.3737 3 30.75 3 17.625C3.00347 14.5429 4.22936 11.5881 6.40872 9.40872C8.58808 7.22936 11.5429 6.00347 14.625 6C18.4969 6 21.8869 7.665 24 10.4794C26.1131 7.665 29.5031 6 33.375 6C36.4571 6.00347 39.4119 7.22936 41.5913 9.40872C43.7706 11.5881 44.9965 14.5429 45 17.625Z" />
          </svg>
        ) : (
          <svg {...bigProps} onClick={onClick} aria-label="Coração">
            <path d="M33.375 6C29.5031 6 26.1131 7.665 24 10.4794C21.8869 7.665 18.4969 6 14.625 6C11.5429 6.00347 8.58808 7.22936 6.40872 9.40872C4.22936 11.5881 3.00347 14.5429 3 17.625C3 30.75 22.4606 41.3737 23.2894 41.8125C23.5078 41.93 23.752 41.9915 24 41.9915C24.248 41.9915 24.4922 41.93 24.7106 41.8125C25.5394 41.3737 45 30.75 45 17.625C44.9965 14.5429 43.7706 11.5881 41.5913 9.40872C39.4119 7.22936 36.4571 6.00347 33.375 6ZM24 38.775C20.5763 36.78 6 27.6919 6 17.625C6.00298 15.3384 6.91264 13.1463 8.52949 11.5295C10.1463 9.91264 12.3384 9.00298 14.625 9C18.2719 9 21.3337 10.9425 22.6125 14.0625C22.7255 14.3376 22.9178 14.5729 23.1648 14.7385C23.4119 14.9041 23.7026 14.9925 24 14.9925C24.2974 14.9925 24.5881 14.9041 24.8352 14.7385C25.0822 14.5729 25.2745 14.3376 25.3875 14.0625C26.6662 10.9369 29.7281 9 33.375 9C35.6616 9.00298 37.8537 9.91264 39.4705 11.5295C41.0874 13.1463 41.997 15.3384 42 17.625C42 27.6769 27.42 36.7781 24 38.775Z" />
          </svg>
        )
      ) : size === "huge" ? (
        fill ? (
          <svg {...hugeProps} onClick={onClick} aria-label="Coração">
            <path d="M52.5 20.5625C52.5 35.875 29.7959 48.2694 28.8291 48.7812C28.5742 48.9183 28.2894 48.9901 28 48.9901C27.7106 48.9901 27.4258 48.9183 27.1709 48.7812C26.2041 48.2694 3.5 35.875 3.5 20.5625C3.50405 16.9667 4.93426 13.5194 7.47684 10.9768C10.0194 8.43426 13.4667 7.00405 17.0625 7C21.5797 7 25.5347 8.9425 28 12.2259C30.4653 8.9425 34.4203 7 38.9375 7C42.5333 7.00405 45.9806 8.43426 48.5232 10.9768C51.0657 13.5194 52.4959 16.9667 52.5 20.5625Z" />
          </svg>
        ) : (
          <svg {...hugeProps} onClick={onClick} aria-label="Coração">
            <path d="M38.9375 7C34.4203 7 30.4653 8.9425 28 12.2259C25.5347 8.9425 21.5797 7 17.0625 7C13.4667 7.00405 10.0194 8.43426 7.47684 10.9768C4.93426 13.5194 3.50405 16.9667 3.5 20.5625C3.5 35.875 26.2041 48.2694 27.1709 48.7812C27.4258 48.9183 27.7106 48.9901 28 48.9901C28.2894 48.9901 28.5742 48.9183 28.8291 48.7812C29.7959 48.2694 52.5 35.875 52.5 20.5625C52.4959 16.9667 51.0657 13.5194 48.5232 10.9768C45.9806 8.43426 42.5333 7.00405 38.9375 7ZM28 45.2375C24.0056 42.91 7 32.3072 7 20.5625C7.00347 17.8948 8.06474 15.3374 9.95107 13.4511C11.8374 11.5647 14.3948 10.5035 17.0625 10.5C21.3172 10.5 24.8894 12.7663 26.3813 16.4062C26.5131 16.7272 26.7374 17.0017 27.0256 17.195C27.3138 17.3882 27.653 17.4913 28 17.4913C28.347 17.4913 28.6862 17.3882 28.9744 17.195C29.2626 17.0017 29.4869 16.7272 29.6187 16.4062C31.1106 12.7597 34.6828 10.5 38.9375 10.5C41.6052 10.5035 44.1626 11.5647 46.0489 13.4511C47.9353 15.3374 48.9965 17.8948 49 20.5625C49 32.2897 31.99 42.9078 28 45.2375Z" />
          </svg>
        )
      ) : null}
    </>
  );
};

export default Heart;