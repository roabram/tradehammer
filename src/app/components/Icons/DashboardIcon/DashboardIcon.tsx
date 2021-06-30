import React from 'react';
import styles from './dashboardIcon.module.css';

function DashboardIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#FFFFFF"
        d="M39.17 81.81h-4.3V16.21a2.5 2.5 0 1 0-5 0v65.6H25.35a2.5 2.5 0 0 0-2.5 2.5V98.13a2.5 2.5 0 0 0 2.5 2.5h4.52v11.16a2.5 2.5 0 0 0 5 0V100.63h4.3a2.5 2.5 0 0 0 2.5-2.5V84.31A2.5 2.5 0 0 0 39.17 81.81zm-2.5 13.82H27.85V86.81h8.82zM71.15 60.36H66.58V16.21a2.5 2.5 0 1 0-5 0V60.36H57.33a2.5 2.5 0 0 0-2.5 2.5V76.68a2.5 2.5 0 0 0 2.5 2.5h4.25v32.61a2.5 2.5 0 0 0 5 0V79.18h4.57a2.5 2.5 0 0 0 2.5-2.5V62.86A2.5 2.5 0 0 0 71.15 60.36zm-2.5 13.82H59.83V65.36h8.82zM102.65 26.61H98.29V16.21a2.5 2.5 0 1 0-5 0v10.4H88.83a2.5 2.5 0 0 0-2.5 2.5V42.93a2.5 2.5 0 0 0 2.5 2.5h4.46v66.36a2.5 2.5 0 0 0 5 0V45.43h4.36a2.5 2.5 0 0 0 2.5-2.5V29.11A2.5 2.5 0 0 0 102.65 26.61zm-2.5 13.82H91.33V31.61h8.82z"
      />
    </svg>
  );
}

export default DashboardIcon;
