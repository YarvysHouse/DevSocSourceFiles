'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from '@/components/sidebar/sidebar';
import Footer from '@/components/footer/footer';
import SiteHeader from '@/components/site-header/site-header';
import styles from './layout-shell.module.css';

const afEquivalents = new Set([
  '/', '/contact/', '/research/', '/people/',
  '/teaching/UG/', '/teaching/PG/', '/teaching/honours/',
  '/teaching/masters/', '/teaching/phd/', '/teaching/programmes/',
  '/teaching/prospectiveUG/', '/teaching/prospectivePG/',
]);

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const lang: 'en' | 'af' = pathname.startsWith('/af') ? 'af' : 'en';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  function handleToggleLang() {
    if (lang === 'af') {
      const newPath = pathname.replace(/^\/af/, '') || '/';
      router.push(newPath);
    } else {
      const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
      router.push(afEquivalents.has(normalized) ? '/af' + normalized : '/af/');
    }
  }

  return (
    <>
      {/* Overlay — mobile only via CSS, dismisses sidebar */}
      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className={`${styles.main} ${sidebarOpen ? styles.mainWithSidebar : ''}`}>
        <SiteHeader
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          darkMode={darkMode}
          onToggleDark={() => setDarkMode(!darkMode)}
          lang={lang}
          onToggleLang={handleToggleLang}
        />
        <div style={{ flex: 1 }}>
          <div className="contentColumn">
            {children}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
