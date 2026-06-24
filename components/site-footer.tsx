import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Diensten',
    links: [
      { label: 'Websites & platformen', href: '/diensten' },
      { label: 'AI-chatbots', href: '/diensten' },
      { label: 'Procesautomatisering', href: '/diensten' },
      { label: 'Data dashboards', href: '/diensten' },
      { label: 'Maatwerk software', href: '/diensten' },
      { label: 'AI-agenten', href: '/diensten' },
    ],
  },
  {
    title: 'Bedrijf',
    links: [
      { label: 'Over ons', href: '/over-ons' },
      { label: 'Cases', href: '/cases' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="size-7" />
              <span className="text-lg font-semibold tracking-tight">
                Summa<span className="text-primary">Ops</span>
              </span>
            </Link>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Slimme IT- en AI-oplossingen voor het MKB. Meer tijd, minder
              handmatig werk — voor ondernemers in Limburg en heel Nederland.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" />
                <a
                  href="mailto:hello@summaops.nl"
                  className="transition-colors hover:text-foreground"
                >
                  hello@summaops.nl
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary" />
                <a
                  href="tel:+31000000000"
                  className="transition-colors hover:text-foreground"
                >
                  +31 (0)6 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-primary" />
                Limburg, Nederland
              </li>
            </ul>
            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              Contact opnemen
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SummaOps. Alle rechten voorbehouden.</p>
          <p>Meer tijd, minder handmatig werk.</p>
        </div>
      </div>
    </footer>
  )
}
