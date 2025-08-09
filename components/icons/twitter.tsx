import { IconProps } from "./types";

const Twitter = ({ fill = "#D3E97A", width = 32, height = 32 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0402 4.66669H28.3133L18.9799 14.2874L30 27.3334H21.3414L14.5944 19.4252L6.83534 27.3334H2.56225L12.5703 17.0578L2 4.66669H10.8835L17.012 11.92L24.0402 4.66669ZM22.5221 25.0163H24.8835L9.59036 6.83261H7.00402L22.5221 25.0163Z"
        fill={fill}
      />
    </svg>
  );
};

export default Twitter;
