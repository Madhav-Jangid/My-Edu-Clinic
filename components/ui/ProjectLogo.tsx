import React from 'react';

interface LogoProps {
  stroke?: string; 
}

function ProjectLogo({ stroke = '#000' }: LogoProps) {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.51953 9.69421H17.0923"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.51953 13.4806H17.0923"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8786 1.1748H1.9466C1.42381 1.1748 1 1.59861 1 2.12141V21.0534C1 21.5762 1.42381 22 1.9466 22H20.8786C21.4014 22 21.8252 21.5762 21.8252 21.0534V2.12141C21.8252 1.59861 21.4014 1.1748 20.8786 1.1748Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.73291 1.1748V22"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ProjectLogo;
