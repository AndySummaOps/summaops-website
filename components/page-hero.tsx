import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

export function PageHero({
  label,
  title,
  description,
}: {
  label: string
  title: React.ReactNode
  description?: React.ReactNode
}) {
  return (
    <section className="relative px-5 pt-32 pb-12 sm:px-8 sm:pt-40 sm:pb-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(50%_50%_at_50%_0%,oklch(0.72_0.16_215/0.14),transparent_70%)]"
      />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel>{label}</SectionLabel>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
