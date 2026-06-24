import {
  Globe,
  Bot,
  Workflow,
  BarChart3,
  Code2,
  Cpu,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  tagline: string
  what: string
  who: string
  result: string
  examples: string[]
}

export const services: Service[] = [
  {
    slug: 'websites',
    icon: Globe,
    title: 'Websites & digitale platformen',
    tagline: 'Een moderne online basis die werkt en converteert.',
    what: 'We bouwen snelle, strakke websites en platformen die passen bij jouw merk en je bezoekers omzetten in klanten. Van een overtuigende bedrijfssite tot een klantportaal of online platform.',
    who: 'Voor MKB-bedrijven met een verouderde website, of ondernemers die online serieus genomen willen worden en meer aanvragen willen binnenhalen.',
    result: 'Een professionele uitstraling, betere vindbaarheid en een site die actief meehelpt om leads en aanvragen te genereren.',
    examples: [
      'Bedrijfswebsite met duidelijke call-to-actions',
      'Klantportaal of ledenomgeving',
      'Online platform of marktplaats',
      'Boekings- of aanvraagsysteem',
    ],
  },
  {
    slug: 'ai-chatbots',
    icon: Bot,
    title: 'AI-chatbots & slimme klantinteractie',
    tagline: 'Altijd bereikbaar, ook als jij even geen tijd hebt.',
    what: 'Slimme chatbots en assistenten die veelgestelde vragen beantwoorden, afspraken inplannen en bezoekers begeleiden — getraind op jouw eigen informatie en tone of voice.',
    who: 'Voor bedrijven die veel dezelfde vragen krijgen, snel willen reageren op klanten of buiten kantooruren bereikbaar willen zijn.',
    result: 'Minder herhalend mailverkeer, snellere reacties en klanten die zich direct geholpen voelen.',
    examples: [
      'Klantenservice-assistent op je website',
      'Automatische offerte- en aanvraagintake',
      'Interne helpdesk voor medewerkers',
      'Slimme FAQ die echt antwoord geeft',
    ],
  },
  {
    slug: 'procesautomatisering',
    icon: Workflow,
    title: 'Procesautomatisering',
    tagline: 'Laat terugkerend werk zichzelf doen.',
    what: 'We koppelen je systemen aan elkaar en automatiseren handmatige stappen: van offertes en facturen tot planningen, meldingen en gegevensoverdracht tussen tools.',
    who: 'Voor bedrijven die veel tijd verliezen aan overtypen, kopiëren en handmatige administratie.',
    result: 'Uren tijdwinst per week, minder fouten en processen die ook draaien als het druk is.',
    examples: [
      'Automatisch offertes en facturen genereren',
      'Gegevens synchroniseren tussen systemen',
      'Planning en herinneringen automatiseren',
      'Documenten automatisch verwerken',
    ],
  },
  {
    slug: 'data-dashboards',
    icon: BarChart3,
    title: 'Data dashboards & analyses',
    tagline: 'Overzicht in één oogopslag, beslissingen op feiten.',
    what: 'We brengen je cijfers samen in heldere dashboards. Omzet, voorraad, planning of klantdata — actueel, visueel en begrijpelijk, zonder dat je door spreadsheets hoeft te spitten.',
    who: 'Voor ondernemers die beslissingen willen nemen op basis van data in plaats van onderbuikgevoel.',
    result: 'Direct inzicht in wat er speelt, sneller bijsturen en grip op de groei van je bedrijf.',
    examples: [
      'Realtime omzet- en verkoopdashboard',
      'Voorraad- en planningsoverzicht',
      'Klant- en serviceanalyses',
      'Rapportages die zichzelf bijwerken',
    ],
  },
  {
    slug: 'maatwerk-software',
    icon: Code2,
    title: 'Maatwerk software',
    tagline: 'Een oplossing die past bij hoe jij werkt.',
    what: 'Soms past standaardsoftware gewoon niet. Dan bouwen we een tool op maat die aansluit op jouw processen — gebruiksvriendelijk, schaalbaar en helemaal van jou.',
    who: 'Voor bedrijven met een uniek proces of werkwijze waar bestaande software niet op aansluit.',
    result: 'Software die precies doet wat jij nodig hebt, zonder onnodige ballast of dure abonnementen op tools die je half gebruikt.',
    examples: [
      'Branchespecifieke beheertool',
      'Interne app voor je team',
      'Koppeling tussen losse systemen',
      'Verhuur-, planning- of voorraadsysteem',
    ],
  },
  {
    slug: 'ai-agenten',
    icon: Cpu,
    title: 'AI-agenten',
    tagline: 'Slimme assistenten die zelfstandig taken oppakken.',
    what: 'AI-agenten die meerstaps taken uitvoeren: informatie opzoeken, samenvatten, e-mails voorbereiden of acties uitvoeren in je systemen. Praktisch ingezet, met jou aan het stuur.',
    who: 'Voor bedrijven die repeterend denkwerk willen uitbesteden aan slimme systemen, zonder kennis in huis te hebben.',
    result: 'Meer ruimte voor het werk dat er echt toe doet, terwijl routinetaken op de achtergrond doorlopen.',
    examples: [
      'Automatische verwerking van inkomende mail',
      'Documenten samenvatten en categoriseren',
      'Leads opvolgen en kwalificeren',
      'Interne kennis doorzoekbaar maken',
    ],
  },
]
