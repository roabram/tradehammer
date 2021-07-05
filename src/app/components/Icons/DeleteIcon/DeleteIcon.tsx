import React from 'react';
import styles from './DeleteIcon.module.css';

function DeleteIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      {...props}
      width="30"
      height="30"
    >
      <line
        x1="6"
        x2="25"
        y1="8"
        y2="8"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M23 9V23a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V9M13 8V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V8"
      />
      <line
        x1="13"
        x2="13"
        y1="13"
        y2="20"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <line
        x1="18"
        x2="18"
        y1="13"
        y2="20"
        fill="none"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
}

export default DeleteIcon;
