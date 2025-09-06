import React from 'react';

// SVG favicon component that can be converted to different formats
export function LoveBeatsFavicon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle for better visibility */}
      <circle cx="16" cy="16" r="16" fill="#E94B61" />
      
      {/* Heart shape optimized for small sizes */}
      <path
        d="M16 26l-1.45-1.32C9.4 20.36 6 17.28 6 13.5 6 10.42 8.42 8 11.5 8c1.74 0 3.41.81 4.5 2.09C17.09 8.81 18.76 8 20.5 8 23.58 8 26 10.42 26 13.5c0 3.78-3.4 6.86-8.55 11.54L16 26z"
        fill="white"
      />
    </svg>
  );
}

// Generate different favicon sizes
export function generateFaviconSVG(size: number = 32): string {
  return `
<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="16" fill="#E94B61" />
  <path d="M16 26l-1.45-1.32C9.4 20.36 6 17.28 6 13.5 6 10.42 8.42 8 11.5 8c1.74 0 3.41.81 4.5 2.09C17.09 8.81 18.76 8 20.5 8 23.58 8 26 10.42 26 13.5c0 3.78-3.4 6.86-8.55 11.54L16 26z" fill="white" />
</svg>`.trim();
}

// Apple touch icon version (rounded square)
export function generateAppleTouchIcon(size: number = 180): string {
  return `
<svg width="${size}" height="${size}" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="40" fill="#E94B61" />
  <path d="M90 146l-8.1-7.38C58.5 118.02 36 100.58 36 76.5 36 58.38 50.38 44 68.5 44c9.72 0 19.08 4.5 25.5 11.7C100.42 48.5 109.78 44 119.5 44 137.62 44 152 58.38 152 76.5c0 21.06-19.08 38.5-42.9 64.12L90 146z" fill="white" />
</svg>`.trim();
}