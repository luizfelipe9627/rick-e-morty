interface QueueProps {
  color?: string;
  size: "medium";
}

const Queue = ({ color, size }: QueueProps) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: color ? color : "var(--dark-gray-color)",
  };

  const mediumProps = {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    ...commonProps,
  };

  return (
    <>
      {size === "medium" ? (
        <svg {...mediumProps} aria-label="Fila">
          <path
            d="M4 8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H27C27.2652 7 27.5196 7.10536 27.7071 7.29289C27.8946 7.48043 28 7.73478 28 8C28 8.26522 27.8946 8.51957 27.7071 8.70711C27.5196 8.89464 27.2652 9 27 9H5C4.73478 9 4.48043 8.89464 4.29289 8.70711C4.10536 8.51957 4 8.26522 4 8ZM17 15H5C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16C18 15.7348 17.8946 15.4804 17.7071 15.2929C17.5196 15.1054 17.2652 15 17 15ZM17 23H5C4.73478 23 4.48043 23.1054 4.29289 23.2929C4.10536 23.4804 4 23.7348 4 24C4 24.2652 4.10536 24.5196 4.29289 24.7071C4.48043 24.8946 4.73478 25 5 25H17C17.2652 25 17.5196 24.8946 17.7071 24.7071C17.8946 24.5196 18 24.2652 18 24C18 23.7348 17.8946 23.4804 17.7071 23.2929C17.5196 23.1054 17.2652 23 17 23ZM31 20C30.9999 20.1695 30.9567 20.3362 30.8745 20.4845C30.7923 20.6327 30.6738 20.7577 30.53 20.8475L22.53 25.8475C22.3787 25.9421 22.2048 25.9944 22.0264 25.9992C21.848 26.0039 21.6716 25.9607 21.5154 25.8743C21.3593 25.7878 21.2292 25.6611 21.1386 25.5074C21.0479 25.3537 21.0001 25.1785 21 25V15C21.0001 14.8215 21.0479 14.6464 21.1386 14.4926C21.2292 14.3389 21.3593 14.2122 21.5154 14.1257C21.6716 14.0393 21.848 13.9961 22.0264 14.0008C22.2048 14.0056 22.3787 14.0579 22.53 14.1525L30.53 19.1525C30.6738 19.2423 30.7923 19.3673 30.8745 19.5155C30.9567 19.6638 30.9999 19.8305 31 20ZM28.1138 20L23 16.8037V23.1963L28.1138 20Z"
          />
        </svg>
      ) : null}
    </>
  );
};

export default Queue;
