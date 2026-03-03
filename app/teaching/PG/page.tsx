import Accordion from '@/components/accordion/accordion';
import ModuleEntry from '@/components/ModuleEntry';

export const metadata = { title: 'Postgraduate Modules – Stellenbosch CS/RW' };

export default function PostgraduateModules() {
  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Postgraduate Modules</h1>

      <Accordion title="Programmes">
        <ModuleEntry
          code="18139-797"
          name="Honours in Computer Science"
          href="http://www.cs.sun.ac.za/courses/cs797"
          description="Stream Computer Science. This stream consists of 6 modules of 16 credits each, as well as a compulsory programming project of 32 credits. At most two modules may be taken from related departments with the permission of the Computer Science. Not all modules are necessarily offered each year."
        />
        <ModuleEntry
          code="18139-878"
          name="Masters in Computer Science"
          href="http://www.cs.sun.ac.za/rw878"
          description="Independent research on an approved topic as determined by the supervisor(s) and leading to a thesis is required."
        />
        <ModuleEntry
          code="18139-978"
          name="PhD in Computer Science"
          href="http://www.cs.sun.ac.za/rw978"
          description="A dissertation containing the results of your independent research is required."
        />
      </Accordion>

      <Accordion title="Year Modules">
        <ModuleEntry
          code="63444-771"
          name="Honours Project in Computer Science"
          href="http://www.cs.sun.ac.za/rw771"
          semester="1st and 2nd Semester"
          description="A large software construction or research problem on which the student works independently, under the supervision of a staff member."
        />
      </Accordion>

      <Accordion title="First Semester Modules">
        <ModuleEntry
          code="64947-712"
          name="Advanced Algorithms"
          href="http://www.cs.sun.ac.za/rw712"
          semester="1st Semester"
          description="This module continues from Computer Science 214 and covers advanced topics in the design and analysis of algorithms and associated data structure. Topics include a selection from algorithm design techniques, linear programming, approximation algorithms, randomised algorithms, probabilistic algorithms, parallel algorithms, number-theoretic algorithms, cryptanalysis, computational geometry, computational biology, network algorithms, and complexity theory."
        />
        <ModuleEntry
          code="64971-716"
          name="Adv. Topics I - Vulnerability Discovery and Exploitation"
          href="http://www.cs.sun.ac.za/courses/computer-science-security"
          semester="1st Semester"
          description="This module provides an introduction to the discovery and exploitation of vulnerabilities in software systems. We learn to uncover vulnerabilities and demonstrate their exploitability and then proceed to focus on methods for automating parts of the discovery process, both via static and dynamic program analysis."
        />
        <ModuleEntry
          code="65048-746"
          name="Adv. Topics II - Ontology Engineering"
          href="http://www.meteck.org/teaching/OEbook/"
          semester="1st Semester"
          description="The principal aim of this module is to provide the participant with an overview of ontology engineering—including knowledge representation languages, automated reasoning, and methods and techniques for ontology development—and main application fields. Topics covered include logic foundations for ontologies, ontology development top-down and bottom-up, methodologies for ontology development and maintenance, and methods to enhance ontology quality."
        />
        <ModuleEntry
          code="14533-771"
          name="Computing and Society"
          href="http://www.cs.sun.ac.za/courses/computing-and-society"
          semester="1st Semester"
          description="Theory, domains and critique of topics related to Computing and Society, such as human-centred computing; social development theories, critical analysis of case studies; methods and ethics; and challenges of sustainable community engagement."
        />
        <ModuleEntry
          code="14232-791"
          name="Artificial Intelligence"
          href="https://cs.sun.ac.za/courses/artificial-intelligence/"
          semester="1st Semester"
          description="Introduction to a selection of topics in artificial intelligence and optimisation. Meta-heuristics. Swarm intelligence, including particle swarm optimisation and the ant colony meta-heuristic. Evolutionary computation, including genetic algorithms, genetic programming, evolutionary strategies, differential evolution, cultural algorithms, and coevolution. Hyper-heuristics. Fitness landscape analysis. Optimisation problems."
        />
        <ModuleEntry
          code="13944-795"
          name="Functional Programming"
          href="https://cs.sun.ac.za/courses/functional/"
          semester="1st Semester"
          description="This module gives an introduction to the functional programming paradigm."
        />
        <ModuleEntry
          code="14195-742"
          name="Machine Learning A (315*)"
          semester="1st Semester"
          description="Prominent machine-learning concepts and tasks. Selected feature extraction or dimensionality reduction techniques. Introduction to probabilistic modelling and latent variable models. Fundamental paradigms in parameter estimation."
        />
        <ModuleEntry
          code="14530-711"
          name="Computer Networks (313*)"
          href="https://computer-science.pages.cs.sun.ac.za/computer-networks/website/"
          semester="1st Semester"
          description="Unless you have completed Computer Science 313 or an equivalent, the following Computer Science module is compulsory. Introduction to networks in general and the internet in particular. Architecture and protocols. Allocation of resources and congestion control. Network security. Applications."
        />
        <ModuleEntry
          code="64963-714"
          name="Concurrent Programming I (314*)"
          href="http://www.cs.sun.ac.za/rw714"
          semester="1st Semester"
          description="Unless you have completed Computer Science 314 or an equivalent, the following Computer Science module is compulsory. This module covers an overview of the field of concurrency, its theoretical principles, the design, implementation and verification of concurrent systems, and practical aspects of distributed and parallel programming."
        />
      </Accordion>

      <Accordion title="Second Semester Modules">
        <ModuleEntry
          code="11788-741"
          name="Machine Learning"
          href="http://www.cs.sun.ac.za/cs741"
          semester="2nd Semester"
          description="This module is an introduction to selected topics in machine learning."
        />
        <ModuleEntry
          code="65021-745"
          name="Software Construction - Compilers"
          href="http://www.cs.sun.ac.za/rw713"
          semester="2nd Semester"
          description=""
        />
        <ModuleEntry
          code="14531-771"
          name="Principles of Data Science"
          href="https://cs.sun.ac.za/courses/data-science/"
          semester="2nd Semester"
          description="This course covers the typical pipeline of data science projects: information retrieval, data wrangling and exploratory data analysis, hypothesis testing and regression analysis, as well as visualisations and data ethics."
        />
        <ModuleEntry
          code="14066-791"
          name="Space Science Algorithms"
          href="https://cs.sun.ac.za/courses/space-science/"
          semester="2nd Semester"
          description="Algorithms and techniques in Space Science, with applications."
        />
        <ModuleEntry
          code="14888743"
          name="Machine Learning and Artificial Intelligence I - Cognitive Robotics"
          href="https://www.cs.sun.ac.za/courses/cog-rob/"
          semester="2nd Semester"
          description="Most topics in this course fall under the branch of artificial intelligence called Cognitive Robotics. Topics covered are logic and knowledge representation, the Prolog language, deterministic automated planning, dynamic Bayesian networks and dynamic decision networks, Boolean and arithmetic circuits, the ProbLog language, probabilistic planning (based on Markov decision processes), and an introduction to reinforcement learning."
        />
        <ModuleEntry
          code="14065-796"
          name="Software Testing and Analysis"
          href="http://www.cs.sun.ac.za/rw744"
          semester="2nd Semester"
          description="Introduction to various techniques for software quality management."
        />
        <ModuleEntry
          code="63452-711"
          name="Automata Theory & Applications (345*)"
          href="https://cs345.cs.sun.ac.za"
          semester="2nd Semester"
          description="This course is a first introduction to theoretical computer science, and covers the Chomsky hierarchy of languages in relation to computability. Note that you may not take this course if you had already completed CS345."
        />
      </Accordion>
    </div>
  );
}