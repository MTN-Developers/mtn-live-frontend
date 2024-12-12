import React from "react";

const Play = ({ color }: { color?: string }) => {
  return (
    <svg
      width="72"
      height="73"
      viewBox="0 0 72 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="72" height="72" rx="36" fill="white" />
      <path
        d="M44.3889 35.8601L30.8911 27.6111C30.7774 27.5417 30.6473 27.5037 30.514 27.5012C30.3808 27.4987 30.2493 27.5318 30.1331 27.5969C30.0169 27.6621 29.9202 27.7571 29.8528 27.8721C29.7855 27.987 29.75 28.1179 29.75 28.2511V44.749C29.75 44.8822 29.7855 45.013 29.8528 45.128C29.9202 45.243 30.0169 45.3379 30.1331 45.4031C30.2493 45.4683 30.3808 45.5013 30.514 45.4988C30.6473 45.4963 30.7774 45.4584 30.8911 45.3889L44.3889 37.14C44.4985 37.073 44.5891 36.979 44.652 36.8669C44.7148 36.7548 44.7478 36.6285 44.7478 36.5C44.7478 36.3716 44.7148 36.2452 44.652 36.1332C44.5891 36.0211 44.4985 35.9271 44.3889 35.8601Z"
        fill={color || "#0d63d9"}
      />
    </svg>
  );
};

export default Play;
