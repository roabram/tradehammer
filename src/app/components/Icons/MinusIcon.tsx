import React from 'react';

function MinusIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="75"
      height="79"
      viewBox="0 0 75 79"
      {...props}
    >
      <defs>
        <pattern
          id="pattern"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 190 199"
        >
          <image
            width="190"
            height="199"
            xlinkHref="data:image/png;base64,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"
          />
        </pattern>
      </defs>
      <g>
        <rect width="75" height="79" fill="url(#pattern)" />
      </g>
    </svg>
  );
}

export default MinusIcon;