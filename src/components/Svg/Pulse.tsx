interface PulseProps {
  color?: string;
  size: "small" | "medium" | "big";
}

const Pulse = ({ color, size }: PulseProps) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: color ? color : "#BFDE42",
  };

  const smallProps = {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    ...commonProps,
  };

  const mediumProps = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    ...commonProps,
  };

  const bigProps = {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    ...commonProps,
  };

  return (
    <>
      {size === "small" ? (
        <svg {...smallProps} aria-label="Batimento">
          <path d="M15 8.00001C15 8.13262 14.9473 8.25979 14.8536 8.35356C14.7598 8.44733 14.6326 8.50001 14.5 8.50001H12.8088L10.4475 13.2238C10.4059 13.3068 10.342 13.3767 10.263 13.4255C10.184 13.4743 10.0929 13.5001 10 13.5H9.975C9.87801 13.4952 9.78452 13.4623 9.70594 13.4052C9.62736 13.3482 9.5671 13.2695 9.5325 13.1788L5.95937 3.79751L3.955 8.20688C3.91529 8.29426 3.85127 8.36836 3.77059 8.42034C3.68991 8.47231 3.59597 8.49997 3.5 8.50001H1.5C1.36739 8.50001 1.24021 8.44733 1.14645 8.35356C1.05268 8.25979 1 8.13262 1 8.00001C1 7.8674 1.05268 7.74022 1.14645 7.64646C1.24021 7.55269 1.36739 7.50001 1.5 7.50001H3.17812L5.545 2.29313C5.5858 2.20328 5.65229 2.12751 5.73607 2.07537C5.81985 2.02323 5.91719 1.99705 6.01583 2.00012C6.11447 2.00319 6.20999 2.03539 6.29036 2.09265C6.37074 2.1499 6.43237 2.22966 6.4675 2.32188L10.0619 11.7594L12.0525 7.77751C12.0939 7.69421 12.1577 7.6241 12.2368 7.57508C12.3158 7.52606 12.407 7.50006 12.5 7.50001H14.5C14.6326 7.50001 14.7598 7.55269 14.8536 7.64646C14.9473 7.74022 15 7.8674 15 8.00001Z" />
        </svg>
      ) : size === "medium" ? (
        <svg {...mediumProps} aria-label="Batimento">
          <path d="M22.5 12C22.5 12.1989 22.421 12.3897 22.2803 12.5303C22.1397 12.671 21.9489 12.75 21.75 12.75H19.2131L15.6713 19.8356C15.6089 19.9602 15.5131 20.065 15.3945 20.1382C15.2759 20.2114 15.1393 20.2501 15 20.25H14.9625C14.817 20.2428 14.6768 20.1934 14.5589 20.1079C14.441 20.0223 14.3506 19.9042 14.2988 19.7681L8.93906 5.69626L5.9325 12.3103C5.87294 12.4414 5.77691 12.5525 5.65589 12.6305C5.53487 12.7085 5.39396 12.75 5.25 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3897 1.5 12.1989 1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4697C1.86032 11.329 2.05109 11.25 2.25 11.25H4.76719L8.3175 3.4397C8.37871 3.30492 8.47843 3.19127 8.6041 3.11306C8.72978 3.03484 8.87579 2.99557 9.02375 3.00018C9.1717 3.00479 9.31498 3.05308 9.43554 3.13897C9.5561 3.22486 9.64855 3.3445 9.70125 3.48283L15.0928 17.6391L18.0787 11.6663C18.1408 11.5413 18.2366 11.4362 18.3551 11.3626C18.4737 11.2891 18.6105 11.2501 18.75 11.25H21.75C21.9489 11.25 22.1397 11.329 22.2803 11.4697C22.421 11.6103 22.5 11.8011 22.5 12Z" />
        </svg>
      ) : size === "big" ? (
        <svg {...bigProps} aria-label="Batimento">
          <path d="M30 16C30 16.2652 29.8946 16.5196 29.7071 16.7071C29.5196 16.8947 29.2652 17 29 17H25.6175L20.895 26.4475C20.8119 26.6137 20.6841 26.7534 20.526 26.8509C20.3679 26.9485 20.1858 27.0002 20 27H19.95C19.756 26.9904 19.569 26.9246 19.4119 26.8105C19.2547 26.6964 19.1342 26.539 19.065 26.3575L11.9187 7.59502L7.91 16.4138C7.83058 16.5885 7.70255 16.7367 7.54118 16.8407C7.37982 16.9446 7.19195 16.9999 7 17H3C2.73478 17 2.48043 16.8947 2.29289 16.7071C2.10536 16.5196 2 16.2652 2 16C2 15.7348 2.10536 15.4804 2.29289 15.2929C2.48043 15.1054 2.73478 15 3 15H6.35625L11.09 4.58627C11.1716 4.40656 11.3046 4.25503 11.4721 4.15074C11.6397 4.04646 11.8344 3.99409 12.0317 4.00024C12.2289 4.00639 12.42 4.07078 12.5807 4.18529C12.7415 4.29981 12.8647 4.45933 12.935 4.64377L20.1238 23.5188L24.105 15.555C24.1878 15.3884 24.3154 15.2482 24.4735 15.1502C24.6316 15.0521 24.814 15.0001 25 15H29C29.2652 15 29.5196 15.1054 29.7071 15.2929C29.8946 15.4804 30 15.7348 30 16Z" />
        </svg>
      ) : null}
    </>
  );
};

export default Pulse;