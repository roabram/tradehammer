import React from 'react';

function TradeInIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="193"
      height="105"
      viewBox="0 0 193 105"
      {...props}
    >
      <defs>
        <filter
          id="Rechteck_23"
          x="0"
          y="0"
          width="193"
          height="105"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodColor="#010d00" floodOpacity="0.502" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Gruppe_5" data-name="Gruppe 5" transform="translate(9 6)">
        <g id="Komponente_9_4" data-name="Komponente 9 – 4">
          <g id="Call_to_Action" data-name="Call to Action">
            <g id="Call_to_Action_V2" data-name="Call to Action V2">
              <g
                transform="matrix(1, 0, 0, 1, -9, -6)"
                filter="url(#Rechteck_23)"
              >
                <path
                  id="Rechteck_23-2"
                  data-name="Rechteck 23"
                  d="M18,0h96a61,61,0,0,1,61,61v8a18,18,0,0,1-18,18H61A61,61,0,0,1,0,26V18A18,18,0,0,1,18,0Z"
                  transform="translate(9 6)"
                  fill="rgba(159,181,99,0.63)"
                />
              </g>
            </g>
          </g>
        </g>
        <text
          id="trade In"
          transform="translate(51 51)"
          fill="#fff"
          fontSize="25"
          fontFamily="Roboto-Regular, Roboto"
        >
          <tspan x="0" y="0">
            trade In
          </tspan>
        </text>
      </g>
    </svg>
  );
}
export default TradeInIcon;
