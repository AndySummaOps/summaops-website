import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://summaops.nl'),
  title: {
    default: 'SummaOps | Slimme IT- en AI-oplossingen voor het MKB',
    template: '%s | SummaOps',
  },
  description:
    'SummaOps bouwt praktische IT- en AI-oplossingen voor MKB-bedrijven in Limburg en heel Nederland. Meer tijd, minder handmatig werk: procesautomatisering, websites, data dashboards, chatbots en maatwerk software.',
  keywords: [
    'AI oplossingen voor MKB',
    'IT oplossingen voor MKB',
    'procesautomatisering MKB',
    'website laten maken MKB',
    'data dashboard MKB',
    'AI automatisering bedrijf',
    'digitale groei MKB',
    'AI bedrijf Limburg',
  ],
  authors: [{ name: 'SummaOps' }],
  creator: 'SummaOps',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'SummaOps',
    title: 'SummaOps | Slimme IT- en AI-oplossingen voor het MKB',
    description:
      'Praktische IT- en AI-oplossingen voor MKB-bedrijven. Meer tijd, minder handmatig werk.',
  },
  robots: { index: true, follow: true },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0b1020',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="nl"
      className={`dark ${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
