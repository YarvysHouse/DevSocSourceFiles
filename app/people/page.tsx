'use client';

import { useState } from 'react';
import PersonCard from '@/components/person-card/person-card';
import type { Person } from '@/components/person-card/person-card';
import DataTable from '@/components/data-table/data-table';
import { alumniFaculty, doctoralGraduates, mastersGraduates } from './alumni-data';
import styles from './people.module.css';

const graduateColumns = [
  { key: 'name', label: 'Name' },
  {
    key: 'title',
    label: 'Thesis',
    render: (val: string, row: Record<string, string>) =>
      row.href ? <a href={row.href}>{val}</a> : val,
  },
  { key: 'year', label: 'Year' },
];

// ── Academic Staff (from people_staff.html) ──

const academicStaff: Person[] = [
  { name: 'George Azzopardi', title: 'Associate Professor Extraordinary', office: 'Remote', website: 'https://www.rug.nl/staff/g.azzopardi/?lang=en', telephone: '+27 21 808 4232', interests: 'Brain-inspired computing, Computer Vision, Pattern Recognition, Machine Learning', photo: '/assets/people/gazzopardi.jpg' },
  { name: 'Willem Bester', title: 'Junior Lecturer', office: 'A508', email: 'whkbester@cs.sun.ac.za', website: 'http://www.cs.sun.ac.za/~whkbester/', telephone: '+27 21 808 4232', interests: 'Software Engineering, Formal Methods, Formal Language and Automata Theory', photo: '/assets/people/whkbester.jpg' },
  { name: 'Judith Bishop', title: 'Professor Extraordinary', email: 'jbishop@sun.ac.za', website: 'https://www.linkedin.com/in/judith-bishop', interests: 'Programming languages, software engineering, mobile computing, open source software', photo: '/assets/people/jbishop.jpg' },
  { name: 'Loek Cleophas', title: 'Associate Professor Extraordinary', office: 'Remote', website: 'https://www.tue.nl/en/research/researchers/loek-cleophas', telephone: '+27 21 808 4232', interests: 'Model-driven engineering, Digital Twins, Algorithm + model variability', photo: '/assets/people/lcleophas.jpg' },
  { name: 'Marcel Dunaiski', title: 'Senior Lecturer', office: 'A519', email: 'marceldunaiski@sun.ac.za', website: 'https://marceldunaiski.pages.cs.sun.ac.za/', telephone: '+27 21 808 4232', interests: 'Data Science, Informetrics, Scientometrics', photo: '/assets/people/mdunaiski.jpg' },
  { name: 'David Baker Effendi', title: 'Research Fellow', office: 'Remote', website: 'https://davidbakereffendi.github.io/', telephone: '+27 21 808 4232', interests: 'Program analysis, static analysis', photo: '/assets/people/deffendi.jpg' },
  { name: 'Andries Engelbrecht', title: 'Professor', office: 'B2023, Industrial Engineering Building', email: 'engel@sun.ac.za', website: 'https://engel.pages.cs.sun.ac.za/', telephone: '+27 21 808 9259', interests: 'Swarm intelligence, Evolutionary computation, Hyper-heuristics, Neural networks, Machine learning, Data analytics, Optimization, Fitness landscape analysis', photo: '/assets/people/engel.jpg' },
  { name: 'Bernd Fischer', title: 'Professor', office: 'A513', email: 'bfischer@cs.sun.ac.za', website: 'http://www.cs.sun.ac.za/~bfischer/', telephone: '+27 21 808 2527', interests: 'Software engineering, formal methods, program analysis, program generation, program verification, artificial intelligence', photo: '/assets/people/bfischer.jpg' },
  { name: 'Trienko Grobler', title: 'Lecturer', office: 'A510', email: 'tlgrobler@sun.ac.za', website: 'http://www.cs.sun.ac.za/~tlgrobler/', telephone: '+27 21 808 4232', interests: 'Machine learning, remote sensing, radio interferometry, coding theory and the epoch of reionization', photo: '/assets/people/tlgrobler.jpg' },
  { name: 'McElory Hoffmann', title: 'Senior Lecturer Extraordinary', office: 'Remote', email: 'mcelory@praelexis.co.za', website: 'https://www.linkedin.com/in/mcelory/', interests: 'Computer vision, machine learning, smart cameras', photo: '/assets/people/mcelory.jpg' },
  { name: 'Cornelia Inggs', title: 'Senior Lecturer', office: 'A509', email: 'cinggs@cs.sun.ac.za', website: 'http://www.cs.sun.ac.za/~cinggs/', telephone: '+27 21 808 4232', interests: 'Formal methods, model checking, concurrency', photo: '/assets/people/cinggs.jpg' },
  { name: 'Maria Keet', title: 'Professor Extraordinary', office: 'Remote', website: 'http://www.meteck.org/', telephone: '+27 21 808 4232', interests: 'Ontology, Semantic Web, Conceptual Modeling, Knowledge Representation and reasoning', photo: '/assets/people/mkeet.png' },
  { name: 'Steve Kroon', title: 'Associate Professor', office: 'A515', email: 'kroon@sun.ac.za', website: 'http://www.cs.sun.ac.za/~kroon/', telephone: '+27 21 808 9375', interests: 'Artificial intelligence/machine learning, statistical learning theory, probability and computing', photo: '/assets/people/kroon.jpg' },
  { name: 'Mkhuseli Ngxande', title: 'Lecturer', office: 'A518', email: 'ngxandem@sun.ac.za', website: 'http://www.cs.sun.ac.za/~ngxandem', telephone: '+27 21 808 4232', interests: 'Machine learning, computer vision, bioinformatics, wide area surveillance', photo: '/assets/people/ngxandem.jpg' },
  { name: 'Francesco Petruccione', title: 'Visiting Academic', office: 'MIV 1003', email: 'petruccione@sun.ac.za', website: 'https://www.sun.ac.za/english/Lists/news/DispForm.aspx?ID=9203', telephone: '+27 21 808 4562', interests: 'Interim director of the National Institute for Theoretical and Computational Sciences (NITheCS) and Professor Extraordinary in the Department of Physics at SU.' },
  { name: 'Laurette Pretorius', title: 'Associate Professor Extraordinary', website: 'https://w2.unisa.ac.za/CW/SITES/CORPORAT/DEFAULT/COLLEGES/COLLEGE_/RESEARCH/ACADEMIC/PROF_LAU.HTM', telephone: '+27 21 808 4232', interests: 'Multilingual NLP, Semantic computing, Ontology development, Machine translation, Language generation', photo: '/assets/people/lpretorius.jpg' },
  { name: 'Moeketsi Raselimo', title: 'Lecturer Extraordinary', office: 'Remote', website: 'https://de.linkedin.com/in/moeketsi-raselimo', telephone: '+27 21 808 4232', interests: 'Programming Languages, Software Testing, Fuzzing', photo: '/assets/people/mraselimo.jpg' },
  { name: 'Gavin Rens', title: 'Lecturer', office: 'A508', email: 'gavinrens@sun.ac.za', website: 'https://kognitiv.systems/', telephone: '+27 21 808 4232', interests: 'Cognitive Robotics focusing on knowledge representation and reasoning under uncertainty. Probabilistic planning. Reinforcement learning.', photo: '/assets/people/grens.jpg' },
  { name: 'William (Bill) Tucker', title: 'Professor', office: 'A522', email: 'btucker@sun.ac.za', website: 'https://researcherprofiles.sun.ac.za/37639-bill-tucker', telephone: '+27 21 808 3382', interests: 'Computer networks and their applications; human computer interaction; social impact; ethical, responsible, and sustainable computing', photo: '/assets/people/btucker.jpg' },
  { name: 'Brink van der Merwe', title: 'Professor · Head of Division', office: 'A511', email: 'abvdm@cs.sun.ac.za', website: 'http://www.cs.sun.ac.za/~abvdm/', telephone: '+27 21 808 4232', interests: 'Tree automata and applications, Learning of grammars and languages from data', photo: '/assets/people/abvdm.jpg' },
  { name: 'Lynette van Zijl', title: 'Professor', office: 'A520', email: 'lvzijl@sun.ac.za', website: 'http://www.cs.sun.ac.za/~lvzijl/', telephone: '+27 21 808 4232', interests: 'Implementation and applications of automata; assistive technologies', photo: '/assets/people/lvzijl.jpg' },
  { name: 'Wolf-Tilo Balke and Florian Plötzky', title: 'Visiting Academic', email: 'balke@ifis.cs.tu-bs.de', website: 'http://www.ifis.cs.tu-bs.de/staff/balke', telephone: '+27 21 808 4232', interests: 'Query Processing, User Preferences and Personalization, Cognitive User Modeling and Conceptualization, Peer-to-Peer Networks and Distributed Retrieval', photo: '/assets/people/tbalke.jpg' },
  { name: 'Willem Visser', title: 'Part-time Professor', office: 'A517', email: 'visserw@sun.ac.za', website: 'http://www.cs.sun.ac.za/~wvisser/', telephone: '+27 21 808 4232', interests: 'Software engineering, testing, symbolic execution, and model checking', photo: '/assets/people/visserw.jpg' },
  { name: 'Fabian Yamaguchi', title: 'Professor Extraordinary', email: 'fabs@shiftleft.io', website: 'https://fabs.codeminers.org/', interests: 'Computer security, Program analysis, Machine learning', photo: '/assets/people/fabian3.jpg' },
];

// ── Administrative Staff ──

const administrativeStaff: Person[] = [
  { name: 'Emile Dreyer', office: 'A507', email: 'edreyer@sun.ac.za', telephone: '+27 21 808 4232' },
  { name: 'Gaynor Fortuin', title: 'Administrative Officer', office: 'A514', email: 'gfortuin@sun.ac.za', telephone: '+27 21 808 4232', photo: '/assets/people/gfortuin.jpg' },
  { name: 'Derrick Stephanus', title: 'Assistant', office: 'A507', email: 'djstep@sun.ac.za', telephone: '+27 21 808 4232', photo: '/assets/people/djstep.jpg' },
];

// ── Doctoral Students ──

const doctoralStudents: Person[] = [
  { name: 'Willem Bester', interests: 'The pathology, amelioration and cure of catastrophic backtracking in extended regular expressions', title: 'Supervisor: Brink van der Merwe', photo: '/assets/people/whkbester.jpg' },
  { name: 'Dirko Coetsee', interests: 'Automated spreadsheet integration', title: 'Supervisor: McElory Hoffmann, Steve Kroon', photo: '/assets/people/dcoetsee.jpg' },
  { name: 'Jordan Masakuna', interests: 'Robot games with randomisation', title: 'Supervisor: Dr Simukai Utete, Steve Kroon', photo: '/assets/people/masakuna.jpg' },
  { name: 'Adekunle Adekoya', interests: 'Multi-Objective Optimization for Dynamic Incremental Machine Learning Algorithms', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/aradekoya.jpg' },
  { name: 'Winston Anderson', interests: 'The Role of Multilingual Semantic and Semantic Web Technologies in Automated Assessment', title: 'Supervisor: Lynette van Zijl', photo: '/assets/people/wnanderson.jpg' },
  { name: 'Dave Bockus', interests: 'High Dimensional Fitness Landscape Analysis', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/dpbockus.jpg' },
  { name: 'Taivvo Omomule', interests: 'Mixtures of Heterogeneous Experts', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/tomomule.jpg' },
  { name: 'Moeketsi Raselimo', interests: 'Fault Localization and Repair for Grammarware', title: 'Supervisor: Bernd Fischer', photo: '/assets/people/miraselimo.jpg' },
  { name: 'Amani Saad', interests: 'Differential Evolution and optimal Population Sizes', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/adsaad.jpg' },
];

// ── Masters Students ──

const mastersStudents: Person[] = [
  { name: 'Albertus Aribeb', interests: 'Time Series Data Clustering', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/aaribeb.jpg' },
  { name: 'David Baker Effendi', interests: 'Applications of Graph Technology in Spatio-Temporal Data Modelling, Program Analysis and Natural Language Processing', title: 'Supervisor: Brink van der Merwe, Willem Visser', photo: '/assets/people/sdbakereffendi.jpg' },
  { name: 'Chelsea Barraball', interests: 'Co-Evolutionary Particle Swarm Optimization in Dynamic Environments', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/cnbarraball.jpg' },
  { name: 'Burger Becker', interests: 'Classification of Radio Galaxies', title: 'Supervisor: Trienko Grobler', photo: '/assets/people/bbecker.jpg' },
  { name: 'Neil Burger', interests: 'Trajectory Mining and Prediction Algorithms for Vessels using AIS Data', title: 'Supervisor: Trienko Grobler, Waldo Kleynhans', photo: '/assets/people/cnburger.jpg' },
  { name: 'Rohan Chhipa', interests: 'Community Detection in Social Networks using Set-based Particle Swarm', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/rhchhipa.jpg' },
  { name: 'Heinrich Cilliers', interests: 'Adaptive Gaussian Mixture Models', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/hcilliers.jpg' },
  { name: 'Chris Coetzee', interests: 'Application of static binary instrumentation to recovering data structures and their types', title: 'Supervisor: Willem Bester, Bernd Fischer', photo: '/assets/people/ccoetzee.jpg' },
  { name: 'Andrew Collett', interests: 'Software Stack Architectures and their Performance', title: 'Supervisor: Brink van der Merwe, Willem Visser', photo: '/assets/people/ajcollett.jpg' },
  { name: 'Jordan Daubinet', interests: 'Multi-Agent Reinforcement Learning for Financial Trading', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/jdaubinet.jpg' },
  { name: 'Nicole Du Toit', interests: 'Linearization Checking of Concurrent Non-blocking Data Structures', title: 'Supervisor: Cornelia Inggs', photo: '/assets/people/ndutoit.jpg' },
  { name: 'Kyle Erwin', interests: 'Set-base PSO for Portfolio Optimization', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/kerwin.jpg' },
  { name: 'Ignazio Ferreira', interests: 'Neural Network Ensembles and Concept Drift', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/miferreira.jpg' },
  { name: 'Manfred Habeck', interests: 'Box-repetition Free Words', title: 'Supervisor: Trienko Grobler, Lynette van Zijl / Jaco Geldenhuys', photo: '/assets/people/mihabeck.jpg' },
  { name: 'Jason Jackson', interests: 'Interferometry Imaging and Calibration Artefacts', title: 'Supervisor: Trienko Grobler, Danie Ludick', photo: '/assets/people/jjackson.jpg' },
  { name: 'Ryan Lang', interests: 'Landscape-aware Hyper-heuristics', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/rlang.jpg' },
  { name: 'Fidelis Mnkandla', interests: 'Training support vector machines under the presence of concept drift using particle swarm optimization', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/fmnkandla.jpg' },
  { name: 'Zhunaid Mohamed', interests: 'Interpreting and explaining Rural Networks', title: 'Supervisor: Willem Visser', photo: '/assets/people/zmohamed.jpg' },
  { name: 'Werner Mostert', interests: 'Feature Selection Fitness Landscape Analysis', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/wmostert.jpg' },
  { name: 'Muhammed Rahman', interests: 'Genetic Programming to Induce Decision Trees in Dynamic Environments', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/mmrahman.jpg' },
  { name: 'Cian Steenkamp', interests: 'Multi-Guide Particle Swarm Optimization for Many-Objective Optimization Problems', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/csteenkamp.jpg' },
  { name: 'Charl Steyl', interests: 'Deep Learning Framework to Predictive Maintenance', title: 'Supervisor: McElory Hoffmann, Trienko Grobler', photo: '/assets/people/csteyl.jpg' },
  { name: 'Benjamin Strelitz', interests: 'Constrained multi-modal optimization using particle swarm optimization', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/bsstrelitz.jpg' },
  { name: 'Stefan Strydom', interests: 'Automatic assignment of diagnosis codes to free-form text medical notes', title: 'Supervisor: Brink van der Merwe', photo: '/assets/people/sstrydom.jpg' },
  { name: 'Aksel Thele', interests: 'Honey Bee Optimization for Dynamic Environments', title: 'Supervisor: Andries Engelbrecht', photo: '/assets/people/athele.jpg' },
  { name: 'Elan van Biljon', interests: 'Initialisation of Noise-Regularised Neural Networks', title: 'Supervisor: Steve Kroon', photo: '/assets/people/evanbiljon.jpg' },
  { name: 'Phillip van Heerden', interests: 'Automatic Input Language Learning with Symbolic Methods', title: 'Supervisor: Willem Visser, Bernd Fischer', photo: '/assets/people/pvanheerden.jpg' },
  { name: 'Steyn van Litsenborgh', interests: 'Learning Practical Regular Expressions', title: 'Supervisor: Brink van der Merwe', photo: '/assets/people/svanlitsenborgh.jpg' },
];

// ── Tabs ──

type TabKey = 'staff' | 'students' | 'alumni';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'staff', label: 'Staff' },
  { key: 'students', label: 'Students' },
  { key: 'alumni', label: 'Alumni' },
];

export default function PeoplePage() {
  const [activeTab, setActiveTab] = useState<TabKey>('staff');

  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>People</h1>

      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Staff tab */}
      {activeTab === 'staff' && (
        <>
          <h2 className={styles.sectionHeading}>Academic Staff</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.grid}>
            {academicStaff.map((person, i) => (
              <PersonCard key={`academic-${i}`} person={person} />
            ))}
          </div>

          <h2 className={styles.sectionHeading}>Administrative Staff</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.grid}>
            {administrativeStaff.map((person, i) => (
              <PersonCard key={`admin-${i}`} person={person} />
            ))}
          </div>
        </>
      )}

      {/* Students tab */}
      {activeTab === 'students' && (
        <>
          <h2 className={styles.sectionHeading}>Doctoral Students</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.grid}>
            {doctoralStudents.map((person, i) => (
              <PersonCard key={`phd-${i}`} person={person} />
            ))}
          </div>

          <h2 className={styles.sectionHeading}>Masters Students</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.grid}>
            {mastersStudents.map((person, i) => (
              <PersonCard key={`msc-${i}`} person={person} />
            ))}
          </div>
        </>
      )}

      {/* Alumni tab */}
      {activeTab === 'alumni' && (
        <>
          <h2 className={styles.sectionHeading}>Alumni Faculty</h2>
          <hr className={styles.sectionDivider} />
          <div style={{ columnCount: 2, columnGap: '24px', fontSize: '0.82rem', color: 'var(--cs-text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
            {alumniFaculty.map((name, i) => (
              <div key={i}>{name}</div>
            ))}
          </div>

          <h2 className={styles.sectionHeading}>Doctoral Graduates</h2>
          <hr className={styles.sectionDivider} />
          <DataTable
            columns={graduateColumns}
            data={doctoralGraduates}
          />

          <h2 className={styles.sectionHeading}>Masters Graduates</h2>
          <hr className={styles.sectionDivider} />
          <DataTable
            columns={graduateColumns}
            data={mastersGraduates}
          />
        </>
      )}
    </div>
  );
}