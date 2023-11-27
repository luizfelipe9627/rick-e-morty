interface SmileyProps {
  color?: string;
  theme?: "dark";
  size: "medium" | "big";
}

const Smiley = ({ color, theme, size }: SmileyProps) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: color ? color : "#313234",
  };

  const mediumProps = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    ...commonProps,
  };

  const bigProps = {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    ...commonProps,
  };

  return (
    <>
      {theme === "dark" ? (
        size === "medium" ? (
          <svg {...mediumProps} aria-label="Carinha sem expressão">
            <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM9.75 10.125C9.75 10.3475 9.68402 10.565 9.56041 10.75C9.43679 10.935 9.26109 11.0792 9.05552 11.1644C8.84996 11.2495 8.62376 11.2718 8.40553 11.2284C8.1873 11.185 7.98684 11.0778 7.82951 10.9205C7.67217 10.7632 7.56503 10.5627 7.52162 10.3445C7.47821 10.1262 7.50049 9.90005 7.58564 9.69448C7.67079 9.48891 7.81498 9.31321 7.99999 9.1896C8.18499 9.06598 8.4025 9 8.625 9C8.92337 9 9.20952 9.11853 9.4205 9.3295C9.63148 9.54048 9.75 9.82663 9.75 10.125ZM16.5 10.125C16.5 10.3475 16.434 10.565 16.3104 10.75C16.1868 10.935 16.0111 11.0792 15.8055 11.1644C15.6 11.2495 15.3738 11.2718 15.1555 11.2284C14.9373 11.185 14.7368 11.0778 14.5795 10.9205C14.4222 10.7632 14.315 10.5627 14.2716 10.3445C14.2282 10.1262 14.2505 9.90005 14.3356 9.69448C14.4208 9.48891 14.565 9.31321 14.75 9.1896C14.935 9.06598 15.1525 9 15.375 9C15.6734 9 15.9595 9.11853 16.1705 9.3295C16.3815 9.54048 16.5 9.82663 16.5 10.125Z" />
          </svg>
        ) : size === "big" ? (
          <svg {...bigProps} aria-label="Carinha sem expressão">
            <path
              d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95962 9.92903 7.46026 12.9745 5.98435 16.5377C4.50844 20.1008 4.12228 24.0216 4.87469 27.8043C5.6271 31.5869 7.48429 35.0615 10.2114 37.7886C12.9385 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3563 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7826 10.2174C34.1268 6.56167 29.17 4.50546 24 4.5ZM24 40.5C20.7366 40.5 17.5465 39.5323 14.8331 37.7192C12.1197 35.9062 10.0048 33.3293 8.75599 30.3143C7.50714 27.2993 7.18039 23.9817 7.81704 20.781C8.4537 17.5803 10.0252 14.6403 12.3327 12.3327C14.6403 10.0252 17.5803 8.4537 20.781 7.81704C23.9817 7.18039 27.2993 7.50714 30.3143 8.75599C33.3293 10.0048 35.9062 12.1197 37.7192 14.8331C39.5323 17.5465 40.5 20.7366 40.5 24C40.495 28.3745 38.7551 32.5685 35.6618 35.6618C32.5685 38.7551 28.3745 40.495 24 40.5ZM19.5 20.25C19.5 20.695 19.368 21.13 19.1208 21.5C18.8736 21.87 18.5222 22.1584 18.111 22.3287C17.6999 22.499 17.2475 22.5436 16.811 22.4568C16.3746 22.37 15.9737 22.1557 15.659 21.841C15.3443 21.5263 15.1301 21.1254 15.0432 20.689C14.9564 20.2525 15.001 19.8001 15.1713 19.389C15.3416 18.9778 15.63 18.6264 16 18.3792C16.37 18.132 16.805 18 17.25 18C17.8467 18 18.419 18.2371 18.841 18.659C19.2629 19.081 19.5 19.6533 19.5 20.25ZM33 20.25C33 20.695 32.868 21.13 32.6208 21.5C32.3736 21.87 32.0222 22.1584 31.611 22.3287C31.1999 22.499 30.7475 22.5436 30.311 22.4568C29.8746 22.37 29.4737 22.1557 29.159 21.841C28.8443 21.5263 28.6301 21.1254 28.5432 20.689C28.4564 20.2525 28.501 19.8001 28.6713 19.389C28.8416 18.9778 29.13 18.6264 29.5 18.3792C29.87 18.132 30.305 18 30.75 18C31.3467 18 31.919 18.2371 32.341 18.659C32.7629 19.081 33 19.6533 33 20.25Z"
              fill="white"
            />
          </svg>
        ) : null
      ) : null}

      {theme !== "dark" ? (
        size === "medium" ? (
          <svg {...mediumProps} aria-label="Carinha risonha">
            <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96452 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7662 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM7.5 10.125C7.5 9.9025 7.56598 9.68499 7.6896 9.49998C7.81322 9.31498 7.98892 9.17078 8.19449 9.08564C8.40005 9.00049 8.62625 8.97821 8.84448 9.02162C9.06271 9.06502 9.26317 9.17217 9.4205 9.3295C9.57783 9.48684 9.68498 9.68729 9.72839 9.90552C9.7718 10.1238 9.74952 10.35 9.66437 10.5555C9.57922 10.7611 9.43503 10.9368 9.25002 11.0604C9.06502 11.184 8.84751 11.25 8.625 11.25C8.32664 11.25 8.04049 11.1315 7.82951 10.9205C7.61853 10.7095 7.5 10.4234 7.5 10.125ZM16.5 10.125C16.5 10.3475 16.434 10.565 16.3104 10.75C16.1868 10.935 16.0111 11.0792 15.8055 11.1644C15.6 11.2495 15.3738 11.2718 15.1555 11.2284C14.9373 11.185 14.7368 11.0778 14.5795 10.9205C14.4222 10.7632 14.315 10.5627 14.2716 10.3445C14.2282 10.1262 14.2505 9.90005 14.3356 9.69448C14.4208 9.48891 14.565 9.31321 14.75 9.1896C14.935 9.06598 15.1525 9 15.375 9C15.6734 9 15.9595 9.11853 16.1705 9.3295C16.3815 9.54048 16.5 9.82663 16.5 10.125ZM16.3997 14.625C15.435 16.2928 13.8309 17.25 12 17.25C10.1691 17.25 8.56594 16.2937 7.60125 14.625C7.54699 14.5396 7.51055 14.4442 7.49413 14.3444C7.47772 14.2446 7.48166 14.1425 7.50573 14.0442C7.52979 13.946 7.57348 13.8536 7.63417 13.7727C7.69485 13.6917 7.77128 13.6239 7.85886 13.5733C7.94643 13.5227 8.04334 13.4903 8.14375 13.4781C8.24417 13.4659 8.34601 13.4742 8.44316 13.5023C8.5403 13.5305 8.63074 13.5781 8.70904 13.6421C8.78734 13.7062 8.85187 13.7854 8.89875 13.875C9.59907 15.0853 10.6997 15.75 12 15.75C13.3003 15.75 14.4009 15.0844 15.1003 13.875C15.1998 13.7027 15.3636 13.5769 15.5558 13.5254C15.7479 13.4739 15.9527 13.5009 16.125 13.6003C16.2973 13.6998 16.4231 13.8636 16.4746 14.0558C16.5261 14.2479 16.4991 14.4527 16.3997 14.625Z" />
          </svg>
        ) : size === "big" ? (
          <svg {...bigProps} aria-label="Carinha risonha">
            <path d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95963 9.92903 7.46027 12.9745 5.98436 16.5377C4.50845 20.1008 4.12228 24.0216 4.8747 27.8043C5.62711 31.5869 7.4843 35.0615 10.2114 37.7886C12.9386 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3564 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7826 10.2174C34.1268 6.56167 29.1701 4.50546 24 4.5ZM24 40.5C20.7366 40.5 17.5465 39.5323 14.8331 37.7192C12.1197 35.9062 10.0048 33.3293 8.756 30.3143C7.50715 27.2993 7.1804 23.9817 7.81705 20.781C8.45371 17.5803 10.0252 14.6403 12.3327 12.3327C14.6403 10.0252 17.5803 8.4537 20.781 7.81704C23.9817 7.18039 27.2993 7.50714 30.3143 8.75599C33.3293 10.0048 35.9062 12.1197 37.7193 14.8331C39.5323 17.5465 40.5 20.7366 40.5 24C40.495 28.3745 38.7551 32.5685 35.6618 35.6618C32.5685 38.7551 28.3746 40.495 24 40.5ZM15 20.25C15 19.805 15.132 19.37 15.3792 19C15.6264 18.63 15.9778 18.3416 16.389 18.1713C16.8001 18.001 17.2525 17.9564 17.689 18.0432C18.1254 18.13 18.5263 18.3443 18.841 18.659C19.1557 18.9737 19.37 19.3746 19.4568 19.811C19.5436 20.2475 19.499 20.6999 19.3287 21.111C19.1584 21.5222 18.8701 21.8736 18.5 22.1208C18.13 22.368 17.695 22.5 17.25 22.5C16.6533 22.5 16.081 22.2629 15.659 21.841C15.2371 21.419 15 20.8467 15 20.25ZM33 20.25C33 20.695 32.868 21.13 32.6208 21.5C32.3736 21.87 32.0222 22.1584 31.611 22.3287C31.1999 22.499 30.7475 22.5436 30.3111 22.4568C29.8746 22.37 29.4737 22.1557 29.159 21.841C28.8444 21.5263 28.6301 21.1254 28.5432 20.689C28.4564 20.2525 28.501 19.8001 28.6713 19.389C28.8416 18.9778 29.13 18.6264 29.5 18.3792C29.87 18.132 30.305 18 30.75 18C31.3467 18 31.919 18.2371 32.341 18.659C32.763 19.081 33 19.6533 33 20.25ZM32.7994 29.25C30.87 32.5856 27.6619 34.5 24 34.5C20.3381 34.5 17.1319 32.5875 15.2025 29.25C15.094 29.0793 15.0211 28.8884 14.9883 28.6887C14.9554 28.4891 14.9633 28.2849 15.0115 28.0884C15.0596 27.8919 15.147 27.7072 15.2683 27.5453C15.3897 27.3835 15.5426 27.2479 15.7177 27.1466C15.8929 27.0454 16.0867 26.9806 16.2875 26.9562C16.4883 26.9318 16.692 26.9483 16.8863 27.0047C17.0806 27.0611 17.2615 27.1561 17.4181 27.2842C17.5747 27.4123 17.7037 27.5707 17.7975 27.75C19.1981 30.1706 21.3994 31.5 24 31.5C26.6006 31.5 28.8019 30.1687 30.2006 27.75C30.3995 27.4054 30.7272 27.1539 31.1115 27.0509C31.4959 26.9478 31.9054 27.0017 32.25 27.2006C32.5946 27.3995 32.8461 27.7272 32.9491 28.1115C33.0522 28.4959 32.9983 28.9054 32.7994 29.25Z" />
          </svg>
        ) : null
      ) : null}
    </>
  );
};

export default Smiley;
