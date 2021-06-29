import React from 'react';

function PlusIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.5"
      height="4.75"
      viewBox="0 0 26.5 4.75"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#b4a8a8" />
          <stop offset="0.394" stop-color="#222d21" />
          <stop offset="1" stop-color="#555d54" />
        </linearGradient>
      </defs>
      <path
        d="M24.607,14.625H1.893A1.759,1.759,0,0,0,0,16.208v1.583a1.759,1.759,0,0,0,1.893,1.583H24.607A1.759,1.759,0,0,0,26.5,17.792V16.208A1.759,1.759,0,0,0,24.607,14.625Z"
        transform="translate(0 -14.625)"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
}

export default PlusIcon;
