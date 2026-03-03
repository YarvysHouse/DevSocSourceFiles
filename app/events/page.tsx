import { upcomingEvents } from './events-data';
import EventTimeline from '@/components/event-timeline/event-timeline';

export const metadata = { title: 'Events & Seminars – Stellenbosch CS/RW' };

export default function Events() {
  return (
    <div>
      <h1>Events & Seminars</h1>
      <p>Upcoming events, seminars, and departmental announcements.</p>

      <EventTimeline heading="Upcoming Events" items={upcomingEvents} />
    </div>
  );
}
