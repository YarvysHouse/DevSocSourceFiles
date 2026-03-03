import Link from 'next/link';
import type { EventItem } from '@/app/events/events-data';
import styles from './event-timeline.module.css';

interface EventTimelineProps {
  heading?: string;
  items: EventItem[];
}

export default function EventTimeline({ heading, items }: EventTimelineProps) {
  return (
    <div className={styles.section}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={styles.outer}>
        <div className={styles.container}>
          <div className={styles.line} />
          {items.map((item, i) => {
            const inner = (
              <>
                <div className={styles.date}>{item.date}</div>
                <div className={styles.dotWrap}>
                  <div className={styles.dot} />
                </div>
                <div className={styles.content}>
                  {item.emoji && <div className={styles.emoji}>{item.emoji}</div>}
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.excerpt}>{item.excerpt}</div>
                </div>
              </>
            );

            return item.href ? (
              <Link key={i} href={item.href} className={styles.item}>
                {inner}
              </Link>
            ) : (
              <div key={i} className={styles.item}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
