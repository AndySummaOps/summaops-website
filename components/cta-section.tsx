import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaSection() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="glow-ring relative overflow-hidden rounded-3xl border border-border bg-card/70 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_50%_0%,oklch(0.72_0.16_215/0.18),transparent_70%)]"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-40" />
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Klaar om slimmer te werken?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Laten we kijken waar jouw bedrijf tijd kan winnen. In een vrijblijvend
            gesprek brengen we samen de kansen in kaart.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_28px_-4px_var(--color-primary)]"
            >
              Contact opnemen
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Bekijk diensten
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
