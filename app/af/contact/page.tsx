import styles from '@/app/contact/contact.module.css';

export const metadata = { title: 'Kontak Ons – Stellenbosch RW/CS' };

export default function KontakOns() {
  return (
    <div>
      <h1>Kontakbesonderhede</h1>

      <div className={styles.layout}>
        {/* Left: embedded map */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1654.2!2d18.8653!3d-33.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb4524d2c0f3b%3A0x9a9c81b1c8e6d4a2!2sComputer%20Science%2C%20Stellenbosch%20University!5e0!3m2!1sen!2sza!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rekenaarwetenskap, Universiteit Stellenbosch"
          />
        </div>

        {/* Right: address cards */}
        <div className={styles.addressCards}>
          <div className={styles.addressCard}>
            <div className={styles.addressCardHeader}>Posadres</div>
            <div className={styles.addressCardBody}>
              <p>
                Afdeling Rekenaarwetenskap,<br />
                Dept Wiskundige Wetenskappe,<br />
                Universiteit Stellenbosch<br />
                Privaatsak X1, 7602 Matieland, SUID-AFRIKA
              </p>
            </div>
          </div>

          <div className={styles.addressCard}>
            <div className={styles.addressCardHeader}>Straatadres</div>
            <div className={styles.addressCardBody}>
              <p>
                Rekenaarwetenskap,<br />
                Universiteit Stellenbosch<br />
                Hoek van Banghoekweg &amp; Joubertstraat<br />
                7600 Stellenbosch, SUID-AFRIKA
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
            <div className={styles.addressCardHeader}>Navrae</div>
            <div className={styles.addressCardBody}>
              <p>
                <strong>Administratiewe navrae:</strong> <a href="mailto:secretary@cs.sun.ac.za">secretary@cs.sun.ac.za</a><br />
                <strong>Nagraadse navrae:</strong> <a href="mailto:postgrad@cs.sun.ac.za">postgrad@cs.sun.ac.za</a><br />
                <strong>Voorgraadse navrae:</strong> <a href="mailto:undergrad@cs.sun.ac.za">undergrad@cs.sun.ac.za</a>
              </p>
              <p style={{ marginTop: '8px' }}>
                <strong>Telefoon:</strong> +27 21 808 4232<br />
                <strong>Faks:</strong> +27 86 603 7130
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visit section */}
      <div className={styles.visitSection}>
        <h2>Wil jy ons besoek?</h2>
        <p>Die department is op die vyfde vloer van die Algemene Ingenieurswesegebou.</p>
        <p>
          Ons koördinate is{' '}
          <a href="https://www.google.com/maps/place/33%C2%B055'30.9%22S+18%C2%B051'55.1%22E">
            33° 55′ 46.55″ Suid 18° 51′ 56.16″ Oos
          </a>
        </p>
      </div>

      {/* QR */}
      <div className={styles.qrSection}>
        <h2>En dan nog…</h2>
        <p>
          Hier is die QR kode van ons webwerf. Druk en versprei dit gerus waar jy ook al wil:
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/qr.png" alt="Rekenaarwetenskap QR kode" />
      </div>
    </div>
  );
}
