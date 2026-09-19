"use client";

import React from "react";

const CurveDivider = () => {
  return (
    <div className="w-full overflow-hidden leading-none z-10 relative -my-1 pointer-events-none">
      <svg
        className="relative block w-full h-[40px] sm:h-[70px]"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z"
          fill="rgba(3, 0, 20, 2.5)"  /* Mengikuti tone Slate-900 / Dark background */
        />
      </svg>
    </div>
  );
};

export default CurveDivider;