'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './sidebar.module.css';

interface MenuItem {
  label: string;
  labelAf?: string;
  href?: string;
  ext?: string;
  children?: { label: string; labelAf?: string; href: string; ext?: string }[];
}

// Pages that have an Afrikaans (/af/) equivalent
const afPages = new Set([
  '/', '/contact/', '/research/', '/people/',
  '/teaching/UG/', '/teaching/PG/', '/teaching/honours/',
  '/teaching/masters/', '/teaching/phd/', '/teaching/programmes/',
  '/teaching/prospectiveUG/', '/teaching/prospectivePG/',
]);

function localHref(href: string, lang: 'en' | 'af'): string {
  if (lang !== 'af' || href.startsWith('http') || !afPages.has(href)) return href;
  return '/af' + href;
}

const menuItems: MenuItem[] = [
  { label: 'index', labelAf: 'tuis', href: '/', ext: 'tsx' },
  {
    label: 'undergraduate', labelAf: 'voorgraads',
    children: [
      { label: 'modules', href: '/teaching/UG/', ext: 'tsx' },
      { label: 'programmes', labelAf: 'programme', href: '/teaching/programmes/', ext: 'tsx' },
      { label: 'prospective', labelAf: 'voornemend', href: '/teaching/prospectiveUG/', ext: 'tsx' },
    ],
  },
  {
    label: 'postgraduate', labelAf: 'nagraads',
    children: [
      { label: 'modules', href: '/teaching/PG/', ext: 'tsx' },
      { label: 'prospective', labelAf: 'voornemend', href: '/teaching/prospectivePG/', ext: 'tsx' },
      { label: 'honours', labelAf: 'honneurs', href: '/teaching/honours/', ext: 'tsx' },
      { label: 'masters', labelAf: 'meesters', href: '/teaching/masters/', ext: 'tsx' },
      { label: 'phd', href: '/teaching/phd/', ext: 'tsx' },
    ],
  },
  {
    label: 'research', labelAf: 'navorsing',
    children: [
      { label: 'overview', labelAf: 'oorsig', href: '/research/', ext: 'tsx' },
      { label: 'publications', labelAf: 'publikasies', href: '/research/publications/', ext: 'tsx' },
      { label: 'groups', labelAf: 'groepe', href: '/research/groups/', ext: 'tsx' },
    ],
  },
  { label: 'people', labelAf: 'mense', href: '/people/', ext: 'tsx' },
  {
    label: 'links', labelAf: 'skakels',
    children: [
      { label: 'stellenbosch-uni', href: 'http://www.sun.ac.za/', ext: 'url' },
      { label: 'science-faculty', labelAf: 'wetenskap-fak', href: 'http://science.sun.ac.za/', ext: 'url' },
      { label: 'math-sciences', labelAf: 'wisk-wetenskappe', href: 'http://mathsci.sun.ac.za/', ext: 'url' },
      { label: 'applied-cs', labelAf: 'toegepaste-rw', href: 'http://www.cs.sun.ac.za/iacs/', ext: 'url' },
      { label: 'telkom-coe', href: 'http://www.cs.sun.ac.za/~aek1/', ext: 'url' },
    ],
  },
  { label: 'events', labelAf: 'gebeure', href: '/events/', ext: 'tsx' },
  { label: 'resources', labelAf: 'hulpbronne', href: '/student-resources/', ext: 'md' },
  { label: 'contact', labelAf: 'kontak', href: '/contact/', ext: 'tsx' },
];

function getFileIcon(ext?: string) {
  switch (ext) {
    case 'tsx': return <span style={{ color: '#519aba' }}>⟨⟩</span>;
    case 'md':  return <span style={{ color: '#6997d5' }}>M↓</span>;
    case 'url': return <span style={{ color: '#8b949e' }}>🔗</span>;
    default:    return <span style={{ color: '#8b949e' }}>📄</span>;
  }
}

/** Strips trailing slash for comparison (preserves root '/') */
function norm(p: string) { return p === '/' ? '/' : p.replace(/\/$/, ''); }
function isActive(pathname: string, href: string) { return norm(pathname) === norm(href); }

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const lang: 'en' | 'af' = pathname.startsWith('/af') ? 'af' : 'en';

  // Auto-open any folder that contains the current page
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const item of menuItems) {
      if (item.children?.some(child => isActive(pathname, localHref(child.href, lang)))) {
        initial[item.label] = true;
      }
    }
    return initial;
  });

  function toggleMenu(label: string) {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  function getLabel(item: { label: string; labelAf?: string }) {
    return lang === 'af' && item.labelAf ? item.labelAf : item.label;
  }

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
      {/* Activity bar */}
      <div className={styles.activityBar}>
        <button className={`${styles.activityIcon} ${styles.activityIconActive}`} title="Explorer" aria-label="Explorer">
          📁
        </button>
      </div>

      {/* Explorer panel */}
      <div className={styles.explorer}>
        <div className={styles.panelHeader}>{lang === 'af' ? 'Verkenner' : 'Explorer'}</div>

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
                  <button
                    className={styles.treeItem}
                    onClick={() => toggleMenu(item.label)}
                  >
                    <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>▸</span>
                    <span className={`${styles.icon} ${isOpen ? styles.folderIconOpen : styles.folderIcon}`}>
                      {isOpen ? '📂' : '📁'}
                    </span>
                    <span className={styles.label}>{getLabel(item)}</span>
                  </button>
                  <div className={`${styles.submenu} ${isOpen ? styles.submenuOpen : ''}`}>
                    {item.children.map((child) => {
                      const href = localHref(child.href, lang);
                      return (
                        <Link
                          key={child.href}
                          href={href}
                          className={`${styles.treeItem} ${isActive(pathname, href) ? styles.treeItemActive : ''}`}
                          onClick={onClose}
                        >
                          <span className={styles.indent} />
                          <span className={styles.chevron} style={{ visibility: 'hidden' }}>▸</span>
                          <span className={`${styles.icon} ${styles.fileIcon}`}>
                            {getFileIcon(child.ext)}
                          </span>
                          <span className={styles.label}>{getLabel(child)}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const href = localHref(item.href!, lang);
            return (
              <Link
                key={item.href}
                href={href}
                className={`${styles.treeItem} ${isActive(pathname, href) ? styles.treeItemActive : ''}`}
                onClick={onClose}
              >
                <span className={styles.chevron} style={{ visibility: 'hidden' }}>▸</span>
                <span className={`${styles.icon} ${styles.fileIcon}`}>
                  {getFileIcon(item.ext)}
                </span>
                <span className={styles.label}>{getLabel(item)}</span>
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
