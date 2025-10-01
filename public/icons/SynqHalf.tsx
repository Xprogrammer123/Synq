import React from "react";

type SynqHalfTypes = {
    size: number,
    color: string
}

const SynqHalf = ({ size, color } : SynqHalfTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 202 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M148.148 0C177.37 0.000163715 201.059 23.6888 201.059 52.9102V85.7139H146.032V52.9102H55.0264V93.1221H78.3066V82.54L98.4131 104.762H51.8516C23.4384 104.762 0.362642 81.9082 0.00390625 53.5801L0 52.9102L0.00390625 52.2266C0.369854 23.3201 23.9169 0 52.9102 0H148.148Z"
        fill={color}
      />
    </svg>
  );
};

export default SynqHalf;
