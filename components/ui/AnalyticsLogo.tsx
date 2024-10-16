import React from 'react';

interface LogoProps {
    stroke?: string;  
}

function AnalyticsLogo({ stroke = '#000000' }: LogoProps) {  
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M23.7184 20.3637H1V1.43164"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.8786 4.27145L12.3592 12.7909L8.57282 9.00446L1 16.5773"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.8785 9.00446V4.27145H16.1455"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default AnalyticsLogo;
