'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/sidebar/sidebar';
import Footer from '@/components/footer/footer';
import styles from './layout-shell.module.css';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<'en' | 'af'>('en');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      {/* Hamburger toggle */}
      <button
        className={styles.toggle}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle navigation"
      >
        <span className={`${styles.hamburger} ${sidebarOpen ? styles.hamburgerOpen : ''}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
        lang={lang}
        onToggleLang={() => setLang(lang === 'en' ? 'af' : 'en')}
      />

      {/* Main content */}
      <main className={styles.main}>
        <div style={{ flex: 1 }}>
          <div className="contentColumn">
            {children}
          </div>
        </div>
        <Footer />
      </main>

      {/* Floating outline navigator */}
      {/* Removed - page-outline component deleted */}
    </>
  );
}