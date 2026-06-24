import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact opnemen',
  description:
    'Neem contact op met SummaOps voor slimme IT- en AI-oplossingen voor je MKB-bedrijf. Vrijblijvend kennismaken in Limburg en heel Nederland.',
}

const details = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'hello@summaops.nl',
    href: 'mailto:hello@summaops.nl',
  },
  {
    icon: Phone,
    label: 'Telefoon',
    value: '+31 (0)6 00 00 00 00',
    href: 'tel:+31000000000',
  },
  { icon: MapPin, label: 'Regio', value: 'Limburg, Nederland' },
  { icon: Clock, label: 'Reactietijd', value: 'Binnen 1 werkdag' },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Contact"
        title={
          <>
            Laten we kijken hoe jij{' '}
            <span className="text-gradient">slimmer kunt werken</span>
          </>
        }
        description="Vertel ons waar je tegenaan loopt. In een vrijblijvend gesprek brengen we samen de kansen voor jouw bedrijf in kaart."
      />

      <section className="px-5 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="flex flex-col gap-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-start gap-3.5 rounded-2xl border border-border bg-card/50 p-5"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <d.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="font-medium transition-colors hover:text-primary"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-medium">{d.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p className="font-semibold">Wat je kunt verwachten</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {[
                    'Een vrijblijvend en persoonlijk gesprek',
                    'Heldere uitleg zonder technisch jargon',
                    'Concreet advies over jouw kansen',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
