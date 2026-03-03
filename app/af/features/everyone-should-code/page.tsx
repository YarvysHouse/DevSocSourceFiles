import Image from 'next/image';
import styles from '../../../features/feature.module.css';

export const metadata = {
  title: 'Almal moet kodeer – Stellenbosch RW/CS',
};

export default function AlmalMoetKodeerPage() {
  return (
    <div className={styles.featurePage}>
      <div className={styles.hero}>
        <Image
          src="/images/everyone-should-code.jpg"
          alt="Almal moet kodeer"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <p className={styles.heroDate}>14 Januarie 2018</p>
          <h1 className={styles.heroTitle}>Almal moet kodeer</h1>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.videoWrap}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dU1xS07N-FA"
            title="Almal moet kodeer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <p>
          Hierdie video (slegs in Engels) is gemaak deur <a href="https://code.org/">code.org</a>.
          Hierdie nie-vir-profyt organisasie is toegewyd om deelname in Rekenaarwetenskap
          opvoeding uit te brei deur dit in meer skole beskikbaar te maak, en ook die
          deelname van vrouens en ander minderheidsgroepe in die disipline te bevorder.
          Hul visie is dat elke student in elke skool die geleentheid moet hê om te leer
          programmeer. Hulle glo dat Rekenaarwetenskap deel moet vorm van die
          kernleerplan saam met ander wetenskap, tegnologie, ingenieurs- en wiskundige
          (die sogenaamde &ldquo;STEM&rdquo;) kursusse, soos biologie, fisika, chemie en algebra.
        </p>
      </div>
    </div>
  );
}
