'use client';

import NewsCarousel from '@/components/news-carousel/news-carousel';
import type { NewsItem } from '@/components/news-carousel/news-carousel';
import EventTimeline from '@/components/event-timeline/event-timeline';

const featureItems: NewsItem[] = [
  {
    date: '14 Januarie 2018',
    title: 'Almal moet kodeer',
    excerpt: "Vind meer uit oor 'n nuwe \"super-vaardigheid\" wat 90% van skole in die Verenigte State nie eens aanbied nie. Met Bill Gates, Mark Zuckerberg, will.i.am, en vele meer.",
    href: '/af/features/everyone-should-code',
    image: '/images/everyone-should-code.jpg',
    color: '#45645d',
    emoji: '💻',
  },
  {
    date: '20 Februarie 2019',
    title: 'Die beste beroepe in 2024',
    excerpt: 'Rekenaarwetenskap is weereens sterk teenwoordig in die lys van top beroepe.',
    href: '/af/features/best-jobs',
    image: '/images/jobs.png',
    color: '#9f0059',
    emoji: '💼',
  },
  {
    date: '14 Januarie 2018',
    title: "Op soek na 'n wonderlike beroep?",
    excerpt: "Kom studeer Rekenaarwetenskap! Ons grade is propvol opwindende kursusse. Kliek hieronder om meer uit te vind oor voorgraadse en nagraadse (Honneurs, Meesters en Doktorale) studies.",
    href: '/af/features/great-career',
    image: '/images/Looking-For-A-Job.jpg',
    color: '#ba5537',
    emoji: '🎓',
  },
  {
    date: '16 Maart 2018',
    title: 'Wat is Rekenaarwetenskap?',
    excerpt: "'n Opsomming van Rekenaarwetenskap.",
    href: '/af/features/what-is-computer-science',
    image: '/images/CompSci.jpg',
    color: '#9b449b',
    emoji: '🔬',
  },
];

const upcomingEvents: NewsItem[] = [
  {
    date: '2 Februarie 2026, 10:00',
    title: 'Honneurs Oriëntering',
    excerpt: 'Saal K303, Kennissentrum, Ingenieurswese. Alle 2026 Honneursstudente moet bywoon.',
    href: '/af/teaching/honours/',
    emoji: '📋',
    color: '#e8e4e0',
  },
  {
    date: '6 Februarie 2026',
    title: 'Sperdatum: Honneursprojekkeurings',
    excerpt: 'Dien u projekvoorkeure in voor hierdie datum.',
    href: '/af/teaching/honours/',
    emoji: '📝',
    color: '#e8e4e0',
  },
  {
    date: '9 Februarie 2026',
    title: 'Eerste Semester Lesings Begin',
    excerpt: 'Alle eerste-semester nagraadse en voorgraadse lesings begin.',
    href: '/af/teaching/PG/',
    emoji: '🏫',
    color: '#e8e4e0',
  },
];

export default function TuisPage() {
  return (
    <div>
      <h1 style={{ marginBottom: '8px' }}>Welkom</h1>
      <p>
        Departement Rekenaarwetenskap het in 1972 tot stand gekom. Ons het nou
        met Wiskunde en Toegepaste Wiskunde saamgesmelt en vorm Afdeling
        Rekenaarwetenskap in die Departement van Wiskundige Wetenskappe.
      </p>
      <p>
        Rekenaarwetenskap het tans 11 voltydse akademiese personeellede wat werk
        aan navorsing oor &apos;n wye veld, insluitende Outomaatteorie, Wyeband- en
        Mobiele Netwerke, Sagtewareingenieurswese, Program Toetsing en
        Verifikasie, Robotika, Natuurlike Taal Verwerking en Masjienleer.
      </p>

      <NewsCarousel heading="Nuus &amp; Artikels" items={featureItems} />
      <EventTimeline heading="Komende Gebeure" items={upcomingEvents} />
    </div>
  );
}
