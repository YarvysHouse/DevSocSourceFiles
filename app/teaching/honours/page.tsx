import Accordion from '@/components/accordion/accordion';
import styles from '@/components/degree-page/degree-page.module.css';

export const metadata = { title: 'Honours in Computer Science – Stellenbosch CS/RW' };

export default function Honours() {
  return (
    <div>
      {/* Hero banner */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Postgraduate Programme</div>
          <h1 className={styles.heroTitle}>Honours in Computer Science</h1>
          <p className={styles.heroSub}>
            A one-year full-time postgraduate programme — a mix of core Computer Science theory courses and up-to-date application courses.
          </p>
          <div className={styles.stats}>
            <span className={styles.stat}><span className={styles.statValue}>1</span> year full-time</span>
            <span className={styles.stat}><span className={styles.statValue}>6</span> elective modules</span>
            <span className={styles.stat}><span className={styles.statValue}>1</span> research project</span>
            <span className={styles.stat}><span className={styles.statValue}>128</span> credits</span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className={styles.prose}>
        <p>The Honours degree is a one-year full-time postgraduate programme that usually follows after the three-year BSc or BCom degree. Over the last forty-five years more than 600 talented students have passed through our programme. It is excellent preparation for pursuing either an MSc degree or a career in industry. This is due in part to the composition of the programme: a mix of core Computer Science theory courses and up-to-date application courses.</p>
        <p>The Honours degree is challenging and hard work and students are required to manage their own time and work more independently than during their undergraduate studies, especially on their year-project. However, we pride ourselves on the fact that our graduates are highly sought after. The degree can have a significant impact on your salary and many companies insist on a four-year degree. Further information, such as application procedures and a FAQ, is available on our page for <a href="http://cs.sun.ac.za//teaching/prospectivePG">Prospective postgraduate students</a>.</p>
      </div>

      {/* Curriculum */}
      <h2 className={styles.sectionTitle}>Curriculum</h2>
      <hr className={styles.sectionRule} />
      <div className={styles.prose}>
        <p>The Honours curriculum has been designed for full-time postgraduate students. Students who would like to study part-time can enroll for a maximum of two years, but note that class attendance is compulsory, because classes often include discussions on known solutions, cutting edge research, or open problems in the field studied. Students should complete an honours project and six elective modules.</p>
        <p><strong>The honours project</strong> is worth 32 credits. The <a href="http://www.cs.sun.ac.za/rw771">honours project</a> is a critical part of the honours degree and is a large software construction or research problem on which the student works independently, under the supervision of a staff member. The project does not follow undergraduate semesters; it starts once the project has been allocated and ends with the final demo and presentation sessions at the end of the year. There are a few deadlines throughout the year, but ultimately students need to manage their own time.</p>
        <p><strong>The elective modules</strong> are each worth 16 credits and you must register for six modules. The modules are presented, either as blocks, or over a period of 15 weeks, with an additional examination week at the end. The list of all <a href="http://cs.sun.ac.za//teaching/PG">postgraduate modules</a> presented in a specific year is finalised at the start of each year. Students may take at most two postgraduate modules from Mathematics or Applied Mathematics with permission. However, the following two modules from Applied Mathematics do not require approval: <a href="https://appliedmaths.sun.ac.za/Postgrad/">Digital Image Processing</a> and <a href="https://appliedmaths.sun.ac.za/Postgrad/">Computer Vision</a>. All other external modules are subject to approval by the divisions involved.</p>
        <p>You can choose a combination of courses that focusses more on topics in a specific field such as Machine Learning, Data Science, or Software Engineering, or that covers a broader range of topics, to prepare for a variety of careers as software developer. At the start of your postgraduate studies you will be able to talk to staff members about the different options, so that you can make an informed decision.</p>
      </div>

      {/* Class of 2026 */}
      <h2 className={styles.sectionTitle}>Class of 2026</h2>
      <hr className={styles.sectionRule} />

      <Accordion title="FAQ">
        <div className={styles.prose}>
          <p><strong>Modules available for 2026</strong>: The modules that are planned to be presented in 2026 are listed on the <a href="http://www.cs.sun.ac.za/teaching/PG">PG modules</a> page. We recommend that you wait for orientation to choose your modules, but if you must register before orientation for some reason (e.g., to obtain access to campus facilities), choose a preliminary list of three modules per semester and then go through the change module process after orientation.</p>
          <p><strong>Projects available for 2026</strong>: The list of projects available for 2026 will be finalised on 2 February 2026.</p>
          <p><strong>Final Accept pending</strong>: If you have been provisionally accepted, but not yet finally accepted, please send an email to gfortuin@sun.ac.za to confirm that you have graduated (the degree certificate is enough for internal students, a transcript is required for external students).</p>
          <p><strong>Demi</strong>: The available demi positions will be advertised at orientation on 2 Feb, so if you do not have a demi position yet, then we&apos;ll sort it out after orientation.</p>
        </div>
      </Accordion>

      <Accordion title="Important Dates">
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineDate}>2 Feb at 10:00</div>
            <div className={styles.timelineText}>Hons Orientation (Room K303, Knowledge Centre, Engineering)</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineDate}>6 Feb</div>
            <div className={styles.timelineText}>Deadline: Project choices</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineDate}>9 Feb</div>
            <div className={styles.timelineText}>First semester lectures start</div>
          </div>
        </div>
      </Accordion>

      <Accordion title="Class schedules and general info">
        <div className={styles.resourceGrid}>
          <a href="/assets/pdfs/HonoursTimetable1stSem.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📅</div>
            <div className={styles.resourceLabel}>Semester class timetable for 2026: venues TBC</div>
            <div className={styles.resourceMeta}>1st Semester</div>
          </a>
          <a href="/assets/pdfs/HonoursTimetable2ndSem.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📅</div>
            <div className={styles.resourceLabel}>Semester class timetable for 2026: venues TBC</div>
            <div className={styles.resourceMeta}>2nd Semester</div>
          </a>
          <a href="/assets/pdfs/rw797-intro.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📄</div>
            <div className={styles.resourceLabel}>Honours 797 overview</div>
          </a>
          <a href="http://www.cs.sun.ac.za/rw771" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>🔬</div>
            <div className={styles.resourceLabel}>Honours projects for 2026</div>
          </a>
          <a href="https://libguides.sun.ac.za/ComputerScience" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📚</div>
            <div className={styles.resourceLabel}>Library: Computer Science catalogue</div>
          </a>
        </div>
      </Accordion>

      <Accordion title="Plagiarism declaration forms">
        <div className={styles.resourceGrid}>
          <a href="/assets/pdfs/plagform-written-work.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>✍️</div>
            <div className={styles.resourceLabel}>Plagiarism form for written work</div>
          </a>
          <a href="/assets/pdfs/plagform-code.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>💻</div>
            <div className={styles.resourceLabel}>Plagiarism form for code submissions</div>
          </a>
        </div>
      </Accordion>

      <Accordion title="Course frameworks">
        <div className={styles.resourceGrid}>
          <a href="/assets/pdfs/rw797-module-framework.pdf" className={styles.resourceCard}>
            <div className={styles.resourceIcon}>📋</div>
            <div className={styles.resourceLabel}>Honours 797 programme framework</div>
          </a>
        </div>
      </Accordion>
    </div>
  );
}