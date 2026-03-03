import styles from '@/components/degree-page/degree-page.module.css';

export const metadata = { title: 'Doktoraal in Rekenaarwetenskap – Stellenbosch RW/CS' };

export default function Doktoraal() {
  return (
    <div>
      {/* Hero banner */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>PhD Program</div>
          <h1 className={styles.heroTitle}>Doktoraal in Rekenaarwetenskap</h1>
          <p className={styles.heroSub}>
            &apos;n Driejarige verhandeling-gebaseerde graad gefokus op oorspronklike, grensbreker navorsing in &apos;n gespesialiseerde vakgebied van Rekenaarwetenskap.
          </p>
          <div className={styles.stats}>
            <span className={styles.stat}><span className={styles.statValue}>3</span> jaar</span>
            <span className={styles.stat}>Verhandeling-gebaseerd</span>
            <span className={styles.stat}>Oorspronklike navorsing</span>
          </div>
        </div>
      </div>

      {/* Two-column: prose + info panel */}
      <div className={styles.twoCol}>
        <div>
          <h2 className={styles.sectionTitle}>Oor die Program</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>&apos;n PhD in Rekenaarwetenskap is &apos;n driejarige graad bestaande uitsluitlik uit &apos;n verhandeling. Die doel is om oorspronklike en deurbraakwekkende navorsing in Rekenaarwetenskap af te lê. Die student moet demonstreer dat hy/sy die vermoë het om &apos;n navorsingsprojek voor te stel, te beplan, suksesvol deur te voer, en uiteindelik om die navorsing te publiseer.</p>
          </div>

          <h2 className={styles.sectionTitle}>Vind &apos;n Studieleier</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>U het die instemming van &apos;n personeellid nodig wat as studieleier vir jou Doktorstesis sal optree. Kyk gerus na ons <a href="/af/research/">Navorsingsbladsye</a> en lees meer oor die tipe werk wat ons doen. Jy kan ook na die personeel se publikasies kyk om &apos;n idee te kry van die tipe onderwerpe waarin hulle belangstel. Sodra jy &apos;n navorsingsarea gevind het waarin jy belangstel, kontak die betrokke personeellid om moontlike onderwerpe te bespreek. Dit is nie noodsaaklik om op hierdie stadium &apos;n spesifieke onderwerp te kies nie, maar dit is belangrik om die personeellid se instemming te kry om as jou studieleier op te tree. Indien moontlik, maak &apos;n afspraak om die studieleier persoonlik te sien.</p>
          </div>

          <h2 className={styles.sectionTitle}>Toelatingsvereistes</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>Die toelatingsvereistes vir &apos;n PhD in Rekenaarwetenskap is &apos;n tesis-gebaseerde Meestersgraad of &apos;n goedgekeurde ekwivalente kwalifikasie. Addisionele agtergrond of ondersteunende studies kan vereis word, soos bepaal deur u studieleier(s). Verdere inligting, insluitend aansoekprosedures en &apos;n GV, is beskikbaar op ons bladsy vir <a href="/af/teaching/prospectivePG/">Voornemende nagraadse studente</a>.</p>
          </div>
        </div>

        {/* Sidebar info panel */}
        <div className={styles.infoPanel}>
          <div className={styles.infoPanelTitle}>Op &apos;n Oomblik</div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Duur</div>
            <div className={styles.infoValue}>Minimum 3 jaar</div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Struktuur</div>
            <div className={styles.infoValue}>Slegs verhandeling</div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Voorvereiste</div>
            <div className={styles.infoValue}>Meesters in RW of ekwivalent</div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Navrae</div>
            <div className={styles.infoValue}><a href="mailto:postgrad@cs.sun.ac.za">postgrad@cs.sun.ac.za</a></div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Navorsingsareas</div>
            <div className={styles.infoValue}><a href="/af/research/">Bekyk navorsing →</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
