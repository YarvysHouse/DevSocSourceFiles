import styles from './person-card.module.css';

export interface Person {
  name: string;
  title?: string;
  photo?: string;
  office?: string;
  website?: string;
  telephone?: string;
  email?: string;
  interests?: string;
}

export default function PersonCard({ person }: { person: Person }) {
  return (
    <div className={styles.card}>
      {/* Header: photo + name/title */}
      <div className={styles.cardHeader}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={person.photo || '/images/placeholder.svg'}
          alt={person.name}
          className={styles.photo}
          width={70}
          height={70}
        />
        <div className={styles.headerInfo}>
          <span className={styles.name}>{person.name}</span>
          {person.title && <span className={styles.title}>{person.title}</span>}
        </div>
      </div>

      {/* Contact section */}
      <div className={styles.sectionLabel}>Contact</div>
      <hr className={styles.divider} />
      <p className={styles.detail}>
        {person.office && <>Office: {person.office}<br /></>}
        {person.website && <><a href={person.website}>Website</a><br /></>}
        {person.email && <><a href={`mailto:${person.email}`}>{person.email}</a><br /></>}
        {person.telephone && <>Telephone: <strong>{person.telephone}</strong></>}
      </p>

      {/* Research Interests */}
      {person.interests && (
        <>
          <div className={styles.sectionLabel} style={{ marginTop: '10px' }}>Research Interests</div>
          <hr className={styles.divider} />
          <p className={styles.detail}>{person.interests}</p>
        </>
      )}
    </div>
  );
}