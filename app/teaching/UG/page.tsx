import Accordion from '@/components/accordion/accordion';
import ModuleEntry from '@/components/ModuleEntry';

export const metadata = {
  title: 'Undergraduate Modules – Stellenbosch CS/RW',
};

export default function UndergraduateModules() {
  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Undergraduate programme and modules</h1>

      {/* BSc Computer Science Programme */}
      <Accordion title="BSc Computer Science (CS) Programme">
        <ModuleEntry
          code="18139"
          name="Focus General Computer Science"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=76"
          description="The General Computer Science focal area combines a Computer Science major with a choice of Science modules. Please consult Section 4.4.1 of the Science calendar for a list of the compulsory and elective modules for this focal area."
        />
        <ModuleEntry
          code="18139"
          name="Focus Computer Systems"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=79"
          description="The Computer Systems focal area combines a Computer Science major with a selection of Electric and Electronic Engineering modules. Please consult Section 4.4.2 of the Science calendar for a list of the compulsory and elective modules for this focal area."
        />
        <ModuleEntry
          code="18139"
          name="Focus Data Science"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=80"
          description="The Data Science focal area combines a Computer Science major with Statistics and Data Science modules. Please consult Section 4.4.3 of the Science calendar for a list of the compulsory and elective modules for this focal area."
        />
        <ModuleEntry
          code="18139"
          name="Focus Computer Science with Genetics as second major"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=81"
          description="This focal area combines Computer Science with Genetics as second major. Please consult Section 4.4.4 of the Science calendar for a list of the compulsory and elective modules for this focal area."
        />
        <ModuleEntry
          code="18139"
          name="Focus BSc Computer Science with Geographical Information Technology as second major"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=82"
          description="Computer Science with Geographical Information Technology as second major. Please consult Section 4.4.5 of the Science calendar for a list of the compulsory and elective modules for this focal area."
        />
      </Accordion>

      {/* BDatSci Programme */}
      <Accordion title="BDatSci Programme">
        <ModuleEntry
          code="18139"
          name="Focus Computer Science (CS)"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=87"
          description="BDatSci with focal area Computer Science combines Computer Science with Statistics and Data Science modules. BDatSci is a four-year degree, which consists of a set of core compulsory modules on all year levels. Please consult Section 4.6.1 of the Science calendar for a list of the modules for this focal area."
        />
      </Accordion>

      {/* First year CS modules */}
      <Accordion title="First year CS modules">
        <ModuleEntry
          code="18139-113"
          name="Computer Science for Actuarial Studies"
          href="http://www.cs.sun.ac.za/rw113"
          shortCode="CS113"
          semester="1st Semester"
          description="Introduction to computer programming from a financial perspective. Basic financial problems are rephrased in terms of analytical problem solving. Standard imperative programming constructs including types of variables, assignments, if-then-else and loops, and recursive approaches are covered as needed in financial programming. Static data structures (in particular arrays) and declarative programming models such as spreadsheets are also covered."
        />
        <ModuleEntry
          code="18139-114"
          name="Introductory Computer Science 1"
          href="http://www.cs.sun.ac.za/rw114"
          shortCode="CS114"
          semester="1st Semester"
          description="Introduction to basic computer programming; formulation and solution of problems by means of computer programming; data representation and variable types (including character strings, integers, floating point numbers and Boolean variables); assignment statements; conditional execution and iteration; static data structures (arrays and records); input and output (including graphics and sound); modular programming; recursion; testing and debugging; introduction to object-oriented programming (including abstraction, encapsulation and use of existing object implementations)."
        />
        <ModuleEntry
          code="18139-144"
          name="Introductory Computer Science 2"
          href="http://www.cs.sun.ac.za/rw144"
          shortCode="CS144"
          semester="2nd Semester"
          description="Further formulation and solution of problems by means of computer programming; introductory data structures and algorithms in an object-oriented set-up; key concepts in object orientation: inheritance and polymorphism; design patterns as abstractions for the creation of reusable object-oriented designs; searching and sorting algorithms; complexity theory for the analysis of algorithms; fundamental methods in the design of algorithms; dynamic data structures; regular expressions and finite automata."
        />
      </Accordion>

      {/* Second year CS modules */}
      <Accordion title="Second year CS modules">
        <ModuleEntry
          code="59536-214"
          name="Object-Oriented Programming"
          href="http://www.cs.sun.ac.za/rwe214"
          shortCode="CSE214"
          semester="1st Semester"
          description="Formulation and solution of problems by means of computer programming in an object-oriented set-up; principles of testing and debugging; key concepts in object orientation: abstraction, encapsulation, inheritance and polymorphism; design patterns as abstractions for the creation of reusable object oriented designs; searching and sorting algorithms; complexity theory for the analysis of algorithms; fundamental methods in the design of algorithms; dynamic data structures."
        />
        <ModuleEntry
          code="18139-214"
          name="Data Structures and Algorithms"
          href="http://www.cs.sun.ac.za/rw214"
          shortCode="CS214"
          semester="1st Semester"
          description="The classical data structures and algorithms in an object-oriented set-up. Advanced techniques for the analysis of algorithms."
        />
        <ModuleEntry
          code="18139-244"
          name="Computer Architecture"
          href="http://www.cs.sun.ac.za/rw244"
          shortCode="CS244"
          semester="2nd Semester"
          description="Basic computer architecture. Programming in machine language and assembly language. Assemblers, binders and loaders. Basic concepts of operating systems; memory management, process management and file systems."
        />
        <ModuleEntry
          code="12263-272"
          name="Scientific Computing"
          href="http://www.cs.sun.ac.za/wb272"
          shortCode="SC272"
          semester="1st and 2nd Semester"
          description="Introduction to Linux; Linux commands; Linux file systems; editors; process control. Introduction to programming in Python: variables, types, control structures, loop structures, functions, files and directories, strings, unit testing, basic data processing. Introduction to numerical computing using Numpy; plotting and curve fitting."
        />
      </Accordion>

      {/* Third year CS modules */}
      <Accordion title="Third year CS modules">
        <ModuleEntry
          code="18139-313"
          name="Computer Networks"
          href="https://computer-science.pages.cs.sun.ac.za/computer-networks/website/"
          shortCode="CS313"
          semester="1st Semester"
          description="Introduction to networks in general and the internet in particular. Architecture and protocols. Allocation of resources and congestion control. Network security. Applications."
        />
        <ModuleEntry
          code="18139-314"
          name="Concurrency"
          href="http://www.cs.sun.ac.za/rw314"
          shortCode="CS314"
          semester="1st Semester"
          description="Introduction to programming techniques and principles of concurrent systems, from operating systems to application programs. This includes communication, synchronisation, scheduling and load balancing. Several parallel and distributed architectures will be covered."
        />
        <ModuleEntry
          code="18139-315"
          name="Machine Learning"
          href="http://www.cs.sun.ac.za/rw315"
          shortCode="CS315"
          semester="1st Semester"
          description="Dimension reduction techniques; machine-learning techniques based on maximum-likelihood, maximum-posterior and expectation-maximization estimates; modelling using logistic regression, Gaussian mixtures and hidden Markov models."
        />
        <ModuleEntry
          code="18139-343"
          name="Databases and Web Centric Programming"
          href="http://www.cs.sun.ac.za/rw343"
          shortCode="CS343"
          semester="2nd Semester"
          description="Introduction to relational databases. Mapping relational model onto object model. Implementing a database application in the context of the web. Web services. Server-side scalability. Virtualisation. Cloud Computing."
        />
        <ModuleEntry
          code="18139-344"
          name="Program Design"
          href="http://www.cs.sun.ac.za/rw344"
          shortCode="CS344"
          semester="2nd Semester"
          description="Program specifications as guidelines for program design; reusable frameworks for program design; testability of program designs; development of a medium-sized system to illustrate the practical application of the principles of program design."
        />
        <ModuleEntry
          code="18139-345"
          name="Computability and Automata Theory"
          href="http://www.cs.sun.ac.za/rw345"
          shortCode="CS345"
          semester="2nd Semester"
          description="Introduction to automata theory and formal languages, computability and complexity. Regular languages, context-free languages and grammars. Turing machines. P vs NP problem and NP completeness."
        />
        <ModuleEntry
          code="12263-372"
          name="Scientific Computing"
          href="http://www.cs.sun.ac.za/wb372"
          shortCode="SC372"
          semester="1st and 2nd Semester"
          description="Scientific-document construction and presentations in LaTeX. Regular expressions. Important algorithms including sorting, searching and random-number generation. Advanced computing in Python with Numpy and Scipy; applications including pattern searching, processing of large empirical data sets and constructing data-processing pipelines. Other scientific tools in Linux."
        />
      </Accordion>

      {/* Fourth year CS modules for BDatSci */}
      <Accordion title="Fourth year CS modules for BDatSci">
        <ModuleEntry
          code="18139-411"
          name="Computer Networks (313*)"
          href="https://computer-science.pages.cs.sun.ac.za/computer-networks/website/"
          shortCode="CS411"
          semester="1st Semester"
          description="Introduction to networks in general and the internet in particular. Architecture and protocols. Allocation of resources and congestion control. Network security. Network applications. Network research technique."
        />
        <ModuleEntry
          code="59536-414"
          name="Machine Learning"
          href="http://www.cs.sun.ac.za/rw315"
          shortCode="E414"
          semester="1st Semester"
          description="Dimension reduction techniques; machine-learning techniques based on maximum-likelihood, maximum-posterior and expectation-maximization estimates; modelling using logistic regression, Gaussian mixtures and hidden Markov models."
        />
        <ModuleEntry
          code="18139-412"
          name="Advanced Algorithms (712*)"
          href="http://algos.cs.sun.ac.za"
          shortCode="CS412"
          semester="1st Semester"
          description="This module continues from Computer Science 214 and covers advanced topics in the design and analysis of algorithms and associated data structure. Topics include a selection from algorithm design techniques, linear programming, approximation algorithms, randomised algorithms, probabilistic algorithms, parallel algorithms, number-theoretic algorithms, cryptanalysis, computational geometry, computational biology, network algorithms, and complexity theory."
        />
        <ModuleEntry
          code="18139-441"
          name="Machine Learning (741*)"
          href="http://www.cs.sun.ac.za/cs741"
          shortCode="CS441"
          semester="2nd Semester"
          description="This module is an introduction to selected topics in machine learning."
        />
        <ModuleEntry
          code="18139-471"
          name="Data Science Research Assignment"
          shortCode="CS471"
          semester="2nd Semester"
          description="The research assignment provides students with a comprehensive learning experience that integrates knowledge from previous courses. The student will integrate knowledge and experiences gained from all previous modules and apply this to a data-rich research topic. Students will have the opportunity to synthesise what they have learned and apply that knowledge to new, complex situations."
        />
        <ModuleEntry
          code="18139-491"
          name="Space Science Algorithms (791*)"
          href="https://cs.sun.ac.za/courses/space-science/"
          shortCode="CS491"
          semester="2nd Semester"
          description="Algorithms and techniques in Space Science, with applications."
        />
        <ModuleEntry
          code="18139-495"
          name="Functional Programming (795*)"
          href="https://cs.sun.ac.za/courses/functional/"
          shortCode="CS495"
          semester="Not presented"
          description="This module gives an introduction to the functional programming paradigm."
        />
      </Accordion>
    </div>
  );
}