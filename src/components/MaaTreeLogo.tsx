import React from 'react';

interface MaaTreeLogoProps {
  className?: string;
}

export const MaaTreeLogo: React.FC<MaaTreeLogoProps> = ({ className = 'w-9 h-9 text-emerald-800' }) => {
  return (
    <svg
      viewBox="2 2 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Top & Bottom Endless Knot Loops */}
        <path d="M 42 26 A 11.314 11.314 0 1 1 58 26" />
        <path d="M 58 74 A 11.314 11.314 0 1 1 42 74" />

        {/* 4 Side Lobes */}
        <path d="M 21 37 A 5.657 5.657 0 0 1 29 29" />
        <path d="M 71 29 A 5.657 5.657 0 0 1 79 37" />
        <path d="M 29 71 A 5.657 5.657 0 0 1 21 63" />
        <path d="M 79 63 A 5.657 5.657 0 0 1 71 71" />

        {/* Down-Right Interwoven Strands */}
        <path d="M 42 26 L 45.8 29.8" />
        <path d="M 54.2 38.2 L 61.8 45.8" />
        <path d="M 70.2 54.2 L 79 63" />

        <path d="M 29 29 L 45.8 45.8" />
        <path d="M 54.2 54.2 L 71 71" />

        <path d="M 21 37 L 29.8 45.8" />
        <path d="M 38.2 54.2 L 45.8 61.8" />
        <path d="M 54.2 70.2 L 58 74" />

        {/* Down-Left Interwoven Strands */}
        <path d="M 58 26 L 46.2 37.8" />
        <path d="M 37.8 46.2 L 21 63" />

        <path d="M 71 29 L 62.2 37.8" />
        <path d="M 53.8 46.2 L 46.2 53.8" />
        <path d="M 37.8 62.2 L 29 71" />

        <path d="M 79 37 L 62.2 53.8" />
        <path d="M 53.8 62.2 L 42 74" />
      </g>
    </svg>
  );
};
