'use client';

import { useRef } from 'react';
import styles from './news-carousel.module.css';

export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  href?: string;
  image?: string;
  emoji?: string;
  color?: string;
}

interface NewsCarouselProps {
  heading: string;
  items: NewsItem[];
}

export default function NewsCarousel({ heading, items }: NewsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 'left' | 'right') {
    if (!trackRef.current) return;
    const amount = 280;
    trackRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.wrapper}>
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => scroll('left')} aria-label="Scroll left">
          ‹
        </button>
        <div className={styles.track} ref={trackRef}>
          {items.map((item, i) => (
            <a key={i} href={item.href || '#'} className={styles.card}>
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.image} alt={item.title} className={styles.cardImage} />
              ) : (
                <div className={styles.cardImagePlaceholder} style={{ background: item.color || 'var(--cs-bg)' }}>
                  {item.emoji || '📰'}
                </div>
              )}
              <div className={styles.cardBody}>
                <div className={styles.cardDate}>{item.date}</div>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardExcerpt}>{item.excerpt}</div>
              </div>
            </a>
          ))}
        </div>
        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => scroll('right')} aria-label="Scroll right">
          ›
        </button>
      </div>
    </div>
  );
}