import Image from 'next/image';
import styles from '../feature.module.css';

export const metadata = {
  title: 'The Best Jobs of 2024 – Stellenbosch CS',
};

const jobs = [
  { title: 'Telecommunications Engineer', descr: 'Design, build, and maintain telecommunications equipment.' },
  { title: 'Information Scientist', descr: 'Conduct research to improve the way information is stored and retrieved.' },
  { title: 'Software Release Manager', descr: 'Guide software products through development, testing, and release.' },
  { title: 'Java Developer', descr: 'Use the Java programming language to build computer programs.' },
  { title: 'Systems Architect', descr: 'Design computer networks.' },
  { title: 'Business Intelligence Analyst', descr: 'Identify trends to help make business decisions.' },
  { title: 'SEO Analyst', descr: 'Drive a website to the top of search rankings by fixing its content.' },
  { title: 'Environment Artist', descr: 'Design the scenery of a video game.' },
  { title: 'Computer Science Professor', descr: 'Teach university students about computer science.' },
  { title: 'Data Architect', descr: 'Create a system for processing company information.' },
  { title: 'Computer Support Specialist', descr: 'Help customers troubleshoot computer issues.' },
  { title: 'IT Instructor', descr: 'Give classes in information technology.' },
  { title: 'SEO Consultant', descr: 'Advise companies on how to improve their search engine rankings.' },
  { title: 'Telecommunications Specialist', descr: 'Plan and install telecommunications systems for clients.' },
  { title: 'Artificial Intelligence Specialist', descr: 'Invent technology that can think like humans.' },
  { title: 'Motion Graphic Artist', descr: 'Design dynamic graphics through animation, video, and sounds.' },
  { title: 'Game Producer', descr: 'Complete video game projects by overseeing schedules, budgets, and staff.' },
  { title: 'Animation Technical Director', descr: 'Lead an animation team in creating high-tech graphics for a film.' },
  { title: 'Systems Engineer', descr: 'Create systems for implementing business processes.' },
  { title: 'Web Developer', descr: 'Build the programming behind websites.' },
  { title: 'Chief IT Security Officer', descr: 'Oversee staff and security systems that protect company information.' },
  { title: 'Senior Web Developer', descr: 'Direct a team of Web Developers through projects.' },
  { title: 'Clinical Informatics Director', descr: 'Manage systems that monitor patient information in hospitals or clinics.' },
  { title: 'User Experience Designer', descr: 'Make a website enjoyable and easy to use.' },
  { title: 'Software Developer', descr: 'Build, test, and market computer software.' },
  { title: 'Network Administrator', descr: 'Monitor a company\'s computer network to ensure peak performance.' },
  { title: 'User Interface Designer', descr: 'Equip devices with user-friendly features.' },
  { title: 'Systems Analyst', descr: 'Match clients with the best computer systems for their needs.' },
  { title: 'Mobile Application Developer', descr: 'Create games and other apps for smartphones.' },
  { title: 'Web Content Manager', descr: 'Fill web pages with relevant content, including videos, text, and photos.' },
  { title: 'Security Administrator', descr: 'Keep entire computer networks safe from harm and hackers.' },
  { title: 'Web Editor', descr: 'Make sure a company\'s web content is in line with its image and goals.' },
  { title: 'Game Developer', descr: 'Create video games as a Designer, Programmer, or Artist.' },
  { title: 'Network Designer', descr: 'Arrange a company\'s computer network in the fastest possible setup.' },
  { title: 'Web Producer', descr: 'Generate website content that paints an accurate picture of the company.' },
  { title: 'Quality Assurance Manager', descr: 'Oversee the workers involved in testing products.' },
  { title: 'Game Director', descr: 'Serve as the creative brains behind video games.' },
  { title: 'Modeling Supervisor', descr: 'Lead the process of turning rough drawings into digital models.' },
  { title: 'Professional Gamer', descr: 'Get good enough at video games to enter tournaments and win prize money.' },
  { title: 'Concept Artist', descr: 'Think up characters, objects, or environments for films or video games.' },
  { title: 'Infographic Artist', descr: 'Use graphics to express ideas, facts, and information.' },
  { title: 'Graphic Designer', descr: 'Create high impact images that deliver a message.' },
  { title: 'New Media Specialist', descr: 'Use the Internet to market a company.' },
  { title: 'Network Analyst', descr: 'Evaluate a company\'s needs to see what kind of network is a good match.' },
  { title: 'Cybersecurity Strategist', descr: 'Work in-house or as a Consultant, creating plans to prevent cyber attacks.' },
  { title: 'Interactive Designer', descr: 'Create websites that encourage user participation.' },
  { title: 'Ethical Hacker', descr: 'Find a computer system\'s weak spots by deliberately hacking it.' },
  { title: 'Game Artist', descr: 'Create visuals for video games.' },
  { title: 'Video Game Technical Artist', descr: 'Animate game art by writing its computer code.' },
  { title: 'Texture Artist', descr: 'Draw the details that make games and animated movies look more realistic.' },
  { title: 'Document Imaging Specialist', descr: 'Convert company files into digital format.' },
  { title: 'Character Designer', descr: 'Create the appearance of complex animated characters.' },
  { title: 'Network Architect', descr: 'Plan the best computer network to suit a company\'s processes.' },
  { title: 'Data Warehouse Specialist', descr: 'Design and build a virtual storehouse for company information.' },
  { title: 'Information Architect', descr: 'Arrange web or software content in an attractive and user-friendly manner.' },
  { title: 'Quality Assurance Engineer', descr: 'Create and implement procedures for evaluating product quality.' },
  { title: 'Computer Forensics Investigator', descr: 'Recover deleted computer files as evidence in criminal cases.' },
  { title: 'Technical Artist', descr: 'Design awesome game graphics that won\'t cause computers to crash.' },
  { title: 'Database Administrator', descr: 'Install, monitor, and protect databases.' },
  { title: 'Game Programmer', descr: 'Write the code for computer games.' },
  { title: 'Lead Software Engineer', descr: 'Evaluate a company\'s needs and develop software to address them.' },
  { title: 'Data Scientist', descr: 'Analyze a company\'s stored information to identify trends.' },
  { title: 'Software Engineer', descr: 'Design, program, and update software.' },
  { title: 'Web Designer', descr: 'Create attractive and functional websites for clients.' },
  { title: 'Network Manager', descr: 'Oversee a team charged with installing and maintaining computer networks.' },
  { title: 'Database Analyst', descr: 'Assess whether company information is easily collected and retrieved.' },
  { title: 'Computer Hardware Engineer', descr: 'Help design and test new computer electronics.' },
  { title: 'System Administrator', descr: 'Keep your company\'s computer systems up and running.' },
  { title: 'Interaction Designer', descr: 'Make gadgets user-friendly.' },
  { title: 'Game Tester', descr: 'Play video games to make sure they\'re bug-free.' },
  { title: 'Bioinformatics Software Engineer', descr: 'Create software that organizes huge amounts of genetic information.' },
  { title: '3D Modeler', descr: 'Create digital models that can be viewed from all angles.' },
  { title: 'Nurse Informaticist', descr: 'Equip Nurses with technology to enable high-quality patient care.' },
  { title: 'Information Technology Consultant', descr: 'Use your expertise to solve IT problems for clients.' },
  { title: 'Data Miner', descr: 'Extract info from databases and summarize it into graphs and charts.' },
  { title: 'eCommerce Consultant', descr: 'Guide clients through the process of taking their business online.' },
  { title: 'Webmaster', descr: 'Monitor and update websites.' },
  { title: '3D Animator', descr: 'Bring illustrated objects to life for movies and video games.' },
  { title: 'Search Engine Optimization Specialist', descr: 'Tweak websites so they rank higher in search engine results.' },
  { title: 'IT Operations Analyst', descr: 'Maintain IT systems for a company.' },
  { title: 'Illustrator', descr: 'Create images and pictures to enrich stories.' },
  { title: 'Enterprise Architect', descr: 'Ensure that a company\'s IT system perfectly matches its business goals.' },
  { title: 'Software Architect', descr: 'Oversee the design and implementation of computer software.' },
  { title: '2D Animator', descr: 'Make 2D images move using hand drawings or computer software.' },
  { title: 'Network Engineer', descr: 'Build, test, and maintain a company\'s computer network.' },
  { title: 'Animator', descr: 'Make illustrated objects come to life using artistic and technical talents.' },
  { title: 'Layout Artist', descr: 'Arrange a web page, poster, or magazine in an appealing manner.' },
  { title: 'Game Designer', descr: 'Think up concepts and storylines for video games.' },
  { title: 'Animation Supervisor', descr: 'Oversee the work of a team of Animators.' },
  { title: 'EDI Systems Analyst', descr: 'Equip companies with the fastest data transfer systems.' },
  { title: 'Statistical Programmer', descr: 'Develop computer software that organizes statistical data.' },
];

export default function BestJobsPage() {
  return (
    <div className={styles.featurePage}>
      <div className={styles.hero}>
        <Image
          src="/images/jobs.png"
          alt="The Best Jobs"
          fill
          className={styles.heroImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <p className={styles.heroDate}>20 February 2019</p>
          <h1 className={styles.heroTitle}>The best jobs of 2024</h1>
        </div>
      </div>

      <div className={styles.body}>
        <p>
          Once again, Computer Science features strongly among the top entries on the list.
          The field of Computer Science opens the door to a remarkable range of careers —
          from designing video games to fighting cybercrime, from building AI systems to
          creating the next generation of the web.
        </p>
        <p>
          Some positions are more technical, while others involve more human factors.
          Some jobs demand concentration, precision, and attention to details; others
          come with a greater emphasis on creativity.
          Some jobs are solitary; others require teamwork.
          Some are highly competitive; others focus on cooperation and collaboration.
        </p>
        <p>
          With such a diversity of jobs, it is difficult to characterise a &ldquo;typical&rdquo; job.
          The list below contains {jobs.length}+ jobs in computing and related fields.
        </p>

        <div className={styles.jobGrid}>
          {jobs.map((job) => (
            <div key={job.title} className={styles.jobCard}>
              <h3>{job.title}</h3>
              <p>{job.descr}</p>
            </div>
          ))}
        </div>

        <h2>Further reading</h2>
        <ul>
          <li>
            <a href="https://insights.dice.com/2019/01/03/software-developer-jobs-increase-2026/">
              Software Developer Jobs Will Increase Through 2026
            </a>, 3 Jan 2019
          </li>
        </ul>
      </div>
    </div>
  );
}
