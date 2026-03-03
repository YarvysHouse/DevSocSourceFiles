export interface EventItem {
  date: string;
  title: string;
  excerpt: string;
  href?: string;
  emoji?: string;
}

export const upcomingEvents: EventItem[] = [
  {
    date: '2 Feb at 10:00',
    title: 'Honours Orientation',
    excerpt: 'Room K303, Knowledge Centre, Engineering. All 2026 Honours students should attend.',
    href: '/teaching/honours/',
    emoji: '📋',
  },
  {
    date: '6 Feb',
    title: 'Deadline: Project Choices',
    excerpt: 'Submit your Honours project preferences before this date.',
    href: '/teaching/honours/',
    emoji: '📝',
  },
  {
    date: '9 Feb',
    title: 'First Semester Lectures Start',
    excerpt: 'All first-semester postgraduate and undergraduate lectures begin.',
    href: '/teaching/PG/',
    emoji: '🏫',
  },
];
