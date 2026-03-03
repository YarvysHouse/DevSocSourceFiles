'use client';

import styles from './site-header.module.css';

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2"  x2="12" y2="5"  />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2"  y1="12" x2="5"  y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="5.64"  y1="5.64"  x2="7.05"  y2="7.05"  />
      <line x1="16.95" y1="16.95" x2="18.36" y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="16.95" y2="7.05"  />
      <line x1="7.05"  y1="16.95" x2="5.64"  y2="18.36" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

interface SiteHeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  darkMode: boolean;
  onToggleDark: () => void;
  lang: 'en' | 'af';
  onToggleLang: () => void;
}

export default function SiteHeader({ sidebarOpen, onToggleSidebar, darkMode, onToggleDark, lang, onToggleLang }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* Sidebar toggle */}
        <button
          className={styles.sidebarToggle}
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          title={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          <span className={`${styles.hamburger} ${sidebarOpen ? styles.hamburgerOpen : ''}`}>
            <span /><span /><span />
          </span>
        </button>

        {/* SU logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.svg"
          alt="Stellenbosch University"
          className={styles.suLogo}
        />

        {/* Divider */}
        <div className={styles.divider} />

        {/* Department name */}
        <div className={styles.deptBlock}>
          <span className={styles.deptName}>
            Computer Science<br />
            Rekenaarwetenskap
          </span>
        </div>

        {/* Controls — right side */}
        <div className={styles.controls}>
          {/* Theme */}
          <div className={styles.themeToggle}>
            <button
              className={`${styles.themeBtn} ${!darkMode ? styles.themeBtnActive : ''}`}
              onClick={() => { if (darkMode) onToggleDark(); }}
              title="Light mode"
              aria-label="Light mode"
            >
              <SunIcon />
            </button>
            <button
              className={`${styles.themeBtn} ${darkMode ? styles.themeBtnActive : ''}`}
              onClick={() => { if (!darkMode) onToggleDark(); }}
              title="Dark mode"
              aria-label="Dark mode"
            >
              <MoonIcon />
            </button>
          </div>

          {/* Language */}
          <div className={styles.langToggle}>
            <span className={`${styles.langLabel} ${lang === 'en' ? styles.langLabelActive : ''}`}>
              {lang === 'af' ? 'Engels' : 'English'}
            </span>
            <button
              className={`${styles.langSwitch} ${lang === 'af' ? styles.langSwitchAf : ''}`}
              onClick={onToggleLang}
              aria-label="Toggle language"
            />
            <span className={`${styles.langLabel} ${lang === 'af' ? styles.langLabelActive : ''}`}>
              Afrikaans
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}
