import type { Metadata } from 'next'
import {
  Compass,
  MessagesSquare,
  Wrench,
  HeartHandshake,
  CheckCircle2,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Over ons — Slimmer werken met IT en AI',
  description:
    'SummaOps helpt MKB-bedrijven slimmer werken met moderne IT- en AI-oplossingen. Praktisch toepasbaar, begrijpelijk uitgelegd en passend bij de dagelijkse praktijk.',
}

const values = [
  {
    icon: Wrench,
    title: 'Praktisch toepasbaar',
    text: 'We bouwen oplossingen die je morgen al gebruikt — geen experimenten, maar techniek die direct waarde levert in je dagelijkse werk.',
  },
  {
    icon: MessagesSquare,
    title: 'Begrijpelijke communicatie',
    text: 'Geen jargon of vage beloftes. We leggen helder uit wat we doen, waarom, en wat het je oplevert.',
  },
  {
    icon: Compass,
    title: 'Passend bij je praktijk',
    text: 'We verdiepen ons in hoe jouw bedrijf werkt, zodat elke oplossing aansluit op de realiteit van alledag.',
  },
  {
    icon: HeartHandshake,
    title: 'Partner voor de lange termijn',
    text: 'We blijven betrokken na de lancering en groeien graag met je mee, stap voor stap.',
  },
]

export default function OverOnsPage() {
  return (
    <main>
      <PageHero
        label="Over ons"
        title={
          <>
            We maken slim werken{' '}
            <span className="text-gradient">toegankelijk voor het MKB</span>
          </>
        }
        description="SummaOps helpt ondernemers slimmer werken met moderne IT- en AI-oplossingen. Niet de techniek staat centraal, maar wat het jou oplevert: meer tijd en minder handmatig werk."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p className="text-lg text-foreground">
                Veel MKB-bedrijven willen slimmer werken, maar weten niet waar te
                beginnen. De techniek voelt ingewikkeld en de tijd ontbreekt.
                Daar komen wij in beeld.
              </p>
              <p>
                SummaOps vertaalt moderne IT en AI naar concrete oplossingen die
                passen bij de dagelijkse praktijk van ondernemers. We kijken eerst
                naar waar tijd verloren gaat en waar de grootste kansen liggen — en
                bouwen daar gericht een oplossing omheen.
              </p>
              <p>
                Geen overdreven beloftes of technische ruis. Wel praktische
                systemen die werk uit handen nemen, overzicht geven en je bedrijf
                klaarmaken voor de toekomst. Geworteld in Limburg, actief door heel
                Nederland.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: 'Onze focus', v: 'Tijdwinst' },
                { k: 'Onze aanpak', v: 'Maatwerk' },
                { k: 'Onze stijl', v: 'Begrijpelijk' },
                { k: 'Onze regio', v: 'NL & Limburg' },
              ].map((item, i) => (
                <div
                  key={item.k}
                  className={`rounded-2xl border border-border bg-card/60 p-6 ${
                    i % 2 === 1 ? 'sm:mt-8' : ''
                  }`}
                >
                  <p className="text-sm text-muted-foreground">{item.k}</p>
                  <p className="mt-2 text-xl font-semibold text-balance">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              label="Waar we voor staan"
              title="De principes achter elk project"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-2xl border border-border bg-card/50 p-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-border bg-card/50 p-8 sm:p-12">
            <h2 className="text-2xl font-semibold tracking-tight text-balance">
              Voor wie we werken
            </h2>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Lokale bedrijven, dienstverleners, verhuurbedrijven,
              productiebedrijven, winkels en andere ondernemers die slimmer willen
              werken — ongeacht of je net begint met digitaliseren of al een stap
              verder bent.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Dienstverleners',
                'Verhuurbedrijven',
                'Productiebedrijven',
                'Winkels & retail',
                'Lokale ondernemers',
                'Groeiende MKB-bedrijven',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </main>
  )
}
