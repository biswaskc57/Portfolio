import React from 'react';

// LanguageType for languages
export type LanguageType = 'en' | 'fi' | 'ne';

// Define Description interface with JSX.Element for intro
export interface Description {
  greeting: string;
  intro: JSX.Element; // Use JSX.Element for React elements
  bio: string;
  frosmo: string;
  haagaHelia: string;
  tacoBell: string;
  Navigation: NavigationItems;
  languageTypes: Languages;
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

// Example language data with JSX elements
export const languageStrings: LanguageStrings = {
  en: {
    greeting: "Hi, I am Biswas K C",
    intro: (
      <div>
        <p>
          I have over 3 years of professional experience in <code>React</code> and <code>TypeScript</code>, specializing in front-end development.
        </p>
        <p>
          I&apos;m a Master&apos;s student in AI for Business Transformation at Haaga-Helia University.
        </p>
      </div>
    ),
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
          Olen Haaga-Helian AI for Business Transformation maisteriohjelman opiskelija.
        </p>
      </div>
    ),
    bio: "म फ्रन्टएन्ड विकासकर्ता हुँ, जसले React, JavaScript, TypeScript, HTML, र CSS मा ३+ वर्षको अनुभव संग काम गरिरहेको छु। Frosmo Limited मा म SaaS अनुप्रयोगहरू र UI कम्पोनेन्टहरू विकास गर्दैछु। म डिबगिङ, CI/CD, र Cypress संग अन्त्यदेखि अन्त्य परीक्षणमा दक्ष छु। म नयाँ चुनौतीहरू समाधान गर्न र आफ्नो विशेषज्ञता योगदान गर्न उत्सुक छु।",
    frosmo: "👨‍💻 गतिशील, डाटा-चालित इन्टरफेस र पुनः प्रयोग गर्न सकिने कम्पोनेन्टहरू निर्माण गर्दै, UI/UX सुधार गर्दै, र Agile टोलीहरूसँग सहकार्य गर्दै।",
    haagaHelia: "👨‍💻 React र TypeScript संग गतिशील इन्टरफेस विकास गर्दै, GraphQL संग डाटा व्यवस्थापनलाई अनुकूलित गर्दै, र Siili Solutions को साथ स्केलेबल AWS आर्किटेक्चर प्रयोग गर्दै ठूलो अनुप्रयोग परियोजनामा सहकार्य गर्दै।",
    tacoBell: "👨‍💻 सिफ्ट सञ्चालन व्यवस्थापन गर्दै, कर्मचारीहरूलाई व्यस्त समयमा सुपरभाइज गर्दै, र उच्च सेवा मापदण्डहरू कायम राख्न टोलीको कार्यभार अनुकूलन गर्दै।",
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
          म Haaga-Helia विश्वविद्यालयमा <code>AI for Business Transformation</code> मा मास्टरको अध्ययन गर्दैछु।
        </p>
      </div>
    ),
    bio: "म फ्रन्टएन्ड विकासकर्ता हुँ, जसले React, JavaScript, TypeScript, HTML, र CSS मा ३+ वर्षको अनुभव...",
    frosmo: "👨‍💻 गतिशील इन्टरफेस र पुनः प्रयोग गर्न सकिने कम्पोनेन्टहरू निर्माण गर्दै...",
    haagaHelia: "👨‍💻 React र TypeScript संग गतिशील इन्टरफेस विकास गर्दै...",
    tacoBell: "👨‍💻 सिफ्ट सञ्चालन व्यवस्थापन गर्दै...",
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
    contact: {
      name: "नाम",
      email: "इमेल",
      phoneNumber: "फोन नम्बर",
      text: "सन्देश",
    },
  },
};


