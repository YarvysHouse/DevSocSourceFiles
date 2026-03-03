import Image from 'next/image';
import styles from '../../../features/feature.module.css';

export const metadata = {
  title: 'Wat is Rekenaarwetenskap? – Stellenbosch RW/CS',
};

export default function WatIsRWPage() {
  return (
    <div className={styles.featurePage}>
      <div className={styles.hero}>
        <Image
          src="/images/CompSci.jpg"
          alt="Wat is Rekenaarwetenskap?"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <p className={styles.heroDate}>16 Maart 2018</p>
          <h1 className={styles.heroTitle}>Wat is Rekenaarwetenskap?</h1>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.videoWrap}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SzJ46YA_RaA"
            title="Wat is Rekenaarwetenskap?"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <p>
          Kyk net na Dominic Walliman se kort opsomming van die veld van Rekenaarwetenskap.
          Dit is natuurlik nie 100% volledig nie, maar dit gee &apos;n uitstekende hoë-vlak oorsig
          van wat die onderwerp behels.
        </p>
      </div>
    </div>
  );
}
