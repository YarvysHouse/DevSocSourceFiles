'use client';

import { useState } from 'react';
import PersonCard from '@/components/person-card/person-card';
import DataTable from '@/components/data-table/data-table';
import { alumniFaculty, doctoralGraduates, mastersGraduates } from '@/app/people/alumni-data';
import { academicStaff, administrativeStaff, doctoralStudents, mastersStudents } from '@/app/people/staff-data';
import styles from '@/app/people/people.module.css';

export const metadata = { title: 'Mense – Stellenbosch RW/CS' };

const graduateColumns = [
  { key: 'name', label: 'Naam' },
  {
    key: 'title',
    label: 'Tesis',
    render: (val: string, row: Record<string, string>) =>
      row.href ? <a href={row.href}>{val}</a> : val,
  },
  { key: 'year', label: 'Jaar' },
];

type TabKey = 'staff' | 'students' | 'alumni';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'staff', label: 'Personeel' },
  { key: 'students', label: 'Studente' },
  { key: 'alumni', label: 'Alumni' },
];

export default function MensePage() {
  const [activeTab, setActiveTab] = useState<TabKey>('staff');

  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Mense</h1>

      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Personeel tab */}
      {activeTab === 'staff' && (
        <>
          <h2 className={styles.sectionHeading}>Akademiese Personeel</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.grid}>
            {academicStaff.map((person, i) => (
              <PersonCard key={`academic-${i}`} person={person} />
            ))}
          </div>

          <h2 className={styles.sectionHeading}>Administratiewe Personeel</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.grid}>
            {administrativeStaff.map((person, i) => (
              <PersonCard key={`admin-${i}`} person={person} />
            ))}
          </div>
        </>
      )}

      {/* Studente tab */}
      {activeTab === 'students' && (
        <>
          <h2 className={styles.sectionHeading}>Doktorale Studente</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.grid}>
            {doctoralStudents.map((person, i) => (
              <PersonCard key={`phd-${i}`} person={person} />
            ))}
          </div>

          <h2 className={styles.sectionHeading}>Meestersstudente</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.grid}>
            {mastersStudents.map((person, i) => (
              <PersonCard key={`msc-${i}`} person={person} />
            ))}
          </div>
        </>
      )}

      {/* Alumni tab */}
      {activeTab === 'alumni' && (
        <>
          <h2 className={styles.sectionHeading}>Alumni Dosente</h2>
          <hr className={styles.sectionDivider} />
          <div style={{ columnCount: 2, columnGap: '24px', fontSize: '0.82rem', color: 'var(--cs-text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
            {alumniFaculty.map((name, i) => (
              <div key={i}>{name}</div>
            ))}
          </div>

          <h2 className={styles.sectionHeading}>Doktorale Gegradueerdes</h2>
          <hr className={styles.sectionDivider} />
          <DataTable columns={graduateColumns} data={doctoralGraduates} />

          <h2 className={styles.sectionHeading}>Meestersgegradueerdes</h2>
          <hr className={styles.sectionDivider} />
          <DataTable columns={graduateColumns} data={mastersGraduates} />
        </>
      )}
    </div>
  );
}
