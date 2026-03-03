import Accordion from '@/components/accordion/accordion';

export const metadata = { title: 'Prospective Students – Stellenbosch CS/RW' };

export default function ProspectiveUG() {
  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Come study Computer Science at Stellenbosch!</h1>

      <Accordion title="What is Computer Science?">
        <p>
          As explained in <a href="https://blogs.sun.ac.za/open-day/exhibitions/computer-science/">our information videos, available on the University&apos;s open-day pages</a>, Computer science is the theory and practice of algorithms. It is a wonderful combination of art (invention and design), science (analysis and experimentation), and engineering to solve problems with computers. Our students learn to program, develop, and manage large software systems in a team, but – most importantly – to frame problems in terms of computational processes.
        </p>
      </Accordion>

      <Accordion title="Why Computer Science?">
        <p>
          The Association of Computing Machinery is an international organization for computer scientists. The <a href="http://www.acm.org/">ACM</a> has developed the following list of top ten reasons to study computer science:
        </p>
        <ul style={{ margin: '12px 0', paddingLeft: '20px', lineHeight: 1.7 }}>
          <li>Computing is part of everything we do!</li>
          <li>Expertise in computing enables you to solve complex, challenging problems.</li>
          <li>Computing enables you to make a positive difference in the world.</li>
          <li>Computing offers many types of lucrative careers.</li>
          <li>Computing jobs are here to stay, regardless of where you are located.</li>
          <li>Expertise in computing helps even if your primary career is something else.</li>
          <li>Computing offers great opportunities for true creativity and innovativeness.</li>
          <li>Computing has space for both collaborative work and individual effort.</li>
          <li>Computing is an essential part of well-rounded academic preparation.</li>
          <li>Future opportunities in computing are without boundaries.</li>
        </ul>
        <p>We admit that we are biased, but we can only add one more &quot;fact&quot;: Computer Science is <strong>FUN</strong>!</p>
      </Accordion>

      <Accordion title="Why Stellenbosch?">
        <p>Two reasons.</p>
        <ol style={{ margin: '12px 0', paddingLeft: '20px', lineHeight: 1.7 }}>
          <li style={{ marginBottom: '8px' }}>
            <em>Academic excellence</em>: Stellenbosch University is amongst South Africa&apos;s leading tertiary institutions based on research output, student pass rates and rated scientists, and is recognised internationally as an academic institution of excellence.
          </li>
          <li>
            <em>Community</em>: Studying in Stellenbosch is more than just an education; it&apos;s a lifestyle. The campus is fully integrated in the beautiful and historic town. Great food and wine, weekend markets, stunning nature, a vibrant music and culture scene, and a host of adventure activities all contribute to a well-balanced student experience as a Matie.
          </li>
        </ol>
      </Accordion>

      <Accordion title="What is the course all about?">
        <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: 1.7 }}>
          <li style={{ marginBottom: '8px' }}>
            In the <strong>first year</strong>, the focus is on learning to program. We use Java to teach programming, providing an excellent introduction to other languages like C++ and C used in later courses.
          </li>
          <li style={{ marginBottom: '8px' }}>
            The <strong>second year</strong> looks at data structures and algorithms. In the second half of the year the focus is on computer architecture and low-level programming.
          </li>
          <li style={{ marginBottom: '8px' }}>
            The <strong>third year</strong> contains four core modules: concurrent programming, databases and web-centric computing, computer networks, and software engineering. There are also extra elective modules in Machine Learning, Automata theory, and Computer Vision.
          </li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          We follow the international ACM curriculum recommendations as closely as possible. We use both English and Afrikaans in our lectures, and in our experience, language has never been an issue in our teaching.
        </p>
      </Accordion>

      <Accordion title="What are the admission requirements?">
        <p>
          The minimum admission requirements for degree programmes at Stellenbosch University are listed in the <a href="http://www.sun.ac.za/english/Documents/Yearbooks/Current">calendar (yearbook)</a> for the home faculty of each degree programme, e.g., the minimum admission requirements for BSc Computer Science are listed in the <a href="http://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf">Science calendar (yearbook)</a>.
        </p>
        <p style={{ marginTop: '8px' }}>
          Note that Computer Science is popular and meeting the minimum requirements does not guarantee admission; we receive a very high number of applications and space is limited.
        </p>
        <p style={{ marginTop: '8px' }}>
          A list of Computer Science programmes is available on the <a href="/teaching/programmes/">Programme Guide</a> page.
        </p>
      </Accordion>

      <Accordion title="What can I do with Computer Science after university?">
        <p>
          We are flooded with requests for qualified students every week. International experts predict a serious shortage of computer scientists in the future – good news for anybody with the right qualification.
        </p>
        <p style={{ marginTop: '8px' }}>
          Some of our students start out as programmers, but most end up as software designers and engineers. Apart from the many local companies that employ our students, there are also many opportunities overseas. South African computer scientists are generally in demand.
        </p>
      </Accordion>

      <Accordion title="How do I choose a degree / programme that suits me?">
        <p>
          Different programmes that include Computer Science modules are listed on the <a href="/teaching/programmes/">Programme Guide</a> page.
        </p>
      </Accordion>

      <Accordion title="How do I apply?">
        <p>
          You can apply online and find relevant information on <a href="http://www.maties.com">www.maties.com</a>.
        </p>
      </Accordion>

      <Accordion title="Is Computer Science the same as Computer Literacy, Information Science, or Scientific Computing?">
        <p>
          No, not at all. <strong>Computer Literacy</strong> is a compulsory module in some programmes and teaches students how to use basic tools (word processors, spreadsheets, presentation tools) as well as more advanced scientific tools.
        </p>
        <p style={{ marginTop: '8px' }}>
          <strong>Scientific Computing</strong> is a compulsory module for all Science students who do not have Computer Science and teaches students how to use tools such as LaTeX and Python for basic scientific and numerical computing.
        </p>
        <p style={{ marginTop: '8px' }}>
          The <strong>Information Science</strong> department&apos;s academic offering concerns the dynamic interplay between Information Technology and the organisational or societal contexts in which it is applied. More information is available on their <a href="https://suinformatics.com/">website</a>.
        </p>
      </Accordion>

      <Accordion title="Should I study Computer Science or Electronic Engineering?">
        <p>
          Both graduates are in high demand and both degrees are excellent choices. The key difference is that Electronic Engineering focuses on both hardware and software for specific engineering applications, while Computer Science has a more specialised and deeper focus on software (algorithms and software development).
        </p>
        <p style={{ marginTop: '8px' }}>
          If you are struggling to choose, we encourage you to make appointments with staff at both departments to discuss this important decision.
        </p>
      </Accordion>

      <Accordion title="Where can I find more information?">
        <p>
          A good place to start is to look around this website. For answers to specific questions, please feel free to send an email to head@cs.sun.ac.za.
        </p>
      </Accordion>
    </div>
  );
}