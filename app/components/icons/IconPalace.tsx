interface IconProps {
  className?: string;
  size?: number;
}

export function IconPalace({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Корона / дворец */}
      <path d="M3 20h18M4 20V10l4 4 4-8 4 8 4-4v10" />
      <circle cx="12" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}