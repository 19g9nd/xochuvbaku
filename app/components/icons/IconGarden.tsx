interface IconProps {
  className?: string;
  size?: number;
}

export function IconGarden({ className, size = 24 }: IconProps) {
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
      {/* Лист / сад */}
      <path d="M12 21V12" />
      <path d="M12 12c0-4 3-7 7-7 0 4-3 7-7 7z" />
      <path d="M12 12c0-4-3-7-7-7 0 4 3 7 7 7z" />
    </svg>
  );
}