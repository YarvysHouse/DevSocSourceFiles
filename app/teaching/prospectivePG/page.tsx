import Accordion from '@/components/accordion/accordion';

export const metadata = { title: 'Prospective Postgraduate Students – Stellenbosch CS/RW' };

export default function ProspectivePG() {
  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Postgraduate Studies in Computer Science</h1>

      <Accordion title="What are the entry requirements?">
        <p>
          Admission to our programme is based on selection criteria, which includes your academic performance as well as how well your background aligns with the background required for the programme. Capacity is limited and admission is very competitive, so the minimum requirements listed below do not guarantee admission:
        </p>
        <ol style={{ margin: '12px 0', paddingLeft: '20px', lineHeight: 1.7 }}>
          <li style={{ marginBottom: '12px' }}>
            To be admitted for <strong>Honours</strong> in Computer Science, you:
            <ul style={{ marginTop: '6px', paddingLeft: '20px' }}>
              <li>need a degree that covers our Computer Science curriculum</li>
              <li>must have obtained an average of at least 65% for your Computer Science modules in your final year</li>
              <li>must have a strong mathematical foundation, covering both Algebra and Calculus</li>
              <li>must have at least 32 credits at second-year or third-year level in quantitative modules</li>
              <li>must have practical programming experience</li>
            </ul>
          </li>
          <li style={{ marginBottom: '8px' }}>
            To register for any <strong>individual postgraduate module</strong> you need either a degree in Computer Science or must have already fulfilled all the requirements to obtain one.
          </li>
          <li style={{ marginBottom: '8px' }}>
            The entry requirements for a <strong>Masters</strong> in Computer Science is a degree in Computer Science and an Honours degree.
          </li>
          <li>
            The entry requirements for a <strong>Doctoral</strong> in Computer Science is a thesis-based Masters degree and a degree that covers the required Computer Science background.
          </li>
        </ol>
      </Accordion>

      <Accordion title="How do I apply?">
        <p>The important steps are:</p>
        <ol style={{ margin: '12px 0', paddingLeft: '20px', lineHeight: 1.7 }}>
          <li style={{ marginBottom: '12px' }}>
            <strong>Masters and Doctoral students only:</strong> You need the agreement of a staff member that will supervise your thesis. Browse through our <a href="/research/">Research pages</a> and read more about the kind of work we do. Contact the responsible staff member to discuss potential topics.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>All prospective Honours, Masters, and Doctoral students:</strong> Apply by completing the application forms and uploading all the required documentation. Links are available via:
            <ul style={{ marginTop: '6px', paddingLeft: '20px' }}>
              <li>the <a href="http://www.sun.ac.za/english">Stellenbosch University website</a></li>
              <li>the <a href="https://www.sun.ac.za/english/faculty/science/">Science Faculty website</a></li>
              <li>the <a href="http://www.sun.ac.za/english/pgstudies/">Postgraduate Studies website</a></li>
            </ul>
          </li>
        </ol>
        <p>
          <strong>Closing dates:</strong> For Honours applications: the end of October. For Masters and Doctoral applications: the end of September. Please check the <a href="http://science.sun.ac.za/">Science Faculty site</a> for the specific dates.
        </p>
      </Accordion>

      <Accordion title="What about part-time / foreign students?">
        <p>
          The university allows students to enter as part-time students. The Honours degree can be extended to a maximum of two years (consecutive). A part-time Masters degree extends over three to four years.
        </p>
        <p style={{ marginTop: '8px' }}>
          Honours students should note:
        </p>
        <ul style={{ margin: '6px 0', paddingLeft: '20px', lineHeight: 1.7 }}>
          <li>The project has to be completed within either the first or the second year</li>
          <li>You have to complete 6 semester-modules in total, but you can choose which ones to complete in which year</li>
          <li><strong>All modules are presented during working hours</strong>; there is no after-hours option at the moment</li>
        </ul>
        <p style={{ marginTop: '8px' }}>
          We welcome applications from foreign students. Contact the university&apos;s <a href="http://www0.sun.ac.za/pgstudies/">Postgraduate Office</a> for administrative details. Our 16 credit modules are equivalent to 8 ECTS credits, and all modules are presented in English.
        </p>
      </Accordion>

      <Accordion title="What about the costs and financial support?">
        <p>
          Computer Science does not offer any direct support for students, but the university as a whole does, and there are many external bursaries available. The university&apos;s <a href="http://www.maties.com">portal for prospective students</a> is a good source of information about bursaries and tuition fees.
        </p>
        <p style={{ marginTop: '8px' }}>
          Most of our undergraduate modules require teaching assistants and we expect students who have completed them to get involved. While it will not provide enough income to support your studies, these positions can provide supplemental income and are a great way to consolidate your own knowledge.
        </p>
        <p style={{ marginTop: '8px' }}>
          Some supervisors also have research funds available to support Masters or Doctoral students – talk directly to the supervisor about this option.
        </p>
      </Accordion>

      <Accordion title="What are the prerequisites for individual Postgraduate modules?">
        <p>All honours modules presented by Computer Science require:</p>
        <ul style={{ margin: '6px 0', paddingLeft: '20px', lineHeight: 1.7 }}>
          <li>the four core third-year Computer Science modules</li>
          <li>Mathematics and Probability Theory &amp; Statistics (Applied Mathematics) up to first year</li>
          <li>preferably at least one of Mathematics or Applied Mathematics up to second year</li>
        </ul>
        <p style={{ marginTop: '8px' }}>
          <strong>Digital Image Processing</strong> requires a working knowledge of Fourier Analysis (covered in Applied Maths 364).
        </p>
        <p style={{ marginTop: '8px' }}>
          <strong>Computer Vision</strong> requires linear algebra (covered in Applied Mathematics 214 and Mathematics 214).
        </p>
      </Accordion>

      <Accordion title="One-year structured MSc in ML and AI">
        <p>
          For information about and the application procedure for the structured MSc in Machine Learning and Artificial Intelligence, see <a href="https://mlai.sun.ac.za">mlai.sun.ac.za</a>.
        </p>
      </Accordion>

      <Accordion title="Where can I find more information?">
        <p>
          If you have specific questions, please feel free to contact our postgraduate coordinator by sending an email to postgrad@cs.sun.ac.za.
        </p>
      </Accordion>
    </div>
  );
}