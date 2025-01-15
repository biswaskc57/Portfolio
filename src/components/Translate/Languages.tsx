import React from 'react';
import Link from '../Atoms/Link/Link';

// LanguageType for languages
export type LanguageType = 'en' | 'fi' | 'ne';

// Define Description interface with JSX.Element for intro
export interface Description {
  greeting: string;
  intro: JSX.Element; // Use JSX.Element for React elements
  bio: JSX.Element;
  frosmo: string;
  haagaHelia: string;
  tacoBell: string;
  Navigation: NavigationItems;
  languageTypes: Languages;
  languageSelector: string;
  contact: contactDetails;
}

// Contact details
export interface contactDetails {
  name: string;
  email: string;
  phoneNumber: string;
  text: string;
}

// Navigation items
export interface NavigationItems {
  Home: string;
  About: string;
  Projects: string;
  Experience: string;
  Contact: string;
}

// LanguageStrings interface to handle language-specific descriptions
export interface LanguageStrings {
  en: Description;
  fi: Description;
  ne: Description;
}

// Language types to represent language names
export interface Languages {
  en: string;
  fi: string;
  ne: string;
}


function getUniversityLink (universityName: string) : React.JSX.Element {
  return (<Link href="https://www.haaga-helia.com" target = "_blank" showLink={true} iconSize='small'> {universityName}</Link>);
}

// Example language data with JSX elements
export const languageStrings: LanguageStrings = {
  en: {
    greeting: "Hi, I am Biswas K C",
    intro: (
      <div>
        <p>
          I have over 3 years of professional experience in <code>React</code> and <code>TypeScript</code>, 
          specializing in front-end development.
        </p>
        <p>
        Currently, I am pursuing a Master&apos;s degree in AI for Business Transformation at {getUniversityLink("Haaga-helia")}.
        </p>
      </div>
    ),
    bio: (
      <div>
        <p>
          I was born in Kathmandu, Nepal, and grew up surrounded by a rich cultural heritage and beautiful landscapes. In 2013,
           I moved to Seinäjoki, Finland, to pursue a Bachelor of Business Administration (BBA) in International Business,
            specializing in business operations. After graduating in 2017, I relocated to Helsinki to begin my professional journey.
        </p>
        <p>
          From 2018 to 2021, I worked as an Assistant Manager at Taco Bell, where I developed strong leadership, teamwork, and
           operational management skills. This role helped me enhance my problem-solving and organizational abilities as I
            managed shifts, trained staff, and ensured smooth operations during peak times.
        </p>
        <p>
          Driven by my growing interest in technology, I pursued a second BBA degree in Business and Information Technology
           at Haaga-Helia University of Applied Sciences. Specializing in software development, I graduated in 2023, gaining
           expertise in modern technologies such as <code>React</code>, <code>TypeScript</code>, <code>GraphQL</code>, and <code>AWS</code>.
        </p>
        <p>
          During my studies, I worked on an impactful collaboration with Siili Solutions, where I contributed to software development
           projects using <code>TypeScript</code>, <code>React</code>, and <code>AWS</code>. This experience strengthened my
            technical skills and expanded my ability to work effectively with cross-functional teams to deliver scalable and high-quality solutions.
        </p>
        <p>
          From 2021 to January 2025, I worked as a Frontend Developer at Frosmo Oy in Helsinki, where I designed and developed responsive
           user interfaces with <code>React</code> and <code>TypeScript</code>. In addition to my technical work, I utilized project
            management tools like <code>Jira</code> and <code>Confluence</code> to manage tasks and facilitate collaboration within
             Agile teams. This experience sparked my growing interest in project management, particularly in leading AI-driven projects.
        </p>
        <p>
          In 2025, I am excited to start my Master’s Degree in Artificial Intelligence for Business Transformation at Haaga-Helia UAS.
           This program will allow me to dive deeper into the potential of AI to transform business operations, and I am eager to apply
            AI-driven solutions to project management and innovation. My long-term goal is to leverage both my technical and leadership
             expertise to lead AI-related projects and drive impactful solutions.
        </p>
        <p>
          As I look to the future, I am particularly interested in project management roles where I can apply my experience in both
           technology and leadership to guide AI projects to successful completion. I aim to combine my expertise in software development,
            AI, and project management to make meaningful contributions to organizations and help shape the future of technology-driven businesses.
        </p>
        <p>
          I am actively seeking summer job opportunities that align with my growing project management
           aspirations. I am excited to take on roles where I can lead or support AI-driven projects, contributing to their successful delivery
            while collaborating with diverse teams. These experiences will allow me to combine my technical background with emerging leadership
             skills and explore the full potential of AI in project management.
        </p>
      </div>
    )
    
    
    ,
    frosmo: "👨‍💻 Building dynamic, data-driven interfaces and reusable components while enhancing UI/UX, collaborating in Agile teams, and delivering customer-focused solutions.",
    haagaHelia: "👨‍💻 Developed dynamic interfaces with React and TypeScript, optimized data management with GraphQL, and collaborated with Siili Solutions on a large-scale application using scalable AWS architecture.",
    tacoBell: "👨‍💻 Managed shift operations, supervised staff for efficient service during peak hours, and optimized team workloads to maintain high service standards.",
    Navigation: {
      Home: "Home",
      About: "About",
      Projects: "Projects",
      Experience: "Experience",
      Contact: "Contact",
    },
    languageTypes: {
      en: "English",
      fi: "Finnish",
      ne: "Nepali",
    },
    languageSelector: "Select language",
    contact: {
      name: "Name",
      email: "Email",
      phoneNumber: "Phone Number",
      text: "Text",
    },
  },
  fi: {
    greeting: "Hei, olen Biswas K C",
    intro: (
      <div>
        <p>
          Minulla on yli 3 vuoden ammattikokemus <code>React</code>- ja <code>TypeScript</code>
          -teknologioista Frosmo Oy:ssä, ja erikoistun front-end-kehitykseen.
        </p>
        <p>
          Opiskelen {getUniversityLink("Haaga-helia ammattikorkeakoulussa")} AI for Business Transformation maisteriohjelmassa.
        </p>
      </div>
    ),
    bio: (
      <div>
        <p>
          Olen kotoisin Kathmandusta, Nepalista, ja kasvoin rikasta kulttuuria ja kauniita maisemia ympäröimänä. Vuonna 2013 muutin
           Seinäjoelle, Suomeen, opiskellakseni liiketalouden kandidaatin tutkintoa (BBA) kansainvälisessä liiketoiminnassa, erikoistuen
            liiketoiminnan operaatioihin. Valmistuin vuonna 2017 ja muutin pian Helsinkiin aloittaakseni ammatillisen urani.
        </p>
        <p>
          Vuodesta 2018 vuoteen 2021 työskentelin assistenttipäällikkönä Taco Bellissä, missä sain vahvaa johtamis-, tiimityöskentely- ja
           operatiivisen hallinnan kokemusta. Tämä rooli kehitti ongelmanratkaisu- ja organisaatiotaitojani, kun johdin vuoroja, koulutin
            henkilöstöä ja varmistin sujuvat toiminnot kiireisinä aikoina.
        </p>
        <p>
          Kasvava kiinnostukseni teknologiaan sai minut suorittamaan toisen BBA-tutkinnon liiketoiminnan ja tietotekniikan alalla Haaga-Helian
           ammattikorkeakoulussa. Erikoistuin ohjelmistokehitykseen ja valmistuin vuonna 2023, jolloin sain asiantuntemusta nykyaikaisista
            teknologioista kuten <code>React</code>, <code>TypeScript</code>, <code>GraphQL</code> ja <code>AWS</code>.
        </p>
        <p>
          Opintojeni aikana työskentelin merkittävässä yhteistyössä Siili Solutionsin kanssa, jossa osallistuin ohjelmistokehitysprojekteihin
           käyttäen <code>TypeScript</code>, <code>React</code> ja <code>AWS</code>. Tämä kokemus vahvisti teknisiä taitojani ja laajensi 
           kykyäni työskennellä tehokkaasti monitoimisten tiimien kanssa ja tuottaa skaalautuvia ja korkealaatuisia ratkaisuja.
        </p>
        <p>
          Vuodesta 2021 tammikuuhun 2025 työskentelin Frontend-kehittäjänä Frosmo Oy:ssä Helsingissä, jossa suunnittelin ja kehitin
           responsiivisia käyttöliittymiä käyttäen <code>React</code> ja <code>TypeScript</code>. Teknisen työn lisäksi hyödynsin
            projektinhallintatyökaluja kuten <code>Jira</code> ja <code>Confluence</code> hallitakseni tehtäviä ja edistääkseni
             yhteistyötä ketterissä tiimeissä. Tämä kokemus herätti kasvavan kiinnostukseni projektinhallintaa kohtaan, erityisesti 
             AI-hankkeiden johtamiseen.
        </p>
        <p>
          Vuonna 2025 olen innokas aloittamaan maisterin tutkinnon tekoälystä liiketoiminnan transformaatioon Haaga-Helian ammattikorkeakoulussa.
           Tämä ohjelma antaa minulle mahdollisuuden syventyä tekoälyn muutosvoimaan liiketoimintaprosesseissa, ja olen innostunut soveltamaan
            tekoälyratkaisuja projektinhallintaan ja innovaatioon. Pitkän aikavälin tavoitteeni on yhdistää tekninen ja johtamisosaaminen ja 
            johtaa tekoälyhankkeita, jotka tuottavat vaikuttavia ratkaisuja.
        </p>
        <p>
          Katsoessani tulevaisuuteen, olen erityisen kiinnostunut projektinhallintatehtävistä, joissa voin soveltaa kokemustani teknologian
           ja johtamisen alalta ohjaamalla tekoälyprojekteja menestyksekkäästi. Tavoitteeni on yhdistää ohjelmistokehityksessä, tekoälyssä
            ja projektinhallinnassa hankkimani asiantuntemus ja tehdä merkittäviä panoksia organisaatioille ja auttaa muovaamaan teknologiaan
             perustuvia liiketoimintaratkaisuja.
        </p>
        <p>
          Etsin aktiivisesti kesätyömahdollisuuksia, jotka vastaavat kasvavia projektinhallintatavoitteitani.
           Olen innostunut ottamaan vastaan rooleja, joissa voin johtaa tai tukea tekoälyhankkeita varmistaen niiden onnistuneen toteutuksen
            ja tekemällä yhteistyötä monien eri tiimien kanssa. Nämä kokemukset auttavat minua yhdistämään teknisen taustan ja nousevat
             johtamistaidot, samalla kun tutkin tekoälyn täyden potentiaalin projektinhallinnassa.
        </p>
      </div>
    )
    ,
    frosmo: "👨‍💻 Rakentamassa dynaamisia, dataohjattuja käyttöliittymiä ja uudelleenkäytettäviä komponentteja, parantamassa UI/UX:ää, tekemässä yhteistyötä Agile-tiimien kanssa ja toimittamassa asiakaslähtöisiä ratkaisuja.",
    haagaHelia: "👨‍💻 Kehitti dynaamisia käyttöliittymiä Reactilla ja TypeScriptillä, optimoi datanhallintaa GraphQL:llä ja teki yhteistyötä Siili Solutionsin kanssa laajamittaisessa sovellusprojektissa käyttäen skaalautuvaa AWS-arkkitehtuuria.",
    tacoBell: "👨‍💻 Hallinnoi vuoroja, valvoi henkilökuntaa ruuhka-aikoina ja jakoi tehtävät, jotta palvelu pysyi laadukkaana.",
    Navigation: {
      Home: "Kotisivu",
      About: "Tietoa",
      Projects: "Projektit",
      Experience: "Kokemus",
      Contact: "Yhteystiedot",
    },
    languageTypes: {
      en: "Englanti",
      fi: "Suomi",
      ne: "Nepali",
    },
    languageSelector: "Valitse kieli",
    contact: {
      name: "Nimi",
      email: "Sähköposti",
      phoneNumber: "Puhelinnumero",
      text: "Teksti",
    },
  },
  ne: {
    greeting: "म बिस्वास के सी हुँ",
    intro: (
      <div>
        <p>
          मलाई <code>React</code> र <code>TypeScript</code> मा ३ वर्षभन्दा बढीको व्यावसायिक अनुभव छ, र म फ्रन्ट-एन्ड विकासमा विशेषज्ञता राख्छु।
        </p>
        <p>
          म {getUniversityLink("Haaga-helia")} मा AI for Business Transformation मा मास्टरको अध्ययन गर्दैछु।
        </p>
      </div>
    ),
    bio: (
      <div>
        <p>
          म काठमाडौँ, नेपालमा जन्मेँ र यहाँको समृद्ध संस्कृति र सुन्दर प्रकृतिमा हुर्केँ। २०१३ मा मैले 
          Finland को Seinäjoki सहरमा International Business मा Bachelor
           of Business Administration (BBA) अध्ययन गर्नका लागि स्थानान्तरण गरेँ। 
           २०१७ मा मैले स्नातक पूरा गरेँ र पछि हेल्सinki सहरमा मेरो करियर सुरु गर्नका लागि सरेँ।
        </p>
        <p>
          २०१८ देखि २०२१ सम्म, मैले Taco Bell मा Assistant Managerको रूपमा काम गरेँ,
           जहाँ मैले नेतृत्व, टोली कार्य, र सञ्चालन व्यवस्थापनमा मूल्यवान अनुभव प्राप्त गरेँ। यस भूमिकाले 
           मलाई शिफ्ट व्यवस्थापन, कर्मचारी प्रशिक्षण, र व्यस्त घण्टाहरूमा सहज सञ्चालन सुनिश्चित गर्न समस्या समाधानका सीपमा सघायो।
        </p>
        <p>
          प्रविधिप्रति बढ्दो चासोले मलाई Haaga-Helia University of Applied Sciences मा Business
           and Information Technology मा दोस्रो BBA डिग्री अध्ययन गर्न प्रेरित गर्यो। सफ्टवेयर विकासमा विशेषज्ञता
            हासिल गर्दै मैले २०२३ मा <code>React</code>, <code>TypeScript</code>, <code>GraphQL</code>,
             र <code>AWS</code> जस्ता उपकरणमा दक्षता प्राप्त गरेँ।
        </p>
        <p>
          २०२० मा, मैले Haaga-Helia UAS का लागि सफ्टवेयर विकास परियोजनामा काम गर्न सुरु गरेँ, जसमा Siili Solutions
           सँगको ठुलो स्तरको सहकार्य पनि समावेश छ। यी अनुभवहरूले मलाई मेरा प्राविधिक सीपहरू सुधार्न र नवीनतम अनुप्रयोगहरूमा काम गर्न मद्दत पुर्यायो।
        </p>
        <p>
          अहिले, म Helsinki स्थित Frosmo Oy मा Frontend Developerको रूपमा काम गर्दैछु, जहाँ म <code>React</code>
           र <code>TypeScript</code> प्रयोग गरेर उत्तरदायी प्रयोगकर्ता इन्टरफेस डिजाइन र विकास गर्दछु। म पुनः प्रयोग गर्न सकिने
            कम्पोनेन्टहरू सिर्जना गर्न र क्लाइन्टको आवश्यकताअनुसार उच्च गुणस्तरीय सफ्टवेयर समाधानहरू प्रदान गर्न Agile टोलीहरूसँग
             सहकार्य गर्न ध्यान केन्द्रित गर्दैछु।
        </p>
        <p>
          आगामी २०२५ को सुरुमा, म Haaga-Helia UAS मा Artificial Intelligence for Business Transformation
           मा मास्टर डिग्री सुरु गर्न उत्साहित छु। यस कार्यक्रमले मलाई AI को मद्दतले व्यापारलाई नयाँ तरिकामा परिवर्तन गर्न र नवप्रवर्तनको
            दिशामा बढावा दिनको लागि अध्ययन गर्ने अवसर दिनेछ।
        </p>
      </div>
    ),
    frosmo: "👨‍💻 गतिशील, डाटा-चालित इन्टरफेस र पुनः प्रयोग गर्न सकिने कम्पोनेन्टहरू निर्माण गर्दै, UI/UX सुधार गर्दै, र Agile टोलीहरूसँग सहकार्य गर्दै।",
    haagaHelia: "👨‍💻 React र TypeScript संग गतिशील इन्टरफेस विकास गर्दै, GraphQL संग डाटा व्यवस्थापनलाई अनुकूलित गर्दै, र Siili Solutions को साथ स्केलेबल AWS आर्किटेक्चर प्रयोग गर्दै ठूलो अनुप्रयोग परियोजनामा सहकार्य गर्दै।",
    tacoBell: "👨‍💻 सिफ्ट सञ्चालन व्यवस्थापन गर्दै, कर्मचारीहरूलाई व्यस्त समयमा सुपरभाइज गर्दै, र उच्च सेवा मापदण्डहरू कायम राख्न टोलीको कार्यभार अनुकूलन गर्दै।",
    Navigation: {
      Home: "गृहपृष्ठ",
      About: "बारेमा",
      Projects: "परियोजनाहरू",
      Experience: "अनुभव",
      Contact: "सम्पर्क",
    },
    languageTypes: {
      en: "अंग्रेजी",
      fi: "फिनिश",
      ne: "नेपाली",
    },
    languageSelector: "भाषा छान्नुहोस्",
    contact: {
      name: "नाम",
      email: "इमेल",
      phoneNumber: "फोन नम्बर",
      text: "सन्देश",
    },
  },
};


