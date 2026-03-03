'use client';

import Link from 'next/link';
import NewsCarousel from '@/components/news-carousel/news-carousel';
import type { NewsItem } from '@/components/news-carousel/news-carousel';

const featureItems: NewsItem[] = [
  {
    date: '14 January 2018',
    title: 'Everyone should code',
    excerpt: 'Learn about a new "superpower" that isn\'t being taught in in 90% of US schools. Starring Bill Gates, Mark Zuckerberg, will.i.am, and many others.',
    href: '/features/2018/01/14/everyone-should-code.html',
    image: '/assets/features/everyone-should-code.jpg',
    color: '#45645d',
    emoji: '💻',
  },
  {
    date: '20 February 2019',
    title: 'The best jobs of 2024',
    excerpt: 'Once again, Computer Science features strongly among the top entries on the list.',
    href: '/features/2019/02/20/best-jobs.html',
    image: '/assets/features/jobs.png',
    color: '#9f0059',
    emoji: '💼',
  },
  {
    date: '14 January 2018',
    title: 'Looking for a great career?',
    excerpt: 'Come and study Computer Science! Our degrees are packed with exciting courses. Click below to find out more about First Year, Honours, Masters, Doctoral studies.',
    href: '/features/2018/01/14/great-career.html',
    image: '/assets/features/career.jpg',
    color: '#ba5537',
    emoji: '🎓',
  },
  {
    date: '16 March 2018',
    title: 'What is Computer Science?',
    excerpt: 'The field of computer science summarised.',
    href: '/features/2018/03/16/what-is-computer-science.html',
    image: '/assets/features/SzJ46YA_RaA.jpg',
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

      {/* Quick links */}
      {/* <div style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        margin: '20px 0',
      }}> */}
        {/* <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--cs-text-muted)', alignSelf: 'center' }}>
          Quick links:
        </span>
        <a href="/teaching/first-years/" style={{
          fontSize: '0.8rem', padding: '5px 14px', borderRadius: '16px',
          border: '1px solid var(--cs-accent)', color: 'var(--cs-primary)', fontWeight: 500,
        }}>Prospective students</a>
        <a href="http://www.sun.ac.za/english/Documents/Yearbooks/Current/Science.pdf" style={{
          fontSize: '0.8rem', padding: '5px 14px', borderRadius: '16px',
          border: '1px solid var(--cs-accent)', color: 'var(--cs-primary)', fontWeight: 500,
        }}>Science Yearbook</a>
        <a href="http://www.cs.sun.ac.za/courses/cs778/" style={{
          fontSize: '0.8rem', padding: '5px 14px', borderRadius: '16px',
          border: '1px solid var(--cs-accent)', color: 'var(--cs-primary)', fontWeight: 500,
        }}>RW797</a>
        <a href="https://scholar.google.com/citations?hl=en&view_op=search_authors&mauthors=computer+science+division+stellenbosch+university&btnG=" style={{
          fontSize: '0.8rem', padding: '5px 14px', borderRadius: '16px',
          border: '1px solid var(--cs-accent)', color: 'var(--cs-primary)', fontWeight: 500,
        }}>CS@Google.Scholar</a>
      </div> */}

      {/* News carousel */}
      <NewsCarousel heading="Latest News & Features" items={featureItems} />

      {/* Upcoming events carousel */}
      <NewsCarousel heading="Upcoming Events" items={upcomingEvents} />
    </div>
  );
}