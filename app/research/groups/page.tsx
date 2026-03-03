import Accordion from '@/components/accordion/accordion';

export const metadata = { title: 'Research Groups & Labs – Stellenbosch CS/RW' };

function MemberList({ members }: { members: { name: string; href?: string }[] }) {
  return (
    <ul style={{ paddingLeft: '20px', margin: '8px 0', lineHeight: 1.8 }}>
      {members.map((m) => (
        <li key={m.name}>
          {m.href ? <a href={m.href}>{m.name}</a> : m.name}
        </li>
      ))}
    </ul>
  );
}

function GroupLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div style={{ marginTop: '12px' }}>
      <strong style={{ fontSize: '0.85rem' }}>Links</strong>
      <ul style={{ paddingLeft: '20px', margin: '4px 0', lineHeight: 1.8 }}>
        {links.map((l) => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default function ResearchGroups() {
  return (
    <div>
      <h1>Research Groups, Labs &amp; Centres of Excellence</h1>

      <Accordion title="Theory and Applications of Automata and Grammars">
        <p>We are interested in the theory of nondeterministic finite automata (NFA), and in particular the descriptional complexity of symmetric difference NFA. We also consider the application of automata and grammars to pattern layout optimisation, image processing, music generation, and automatic grammar correction.</p>
        <p style={{ marginTop: '8px' }}>Automata and grammars have a rich body of theory that can be applied, but practice often dictates that the theory should be extended in novel ways.</p>
        <h3 style={{ marginTop: '14px', fontSize: '0.9rem' }}>Current Members</h3>
        <MemberList members={[
          { name: 'Willem Bester', href: 'http://www.cs.sun.ac.za/~whkbester/' },
          { name: 'Walter Schulze' },
          { name: 'Brink van der Merwe', href: 'http://www.cs.sun.ac.za/~abvdm/' },
          { name: 'Steyn van Litsenborgh' },
          { name: 'Lynette van Zijl', href: 'http://www.cs.sun.ac.za/~lvzijl/' },
        ]} />
        <GroupLinks links={[
          { label: 'Theory and Applications of Automata and Grammars', href: 'http://www.cs.sun.ac.za/~lvzijl/research.html' },
          { label: 'Regular Expression Static Analysis Project', href: 'http://www.cs.sun.ac.za/~abvdm/regex.html' },
        ]} />
      </Accordion>

      <Accordion title="Software Engineering and Verification">
        <p>Involved in the development of operating system kernels, protocols, and verification tools since 1990. We investigate highly reliable system software using computer-aided verification, systematic testing, and defensive programming.</p>
        <h3 style={{ marginTop: '14px', fontSize: '0.9rem' }}>Current Members</h3>
        <MemberList members={[
          { name: 'Andrew Collett' },
          { name: 'Bernd Fischer', href: 'http://www.cs.sun.ac.za/~bfischer/' },
          { name: 'Jaco Geldenhuys', href: 'http://www.cs.sun.ac.za/~jaco/' },
          { name: 'Cornelia Inggs', href: 'http://www.cs.sun.ac.za/~cinggs/' },
          { name: 'Zhunaid Mohamed' },
          { name: 'Jan Taljaard' },
          { name: 'Phillip van Heerden' },
          { name: 'Willem Visser', href: 'http://www.cs.sun.ac.za/~wvisser/' },
        ]} />
        <GroupLinks links={[
          { label: 'COASTAL', href: 'http://www.cs.sun.ac.za/coastal/' },
          { label: 'ESBMC', href: 'http://www.esbmc.org/' },
          { label: 'CSeq', href: 'http://www.southampton.ac.uk/~gp1y10/cseq/' },
        ]} />
      </Accordion>

      <Accordion title="Machine Learning and Artificial Intelligence">
        <p>This group considers almost any aspect of the general decision-making problem, including sequential decision-making under uncertainty. Our approach is grounded in probability theory and game theory. We also investigate machine learning and big data from earth observation satellite sensors and radio interferometers.</p>
        <h3 style={{ marginTop: '14px', fontSize: '0.9rem' }}>Current Members</h3>
        <MemberList members={[
          { name: 'Burger Becker' },
          { name: 'Marc Christoph' },
          { name: 'Dirko Coetsee' },
          { name: 'Trienko Grobler' },
          { name: 'Steve Kroon', href: 'http://www.cs.sun.ac.za/~kroon/decision.html' },
          { name: 'Jordan Masakuna' },
          { name: 'Arnu Pretorius' },
          { name: 'Charl Steyl' },
          { name: 'Elan van Biljon' },
        ]} />
      </Accordion>

      <Accordion title="Telkom-Siemens Centre of Excellence in ATM and Broadband Networks">
        <p>Promoting research and development in broadband technologies and training postgraduate students and professionals in telecommunications.</p>
        <h3 style={{ marginTop: '14px', fontSize: '0.9rem' }}>Current Members</h3>
        <MemberList members={[
          { name: 'Jaco Geldenhuys', href: 'http://www.cs.sun.ac.za/~jaco/' },
          { name: 'Anthony E Krzesinski', href: 'http://www.cs.sun.ac.za/~aek1/' },
          { name: 'Willem Visser', href: 'http://www.cs.sun.ac.za/~wvisser/' },
        ]} />
      </Accordion>
    </div>
  );
}