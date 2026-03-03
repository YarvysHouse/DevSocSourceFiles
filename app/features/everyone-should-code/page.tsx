import Image from 'next/image';
import styles from '../feature.module.css';

export const metadata = {
  title: 'Everyone Should Code – Stellenbosch CS',
};

export default function EveryoneShouldCodePage() {
  return (
    <div className={styles.featurePage}>
      <div className={styles.hero}>
        <Image
          src="/images/everyone-should-code.jpg"
          alt="Everyone Should Code"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <p className={styles.heroDate}>14 January 2018</p>
          <h1 className={styles.heroTitle}>Everyone should code</h1>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.videoWrap}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dU1xS07N-FA"
            title="Everyone Should Code"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <p>
          This video was produced by <a href="https://code.org/">code.org</a>. They are a
          non-profit based in the United States and dedicated to expanding participation
          in Computer Science education by making it available in more schools, and
          increasing participation by women and underrepresented students of color. Their
          vision is that every student in every school should have the opportunity to
          learn computer programming. They believe that computer science should be part
          of the core curriculum in education, alongside other science, technology,
          engineering, and mathematics (STEM) courses, such as biology, physics,
          chemistry and algebra.
        </p>
      </div>
    </div>
  );
}
