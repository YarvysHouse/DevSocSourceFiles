import Accordion from '@/components/accordion/accordion';
import styles from '@/components/degree-page/degree-page.module.css';

export const metadata = { title: 'Honneurs in Rekenaarwetenskap – Stellenbosch RW/CS' };

export default function Honneurs() {
  return (
    <div>
      {/* Hero banner */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Honneursprogram</div>
          <h1 className={styles.heroTitle}>Honneurs in Rekenaarwetenskap</h1>
          <p className={styles.heroSub}>
            &apos;n Eenjarige voltydse nagraadse program — &apos;n mengsel van kern Rekenaarwetenskap teorie kursusse en bygewerkte toepassingskursusse.
          </p>
          <div className={styles.stats}>
            <span className={styles.stat}><span className={styles.statValue}>1</span> jaar voltyds</span>
            <span className={styles.stat}><span className={styles.statValue}>6</span> keusemodules</span>
            <span className={styles.stat}><span className={styles.statValue}>1</span> navorsingsprojek</span>
            <span className={styles.stat}><span className={styles.statValue}>128</span> krediete</span>
          </div>
        </div>
      </div>

      {/* Oorsig */}
      <div className={styles.prose}>
        <p>Die Honneursgraad is &apos;n eenjarige voltydse nagraadse program wat gewoonlik volg na die driejarige BSc of BCom graad. Oor die laaste vyf-en-veertig jaar het meer as 600 talentvolle studente ons program deurloop. Dit is uitstekende voorbereiding om óf &apos;n MSc-graad na te streef óf &apos;n loopbaan in die industrie te begin. Dit is deels te danke aan die samestelling van die program: &apos;n mengsel van kern Rekenaarwetenskap teorie kursusse en bygewerkte toepassingskursusse.</p>
        <p>Die Honneursgraad is uitdagend en vereis harde werk. Studente moet hul eie tyd bestuur en meer selfstandig werk as tydens hul voorgraadse studies, veral aan hul jaarsprojek. Ons is egter trots op die feit dat ons gegradueerdes baie gesog is. Die graad kan &apos;n beduidende impak op u salaris hê en baie maatskappye staan op &apos;n vierjarige graad. Verdere inligting, soos aansoekprosedures en &apos;n GV, is beskikbaar op ons bladsy vir <a href="/af/teaching/prospectivePG/">Voornemende nagraadse studente</a>.</p>
      </div>

      {/* Leerplan */}
      <h2 className={styles.sectionTitle}>Leerplan</h2>
      <hr className={styles.sectionRule} />
      <div className={styles.prose}>
        <p>Die Honneursleerplan is ontwerp vir voltydse nagraadse studente. Studente wat deeltyds wil studeer, kan vir &apos;n maksimum van twee jaar inskryf, maar let wel dat klasbywoning verpligtend is, aangesien klasse dikwels besprekings oor bekende oplossings, nuwerwetse navorsing, of oop probleme in die vakgebied insluit. Studente moet &apos;n Honneursprojek en ses keusemodules voltooi.</p>
        <p><strong>Die Honneursprojek</strong> is 32 krediete werd. Die <a href="http://www.cs.sun.ac.za/rw771">Honneursprojek</a> is &apos;n kritieke deel van die Honneursgraad en is &apos;n groot sagteware-konstruksie- of navorsingsprobleem waaraan die student selfstandig werk, onder die toesig van &apos;n personeellid. Die projek volg nie voorgraadse semesters nie; dit begin sodra die projek toegewys is en eindig met die finale aanbiedings aan die einde van die jaar.</p>
        <p><strong>Die keusemodules</strong> is elk 16 krediete werd en u moet vir ses modules registreer. Die modules word aangebied, óf as blokke, óf oor &apos;n tydperk van 15 weke, met &apos;n addisionele eksamenweke aan die einde. Die lys van alle <a href="/af/teaching/PG/">nagraadse modules</a> wat in &apos;n spesifieke jaar aangebied word, word aan die begin van elke jaar gefinaliseer.</p>
      </div>

      {/* Klas van 2026 */}
      <h2 className={styles.sectionTitle}>Klas van 2026</h2>
      <hr className={styles.sectionRule} />

      <Accordion title="GV (Gereeld Gevraagde Vrae)">
        <div className={styles.prose}>
          <p><strong>Modules beskikbaar vir 2026</strong>: Die modules wat beplan word om in 2026 aangebied te word, is gelys op die <a href="/af/teaching/PG/">Nagraadse modules</a> bladsy. Ons beveel aan dat u wag vir oriëntering om u modules te kies.</p>
          <p><strong>Projekte beskikbaar vir 2026</strong>: Die lys van projekte beskikbaar vir 2026 sal op 2 Februarie 2026 gefinaliseer word.</p>
          <p><strong>Finale Aanvaarding uitstaande</strong>: As u voorlopig aanvaar is maar nog nie finaal aanvaar nie, stuur asseblief &apos;n epos aan gfortuin@sun.ac.za om te bevestig dat u gegradueer het.</p>
        </div>
      </Accordion>

      <Accordion title="Belangrike Datums">
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineDate}>2 Feb om 10:00</div>
            <div className={styles.timelineText}>Honneurs Oriëntering (Saal K303, Kennissentrum, Ingenieurswese)</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineDate}>6 Feb</div>
            <div className={styles.timelineText}>Sperdatum: Projekkeuses</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineDate}>9 Feb</div>
            <div className={styles.timelineText}>Eerste semester lesings begin</div>
          </div>
        </div>
      </Accordion>

      <Accordion title="Klasroosters en algemene inligting">
        <div className={styles.resourceGrid}>
          <a href="/assets/pdfs/HonoursTimetable1stSem.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📅</div>
            <div className={styles.resourceLabel}>Semesterklasstrooster vir 2026: lokale TBB</div>
            <div className={styles.resourceMeta}>1ste Semester</div>
          </a>
          <a href="/assets/pdfs/HonoursTimetable2ndSem.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📅</div>
            <div className={styles.resourceLabel}>Semesterklasstrooster vir 2026: lokale TBB</div>
            <div className={styles.resourceMeta}>2de Semester</div>
          </a>
          <a href="/assets/pdfs/rw797-intro.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📄</div>
            <div className={styles.resourceLabel}>Honneurs 797 oorsig</div>
          </a>
          <a href="http://www.cs.sun.ac.za/rw771" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>🔬</div>
            <div className={styles.resourceLabel}>Honneursprojekte vir 2026</div>
          </a>
          <a href="https://libguides.sun.ac.za/ComputerScience" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📚</div>
            <div className={styles.resourceLabel}>Biblioteek: Rekenaarwetenskap katalogus</div>
          </a>
        </div>
      </Accordion>

      <Accordion title="Plagiaatvormvorme">
        <div className={styles.resourceGrid}>
          <a href="/assets/pdfs/plagform-written-work.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>✍️</div>
            <div className={styles.resourceLabel}>Plagiaatvorm vir geskrewe werk</div>
          </a>
          <a href="/assets/pdfs/plagform-code.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>💻</div>
            <div className={styles.resourceLabel}>Plagiaatvorm vir kode-indiening</div>
          </a>
        </div>
      </Accordion>

      <Accordion title="Kursusraamwerke">
        <div className={styles.resourceGrid}>
          <a href="/assets/pdfs/rw797-module-framework.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📋</div>
            <div className={styles.resourceLabel}>Honneurs 797 programraamwerk</div>
          </a>
        </div>
      </Accordion>
    </div>
  );
}
