import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { cases } from '@/lib/cases'

export const metadata: Metadata = {
  title: 'Cases — Resultaten uit de praktijk',
  description:
    'Anonieme praktijkvoorbeelden van hoe SummaOps MKB-bedrijven slimmer laat werken: van verhuurbedrijf tot dienstverlener en lokaal MKB.',
}

export default function CasesPage() {
  return (
    <main>
      <PageHero
        label="Cases"
        title={
          <>
            Echte resultaten,{' '}
            <span className="text-gradient">echte tijdwinst</span>
          </>
        }
        description="Onze klanten blijven anoniem, maar de resultaten zijn dat niet. Een aantal voorbeelden van hoe slimme oplossingen het dagelijks werk lichter maken."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <article className="overflow-hidden rounded-3xl border border-border bg-card/50">
                <div className="flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-start">
                  <div className="lg:w-64 lg:shrink-0">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3.5 py-1.5 text-sm font-medium text-primary">
                      {c.label}
                    </span>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid flex-1 gap-6 sm:grid-cols-2">
                    {[
                      { label: 'Situatie', text: c.situation },
                      { label: 'Uitdaging', text: c.challenge },
                      { label: 'Oplossing', text: c.solution },
                    ].map((block) => (
                      <div key={block.label}>
                        <p className="text-sm font-semibold text-foreground">
                          {block.label}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {block.text}
                        </p>
                      </div>
                    ))}
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:col-span-1">
                      <p className="text-sm font-semibold text-primary">
                        Resultaat
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {c.result}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Benieuwd wat er voor jouw bedrijf mogelijk is? In een vrijblijvend
            gesprek vertellen we graag meer over vergelijkbare trajecten.
          </p>
        </Reveal>
      </section>

      <CtaSection />
    </main>
  )
}
