interface IconProps {
  className?: string;
  size?: number;
}

export function IconCaravan({ className, size = 24 }: IconProps) {
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
      {/* Верблюд / караван */}
      <path d="M3 17c0-1 1-2 2-2h2c1 0 2 .5 2 1.5S8 18 7 18H5c-1 0-2-.5-2-1z" />
      <path d="M9 8c0-1 1-2 2-2s2 1 2 2v2c0 1 1 2 2 2h1c1 0 2 .5 2 1.5s-1 1.5-2 1.5h-2c-2 0-3-1-3-2" />
      <circle cx="5" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </svg>
  );
}