import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PageHero } from '@/components/page-hero'
import { FaqList } from '@/components/faq-list'
import { faqs } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'Veelgestelde vragen',
  description:
    'Antwoorden op veelgestelde vragen over de IT- en AI-oplossingen van SummaOps voor MKB-bedrijven: aanpak, maatwerk, samenwerking en regio.',
}

export default function FaqPage() {
  return (
    <main>
      <PageHero
        label="FAQ"
        title={
          <>
            Veelgestelde <span className="text-gradient">vragen</span>
          </>
        }
        description="Alles wat je wilt weten over werken met SummaOps. Staat je vraag er niet bij? Neem gerust contact op."
      />

      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <Reveal className="mx-auto max-w-3xl">
          <FaqList items={faqs} />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-lg font-semibold">Nog een andere vraag?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                We denken graag met je mee, geheel vrijblijvend.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_24px_-4px_var(--color-primary)]"
            >
              Contact opnemen
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
