import styles from '@/components/degree-page/degree-page.module.css';

export const metadata = { title: 'Meesters in Rekenaarwetenskap – Stellenbosch RW/CS' };

export default function Meesters() {
  return (
    <div>
      {/* Hero banner */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Meestersprogram</div>
          <h1 className={styles.heroTitle}>Meesters in Rekenaarwetenskap</h1>
          <p className={styles.heroSub}>
            &apos;n Tweejarige tesis-gebaseerde program. Leer om wêreldklas-navorsing te evalueer en uit te voer, en word &apos;n meester in u vakgebied.
          </p>
          <div className={styles.stats}>
            <span className={styles.stat}><span className={styles.statValue}>2</span> jaar</span>
            <span className={styles.stat}>Tesis-gebaseerd</span>
            <span className={styles.stat}>Voltyds of deeltyds</span>
          </div>
        </div>
      </div>

      {/* Two-column: prose + info panel */}
      <div className={styles.twoCol}>
        <div>
          <h2 className={styles.sectionTitle}>Oor die Program</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>Ons Meestersgraad is &apos;n tweejarige kursus wat hoofsaaklik tesiswerk behels. Die doel is om studente te leer hoe om te evalueer en wêreldklas-navorsing te doen, en sodoende inderdaad &apos;n meester in hulle veld te word! Terwyl die werk nie noodwendig oorspronklike publiseerbare navorsing hoef te wees nie, is dit dikwels. Die lees, skryf en kritiese denke-tegnieke wat gedurende &apos;n Meestersgraad opgebou word, is ook baie gesog in die industrie, en die meeste van ons Meestersgraduandi gaan nie voort na &apos;n doktorsgraad nie, maar begin eerder &apos;n suksesvolle loopbaan in die plaaslike of internasionale mark.</p>
          </div>

          <h2 className={styles.sectionTitle}>Vind &apos;n Studieleier</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>Jy het die instemming van &apos;n personeellid nodig wat as studieleier vir jou meesterstesis sal optree. Kyk gerus na ons <a href="/af/research/">Navorsingsbladsye</a> en lees meer oor die tipe werk wat ons doen. Jy kan ook na die personeel se publikasies kyk om &apos;n idee te kry van die tipe onderwerpe waarin hulle belangstel. Sodra jy &apos;n navorsingsarea gevind het waarin jy belangstel, kontak die betrokke personeellid om moontlike onderwerpe te bespreek. Dit is nie noodsaaklik om op hierdie stadium &apos;n spesifieke onderwerp te kies nie, maar dit is belangrik om die personeellid se instemming te kry om as jou studieleier op te tree. Indien moontlik, maak &apos;n afspraak om die studieleier persoonlik te sien.</p>
          </div>

          <h2 className={styles.sectionTitle}>Toelatingsvereistes</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>Die toelatingsvereistes vir &apos;n Meesters in Rekenaarwetenskap is &apos;n Honneurs in Rekenaarwetenskap of &apos;n goedgekeurde ekwivalente kwalifikasie. Addisionele agtergrond of ondersteunende studies kan vereis word, soos bepaal deur u studieleier(s). Verdere inligting, insluitend aansoekprosedures en &apos;n GV, is beskikbaar op ons bladsy vir <a href="/af/teaching/prospectivePG/">Voornemende nagraadse studente</a>.</p>
          </div>
        </div>

        {/* Sidebar info panel */}
        <div className={styles.infoPanel}>
          <div className={styles.infoPanelTitle}>Op &apos;n Oomblik</div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Duur</div>
            <div className={styles.infoValue}>2 jaar (3–4 deeltyds)</div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Struktuur</div>
            <div className={styles.infoValue}>Slegs tesis</div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Voorvereiste</div>
            <div className={styles.infoValue}>Honneurs in RW of ekwivalent</div>
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
