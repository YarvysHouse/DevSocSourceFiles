'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './accordion.module.css';

let globalCellCounter = 0;

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = true }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [cellNum] = useState(() => ++globalCellCounter);
  const [lineCount, setLineCount] = useState(5);
  const contentRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    if (!contentRef.current) return;
    const lineH = 14 * 1.7;
    const h = contentRef.current.scrollHeight;
    setLineCount(Math.max(1, Math.ceil(h / lineH)));
  }, []);

  useEffect(() => {
    if (!isOpen || !contentRef.current) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(contentRef.current);
    const t = setTimeout(measure, 300);
    return () => { ro.disconnect(); clearTimeout(t); };
  }, [isOpen, measure, children]);

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.cellNumber}>[{cellNum}]:</span>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>▶</span>
        <span className={styles.cellTitle}>{title}</span>
      </button>

      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        <div className={styles.panelInner}>
          <div className={styles.gutter}>
            {Array.from({ length: lineCount }, (_, i) => (
              <span key={i} className={styles.lineNumber}>{i + 1}</span>
            ))}
          </div>
          <div className={styles.cellContent} ref={contentRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}