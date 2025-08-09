import { IconProps } from "./types";

const ArrowDiagonal = ({
  fill = "#D3E97A",
  width = 15,
  height = 15,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.9897 14.2176L12.3036 3.90369V11.3891L14.3033 11.3891L14.3033 0.489781L3.40391 0.489781L3.40391 2.48948L10.8893 2.48948L0.575487 12.8033L1.9897 14.2176Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowDiagonal;
