import Image from 'next/image';
import Link from 'next/link';
import styles from '../feature.module.css';

export const metadata = {
  title: 'Looking for a Great Career? – Stellenbosch CS',
};

export default function GreatCareerPage() {
  return (
    <div className={styles.featurePage}>
      <div className={styles.hero}>
        <Image
          src="/images/Looking-For-A-Job.jpg"
          alt="Looking for a Great Career?"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <p className={styles.heroDate}>14 January 2018</p>
          <h1 className={styles.heroTitle}>Looking for a great career?</h1>
        </div>
      </div>

      <div className={styles.body}>
        <p>
          Come and study Computer Science at Stellenbosch University! Our degrees are
          packed with exciting courses that prepare you for a wide range of rewarding
          careers in industry, academia, and beyond.
        </p>
        <p>
          We offer programmes at every level, from undergraduate through to doctoral
          studies. Click below to find out more:
        </p>

        <div className={styles.degreeLinks}>
          <Link href="/teaching/prospectiveUG/" className={styles.degreeLink}>
            First Year / Undergraduate
            <span>BSc Computer Science programmes</span>
          </Link>
          <Link href="/teaching/honours/" className={styles.degreeLink}>
            Honours
            <span>One-year postgraduate degree</span>
          </Link>
          <Link href="/teaching/masters/" className={styles.degreeLink}>
            Masters
            <span>Research or coursework masters</span>
          </Link>
          <Link href="/teaching/phd/" className={styles.degreeLink}>
            Doctoral (PhD)
            <span>Original research at the highest level</span>
          </Link>
        </div>

        <p>
          Computer Science graduates are in high demand across every sector. Whether
          you are passionate about artificial intelligence, cybersecurity, game
          development, or software engineering, a degree from Stellenbosch will give
          you the skills to succeed.
        </p>
        <p>
          Not sure where to start? Browse our{' '}
          <Link href="/features/best-jobs">catalogue of 90+ careers</Link> in
          computing and related fields.
        </p>
      </div>
    </div>
  );
}
