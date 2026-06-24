import Link from 'next/link'
import {
  ArrowRight,
  Clock,
  MonitorX,
  Workflow,
  LineChart,
  BrainCircuit,
  Sparkles,
  Target,
  Layers,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'
import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { SectionHeading, SectionLabel } from '@/components/section-heading'
import { HeroVisual } from '@/components/hero-visual'
import { CtaSection } from '@/components/cta-section'
import { services } from '@/lib/services'
import { cases } from '@/lib/cases'
import { faqs } from '@/lib/faqs'
import { FaqList } from '@/components/faq-list'

export const metadata: Metadata = {
  title: 'Slimme IT- en AI-oplossingen voor het MKB',
  description:
    'SummaOps bouwt praktische IT- en AI-oplossingen voor MKB-bedrijven in Limburg en heel Nederland. Meer tijd, minder handmatig werk.',
}

const problems = [
  {
    icon: Clock,
    title: 'Te veel handmatig werk',
    text: 'Overtypen, kopiëren en herhalende taken slokken kostbare uren op die je liever besteedt aan groei.',
  },
  {
    icon: MonitorX,
    title: 'Verouderde website',
    text: 'Een trage of gedateerde site die bezoekers niet omzet in klanten en je merk geen recht doet.',
  },
  {
    icon: Workflow,
    title: 'Onduidelijke processen',
    text: 'Werkwijzen die in hoofden en losse bestanden zitten, waardoor er fouten en vertraging ontstaan.',
  },
  {
    icon: LineChart,
    title: 'Weinig inzicht in data',
    text: 'Je cijfers staan verspreid over systemen en spreadsheets, dus beslissingen voelen als gokken.',
  },
  {
    icon: BrainCircuit,
    title: 'Geen AI-kennis in huis',
    text: 'Je weet dat er kansen liggen met AI, maar niet waar je moet beginnen of wat écht werkt.',
  },
]

const reasons = [
  {
    icon: Sparkles,
    title: 'Praktische oplossingen zonder technische ruis',
    text: 'Geen ingewikkeld jargon. We leveren werkende oplossingen en leggen alles begrijpelijk uit.',
  },
  {
    icon: Clock,
    title: 'Focus op tijdwinst en resultaat',
    text: 'Elke oplossing draait om één doel: meer tijd en minder handmatig werk voor jouw team.',
  },
  {
    icon: Target,
    title: 'Maatwerk voor jouw bedrijf',
    text: 'We bouwen rond jouw processen en doelen, niet andersom. Geen standaardpakket dat half past.',
  },
  {
    icon: Layers,
    title: 'Moderne uitstraling en slimme systemen',
    text: 'Een professionele, eigentijdse uitstraling gecombineerd met techniek die meegroeit.',
  },
  {
    icon: MessageSquare,
    title: 'Duidelijke communicatie',
    text: 'Korte lijnen, heldere afspraken en een aanspreekpunt dat met je meedenkt.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Kennismaking',
    text: 'We leren je bedrijf kennen en bespreken waar de grootste kansen en frustraties liggen.',
  },
  {
    n: '02',
    title: 'Analyse van processen',
    text: 'We brengen je huidige werkwijze in kaart en zoeken naar de plekken met de meeste tijdwinst.',
  },
  {
    n: '03',
    title: 'Voorstel',
    text: 'Je krijgt een helder voorstel met een concrete aanpak, zonder verrassingen of vakjargon.',
  },
  {
    n: '04',
    title: 'Ontwikkeling',
    text: 'We bouwen de oplossing in korte stappen en houden je onderweg betrokken en op de hoogte.',
  },
  {
    n: '05',
    title: 'Lancering & optimalisatie',
    text: 'Na de lancering blijven we meekijken, bijsturen en verbeteren zodat het resultaat blijft groeien.',
  },
]

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(50%_50%_at_50%_0%,oklch(0.72_0.16_215/0.16),transparent_70%)]"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <SectionLabel>AI- &amp; IT-partner voor het MKB</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">
                Slimme IT- en AI-oplossingen die je{' '}
                <span className="text-gradient">bedrijf laten doorgroeien</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Meer tijd, minder handmatig werk. SummaOps bouwt praktische
                digitale oplossingen die processen versnellen, overzicht geven en
                je bedrijf klaarmaken voor de toekomst.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_28px_-4px_var(--color-primary)]"
                >
                  Contact opnemen
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/diensten"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-muted"
                >
                  Bekijk diensten
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {['Tijdwinst per week', 'Werkt met je huidige systemen', 'Begrijpelijk uitgelegd'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-primary" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              label="Herkenbaar?"
              title="De dagelijkse rem op groei in het MKB"
              description="Veel ondernemers lopen tegen dezelfde dingen aan. Misschien herken je er een paar."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40 hover:bg-card">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <Link
                href="/diensten"
                className="group flex h-full flex-col justify-between rounded-2xl border border-primary/30 bg-primary/10 p-6 transition-colors hover:bg-primary/15"
              >
                <p className="text-lg font-semibold text-pretty">
                  Klinkt bekend? Wij lossen het op.
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Ontdek hoe
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <SectionHeading
                  align="left"
                  label="De oplossing"
                  title="Digitale oplossingen die écht tijd opleveren"
                  description="SummaOps bouwt praktische systemen die handmatig werk wegnemen, je processen versnellen en je overzicht geven. Geen hype, maar techniek die je dagelijkse werk lichter maakt en groei ondersteunt."
                />
                <div className="mt-8 flex flex-col gap-4">
                  {[
                    'We versnellen processen die nu te veel tijd kosten',
                    'We geven je realtime overzicht in plaats van losse bestanden',
                    'We bouwen mee aan een schaalbare basis voor groei',
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-pretty text-muted-foreground">
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Minder handmatig werk', value: 'Tijdwinst' },
                  { label: 'Meer overzicht', value: 'Realtime data' },
                  { label: 'Snellere processen', value: 'Automatisch' },
                  { label: 'Klaar voor groei', value: 'Schaalbaar' },
                ].map((b, i) => (
                  <div
                    key={b.label}
                    className={`rounded-2xl border border-border bg-card/60 p-6 ${
                      i % 2 === 1 ? 'sm:mt-8' : ''
                    }`}
                  >
                    <p className="text-sm text-muted-foreground">{b.value}</p>
                    <p className="mt-2 text-lg font-semibold text-balance">
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              label="Diensten"
              title="Alles wat je nodig hebt om slimmer te werken"
              description="Van een nieuwe website tot volledige automatisering en AI-agenten — afgestemd op jouw bedrijf."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70}>
                <Link
                  href="/diensten"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Meer weten
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.62_0.18_280/0.08),transparent_70%)]"
        />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              label="Waarom SummaOps"
              title="Een partner die meedenkt, niet alleen bouwt"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 70}>
                <div className="h-full rounded-2xl border border-border bg-card/50 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <r.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-balance">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASES PREVIEW */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              label="Cases"
              title="Resultaten uit de praktijk"
              description="Een paar voorbeelden van hoe we MKB-bedrijven slimmer hebben laten werken."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                    {c.label}
                  </span>
                  <div className="mt-5 space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground">Probleem</p>
                      <p className="mt-1 leading-relaxed text-muted-foreground">
                        {c.problem}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Oplossing</p>
                      <p className="mt-1 leading-relaxed text-muted-foreground">
                        {c.solution}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Resultaat</p>
                      <p className="mt-1 leading-relaxed text-muted-foreground">
                        {c.result}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 text-center">
              <Link
                href="/cases"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Bekijk alle cases
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              label="Werkwijze"
              title="Van eerste gesprek tot werkende oplossing"
              description="Een duidelijk proces in vijf stappen, waarbij je altijd weet waar je aan toe bent."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <div className="relative h-full rounded-2xl border border-border bg-card/50 p-6">
                  <span className="text-sm font-semibold text-primary">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                align="left"
                label="FAQ"
                title="Veelgestelde vragen"
                description="Geen antwoord op je vraag? Neem gerust contact op, we denken graag mee."
              />
              <Link
                href="/faq"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Alle vragen bekijken
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <FaqList items={faqs.slice(0, 5)} />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
