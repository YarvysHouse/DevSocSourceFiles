import styles from './programmes.module.css';

export const metadata = { title: 'Computer Science Programmes – Stellenbosch CS/RW' };

export default function Programmes() {
  return (
    <div>
      <h1>Computer Science Programmes</h1>

      <p>BSc Computer Science is the primary option for students who want to pursue a career in software development. This degree is an international qualification that enables you to find work at national and international companies. With the appropriate electives it can also lead to an honours programme in Computer Science (see our <a href="/teaching/prospectivePG/">information for prospective PG students</a> for more information on the appropriate electives) or to an honours programme in another subject, such as Applied Mathematics, Economics, General Linguistics, Mathematical Statistics, Mathematics, Operations Research, and Statistics.</p>

      <p>Many disciplines now require some knowledge of how to write computer code and in many programmes students learn to use particular software, such as MS Excel, Matlab, or R for data analysis.</p>

      <p>In Computer Science the focus is on software development. This page lists programmes at Stellenbosch that include a full Computer Science curriculum, as well as most programmes that include some Computer Science modules. The information is given for general guidance, but may be out of date; it is important to confirm details in the <a href="http://www.sun.ac.za/english/faculty/Pages/Calendar.aspx">University calendar (yearbook)</a>. If you consider applying then also read our <a href="/teaching/prospectiveUG/">information for prospective students</a>.</p>

      <div className={styles.aside}>
        Quick aside:
        <ul>
          <li>When you come to university, you must choose a <strong>degree</strong> e.g., <em>BSc</em></li>
          <li>a degree variant, called a <strong>programme</strong> e.g., <em>BSc Computer Science</em></li>
          <li>and a programme variant, called a <strong>focal area</strong>. e.g., <em>BSc Computer Science: General Computer Science</em></li>
        </ul>
      </div>

      <h2>Programmes that include a full Computer Science curriculum</h2>

      <p>The following programmes include the option to take the full core curriculum through to the third year:</p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Programme</th>
            <th>Focal areas with a full CS curriculum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>BSc Computer Science<sup>1</sup>:</strong></td>
            <td>General Computer Science<br />Computer Systems<br />Data Science</td>
          </tr>
          <tr>
            <td><strong>BDatSci<sup>2</sup>:</strong></td>
            <td>Computer Science</td>
          </tr>
          <tr>
            <td><strong>BSc Mathematical Sciences:</strong></td>
            <td>Applied Mathematics<br />Mathematics<br />Abstract Mathematics<br />Operations Research</td>
          </tr>
          <tr>
            <td><strong>BCom Mathematical Sciences:</strong></td>
            <td>Data Science</td>
          </tr>
          <tr>
            <td><strong>BCom Economic Sciences</strong></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>BSc GeoInformatics</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <ol className={styles.notes}>
        <li>All the BSc Computer Science focal areas contain the full Computer Science core curriculum and with at least 32 credits of quantitative modules at second- or third-year level can lead to an honours programme in Computer Science (see our <a href="/teaching/prospectivePG/">information for prospective PG students</a> for a list of quantitative subjects and/or modules). The General Computer Science focal area further allows students to register for additional Computer Science electives on third-year level.</li>
        <li>BDatSci is an interfaculty four-year programme and students register for BDatSci in the faculty that offers their chosen focal area. The Computer Science focal area contains the full Computer Science curriculum; the other focal areas contain some Computer Science modules, but not all.</li>
      </ol>

      <h2>Programmes that include some, but not all Computer Science modules</h2>

      <p>The following programmes and focal areas include some, but not all Computer Science modules.</p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Programme</th>
            <th>Focal areas with some CS modules</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>BDatSci</strong></td>
            <td>Applied Mathematics<br />Statistical Physics<br />Analytics and Optimisation<br />Behavioural Economics<br />Statistical Learning</td>
          </tr>
          <tr>
            <td><strong>BSc:</strong></td>
            <td>Biomedical Mathematical Sciences<br />Biomathematics<br />Bioinformatics and Computational Biology</td>
          </tr>
          <tr>
            <td><strong>BSc Physics:</strong></td>
            <td>Laser Physics (Physical)<br />Nuclear Physics<br />Radiation and Health Physics<br />Theoretical Physics</td>
          </tr>
          <tr>
            <td><strong>BEng Electrical and Electronic:</strong></td>
            <td>Data Engineering<br />Informatics<br />Robotics</td>
          </tr>
          <tr>
            <td><strong>BSc Chemistry:</strong></td>
            <td>Chemistry and Polymer Science<br />Materials Technology</td>
          </tr>
        </tbody>
      </table>

      <p>Note that, just because a programme allows you to enrol for first-year Computer Science modules, does not mean that you can necessarily also enrol for second- and third-year Computer Science modules. The focal area may not include all the modules through to third-year or there may be timetable clashes. It is important to read the university documentation very carefully.</p>

      <h2>Computer Science Curriculum</h2>

      <p>The Computer Science core curriculum includes Computer Science: 114, 144, 214, 244, 343, 344, and at least two of 314/313/315.</p>

      <div className={styles.curriculumGrid}>
        <div className={styles.curriculumHeader}>First Semester</div>
        <div className={styles.curriculumHeader}>Second Semester</div>

        <div className={styles.curriculumCell}>
          <span className={styles.yearLabel}>First year</span>
          <span className={styles.compulsory}>114 Introductory Computer Science 1</span>
        </div>
        <div className={styles.curriculumCell}>
          <span className={styles.yearLabel}>&nbsp;</span>
          <span className={styles.compulsory}>144 Introductory Computer Science 2</span>
        </div>

        <div className={styles.curriculumCell}>
          <span className={styles.yearLabel}>Second year</span>
          <span className={styles.compulsory}>214 Data structures and Algorithms</span>
        </div>
        <div className={styles.curriculumCell}>
          <span className={styles.yearLabel}>&nbsp;</span>
          <span className={styles.compulsory}>244 Computer Architecture</span>
        </div>

        <div className={styles.curriculumCell}>
          <span className={styles.yearLabel}>Third year</span>
          <span className={styles.compulsory}>314 Concurrency</span>
          <span className={styles.compulsory}>313 Computer Networks</span>
          <span className={styles.elective}>315 Machine Learning</span>
        </div>
        <div className={styles.curriculumCell}>
          <span className={styles.yearLabel}>&nbsp;</span>
          <span className={styles.compulsory}>344 Program Design (Software Engineering)</span>
          <span className={styles.compulsory}>343 Databases and Web Programming</span>
          <span className={styles.elective}>345 Computability and Automata</span>
        </div>
      </div>
    </div>
  );
}