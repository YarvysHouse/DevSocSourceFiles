'use client';

import { useRef, useState, useEffect, type ReactNode } from 'react';
import styles from './line-numbers.module.css';

interface LineNumbersProps {
  children: ReactNode;
  startLine?: number;
}

export default function LineNumbers({ children, startLine = 1 }: LineNumbersProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(30);

  useEffect(() => {
    function measure() {
      if (!contentRef.current) return;
      const lineH = parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.7;
      const h = contentRef.current.scrollHeight;
      setCount(Math.max(5, Math.ceil(h / lineH)));
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (contentRef.current) ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, [children]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.gutter} aria-hidden="true">
        {Array.from({ length: count }, (_, i) => (
          <span key={i} className={styles.line}>{startLine + i}</span>
        ))}
      </div>
      <div className={styles.content} ref={contentRef}>
        {children}
      </div>
    </div>
  );
}