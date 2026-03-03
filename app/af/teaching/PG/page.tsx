import Accordion from '@/components/accordion/accordion';
import ModuleEntry from '@/components/ModuleEntry';

export const metadata = { title: 'Nagraadse Modules – Stellenbosch RW/CS' };

export default function NagraadseModules() {
  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Nagraadse Modules</h1>

      <Accordion title="Programme">
        <ModuleEntry
          code="18139-797"
          name="Honneurs in Rekenaarwetenskap"
          href="http://www.cs.sun.ac.za/courses/cs797"
          description="Stroom Rekenaarwetenskap. Hierdie stroom bestaan uit 6 modules van 16 krediete elk, asook 'n verpligte programmeringsprojek van 32 krediete. Hoogstens twee modules kan geneem word van verwante departemente met die toestemming van Rekenaarwetenskap. Nie alle modules word noodwendig elke jaar aangebied nie."
        />
        <ModuleEntry
          code="18139-878"
          name="Meesters in Rekenaarwetenskap"
          href="http://www.cs.sun.ac.za/rw878"
          description="Onafhanklike navorsing oor 'n goedgekeurde onderwerp soos bepaal deur die studieleier(s) en wat lei tot 'n tesis word vereis."
        />
        <ModuleEntry
          code="18139-978"
          name="PhD in Rekenaarwetenskap"
          href="http://www.cs.sun.ac.za/rw978"
          description="'n Verhandeling wat die resultate van u onafhanklike navorsing bevat, word vereis."
        />
      </Accordion>

      <Accordion title="Jaarmodules">
        <ModuleEntry
          code="63444-771"
          name="Honneursprojek in Rekenaarwetenskap"
          href="http://www.cs.sun.ac.za/rw771"
          semester="1ste en 2de Semester"
          description="'n Groot sagteware-konstruksie- of navorsingsprobleem waaraan die student selfstandig werk, onder die toesig van 'n personeellid."
        />
      </Accordion>

      <Accordion title="Eerste Semester Modules">
        <ModuleEntry
          code="64947-712"
          name="Gevorderde Algoritmes"
          href="http://www.cs.sun.ac.za/rw712"
          semester="1ste Semester"
          description="Hierdie module gaan voort van Rekenaarwetenskap 214 en dek gevorderde onderwerpe in die ontwerp en analise van algoritmes en geassosieerde datastrukture. Onderwerpe sluit 'n seleksie in van algoritme-ontwerptegnieke, lineêre programmering, benaderings-algoritmes, ewekansige algoritmes, parallelle algoritmes, getalteoretiese algoritmes, kriptanalise, berekeningsgeometrie, berekeningsbiologie, netwerk-algoritmes, en kompleksiteitstheorie."
        />
        <ModuleEntry
          code="64971-716"
          name="Gev. Onderwerpe I - Kwesbaarheidsontdekking en Uitbuiting"
          href="http://www.cs.sun.ac.za/courses/computer-science-security"
          semester="1ste Semester"
          description="Hierdie module bied 'n inleiding tot die ontdekking en uitbuiting van kwesbaarhede in sagtewarestelsels."
        />
        <ModuleEntry
          code="65048-746"
          name="Gev. Onderwerpe II - Ontologie-ingenieurswese"
          href="http://www.meteck.org/teaching/OEbook/"
          semester="1ste Semester"
          description="Die hoofdoel van hierdie module is om die deelnemer 'n oorsig te bied van ontologie-ingenieurswese—insluitend kennisverteenwoordigingstale, outomatiese redenering, en metodes en tegnieke vir ontologie-ontwikkeling—en hoof-toepassingsvelde."
        />
        <ModuleEntry
          code="14533-771"
          name="Berekening en Samelewing"
          href="http://www.cs.sun.ac.za/courses/computing-and-society"
          semester="1ste Semester"
          description="Teorie, domeine en kritiek van onderwerpe wat verband hou met Berekening en Samelewing, soos mensgesentreerde berekening; sosiale ontwikkelingsteorieë, kritiese analise van gevallestudies; metodes en etiek; en uitdagings van volhoubare gemeenskapsbetrokkenheid."
        />
        <ModuleEntry
          code="14232-791"
          name="Kunsmatige Intelligensie"
          href="https://cs.sun.ac.za/courses/artificial-intelligence/"
          semester="1ste Semester"
          description="Inleiding tot 'n seleksie van onderwerpe in kunsmatige intelligensie en optimering. Meta-heuristieke. Swerm-intelligensie, insluitend deeltjiestrop-optimering en die mier-kolonie meta-heuristiek. Evolusionêre berekening, insluitend genetiese algoritmes, genetiese programmering, evolusionêre strategieë, differensiële evolusie, kulturele algoritmes, en ko-evolusie."
        />
        <ModuleEntry
          code="13944-795"
          name="Funksionele Programmering"
          href="https://cs.sun.ac.za/courses/functional/"
          semester="1ste Semester"
          description="Hierdie module gee 'n inleiding tot die funksionele programmeringsparadigma."
        />
        <ModuleEntry
          code="14195-742"
          name="Masjienleer A (315*)"
          semester="1ste Semester"
          description="Prominente masjienleer-konsepte en -take. Geselekteerde kenmerkekstraksie- of dimensionaliteitsverminderingstegnieke. Inleiding tot probabilistiese modellering en latente veranderlike modelle. Fundamentele paradigmas in parameterskatting."
        />
        <ModuleEntry
          code="14530-711"
          name="Rekenaarnetwerke (313*)"
          href="https://computer-science.pages.cs.sun.ac.za/computer-networks/website/"
          semester="1ste Semester"
          description="Tensy u Rekenaarwetenskap 313 of 'n ekwivalent voltooi het, is die volgende Rekenaarwetenskap module verpligtend. Inleiding tot netwerke in die algemeen en die internet in besonder. Argitektuur en protokolle. Toewysing van hulpbronne en kongestiebeheer. Netwerksekuriteit. Toepassings."
        />
        <ModuleEntry
          code="64963-714"
          name="Gelyktydige Programmering I (314*)"
          href="http://www.cs.sun.ac.za/rw714"
          semester="1ste Semester"
          description="Tensy u Rekenaarwetenskap 314 of 'n ekwivalent voltooi het, is die volgende Rekenaarwetenskap module verpligtend. Hierdie module dek 'n oorsig van die gebied van gelyktydigheid, sy teoretiese beginsels, die ontwerp, implementering en verifikasie van gelyktydige stelsels, en praktiese aspekte van verspreide en parallelle programmering."
        />
      </Accordion>

      <Accordion title="Tweede Semester Modules">
        <ModuleEntry
          code="11788-741"
          name="Masjienleer"
          href="http://www.cs.sun.ac.za/cs741"
          semester="2de Semester"
          description="Hierdie module is 'n inleiding tot geselekteerde onderwerpe in masjienleer."
        />
        <ModuleEntry
          code="65021-745"
          name="Sagtewarekonstruksie - Samestellers"
          href="http://www.cs.sun.ac.za/rw713"
          semester="2de Semester"
          description=""
        />
        <ModuleEntry
          code="14531-771"
          name="Beginsels van Datawetenskap"
          href="https://cs.sun.ac.za/courses/data-science/"
          semester="2de Semester"
          description="Hierdie kursus dek die tipiese pyplyn van datawetenskap-projekte: inligtingherwinning, datahantering en verkennende data-analise, hipotesetoetsing en regressie-analise, asook visualiserings en data-etiek."
        />
        <ModuleEntry
          code="14066-791"
          name="Ruimtewetenskap Algoritmes"
          href="https://cs.sun.ac.za/courses/space-science/"
          semester="2de Semester"
          description="Algoritmes en tegnieke in Ruimtewetenskap, met toepassings."
        />
        <ModuleEntry
          code="14888743"
          name="Masjienleer en KI I - Kognitiewe Robotika"
          href="https://www.cs.sun.ac.za/courses/cog-rob/"
          semester="2de Semester"
          description="Die meeste onderwerpe in hierdie kursus val onder die tak van kunsmatige intelligensie genaamd Kognitiewe Robotika. Onderwerpe gedek is logika en kennisverteenwoordiging, die Prolog-taal, deterministiese outomatiese beplanning, dinamiese Bayes-netwerke en dinamiese besluitingsnetwerke, Boolse en rekenkundige stroombane, die ProbLog-taal, probabilistiese beplanning (gebaseer op Markov-besluitprosesse), en 'n inleiding tot versterkingsleer."
        />
        <ModuleEntry
          code="14065-796"
          name="Sagtewaretoetsing en -analise"
          href="http://www.cs.sun.ac.za/rw744"
          semester="2de Semester"
          description="Inleiding tot verskeie tegnieke vir sagtewarekwaliteitsbestuur."
        />
        <ModuleEntry
          code="63452-711"
          name="Outomaatteorie &amp; Toepassings (345*)"
          href="https://cs345.cs.sun.ac.za"
          semester="2de Semester"
          description="Hierdie kursus is 'n eerste inleiding tot teoretiese rekenaarwetenskap, en dek die Chomsky-hiërargie van tale in verhouding tot berekenaarheid. Let wel dat u hierdie kursus nie kan neem as u reeds RW345 voltooi het nie."
        />
      </Accordion>
    </div>
  );
}
