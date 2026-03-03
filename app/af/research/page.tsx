import Link from 'next/link';

export const metadata = { title: 'Navorsing – Stellenbosch RW/CS' };

export default function Navorsing() {
  return (
    <div>
      <h1>Navorsing</h1>
      <p>
        Die Departement Rekenaarwetenskap aan die Universiteit Stellenbosch is tuis vir verskeie aktiewe navorsingsgroepe wat outomaatteorie, sagtewareingenieurswese, masjienleer, kunsmatige intelligensie, en breëbandnetwerke bestryk.
      </p>

      <h2 style={{ marginTop: '28px' }}>Navorsingsgroepe</h2>

      <div style={{ marginTop: '16px' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--cs-primary)', marginBottom: '6px' }}>Teorie en Toepassings van Outomate en Grammatikas</h3>
        <p>Nie-deterministiese eindige outomate, beskrywende kompleksiteit, en toepassings van outomate en grammatikas op patroonuitlegging-optimering, beeldverwerking, musiekgenerasie, en outomatiese grammatikakorreksie.</p>
      </div>

      <div style={{ marginTop: '16px' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--cs-primary)', marginBottom: '6px' }}>Sagtewareingenieurswese en Verifikasie</h3>
        <p>Ontwikkeling van bedryfstelselkerns, protokolle, en verifikasiegereedskap. Rekenaargedrewe verifikasie, sistematiese toetsing, en beskermende programmeringstegnieke vir hoogs betroubare stelselsagteware.</p>
      </div>

      <div style={{ marginTop: '16px' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--cs-primary)', marginBottom: '6px' }}>Masjienleer en Kunsmatige Intelligensie</h3>
        <p>Opeenvolgende besluitneming met onsekerheid, beplanning, masjienleer, soekalgoritmes, en groot datastelle van aardobservasie-satelliet sensors en radio-interferometers.</p>
      </div>

      <div style={{ marginTop: '16px' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--cs-primary)', marginBottom: '6px' }}>Telkom-Siemens Sentrum vir Uitnemendheid</h3>
        <p>Navorsing en ontwikkeling in breëbandtegnologieë, opleiding van nagraadse studente in telekommunikasie-kundigheid.</p>
      </div>

      <p style={{ marginTop: '24px' }}>
        <Link href="/research/groups/" style={{ fontWeight: 500 }}>Bekyk alle groepe, lede &amp; skakels →</Link>
      </p>
      <p>
        <Link href="/research/publications/" style={{ fontWeight: 500 }}>Bekyk publikasies &amp; navorsingsuitsette →</Link>
      </p>
    </div>
  );
}
