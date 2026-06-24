import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg',
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" fill="none" className="size-full">
        <rect
          width="32"
          height="32"
          rx="9"
          fill="url(#summaops-grad)"
        />
        <path
          d="M11 12.5c0-1.4 1.2-2.5 3-2.5h4.2c1.1 0 2 .5 2.5 1.4M21 19.5c0 1.4-1.2 2.5-3 2.5h-4.2c-1.1 0-2-.5-2.5-1.4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="2.1" fill="white" />
        <defs>
          <linearGradient
            id="summaops-grad"
            x1="0"
            y1="0"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3bc6f0" />
            <stop offset="1" stopColor="#7b5be0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  )
}
