'use client';

import Link from 'next/link';
import NewsCarousel from '@/components/news-carousel/news-carousel';
import type { NewsItem } from '@/components/news-carousel/news-carousel';
import EventTimeline from '@/components/event-timeline/event-timeline';

const featureItems: NewsItem[] = [
  {
    date: '14 January 2018',
    title: 'Everyone should code',
    excerpt: 'Learn about a new "superpower" that isn\'t being taught in in 90% of US schools. Starring Bill Gates, Mark Zuckerberg, will.i.am, and many others.',
    href: '/features/everyone-should-code',
    image: '/images/everyone-should-code.jpg',
    color: '#45645d',
    emoji: '💻',
  },
  {
    date: '20 February 2019',
    title: 'The best jobs of 2024',
    excerpt: 'Once again, Computer Science features strongly among the top entries on the list.',
    href: '/features/best-jobs',
    image: '/images/jobs.png',
    color: '#9f0059',
    emoji: '💼',
  },
  {
    date: '14 January 2018',
    title: 'Looking for a great career?',
    excerpt: 'Come and study Computer Science! Our degrees are packed with exciting courses. Click below to find out more about First Year, Honours, Masters, Doctoral studies.',
    href: '/features/great-career',
    image: '/images/Looking-For-A-Job.jpg',
    color: '#ba5537',
    emoji: '🎓',
  },
  {
    date: '16 March 2018',
    title: 'What is Computer Science?',
    excerpt: 'The field of computer science summarised.',
    href: '/features/what-is-computer-science',
    image: '/images/CompSci.jpg',
    color: '#9b449b',
    emoji: '🔬',
  },
];

const upcomingEvents: NewsItem[] = [
  {
    date: '2 February 2026, 10:00',
    title: 'Honours Orientation',
    excerpt: 'Room K303, Knowledge Centre, Engineering. All 2026 Honours students should attend.',
    href: '/teaching/honours/',
    emoji: '📋',
    color: '#e8e4e0',
  },
  {
    date: '6 February 2026',
    title: 'Deadline: Honours Project Choices',
    excerpt: 'Submit your project preferences before this date.',
    href: '/teaching/honours/',
    emoji: '📝',
    color: '#e8e4e0',
  },
  {
    date: '9 February 2026',
    title: 'First Semester Lectures Start',
    excerpt: 'All first-semester postgraduate and undergraduate lectures begin.',
    href: '/teaching/PG/',
    emoji: '🏫',
    color: '#e8e4e0',
  },
];

export default function HomePage() {
  return (
    <div>
      <h1 style={{ marginBottom: '8px' }}>Welcome</h1>
      <p>
        The Department of Computer Science was founded in 1972. We have now
        merged with Mathematics and Applied Mathematics to form the Computer
        Science Division in the Department of Mathematical Sciences.
      </p>
      <p>
        We currently have 11 full members of academic staff whose research
        activities span a range of subject areas, including Automata Theory,
        Broadband and Mobile Networks, Software Engineering, Program Testing
        and Verification, Robotics, Natural Language Processing, and Machine
        Learning.
      </p>

      {/* News carousel */}
      <NewsCarousel heading="Latest News & Features" items={featureItems} />

      {/* Upcoming events carousel */}
      <EventTimeline heading="Upcoming Events" items={upcomingEvents} />
    </div>
  );
}
