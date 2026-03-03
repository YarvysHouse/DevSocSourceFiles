'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './sidebar.module.css';

interface MenuItem {
  label: string;
  href?: string;
  ext?: string;
  children?: { label: string; href: string; ext?: string }[];
}

const menuItems: MenuItem[] = [
  { label: 'index', href: '/', ext: 'tsx' },
  {
    label: 'undergraduate',
    children: [
      { label: 'modules', href: '/teaching/UG/', ext: 'tsx' },
      { label: 'programmes', href: '/teaching/programmes/', ext: 'tsx' },
      { label: 'prospective', href: '/teaching/prospectiveUG/', ext: 'tsx' },
    ],
  },
  {
    label: 'postgraduate',
    children: [
      { label: 'modules', href: '/teaching/PG/', ext: 'tsx' },
      { label: 'prospective', href: '/teaching/prospectivePG/', ext: 'tsx' },
      { label: 'honours', href: '/teaching/honours/', ext: 'tsx' },
      { label: 'masters', href: '/teaching/masters/', ext: 'tsx' },
      { label: 'phd', href: '/teaching/phd/', ext: 'tsx' },
    ],
  },
  {
    label: 'research',
    children: [
      { label: 'overview', href: '/research/', ext: 'tsx' },
      { label: 'publications', href: '/research/publications/', ext: 'tsx' },
      { label: 'groups', href: '/research/groups/', ext: 'tsx' },
    ],
  },
  { label: 'people', href: '/people/', ext: 'tsx' },
  {
    label: 'links',
    children: [
      { label: 'stellenbosch-uni', href: 'http://www.sun.ac.za/', ext: 'url' },
      { label: 'science-faculty', href: 'http://science.sun.ac.za/', ext: 'url' },
      { label: 'math-sciences', href: 'http://mathsci.sun.ac.za/', ext: 'url' },
      { label: 'applied-cs', href: 'http://www.cs.sun.ac.za/iacs/', ext: 'url' },
      { label: 'telkom-coe', href: 'http://www.cs.sun.ac.za/~aek1/', ext: 'url' },
    ],
  },
  { label: 'events', href: '/events/', ext: 'tsx' },
  { label: 'resources', href: '/student-resources/', ext: 'md' },
  { label: 'contact', href: '/contact/', ext: 'tsx' },
];

function getFileIcon(ext?: string) {
  switch (ext) {
    case 'tsx': return <span style={{ color: '#519aba' }}>⟨⟩</span>;
    case 'md': return <span style={{ color: '#6997d5' }}>M↓</span>;
    case 'url': return <span style={{ color: '#8b949e' }}>🔗</span>;
    default: return <span style={{ color: '#8b949e' }}>📄</span>;
  }
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onToggleDark: () => void;
  lang: 'en' | 'af';
  onToggleLang: () => void;
}

export default function Sidebar({ isOpen, onClose, darkMode, onToggleDark, lang, onToggleLang }: SidebarProps) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  function toggleMenu(label: string) {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
      {/* Activity bar */}
      <div className={styles.activityBar}>
        <button className={`${styles.activityIcon} ${styles.activityIconActive}`} title="Explorer" aria-label="Explorer">
          📁
        </button>
        <div style={{ flex: 1 }} />
        <button
          className={styles.activityIcon}
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label="Toggle dark mode"
          onClick={onToggleDark}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button
          className={styles.activityIcon}
          title={lang === 'en' ? 'Switch to Afrikaans' : 'Switch to English'}
          aria-label="Toggle language"
          onClick={onToggleLang}
        >
          <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            {lang === 'en' ? 'AF' : 'EN'}
          </span>
        </button>
      </div>

      {/* Explorer panel */}
      <div className={styles.explorer}>
        <div className={styles.panelHeader}>Explorer</div>

        {/* Stellenbosch University logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <div className={styles.logoArea}>
          <img src="/images/Frame 11-2.png" alt="Stellenbosch University" className={styles.logo} />
        </div> */}

        <div className={styles.workspace}>
          <span className={styles.workspaceChevron}>▾</span>
          CS-STELLENBOSCH
        </div>

        <div className={styles.tree}>
          {menuItems.map((item) => {
            if (item.children) {
              const isOpen = openMenus[item.label];
              return (
                <div key={item.label} className={styles.treeFolder}>
                  {/* Folder */}
                  <button
                    className={styles.treeItem}
                    onClick={() => toggleMenu(item.label)}
                  >
                    <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>▸</span>
                    <span className={`${styles.icon} ${isOpen ? styles.folderIconOpen : styles.folderIcon}`}>
                      {isOpen ? '📂' : '📁'}
                    </span>
                    <span className={styles.label}>{item.label}</span>
                  </button>
                  {/* Children */}
                  <div className={`${styles.submenu} ${isOpen ? styles.submenuOpen : ''}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`${styles.treeItem} ${pathname === child.href ? styles.treeItemActive : ''}`}
                        onClick={onClose}
                      >
                        <span className={styles.indent} />
                        <span className={styles.chevron} style={{ visibility: 'hidden' }}>▸</span>
                        <span className={`${styles.icon} ${styles.fileIcon}`}>
                          {getFileIcon(child.ext)}
                        </span>
                        <span className={styles.label}>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`${styles.treeItem} ${pathname === item.href ? styles.treeItemActive : ''}`}
                onClick={onClose}
              >
                <span className={styles.chevron} style={{ visibility: 'hidden' }}>▸</span>
                <span className={`${styles.icon} ${styles.fileIcon}`}>
                  {getFileIcon(item.ext)}
                </span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Status bar */}
        <div className={styles.statusBar}>
          <span><span className={styles.statusDot} />main</span>
          <span>UTF-8</span>
        </div>
      </div>
    </aside>
  );
}