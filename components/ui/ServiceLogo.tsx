import React from 'react';

interface LogoProps {
  stroke?: string;  
}

function ServiceLogo({ stroke = '#000' }: LogoProps) {
  return (
    <svg width="23" height="23" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.62581 16.3333C11.7429 16.3333 13.4591 14.6171 13.4591 12.5C13.4591 10.3829 11.7429 8.66663 9.62581 8.66663C7.50872 8.66663 5.79248 10.3829 5.79248 12.5C5.79248 14.6171 7.50872 16.3333 9.62581 16.3333Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.56234 20.1667C4.10603 19.0188 4.9644 18.0489 6.03764 17.3697C7.11089 16.6905 8.35489 16.3299 9.625 16.3299C10.8951 16.3299 12.1391 16.6905 13.2124 17.3697C14.2856 18.0489 15.144 19.0188 15.6877 20.1667H23.0417C23.2958 20.1667 23.5396 20.0657 23.7193 19.886C23.899 19.7063 24 19.4625 24 19.2083V1.95833C24 1.70417 23.899 1.46041 23.7193 1.28069C23.5396 1.10097 23.2958 1 23.0417 1H1.95833C1.70417 1 1.46041 1.10097 1.28069 1.28069C1.10097 1.46041 1 1.70417 1 1.95833V19.2083C1 19.4625 1.10097 19.7063 1.28069 19.886C1.46041 20.0657 1.70417 20.1667 1.95833 20.1667H3.56234Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2492 16.3331H20.1659V4.83313H4.83252V6.7498"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ServiceLogo;
