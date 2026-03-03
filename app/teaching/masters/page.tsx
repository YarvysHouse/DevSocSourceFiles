import styles from '@/components/degree-page/degree-page.module.css';

export const metadata = { title: 'Masters in Computer Science – Stellenbosch CS/RW' };

export default function Masters() {
  return (
    <div>
      {/* Hero banner */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Postgraduate Programme</div>
          <h1 className={styles.heroTitle}>Masters in Computer Science</h1>
          <p className={styles.heroSub}>
            A two-year thesis-based programme. Learn to evaluate and conduct world-class research, and become a master in your field.
          </p>
          <div className={styles.stats}>
            <span className={styles.stat}><span className={styles.statValue}>2</span> years</span>
            <span className={styles.stat}>Thesis-based</span>
            <span className={styles.stat}>Full-time or part-time</span>
          </div>
        </div>
      </div>

      {/* Two-column: prose + info panel */}
      <div className={styles.twoCol}>
        <div>
          <h2 className={styles.sectionTitle}>About the Programme</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>Our Masters degree is a two-year programme based on thesis work. The goal is to teach students how to evaluate and conduct world-class research, and become a master in their field! While the work is not required to be original cutting-edge research, it often is. The reading, writing, and critical thinking skills acquired during the Masters degree are also much sought-after in industry, and most of our Masters graduates who do not carry on with a Doctoral degree, go on to have successful careers in the local industry and also abroad.</p>
          </div>

          <h2 className={styles.sectionTitle}>Finding a Supervisor</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>You need the agreement of a staff member that will supervise your Masters thesis. Browse through our <a href="/research/">Research pages</a> and read more about the kind of work we do. You can also look at our staff&apos;s publications to get an idea of the kind of topics they are interested in. If you have found an area of our research that interests you, contact the responsible staff member to discuss potential topics. It is not essential to agree on a specific topic before you apply, but it is very important to obtain the staff member&apos;s agreement to be your supervisor. If at all possible, make an appointment for a face-to-face meeting.</p>
          </div>

          <h2 className={styles.sectionTitle}>Admission Requirements</h2>
          <hr className={styles.sectionRule} />
          <div className={styles.prose}>
            <p>The admission requirements for a Masters in Computer Science is an Honours degree in Computer Science or an approved equivalent qualification. Additional background or supplementary studies may be required, as determined by your supervisor(s) on a case-by-case basis. Further information, including application procedures and a FAQ, is available on our page for <a href="http://cs.sun.ac.za//teaching/prospectivePG">Prospective postgraduate students</a></p>
          </div>
        </div>

        {/* Sidebar info panel */}
        <div className={styles.infoPanel}>
          <div className={styles.infoPanelTitle}>At a Glance</div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Duration</div>
            <div className={styles.infoValue}>2 years (3–4 part-time)</div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Structure</div>
            <div className={styles.infoValue}>Thesis only</div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Prerequisite</div>
            <div className={styles.infoValue}>Honours in CS or equivalent</div>
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