import styles from './site-header.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* Left: full SU horizontal logo (mark + wordmark) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.svg"
          alt="Stellenbosch University"
          className={styles.suLogo}
        />

        {/* Divider */}
        <div className={styles.divider} />

        {/* Right: department name */}
        <div className={styles.deptBlock}>
          <span className={styles.deptName}>
            Computer Science<br />
            Rekenaarwetenskap
          </span>
        </div>
      </div>
    </header>
  );
}
