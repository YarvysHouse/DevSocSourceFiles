import Link from 'next/link';

export const metadata = { title: 'Research – Stellenbosch CS/RW' };

export default function Research() {
  return (
    <div>
      <h1>Research</h1>
      <p>
        The Department of Computer Science at Stellenbosch University is home to several active research groups spanning automata theory, software engineering, machine learning, artificial intelligence, and broadband networks.
      </p>

      <h2 style={{ marginTop: '28px' }}>Research Groups</h2>

      <div style={{ marginTop: '16px' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--cs-primary)', marginBottom: '6px' }}>Theory and Applications of Automata and Grammars</h3>
        <p>Nondeterministic finite automata, descriptional complexity, and applications of automata and grammars to pattern layout optimisation, image processing, music generation, and automatic grammar correction.</p>
      </div>

      <div style={{ marginTop: '16px' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--cs-primary)', marginBottom: '6px' }}>Software Engineering and Verification</h3>
        <p>Development of operating system kernels, protocols, and verification tools. Computer-aided verification, systematic testing, and defensive programming for highly reliable system software.</p>
      </div>

      <div style={{ marginTop: '16px' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--cs-primary)', marginBottom: '6px' }}>Machine Learning and Artificial Intelligence</h3>
        <p>Sequential decision-making under uncertainty, planning, machine learning, search algorithms, and big data from earth observation satellite sensors and radio interferometers.</p>
      </div>

      <div style={{ marginTop: '16px' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--cs-primary)', marginBottom: '6px' }}>Telkom-Siemens Centre of Excellence</h3>
        <p>Research and development in broadband technologies, training postgraduate students in telecommunications expertise.</p>
      </div>

      <p style={{ marginTop: '24px' }}>
        <Link href="/research/groups/" style={{ fontWeight: 500 }}>View all groups, members &amp; links →</Link>
      </p>
      <p>
        <Link href="/research/publications/" style={{ fontWeight: 500 }}>View publications &amp; research output →</Link>
      </p>
    </div>
  );
}