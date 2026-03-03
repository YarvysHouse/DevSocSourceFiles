import styles from '@/components/degree-page/degree-page.module.css';

export const metadata = { title: 'Doctorate in Computer Science – Stellenbosch CS/RW' };

export default function PhD() {
  return (
    <div>
      {/* Hero banner */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Postgraduate Programme</div>
          <h1 className={styles.heroTitle}>Doctorate in Computer Science</h1>
          <p className={styles.heroSub}>
            A three-year dissertation-based degree focused on original, cutting-edge research in a specialised field of Computer Science.
          </p>
          <div className={styles.stats}>
            <span className={styles.stat}><span className={styles.statValue}>3</span> years</span>
            <span className={styles.stat}>Dissertation-based</span>
            <span className={styles.stat}>Original research</span>
          </div>
        </div>
      </div>

      {/* Two-column: prose + info panel */}
      <div className={styles.twoCol}>
        <div>
          <h2 className={styles.sectionTitle}>About the Programme</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>Our PhD in Computer Science is a three-year degree based solely on dissertation work. The goal is to conduct original, cutting-edge research in a particular, specialised field of Computer Science. The student must demonstrate his/her ability to propose, plan, conduct, and publish a research project.</p>
          </div>

          <h2 className={styles.sectionTitle}>Finding a Supervisor</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>You need the agreement of a staff member that will supervise your PhD thesis. Browse through our <a href="/research/">Research pages</a> and read more about the kind of work we do. You can also look at our staff&apos;s publications to get an idea of the kind of topics they are interested in. If you have found an area of our research that interests you, contact the responsible staff member to discuss potential topics. It is not essential to agree on a specific topic before you apply, but it is very important to obtain the staff member&apos;s agreement to be your supervisor. If at all possible, make an appointment for a face-to-face meeting.</p>
          </div>

          <h2 className={styles.sectionTitle}>Admission Requirements</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>The admission requirements for a PhD in Computer Science is a Masters degree in Computer Science or an approved equivalent qualification. Additional background or supplementary studies may be required, as determined by your supervisor(s) on a case-by-case basis. Further information, including application procedures and a FAQ, is available on our page for <a href="http://cs.sun.ac.za//teaching/prospectivePG">Prospective postgraduate students</a></p>
          </div>
        </div>

        {/* Sidebar info panel */}
        <div className={styles.infoPanel}>
          <div className={styles.infoPanelTitle}>At a Glance</div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Duration</div>
            <div className={styles.infoValue}>3 years minimum</div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Structure</div>
            <div className={styles.infoValue}>Dissertation only</div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Prerequisite</div>
            <div className={styles.infoValue}>Masters in CS or equivalent</div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Enquiries</div>
            <div className={styles.infoValue}><a href="mailto:postgrad@cs.sun.ac.za">postgrad@cs.sun.ac.za</a></div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Research Areas</div>
            <div className={styles.infoValue}><a href="/research/">View research →</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}