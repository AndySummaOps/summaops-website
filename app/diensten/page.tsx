import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Diensten — IT- en AI-oplossingen voor het MKB',
  description:
    'Ontdek de diensten van SummaOps: websites & platformen, AI-chatbots, procesautomatisering, data dashboards, maatwerk software en AI-agenten voor MKB-bedrijven.',
}

export default function DienstenPage() {
  return (
    <main>
      <PageHero
        label="Diensten"
        title={
          <>
            Slimme oplossingen voor{' '}
            <span className="text-gradient">elk MKB-vraagstuk</span>
          </>
        }
        description="Van een nieuwe website tot volledige procesautomatisering en AI-agenten. We bouwen wat jouw bedrijf echt verder helpt — praktisch en begrijpelijk."
      />

      {/* quick nav */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2.5">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <s.icon className="size-4 text-primary" />
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* services */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card/50"
              >
                <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <s.icon className="size-7" />
                    </span>
                    <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl text-balance">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-pretty text-lg text-primary/90">
                      {s.tagline}
                    </p>
                    <Link
                      href="/contact"
                      className="group mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_24px_-4px_var(--color-primary)]"
                    >
                      Contact opnemen
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Wat het is
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {s.what}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Voor wie
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {s.who}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                      <p className="text-sm font-semibold text-primary">
                        Wat het oplevert
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.result}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Voorbeelden van toepassingen
                      </p>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {s.examples.map((ex) => (
                          <li
                            key={ex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
