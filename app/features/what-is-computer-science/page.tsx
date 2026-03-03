import Image from 'next/image';
import styles from '../feature.module.css';

export const metadata = {
  title: 'What is Computer Science? – Stellenbosch CS',
};

export default function WhatIsCSPage() {
  return (
    <div className={styles.featurePage}>
      <div className={styles.hero}>
        <Image
          src="/images/CompSci.jpg"
          alt="What is Computer Science?"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <p className={styles.heroDate}>16 March 2018</p>
          <h1 className={styles.heroTitle}>What is Computer Science?</h1>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.videoWrap}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SzJ46YA_RaA"
            title="What is Computer Science?"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <p>
          Watch Dominic Walliman&apos;s short overview of Computer Science. Of course it is
          not complete, but it is an excellent high-level view of what the subject
          encompasses.
        </p>
      </div>
    </div>
  );
}
