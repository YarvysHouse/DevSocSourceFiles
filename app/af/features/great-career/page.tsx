import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../features/feature.module.css';

export const metadata = {
  title: "Op soek na 'n wonderlike beroep? – Stellenbosch RW/CS",
};

export default function WonderlikeBeroepPage() {
  return (
    <div className={styles.featurePage}>
      <div className={styles.hero}>
        <Image
          src="/images/Looking-For-A-Job.jpg"
          alt="Op soek na 'n wonderlike beroep?"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <p className={styles.heroDate}>14 Januarie 2018</p>
          <h1 className={styles.heroTitle}>Op soek na &apos;n wonderlike beroep?</h1>
        </div>
      </div>

      <div className={styles.body}>
        <p>
          Kom studeer Rekenaarwetenskap aan die Universiteit Stellenbosch! Ons grade is
          propvol opwindende kursusse wat jou voorberei vir &apos;n wye reeks lonende loopbane
          in die industrie, akademie, en verder.
        </p>
        <p>
          Ons bied programme op elke vlak aan, van voorgraads tot doktorale studies.
          Kliek hieronder om meer uit te vind:
        </p>

        <div className={styles.degreeLinks}>
          <Link href="/af/teaching/prospectiveUG/" className={styles.degreeLink}>
            Eerste Jaar / Voorgraads
            <span>BSc Rekenaarwetenskap programme</span>
          </Link>
          <Link href="/af/teaching/honours/" className={styles.degreeLink}>
            Honneurs
            <span>Eenjarige nagraadse graad</span>
          </Link>
          <Link href="/af/teaching/masters/" className={styles.degreeLink}>
            Meesters
            <span>Navorsings- of kursuswerk-meesters</span>
          </Link>
          <Link href="/af/teaching/phd/" className={styles.degreeLink}>
            Doktoraal (PhD)
            <span>Oorspronklike navorsing op die hoogste vlak</span>
          </Link>
        </div>

        <p>
          Rekenaarwetenskap-graduandi is in groot aanvraag in alle sektore. Of jy passievol
          is oor kunsmatige intelligensie, kuberveiligheid, spelontwikkeling of
          sagteware-ingenieurswese — &apos;n graad van Stellenbosch sal jou die vaardighede gee
          om te slaag.
        </p>
        <p>
          Nie seker waar om te begin nie? Blaai deur ons{' '}
          <Link href="/af/features/best-jobs">lys van top beroepe in rekenaarverwante velde</Link>.
        </p>
      </div>
    </div>
  );
}
