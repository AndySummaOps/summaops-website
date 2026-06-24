import { cn } from '@/lib/utils'

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
      <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
      {children}
    </span>
  )
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className,
}: {
  label?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center'
          ? 'mx-auto max-w-2xl items-center text-center'
          : 'items-start text-left',
        className,
      )}
    >
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
