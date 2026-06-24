export type CaseStudy = {
  slug: string
  label: string
  situation: string
  challenge: string
  solution: string
  result: string
  problem: string
  tags: string[]
}

export const cases: CaseStudy[] = [
  {
    slug: 'verhuurbedrijf',
    label: 'Case: verhuurbedrijf',
    situation:
      'Een regionaal verhuurbedrijf beheerde reserveringen, beschikbaarheid en facturatie grotendeels handmatig via losse bestanden en e-mail.',
    challenge:
      'Dubbele boekingen, onduidelijke beschikbaarheid en veel tijd kwijt aan administratie. Bij drukte liep het systeem vast en ontstonden er fouten.',
    solution:
      'We bouwden een centraal verhuur- en planningssysteem met realtime beschikbaarheid, automatische bevestigingen en facturatie. Reserveringen lopen nu via één overzichtelijke omgeving.',
    result:
      'Minder handmatige administratie, geen dubbele boekingen meer en een team dat in één oogopslag ziet wat er beschikbaar is. Meer rust in de planning, ook tijdens piekmomenten.',
    problem:
      'Reserveringen en facturatie liepen handmatig via losse bestanden, met dubbele boekingen tot gevolg.',
    tags: ['Maatwerk software', 'Procesautomatisering'],
  },
  {
    slug: 'dienstverlener',
    label: 'Case: dienstverlener',
    situation:
      'Een lokale dienstverlener kreeg dagelijks veel dezelfde vragen binnen en verwerkte aanvragen volledig met de hand.',
    challenge:
      'Klanten moesten lang wachten op antwoord en het team verloor veel tijd aan repeterend mailverkeer en het overtypen van aanvraaggegevens.',
    solution:
      'We zetten een slimme assistent op de website die veelgestelde vragen direct beantwoordt en aanvragen automatisch verzamelt en doorzet naar het juiste systeem.',
    result:
      'Snellere reacties richting klanten, minder herhalend werk voor het team en aanvragen die netjes en compleet binnenkomen. Meer ruimte om aan het echte werk te besteden.',
    problem:
      'Veel dezelfde vragen en handmatige aanvraagverwerking zorgden voor trage reacties.',
    tags: ['AI-chatbots', 'Procesautomatisering'],
  },
  {
    slug: 'lokaal-mkb',
    label: 'Case: lokaal MKB-bedrijf',
    situation:
      'Een lokaal MKB-bedrijf had een verouderde website en geen helder zicht op zijn belangrijkste cijfers.',
    challenge:
      'De website leverde nauwelijks aanvragen op en belangrijke data stond verspreid over verschillende systemen en spreadsheets.',
    solution:
      'We bouwden een moderne, snelle website met duidelijke call-to-actions en koppelden een dashboard dat de belangrijkste cijfers automatisch samenbrengt.',
    result:
      'Een professionele uitstraling die meer aanvragen oplevert en een actueel overzicht waarmee de ondernemer sneller en beter onderbouwd beslissingen neemt.',
    problem:
      'Een verouderde website en versnipperde data zorgden voor weinig aanvragen en weinig inzicht.',
    tags: ['Websites', 'Data dashboards'],
  },
]
