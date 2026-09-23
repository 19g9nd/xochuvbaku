interface IconProps {
  className?: string;
  size?: number;
}

export function IconHealer({ className, size = 24 }: IconProps) {
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
      {/* Цветок / лотос */}
      <path d="M12 20c-3 0-5-2-5-5 0-2 1-3 2-4-1-1-2-3-1-5 1-2 3-3 4-3s3 1 4 3c1 2 0 4-1 5 1 1 2 2 2 4 0 3-2 5-5 5z" />
      <circle cx="12" cy="13" r="2" />
    </svg>
  );
}