import React from 'react';
import styles from './HomeIcon.module.css';

function HomeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="#FFFFFF"
        d="M58.17,23.38l-25-18a2,2,0,0,0-2.34,0l-25,18A2,2,0,0,0,5,25V57a2,2,0,0,0,2,2H57a2,2,0,0,0,2-2V25A2,2,0,0,0,58.17,23.38ZM37,55H27V37H37Zm18,0H41V35a2,2,0,0,0-2-2H25a2,2,0,0,0-2,2V55H9V26L32,9.46,55,26Z"
      />
    </svg>
  );
}

export default HomeIcon;
