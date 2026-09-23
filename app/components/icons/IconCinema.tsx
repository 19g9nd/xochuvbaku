interface IconProps {
  className?: string;
  size?: number;
}

export function IconCinema({ className, size = 24 }: IconProps) {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 4v16M17 4v16" />
      <circle cx="4.5" cy="8" r="0.5" fill="currentColor" />
      <circle cx="4.5" cy="12" r="0.5" fill="currentColor" />
      <circle cx="4.5" cy="16" r="0.5" fill="currentColor" />
      <circle cx="19.5" cy="8" r="0.5" fill="currentColor" />
      <circle cx="19.5" cy="12" r="0.5" fill="currentColor" />
      <circle cx="19.5" cy="16" r="0.5" fill="currentColor" />
    </svg>
  );
}