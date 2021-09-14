import React from 'react';

export function AnchorAppIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Anchor application logo"
      className={className}
    >
      <rect fill="#5000B9" width="18" height="18" rx="4" />
      <path
        d="M14.62 7.01a1.5 1.5 0 00-.97-.08 1.56 1.56 0 00-1.01.98c-.45 1.14-.06 3.1-.21 3.1s-.63-1.81-1.27-3.7C10.53 5.4 9.98 3.45 9 3.6c-.88.14-.6 2.38-.26 4.48.3 1.9.67 3.68.46 3.68-.36 0-1.57-5.26-2.82-5.06-1.24.2.36 6 .03 6.01-.28 0-.96-3.52-1.96-3.37-.76.13-.09 2.87-.05 3.64 0 .2.06.56-.22.56H3.6v.53h.93a.43.43 0 00.42-.27c.26-.64-.42-3.37-.26-3.39.11-.01.34.82.67 1.75.33.94.66 1.92 1.28 1.92 1.35 0-.02-5.32.24-5.32.14 0 .53 1.08.95 2.27.52 1.45 1.15 3.05 1.9 3.05.9 0 .62-2.07.34-4.06-.24-1.72-.53-3.33-.38-3.33.34 0 1.64 7.4 3.2 7.4.77 0 .78-1.55.78-3.22 0-1.17-.1-2.24.63-2.5a.9.9 0 01.7.1l-.38-1.46"
        fill="#E8F524"
      />
    </svg>
  );
}
