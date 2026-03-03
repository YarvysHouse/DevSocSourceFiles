import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          {/* Motto column */}
          <div className={styles.col}>
            <p className={styles.motto}>
              forward together<br />
              sonke siya phambili<br />
              saam vorentoe
            </p>
          </div>

          {/* Links column 1 */}
          <div className={styles.col}>
            <ul className={styles.linkList}>
              <li><a href="https://my.sun.ac.za" className={styles.link}>My.SUN</a></li>
              <li><a href="https://library.sun.ac.za" className={styles.link}>Library</a></li>
              <li><Link href="/teaching/programmes/" className={styles.link}>Programmes</Link></li>
              <li><a href="https://www.sun.ac.za/english/career-at-su" className={styles.link}>Careers at SU</a></li>
            </ul>
          </div>

          {/* Links column 2 */}
          <div className={styles.col}>
            <ul className={styles.linkList}>
              <li><Link href="/research/" className={styles.link}>Research</Link></li>
              <li><Link href="/events/" className={styles.link}>Events</Link></li>
              <li><Link href="/teaching/prospectiveUG/" className={styles.link}>Prospective Students</Link></li>
              <li><Link href="/contact/" className={styles.link}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact + socials */}
          <div className={styles.col}>
            <p>
              Tel: +27 21 808 4232<br />
              Email: secretary@cs.sun.ac.za
            </p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/groups/csmaties/" className={styles.socialIcon} aria-label="Facebook">f</a>
              <a href="https://scholar.google.com/citations?hl=en&view_op=search_authors&mauthors=computer+science+division+stellenbosch+university" className={styles.socialIcon} aria-label="Google Scholar">G</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2007–2026 Computer Science, Stellenbosch University | All rights reserved</span>
          <div className={styles.bottomLinks}>
            <a href="https://www.sun.ac.za/english/Pages/Terms-of-use.aspx">Terms of use</a>
            <a href="https://www.sun.ac.za/english/Pages/Privacy.aspx">Privacy notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}