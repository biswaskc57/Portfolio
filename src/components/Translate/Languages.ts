export type LanguageType = 'en' | 'fi' | 'ne';

export interface Description {
  greeting: string,
  intro: string;
  bio: string;
  frosmo: string;
  haagaHelia: string;
  tacoBell: string;
  Navigation: NavigationItems;
  languageTypes: Languages;
}

export interface NavigationItems {
  Home: string;
  About: string;
  Projects: string;
  Experience: string;
  Contact: string;
}

export interface LanguageStrings {
  en: Description;
  fi: Description;
  ne: Description;
}

export interface Languages {
  en: string;
  fi: string;
  ne: string;
}

export const languageStrings: LanguageStrings = {
  en: {
    greeting: "Hi, I am Biswas K C",
    intro: "I'm a Web Developer with 3+ years in React and TypeScript, specializing in SaaS and UI components. Currently studying AI for Business Transformation, I aim to leverage AI to drive innovation and help businesses grow.",
    bio: "I’m a frontend developer with 3+ years of experience in React, JavaScript, TypeScript, HTML, and CSS. At Frosmo Limited, I specialize in developing SaaS applications and UI components, collaborating with cross-functional teams to deliver high-quality solutions. Proficient in debugging, CI/CD, and end-to-end testing with Cypress, I thrive in team environments and am passionate about continuous growth. I’m currently seeking a mid/senior-level frontend developer role to contribute my expertise and tackle innovative challenges.",
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
  },
  fi: {
    greeting: "Hei, olen Biswas K C",
    intro: "Olen web-kehittäjä, jolla on yli 3 vuoden kokemus Reactista ja TypeScriptistä. Erikoistun SaaS-sovelluksiin ja käyttöliittymiin. Opiskelen tekoälyä liiketoiminnan kehittämiseen ja etsin haasteita, joissa voin auttaa yrityksiä hyödyntämään teknologiaa.",
    bio: "Olen frontend-kehittäjä, jolla on yli 3 vuoden kokemus Reactista, JavaScriptistä, TypeScriptistä, HTML:stä ja CSS:stä. Frosmo Limitedillä kehität SaaS-sovelluksia ja käyttöliittymäkomponentteja. Osaan virheenkorjauksen, CI/CD-putket ja testauksen Cypressillä. Etsin uusia mahdollisuuksia, joissa voin käyttää osaamistani ja kehittää itseäni.",
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
  },
  ne: {
    greeting: "म बिस्वास के सी हुँ|",
    intro: "म वेब विकासकर्ता हुँ, जसको ३+ वर्षको अनुभव React र TypeScript मा छ, र SaaS अनुप्रयोग र UI कम्पोनेंटहरूमा काम गरेको छु। अहिले म व्यापारमा एआईको उपयोग गर्नको लागि मास्टर अध्ययन गर्दै छु। म नयाँ चुनौतीहरू स्वीकार गर्न र व्यापारको वृद्धिमा सहयोग गर्न चाहन्छु।",
    bio: "म फ्रन्टएन्ड विकासकर्ता हुँ, जसले React, JavaScript, TypeScript, HTML, र CSS मा ३+ वर्षको अनुभव संग काम गरिरहेको छु। Frosmo Limited मा म SaaS अनुप्रयोगहरू र UI कम्पोनेन्टहरू विकास गर्दैछु। म डिबगिङ, CI/CD, र Cypress संग अन्त्यदेखि अन्त्य परीक्षणमा दक्ष छु। म नयाँ चुनौतीहरू समाधान गर्न र आफ्नो विशेषज्ञता योगदान गर्न उत्सुक छु।",
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
  },
};

export default languageStrings;
