interface IconProps {
    className?: string;
    size?: number;
}

export function IconHeritage({ className, size = 24 }: IconProps) {
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
            focusable="false"
        >
            <path d="M3 21V5a1 1 0 0 1 1-1h2l1 2h2l1-2h2a1 1 0 0 1 1 1v16" />
            <path d="M13 21V5a1 1 0 0 1 1-1h2l1 2h2l1-2h1v17" />
            <path d="M3 21h18M7 10h4M7 14h4M16 10h4M16 14h4" />
        </svg>
    );
}