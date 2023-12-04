interface PlayProps {
  color?: string;
  size: "small" | "medium" | "big" | "huge" | "veryHuge";
}

const Play = ({ color, size }: PlayProps) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: color ? color : "var(--dark-gray-color)",
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

  const hugeProps = {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    ...commonProps,
  };

  const veryHugeProps = {
    width: "72",
    height: "72",
    viewBox: "0 0 72 72",
    ...commonProps,
  };

  return (
    <>
      {size === "small" ? (
        <svg {...smallProps} aria-label="Televisão com play no centro">
          <path d="M13 2.5H3C2.60218 2.5 2.22064 2.65804 1.93934 2.93934C1.65804 3.22064 1.5 3.60218 1.5 4V11C1.5 11.3978 1.65804 11.7794 1.93934 12.0607C2.22064 12.342 2.60218 12.5 3 12.5H13C13.3978 12.5 13.7794 12.342 14.0607 12.0607C14.342 11.7794 14.5 11.3978 14.5 11V4C14.5 3.60218 14.342 3.22064 14.0607 2.93934C13.7794 2.65804 13.3978 2.5 13 2.5ZM13.5 11C13.5 11.1326 13.4473 11.2598 13.3536 11.3536C13.2598 11.4473 13.1326 11.5 13 11.5H3C2.86739 11.5 2.74021 11.4473 2.64645 11.3536C2.55268 11.2598 2.5 11.1326 2.5 11V4C2.5 3.86739 2.55268 3.74021 2.64645 3.64645C2.74021 3.55268 2.86739 3.5 3 3.5H13C13.1326 3.5 13.2598 3.55268 13.3536 3.64645C13.4473 3.74021 13.5 3.86739 13.5 4V11ZM10.5 14C10.5 14.1326 10.4473 14.2598 10.3536 14.3536C10.2598 14.4473 10.1326 14.5 10 14.5H6C5.86739 14.5 5.74021 14.4473 5.64645 14.3536C5.55268 14.2598 5.5 14.1326 5.5 14C5.5 13.8674 5.55268 13.7402 5.64645 13.6464C5.74021 13.5527 5.86739 13.5 6 13.5H10C10.1326 13.5 10.2598 13.5527 10.3536 13.6464C10.4473 13.7402 10.5 13.8674 10.5 14ZM10.2775 7.08375L7.2775 5.08375C7.20218 5.0335 7.11463 5.00464 7.0242 5.00026C6.93376 4.99588 6.84383 5.01614 6.76401 5.05887C6.68418 5.10161 6.61746 5.16521 6.57097 5.24291C6.52447 5.3206 6.49994 5.40946 6.5 5.5V9.5C6.49994 9.59054 6.52447 9.6794 6.57097 9.75709C6.61746 9.83479 6.68418 9.89839 6.76401 9.94113C6.84383 9.98386 6.93376 10.0041 7.0242 9.99974C7.11463 9.99536 7.20218 9.9665 7.2775 9.91625L10.2775 7.91625C10.3461 7.87061 10.4023 7.80873 10.4412 7.73611C10.4801 7.66349 10.5005 7.58238 10.5005 7.5C10.5005 7.41762 10.4801 7.33651 10.4412 7.26389C10.4023 7.19127 10.3461 7.12939 10.2775 7.08375ZM7.5 8.56563V6.4375L9.09875 7.5L7.5 8.56563Z" />
        </svg>
      ) : size === "medium" ? (
        <svg {...mediumProps} aria-label="Televisão com play no centro">
          <path d="M19.5 3.75H4.5C3.90326 3.75 3.33097 3.98705 2.90901 4.40901C2.48705 4.83097 2.25 5.40326 2.25 6V16.5C2.25 17.0967 2.48705 17.669 2.90901 18.091C3.33097 18.5129 3.90326 18.75 4.5 18.75H19.5C20.0967 18.75 20.669 18.5129 21.091 18.091C21.5129 17.669 21.75 17.0967 21.75 16.5V6C21.75 5.40326 21.5129 4.83097 21.091 4.40901C20.669 3.98705 20.0967 3.75 19.5 3.75ZM20.25 16.5C20.25 16.6989 20.171 16.8897 20.0303 17.0303C19.8897 17.171 19.6989 17.25 19.5 17.25H4.5C4.30109 17.25 4.11032 17.171 3.96967 17.0303C3.82902 16.8897 3.75 16.6989 3.75 16.5V6C3.75 5.80109 3.82902 5.61032 3.96967 5.46967C4.11032 5.32902 4.30109 5.25 4.5 5.25H19.5C19.6989 5.25 19.8897 5.32902 20.0303 5.46967C20.171 5.61032 20.25 5.80109 20.25 6V16.5ZM15.75 21C15.75 21.1989 15.671 21.3897 15.5303 21.5303C15.3897 21.671 15.1989 21.75 15 21.75H9C8.80109 21.75 8.61032 21.671 8.46967 21.5303C8.32902 21.3897 8.25 21.1989 8.25 21C8.25 20.8011 8.32902 20.6103 8.46967 20.4697C8.61032 20.329 8.80109 20.25 9 20.25H15C15.1989 20.25 15.3897 20.329 15.5303 20.4697C15.671 20.6103 15.75 20.8011 15.75 21ZM15.4163 10.6256L10.9163 7.62562C10.8033 7.55025 10.6719 7.50696 10.5363 7.50039C10.4006 7.49382 10.2657 7.52421 10.146 7.58831C10.0263 7.65241 9.9262 7.74782 9.85645 7.86436C9.7867 7.9809 9.74991 8.11419 9.75 8.25V14.25C9.74991 14.3858 9.7867 14.5191 9.85645 14.6356C9.9262 14.7522 10.0263 14.8476 10.146 14.9117C10.2657 14.9758 10.4006 15.0062 10.5363 14.9996C10.6719 14.993 10.8033 14.9498 10.9163 14.8744L15.4163 11.8744C15.5191 11.8059 15.6035 11.7131 15.6618 11.6042C15.7202 11.4952 15.7507 11.3736 15.7507 11.25C15.7507 11.1264 15.7202 11.0048 15.6618 10.8958C15.6035 10.7869 15.5191 10.6941 15.4163 10.6256ZM11.25 12.8484V9.65625L13.6481 11.25L11.25 12.8484Z" />
        </svg>
      ) : size === "big" ? (
        <svg {...bigProps} aria-label="Televisão com play no centro">
          <path d="M26 5H6C5.20435 5 4.44129 5.31607 3.87868 5.87868C3.31607 6.44129 3 7.20435 3 8V22C3 22.7956 3.31607 23.5587 3.87868 24.1213C4.44129 24.6839 5.20435 25 6 25H26C26.7956 25 27.5587 24.6839 28.1213 24.1213C28.6839 23.5587 29 22.7956 29 22V8C29 7.20435 28.6839 6.44129 28.1213 5.87868C27.5587 5.31607 26.7956 5 26 5ZM27 22C27 22.2652 26.8946 22.5196 26.7071 22.7071C26.5196 22.8946 26.2652 23 26 23H6C5.73478 23 5.48043 22.8946 5.29289 22.7071C5.10536 22.5196 5 22.2652 5 22V8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7H26C26.2652 7 26.5196 7.10536 26.7071 7.29289C26.8946 7.48043 27 7.73478 27 8V22ZM21 28C21 28.2652 20.8946 28.5196 20.7071 28.7071C20.5196 28.8946 20.2652 29 20 29H12C11.7348 29 11.4804 28.8946 11.2929 28.7071C11.1054 28.5196 11 28.2652 11 28C11 27.7348 11.1054 27.4804 11.2929 27.2929C11.4804 27.1054 11.7348 27 12 27H20C20.2652 27 20.5196 27.1054 20.7071 27.2929C20.8946 27.4804 21 27.7348 21 28ZM20.555 14.1675L14.555 10.1675C14.4044 10.067 14.2293 10.0093 14.0484 10.0005C13.8675 9.99176 13.6877 10.0323 13.528 10.1177C13.3684 10.2032 13.2349 10.3304 13.1419 10.4858C13.0489 10.6412 12.9999 10.8189 13 11V19C12.9999 19.1811 13.0489 19.3588 13.1419 19.5142C13.2349 19.6696 13.3684 19.7968 13.528 19.8823C13.6877 19.9677 13.8675 20.0082 14.0484 19.9995C14.2293 19.9907 14.4044 19.933 14.555 19.8325L20.555 15.8325C20.6922 15.7412 20.8047 15.6175 20.8825 15.4722C20.9603 15.327 21.001 15.1648 21.001 15C21.001 14.8352 20.9603 14.673 20.8825 14.5278C20.8047 14.3825 20.6922 14.2588 20.555 14.1675ZM15 17.1313V12.875L18.1975 15L15 17.1313Z" />
        </svg>
      ) : size === "huge" ? (
        <svg {...hugeProps} aria-label="Televisão com play no centro">
          <path d="M39 7.5H9C7.80653 7.5 6.66193 7.97411 5.81802 8.81802C4.97411 9.66193 4.5 10.8065 4.5 12V33C4.5 34.1935 4.97411 35.3381 5.81802 36.182C6.66193 37.0259 7.80653 37.5 9 37.5H39C40.1935 37.5 41.3381 37.0259 42.182 36.182C43.0259 35.3381 43.5 34.1935 43.5 33V12C43.5 10.8065 43.0259 9.66193 42.182 8.81802C41.3381 7.97411 40.1935 7.5 39 7.5ZM40.5 33C40.5 33.3978 40.342 33.7794 40.0607 34.0607C39.7794 34.342 39.3978 34.5 39 34.5H9C8.60218 34.5 8.22064 34.342 7.93934 34.0607C7.65804 33.7794 7.5 33.3978 7.5 33V12C7.5 11.6022 7.65804 11.2206 7.93934 10.9393C8.22064 10.658 8.60218 10.5 9 10.5H39C39.3978 10.5 39.7794 10.658 40.0607 10.9393C40.342 11.2206 40.5 11.6022 40.5 12V33ZM31.5 42C31.5 42.3978 31.342 42.7794 31.0607 43.0607C30.7794 43.342 30.3978 43.5 30 43.5H18C17.6022 43.5 17.2206 43.342 16.9393 43.0607C16.658 42.7794 16.5 42.3978 16.5 42C16.5 41.6022 16.658 41.2206 16.9393 40.9393C17.2206 40.658 17.6022 40.5 18 40.5H30C30.3978 40.5 30.7794 40.658 31.0607 40.9393C31.342 41.2206 31.5 41.6022 31.5 42ZM30.8325 21.2512L21.8325 15.2512C21.6065 15.1005 21.3439 15.0139 21.0726 15.0008C20.8013 14.9876 20.5315 15.0484 20.292 15.1766C20.0526 15.3048 19.8524 15.4956 19.7129 15.7287C19.5734 15.9618 19.4998 16.2284 19.5 16.5V28.5C19.4998 28.7716 19.5734 29.0382 19.7129 29.2713C19.8524 29.5044 20.0526 29.6952 20.292 29.8234C20.5315 29.9516 20.8013 30.0124 21.0726 29.9992C21.3439 29.9861 21.6065 29.8995 21.8325 29.7488L30.8325 23.7488C31.0383 23.6118 31.207 23.4262 31.3237 23.2083C31.4404 22.9905 31.5015 22.7471 31.5015 22.5C31.5015 22.2529 31.4404 22.0095 31.3237 21.7917C31.207 21.5738 31.0383 21.3882 30.8325 21.2512ZM22.5 25.6969V19.3125L27.2962 22.5L22.5 25.6969Z" />
        </svg>
      ) : size === "veryHuge" ? (
        <svg {...veryHugeProps} aria-label="Televisão com play no centro">
          <path d="M58.5 11.25H13.5C11.7098 11.25 9.9929 11.9612 8.72703 13.227C7.46116 14.4929 6.75 16.2098 6.75 18V49.5C6.75 51.2902 7.46116 53.0071 8.72703 54.273C9.9929 55.5388 11.7098 56.25 13.5 56.25H58.5C60.2902 56.25 62.0071 55.5388 63.273 54.273C64.5388 53.0071 65.25 51.2902 65.25 49.5V18C65.25 16.2098 64.5388 14.4929 63.273 13.227C62.0071 11.9612 60.2902 11.25 58.5 11.25ZM60.75 49.5C60.75 50.0967 60.5129 50.669 60.091 51.091C59.669 51.5129 59.0967 51.75 58.5 51.75H13.5C12.9033 51.75 12.331 51.5129 11.909 51.091C11.4871 50.669 11.25 50.0967 11.25 49.5V18C11.25 17.4033 11.4871 16.831 11.909 16.409C12.331 15.9871 12.9033 15.75 13.5 15.75H58.5C59.0967 15.75 59.669 15.9871 60.091 16.409C60.5129 16.831 60.75 17.4033 60.75 18V49.5ZM47.25 63C47.25 63.5967 47.0129 64.169 46.591 64.591C46.169 65.0129 45.5967 65.25 45 65.25H27C26.4033 65.25 25.831 65.0129 25.409 64.591C24.9871 64.169 24.75 63.5967 24.75 63C24.75 62.4033 24.9871 61.831 25.409 61.409C25.831 60.9871 26.4033 60.75 27 60.75H45C45.5967 60.75 46.169 60.9871 46.591 61.409C47.0129 61.831 47.25 62.4033 47.25 63ZM46.2487 31.8769L32.7488 22.8769C32.4098 22.6507 32.0158 22.5209 31.6089 22.5012C31.2019 22.4815 30.7972 22.5726 30.438 22.7649C30.0788 22.9572 29.7786 23.2435 29.5693 23.5931C29.3601 23.9427 29.2497 24.3426 29.25 24.75V42.75C29.2497 43.1574 29.3601 43.5573 29.5693 43.9069C29.7786 44.2565 30.0788 44.5428 30.438 44.7351C30.7972 44.9274 31.2019 45.0185 31.6089 44.9988C32.0158 44.9791 32.4098 44.8493 32.7488 44.6231L46.2487 35.6231C46.5574 35.4177 46.8105 35.1393 46.9855 34.8125C47.1606 34.4857 47.2522 34.1207 47.2522 33.75C47.2522 33.3793 47.1606 33.0143 46.9855 32.6875C46.8105 32.3607 46.5574 32.0823 46.2487 31.8769ZM33.75 38.5453V28.9688L40.9444 33.75L33.75 38.5453Z" />
        </svg>
      ) : null}
    </>
  );
};

export default Play;
