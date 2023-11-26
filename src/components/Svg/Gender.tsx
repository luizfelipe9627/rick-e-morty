interface GenderProps {
  color?: string;
  size: "small" | "medium" | "big";
}

const Gender = ({ color, size }: GenderProps) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: color ? color : "#313234",
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
        <svg {...smallProps} aria-label="Gênero">
          <path d="M13 1.5H10.5C10.3674 1.5 10.2402 1.55268 10.1465 1.64645C10.0527 1.74021 10 1.86739 10 2C10 2.13261 10.0527 2.25979 10.1465 2.35355C10.2402 2.44732 10.3674 2.5 10.5 2.5H11.7932L10.2213 4.07188C9.75973 3.64174 9.20298 3.32689 8.59651 3.15303C7.99003 2.97916 7.35103 2.95123 6.7317 3.07149C6.11237 3.19176 5.53026 3.45682 5.03293 3.84502C4.5356 4.23323 4.13716 4.73357 3.87013 5.30518C3.60311 5.87679 3.47508 6.50346 3.49651 7.134C3.51794 7.76454 3.68821 8.38107 3.99342 8.93323C4.29864 9.48539 4.73013 9.95753 5.25267 10.3111C5.7752 10.6646 6.37396 10.8896 7.00003 10.9675V12H5.50003C5.36742 12 5.24025 12.0527 5.14648 12.1464C5.05271 12.2402 5.00003 12.3674 5.00003 12.5C5.00003 12.6326 5.05271 12.7598 5.14648 12.8536C5.24025 12.9473 5.36742 13 5.50003 13H7.00003V14.5C7.00003 14.6326 7.05271 14.7598 7.14648 14.8536C7.24024 14.9473 7.36742 15 7.50003 15C7.63264 15 7.75982 14.9473 7.85358 14.8536C7.94735 14.7598 8.00003 14.6326 8.00003 14.5V13H9.50003C9.63264 13 9.75982 12.9473 9.85358 12.8536C9.94735 12.7598 10 12.6326 10 12.5C10 12.3674 9.94735 12.2402 9.85358 12.1464C9.75982 12.0527 9.63264 12 9.50003 12H8.00003V10.9675C8.67023 10.8838 9.30827 10.6315 9.85451 10.2343C10.4007 9.83701 10.8374 9.30776 11.1235 8.69597C11.4097 8.08418 11.5361 7.40982 11.4909 6.73592C11.4457 6.06203 11.2303 5.41059 10.865 4.8425L12.5 3.20688V4.5C12.5 4.63261 12.5527 4.75979 12.6465 4.85355C12.7402 4.94732 12.8674 5 13 5C13.1326 5 13.2598 4.94732 13.3536 4.85355C13.4474 4.75979 13.5 4.63261 13.5 4.5V2C13.5 1.86739 13.4474 1.74021 13.3536 1.64645C13.2598 1.55268 13.1326 1.5 13 1.5ZM7.50003 10C6.90669 10 6.32667 9.82405 5.83332 9.49441C5.33997 9.16476 4.95545 8.69623 4.72839 8.14805C4.50133 7.59987 4.44192 6.99667 4.55767 6.41473C4.67343 5.83279 4.95915 5.29824 5.37871 4.87868C5.79827 4.45912 6.33282 4.1734 6.91476 4.05764C7.4967 3.94189 8.0999 4.0013 8.64808 4.22836C9.19626 4.45542 9.66479 4.83994 9.99444 5.33329C10.3241 5.82664 10.5 6.40666 10.5 7C10.4992 7.7954 10.1829 8.55798 9.62044 9.12041C9.05801 9.68284 8.29543 9.99917 7.50003 10Z" />
        </svg>
      ) : size === "medium" ? (
        <svg {...mediumProps} aria-label="Gênero">
          <path d="M19.5 2.25H15.75C15.5511 2.25 15.3603 2.32902 15.2197 2.46967C15.079 2.61032 15 2.80109 15 3C15 3.19891 15.079 3.38968 15.2197 3.53033C15.3603 3.67098 15.5511 3.75 15.75 3.75H17.6897L15.3319 6.10781C14.6396 5.46262 13.8044 4.99033 12.8947 4.72954C11.985 4.46875 11.0265 4.42684 10.0975 4.60724C9.16852 4.78764 8.29536 5.18523 7.54937 5.76754C6.80338 6.34985 6.2057 7.10036 5.80517 7.95777C5.40463 8.81519 5.21259 9.75519 5.24473 10.701C5.27688 11.6468 5.53229 12.5716 5.99011 13.3998C6.44793 14.2281 7.09517 14.9363 7.87897 15.4666C8.66278 15.9969 9.56091 16.3343 10.5 16.4512V18H8.25001C8.0511 18 7.86034 18.079 7.71968 18.2197C7.57903 18.3603 7.50001 18.5511 7.50001 18.75C7.50001 18.9489 7.57903 19.1397 7.71968 19.2803C7.86034 19.421 8.0511 19.5 8.25001 19.5H10.5V21.75C10.5 21.9489 10.579 22.1397 10.7197 22.2803C10.8603 22.421 11.0511 22.5 11.25 22.5C11.4489 22.5 11.6397 22.421 11.7803 22.2803C11.921 22.1397 12 21.9489 12 21.75V19.5H14.25C14.4489 19.5 14.6397 19.421 14.7803 19.2803C14.921 19.1397 15 18.9489 15 18.75C15 18.5511 14.921 18.3603 14.7803 18.2197C14.6397 18.079 14.4489 18 14.25 18H12V16.4512C13.0053 16.3257 13.9624 15.9473 14.7817 15.3514C15.6011 14.7555 16.256 13.9616 16.6853 13.044C17.1145 12.1263 17.3041 11.1147 17.2363 10.1039C17.1685 9.09304 16.8455 8.11588 16.2975 7.26375L18.75 4.81031V6.75C18.75 6.94891 18.829 7.13968 18.9697 7.28033C19.1103 7.42098 19.3011 7.5 19.5 7.5C19.6989 7.5 19.8897 7.42098 20.0303 7.28033C20.171 7.13968 20.25 6.94891 20.25 6.75V3C20.25 2.80109 20.171 2.61032 20.0303 2.46967C19.8897 2.32902 19.6989 2.25 19.5 2.25ZM11.25 15C10.36 15 9.48997 14.7361 8.74995 14.2416C8.00993 13.7471 7.43315 13.0443 7.09256 12.2221C6.75196 11.3998 6.66285 10.495 6.83648 9.62209C7.01011 8.74918 7.4387 7.94736 8.06803 7.31802C8.69737 6.68868 9.49919 6.2601 10.3721 6.08647C11.245 5.91283 12.1498 6.00195 12.9721 6.34254C13.7944 6.68314 14.4972 7.25991 14.9916 7.99993C15.4861 8.73995 15.75 9.60998 15.75 10.5C15.7488 11.6931 15.2743 12.837 14.4306 13.6806C13.587 14.5243 12.4431 14.9988 11.25 15Z" />
        </svg>
      ) : size === "big" ? (
        <svg {...bigProps} aria-label="Gênero">
          <path d="M26 3H21C20.7348 3 20.4804 3.10536 20.2929 3.29289C20.1054 3.48043 20 3.73478 20 4C20 4.26522 20.1054 4.51957 20.2929 4.70711C20.4804 4.89464 20.7348 5 21 5H23.5863L20.4425 8.14375C19.5194 7.28349 18.4059 6.65378 17.193 6.30605C15.98 5.95833 14.702 5.90245 13.4633 6.14298C12.2247 6.38352 11.0605 6.91364 10.0658 7.69005C9.07115 8.46646 8.27425 9.46714 7.7402 10.6104C7.20616 11.7536 6.9501 13.0069 6.99296 14.268C7.03581 15.5291 7.37636 16.7621 7.98679 17.8665C8.59721 18.9708 9.46021 19.9151 10.5053 20.6222C11.5503 21.3293 12.7479 21.7791 14 21.935V24H11C10.7348 24 10.4804 24.1054 10.2929 24.2929C10.1054 24.4804 10 24.7348 10 25C10 25.2652 10.1054 25.5196 10.2929 25.7071C10.4804 25.8946 10.7348 26 11 26H14V29C14 29.2652 14.1054 29.5196 14.2929 29.7071C14.4804 29.8946 14.7348 30 15 30C15.2652 30 15.5196 29.8946 15.7071 29.7071C15.8946 29.5196 16 29.2652 16 29V26H19C19.2652 26 19.5196 25.8946 19.7071 25.7071C19.8946 25.5196 20 25.2652 20 25C20 24.7348 19.8946 24.4804 19.7071 24.2929C19.5196 24.1054 19.2652 24 19 24H16V21.935C17.3404 21.7676 18.6165 21.263 19.709 20.4685C20.8014 19.674 21.6746 18.6155 22.247 17.3919C22.8193 16.1684 23.0721 14.8196 22.9817 13.4718C22.8913 12.1241 22.4606 10.8212 21.73 9.685L25 6.41375V9C25 9.26522 25.1054 9.51957 25.2929 9.70711C25.4804 9.89464 25.7348 10 26 10C26.2652 10 26.5196 9.89464 26.7071 9.70711C26.8946 9.51957 27 9.26522 27 9V4C27 3.73478 26.8946 3.48043 26.7071 3.29289C26.5196 3.10536 26.2652 3 26 3ZM15 20C13.8133 20 12.6533 19.6481 11.6666 18.9888C10.6799 18.3295 9.91085 17.3925 9.45672 16.2961C9.0026 15.1997 8.88378 13.9933 9.11529 12.8295C9.3468 11.6656 9.91824 10.5965 10.7574 9.75736C11.5965 8.91824 12.6656 8.3468 13.8295 8.11529C14.9933 7.88378 16.1997 8.0026 17.2961 8.45672C18.3925 8.91085 19.3295 9.67988 19.9888 10.6666C20.6481 11.6533 21 12.8133 21 14C20.9983 15.5908 20.3657 17.116 19.2408 18.2408C18.116 19.3657 16.5908 19.9983 15 20Z" />
        </svg>
      ) : null}
    </>
  );
};

export default Gender;
