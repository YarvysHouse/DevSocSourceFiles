import styles from './contact.module.css';

export const metadata = { title: 'Contact Us – Stellenbosch CS/RW' };

export default function Contact() {
  return (
    <div>
      <h1>Contact us</h1>

      <div className={styles.layout}>
        {/* Left: embedded map */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1654.2!2d18.8653!3d-33.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb4524d2c0f3b%3A0x9a9c81b1c8e6d4a2!2sComputer%20Science%2C%20Stellenbosch%20University!5e0!3m2!1sen!2sza!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Computer Science, Stellenbosch University"
          />
        </div>

        {/* Right: address cards */}
        <div className={styles.addressCards}>
          <div className={styles.addressCard}>
            <div className={styles.addressCardHeader}>Postal address</div>
            <div className={styles.addressCardBody}>
              <p>
                Computer Science Division,<br />
                Dept of Mathematical Sciences,<br />
                Stellenbosch University<br />
                Private Bag X1, 7602 Matieland, SOUTH AFRICA
              </p>
            </div>
          </div>

          <div className={styles.addressCard}>
            <div className={styles.addressCardHeader}>Physical address</div>
            <div className={styles.addressCardBody}>
              <p>
                Computer Science,<br />
                Stellenbosch University<br />
                Decanting Facility, Hammanshand Road<br />
                7600 Stellenbosch, SOUTH AFRICA
              </p>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>✉</span>
                <span><a href="mailto:secretary@cs.sun.ac.za">secretary@cs.sun.ac.za</a></span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>☎</span>
                <span>+27 21 808 4232</span>
              </div>
            </div>
          </div>

          <div className={styles.addressCard}>
            <div className={styles.addressCardHeader}>Enquiries</div>
            <div className={styles.addressCardBody}>
              <p>
                <strong>Administrative enquiries:</strong> <a href="mailto:secretary@cs.sun.ac.za">secretary@cs.sun.ac.za</a><br />
                <strong>Post-graduate enquiries:</strong> <a href="mailto:postgrad@cs.sun.ac.za">postgrad@cs.sun.ac.za</a><br />
                <strong>Under-graduate enquiries:</strong> <a href="mailto:undergrad@cs.sun.ac.za">undergrad@cs.sun.ac.za</a>
              </p>
              <p style={{ marginTop: '8px' }}>
                <strong>Telephone:</strong> +27 21 808 4232<br />
                <strong>Fax:</strong> +27 86 603 7130
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visit section */}
      <div className={styles.visitSection}>
        <h2>Want to pay us a visit?</h2>
        <p>The department is currently located on the fifth floor of the General Engineering building.</p>
        <p>
          Our geographic coordinates are{' '}
          <a href="https://www.google.com/maps/place/33%C2%B055'30.9%22S+18%C2%B051'55.1%22E">
            33° 55′ 30.90″ South 18° 51′ 55.10″ East
          </a>
        </p>
      </div>

      {/* QR */}
      <div className={styles.qrSection}>
        <h2>Also…</h2>
        <p>
          Here is a QR code for our website. Feel free to print and copy and distribute
          liberally around town:
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/qr.png" alt="Computer Science QR code" />
      </div>
    </div>
  );
}