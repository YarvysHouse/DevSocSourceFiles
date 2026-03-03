import Accordion from '@/components/accordion/accordion';
import ModuleEntry from '@/components/ModuleEntry';

export const metadata = {
  title: 'Voorgraadse Modules – Stellenbosch RW/CS',
};

export default function VoorgraadseModules() {
  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Voorgraadse program en modules</h1>

      {/* BSc Rekenaarwetenskap Program */}
      <Accordion title="BSc Rekenaarwetenskap (RW) Program">
        <ModuleEntry
          code="18139"
          name="Fokus Algemene Rekenaarwetenskap"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=76"
          description="Die Algemene Rekenaarwetenskap fokusarea kombineer 'n Rekenaarwetenskap hoofvak met 'n keuse van Wetenskapmodules. Raadpleeg asseblief Afdeling 4.4.1 van die Wetenskapkalender vir 'n lys van die verpligte en keusemodules vir hierdie fokusarea."
        />
        <ModuleEntry
          code="18139"
          name="Fokus Rekenaarsisteme"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=79"
          description="Die Rekenaarsisteme fokusarea kombineer 'n Rekenaarwetenskap hoofvak met 'n seleksie van Elektriese en Elektroniese Ingenieurswese modules. Raadpleeg asseblief Afdeling 4.4.2 van die Wetenskapkalender vir 'n lys van die verpligte en keusemodules vir hierdie fokusarea."
        />
        <ModuleEntry
          code="18139"
          name="Fokus Datawetenskap"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=80"
          description="Die Datawetenskap fokusarea kombineer 'n Rekenaarwetenskap hoofvak met Statistiek en Datawetenskap modules. Raadpleeg asseblief Afdeling 4.4.3 van die Wetenskapkalender vir 'n lys van die verpligte en keusemodules vir hierdie fokusarea."
        />
        <ModuleEntry
          code="18139"
          name="Fokus Rekenaarwetenskap met Genetika as tweede hoofvak"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=81"
          description="Hierdie fokusarea kombineer Rekenaarwetenskap met Genetika as tweede hoofvak. Raadpleeg asseblief Afdeling 4.4.4 van die Wetenskapkalender vir 'n lys van die verpligte en keusemodules vir hierdie fokusarea."
        />
        <ModuleEntry
          code="18139"
          name="Fokus BSc Rekenaarwetenskap met Geografiese Inligtingstegnologie as tweede hoofvak"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=82"
          description="Rekenaarwetenskap met Geografiese Inligtingstegnologie as tweede hoofvak. Raadpleeg asseblief Afdeling 4.4.5 van die Wetenskapkalender vir 'n lys van die verpligte en keusemodules vir hierdie fokusarea."
        />
      </Accordion>

      {/* BDatSci Program */}
      <Accordion title="BDatSci Program">
        <ModuleEntry
          code="18139"
          name="Fokus Rekenaarwetenskap (RW)"
          href="https://www.sun.ac.za/english/Documents/Yearbooks/Current/2023-Science.pdf#page=87"
          description="BDatSci met fokusarea Rekenaarwetenskap kombineer Rekenaarwetenskap met Statistiek en Datawetenskap modules. BDatSci is 'n vierjaargraad wat bestaan uit 'n stel kern verpligte modules op alle jaarsvlakke. Raadpleeg asseblief Afdeling 4.6.1 van die Wetenskapkalender vir 'n lys van die modules vir hierdie fokusarea."
        />
      </Accordion>

      {/* Eerstejaars RW modules */}
      <Accordion title="Eerstejaars RW modules">
        <ModuleEntry
          code="18139-113"
          name="Rekenaarwetenskap vir Aktuariële Wetenskappe"
          href="http://www.cs.sun.ac.za/rw113"
          shortCode="RW113"
          semester="1ste Semester"
          description="Inleiding tot rekenaarprogrammering vanuit 'n finansiële perspektief. Basiese finansiële probleme word in terme van analitiese probleemoplossing herformuleer. Standaard imperatiewe programmeringskonstrukte, insluitend tipes veranderlikes, toewysings, if-dan-anders en lusse, en rekursiewe benaderings word gedek soos benodig in finansiële programmering. Statiese datastrukture (in besonder skikkings) en deklaratiewe programmeringsmodelle soos sigblaaie word ook gedek."
        />
        <ModuleEntry
          code="18139-114"
          name="Inleidende Rekenaarwetenskap 1"
          href="http://www.cs.sun.ac.za/rw114"
          shortCode="RW114"
          semester="1ste Semester"
          description="Inleiding tot basiese rekenaarprogrammering; formulering en oplossing van probleme deur middel van rekenaarprogrammering; dataverteenwoordiging en veranderliketipes (insluitend karakterstringe, heelgetalle, drywende-puntgetalle en Boolse veranderlikes); toewysingsstellings; voorwaardelike uitvoering en iterasie; statiese datastrukture (skikkings en rekords); invoer en uitvoer (insluitend grafika en klank); modulêre programmering; rekursie; toetsing en foutsoek; inleiding tot objekgeoriënteerde programmering."
        />
        <ModuleEntry
          code="18139-144"
          name="Inleidende Rekenaarwetenskap 2"
          href="http://www.cs.sun.ac.za/rw144"
          shortCode="RW144"
          semester="2de Semester"
          description="Verdere formulering en oplossing van probleme deur middel van rekenaarprogrammering; inleidende datastrukture en algoritmes in 'n objekgeoriënteerde opstelling; sleutelkonsepte in objekoriëntasie: oorerwing en polimorfisme; ontwerppatrone as abstraksies vir die skepping van herbruikbare objekgeoriënteerde ontwerpe; soek- en sorteeralgoritmes; kompleksiteitstheorie vir die analise van algoritmes; fundamentele metodes in die ontwerp van algoritmes; dinamiese datastrukture; regulêre uitdrukkings en eindige outomate."
        />
      </Accordion>

      {/* Tweedejaars RW modules */}
      <Accordion title="Tweedejaars RW modules">
        <ModuleEntry
          code="59536-214"
          name="Objekgeoriënteerde Programmering"
          href="http://www.cs.sun.ac.za/rwe214"
          shortCode="ING214"
          semester="1ste Semester"
          description="Formulering en oplossing van probleme deur middel van rekenaarprogrammering in 'n objekgeoriënteerde opstelling; beginsels van toetsing en foutsoek; sleutelkonsepte in objekoriëntasie: abstraksie, enkapsulasie, oorerwing en polimorfisme; ontwerp van algoritmes; dinamiese datastrukture."
        />
        <ModuleEntry
          code="18139-214"
          name="Datastrukture en Algoritmes"
          href="http://www.cs.sun.ac.za/rw214"
          shortCode="RW214"
          semester="1ste Semester"
          description="Die klassieke datastrukture en algoritmes in 'n objekgeoriënteerde opstelling. Gevorderde tegnieke vir die analise van algoritmes."
        />
        <ModuleEntry
          code="18139-244"
          name="Rekenaarargitektuur"
          href="http://www.cs.sun.ac.za/rw244"
          shortCode="RW244"
          semester="2de Semester"
          description="Basiese rekenaarargitektuur. Programmering in masjienetaal en samestellingstaal. Samestellaars, bindaars en laaiers. Basiese konsepte van bedryfstelsel; geheuebestuur, prosesbestuur en lêerstelsels."
        />
        <ModuleEntry
          code="12263-272"
          name="Wetenskaplike Berekening"
          href="http://www.cs.sun.ac.za/wb272"
          shortCode="WB272"
          semester="1ste en 2de Semester"
          description="Inleiding tot Linux; Linux-opdragte; Linux-lêerstelsels; redigeerders; proseskontrole. Inleiding tot programmering in Python: veranderlikes, tipes, beheerstukture, lusstrukture, funksies, lêers en gidse, stringe, eenheidtoetsing, basiese dataverwerking. Inleiding tot numeriese berekening met Numpy; plotteer en kurwepassing."
        />
      </Accordion>

      {/* Derdejaars RW modules */}
      <Accordion title="Derdejaars RW modules">
        <ModuleEntry
          code="18139-313"
          name="Rekenaarnetwerke"
          href="https://computer-science.pages.cs.sun.ac.za/computer-networks/website/"
          shortCode="RW313"
          semester="1ste Semester"
          description="Inleiding tot netwerke in die algemeen en die internet in besonder. Argitektuur en protokolle. Toewysing van hulpbronne en kongestiebeheer. Netwerksekuriteit. Toepassings."
        />
        <ModuleEntry
          code="18139-314"
          name="Gelyktydige Programmering"
          href="http://www.cs.sun.ac.za/rw314"
          shortCode="RW314"
          semester="1ste Semester"
          description="Inleiding tot programmeringstegnieke en beginsels van gelyktydige stelsels, van bedryfstelselkerns tot toepassingsprogramme. Dit sluit kommunikasie, sinkronisasie, skedulering en lasbalansering in. Verskeie parallelle en verspreide argitekture sal gedek word."
        />
        <ModuleEntry
          code="18139-315"
          name="Masjienleer"
          href="http://www.cs.sun.ac.za/rw315"
          shortCode="RW315"
          semester="1ste Semester"
          description="Dimensieverminderingstegnieke; masjienleer-tegnieke gebaseer op maksimum-aanneemlikheid, maksimum-posterior en verwagtings-maksimering-skattings; modellering met behulp van logistiese regressie, Gaussiese mengsels en versteekte Markov-modelle."
        />
        <ModuleEntry
          code="18139-343"
          name="Databasisse en Webgesentreerde Programmering"
          href="http://www.cs.sun.ac.za/rw343"
          shortCode="RW343"
          semester="2de Semester"
          description="Inleiding tot relasionele databasisse. Kartering van relasionele model op objekmodel. Implementering van 'n databasistoepassing in die konteks van die web. Webdienste. Bediener-kant skaleerbarheid. Virtualisasie. Wolkberekening."
        />
        <ModuleEntry
          code="18139-344"
          name="Programontwerp"
          href="http://www.cs.sun.ac.za/rw344"
          shortCode="RW344"
          semester="2de Semester"
          description="Programspesifikasies as riglyne vir programontwerp; herbruikbare raamwerke vir programontwerp; toetsbaarheid van programontwerpe; ontwikkeling van 'n mediumgrootte stelsel om die praktiese toepassing van die beginsels van programontwerp te illustreer."
        />
        <ModuleEntry
          code="18139-345"
          name="Berekenaarheid en Outomaatteorie"
          href="http://www.cs.sun.ac.za/rw345"
          shortCode="RW345"
          semester="2de Semester"
          description="Inleiding tot outomaatteorie en formele tale, berekenaarheid en kompleksiteit. Regulêre tale, konteksvrye tale en grammatikas. Turing-masjiene. P teen NP-probleem en NP-volledigheid."
        />
        <ModuleEntry
          code="12263-372"
          name="Wetenskaplike Berekening"
          href="http://www.cs.sun.ac.za/wb372"
          shortCode="WB372"
          semester="1ste en 2de Semester"
          description="Wetenskaplike dokumentkonstruksie en aanbiedings in LaTeX. Regulêre uitdrukkings. Belangrike algoritmes insluitend sortering, soek en ewekansige-getalgenerasie. Gevorderde berekening in Python met Numpy en Scipy; toepassings insluitend patroonsoek, verwerking van groot empiriese datastelle en konstruksie van dataverwerking-pyplyne."
        />
      </Accordion>

      {/* Vierdejaars RW modules vir BDatSci */}
      <Accordion title="Vierdejaars RW modules vir BDatSci">
        <ModuleEntry
          code="18139-411"
          name="Rekenaarnetwerke (313*)"
          href="https://computer-science.pages.cs.sun.ac.za/computer-networks/website/"
          shortCode="RW411"
          semester="1ste Semester"
          description="Inleiding tot netwerke in die algemeen en die internet in besonder. Argitektuur en protokolle. Toewysing van hulpbronne en kongestiebeheer. Netwerksekuriteit. Netwerktoepassings. Navorsingstegirniek."
        />
        <ModuleEntry
          code="59536-414"
          name="Masjienleer"
          href="http://www.cs.sun.ac.za/rw315"
          shortCode="E414"
          semester="1ste Semester"
          description="Dimensieverminderingstegnieke; masjienleer-tegnieke gebaseer op maksimum-aanneemlikheid, maksimum-posterior en verwagtings-maksimering-skattings; modellering met behulp van logistiese regressie, Gaussiese mengsels en versteekte Markov-modelle."
        />
        <ModuleEntry
          code="18139-412"
          name="Gevorderde Algoritmes (712*)"
          href="http://algos.cs.sun.ac.za"
          shortCode="RW412"
          semester="1ste Semester"
          description="Hierdie module gaan voort van Rekenaarwetenskap 214 en dek gevorderde onderwerpe in die ontwerp en analise van algoritmes en geassosieerde datastrukture."
        />
        <ModuleEntry
          code="18139-441"
          name="Masjienleer (741*)"
          href="http://www.cs.sun.ac.za/cs741"
          shortCode="RW441"
          semester="2de Semester"
          description="Hierdie module is 'n inleiding tot geselekteerde onderwerpe in masjienleer."
        />
        <ModuleEntry
          code="18139-471"
          name="Datawetenskap Navorsingstoekenning"
          shortCode="RW471"
          semester="2de Semester"
          description="Die navorsingstoekenning bied studente 'n omvattende leerervaring wat kennis van vorige kursusse integreer."
        />
        <ModuleEntry
          code="18139-491"
          name="Ruimtewetenskap Algoritmes (791*)"
          href="https://cs.sun.ac.za/courses/space-science/"
          shortCode="RW491"
          semester="2de Semester"
          description="Algoritmes en tegnieke in Ruimtewetenskap, met toepassings."
        />
        <ModuleEntry
          code="18139-495"
          name="Funksionele Programmering (795*)"
          href="https://cs.sun.ac.za/courses/functional/"
          shortCode="RW495"
          semester="Word nie aangebied nie"
          description="Hierdie module gee 'n inleiding tot die funksionele programmeringsparadigma."
        />
      </Accordion>
    </div>
  );
}
