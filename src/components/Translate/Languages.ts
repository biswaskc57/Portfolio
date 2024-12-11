export type LanguageType = 'en' | 'fi';

export interface WorkExperience {
    bio: string;
    frosmo: string;
    haagaHelia: string;
    tacoBell: string;
  }

  interface Projects {
    carShop: string;
    blogApp: string;
    weatherWebApp: string;
    haagaHeliaMobileApp: string;
  }

export interface LanguageStrings {
  en: WorkExperience;
  fi: WorkExperience;
}



export const languageStrings: LanguageStrings = {
  en: {
    bio: "I’m a frontend developer with 3+ years of experience in React, JavaScript, TypeScript, HTML, and CSS. At Frosmo Limited, I specialize in developing SaaS applications and UI components, collaborating with cross-functional teams to deliver high-quality solutions. Proficient in debugging, CI/CD, and end-to-end testing with Cypress, I thrive in team environments and am passionate about continuous growth. I’m currently seeking a mid/senior-level frontend developer role to contribute my expertise and tackle innovative challenges.",
    frosmo: "👨‍💻 Building dynamic, data-driven interfaces and reusable components while enhancing UI/UX, collaborating in Agile teams, and delivering customer-focused solutions.",
    haagaHelia: "👨‍💻 Developed dynamic interfaces with React and TypeScript, optimized data management with GraphQL, and collaborated with Siili Solutions on a large-scale application using scalable AWS architecture.",
    tacoBell: "👨‍💻 Managed shift operations, supervised staff for efficient service during peak hours, and optimized team workloads to maintain high service standards."
  },
  fi: {
    bio: "Olen frontend-kehittäjä, jolla on yli 3 vuoden kokemus Reactista, JavaScriptistä, TypeScriptistä, HTML:stä ja CSS:stä. Frosmo Limitedillä kehität SaaS-sovelluksia ja käyttöliittymäkomponentteja. Osaan virheenkorjauksen, CI/CD-putket ja testauksen Cypressillä. Etsin uusia mahdollisuuksia, joissa voin käyttää osaamistani ja kehittää itseäni.",
    frosmo: "👨‍💻 Rakentamassa dynaamisia, dataohjattuja käyttöliittymiä ja uudelleenkäytettäviä komponentteja, parantamassa UI/UX:ää, tekemässä yhteistyötä Agile-tiimien kanssa ja toimittamassa asiakaslähtöisiä ratkaisuja.",
    haagaHelia: "👨‍💻 Kehitti dynaamisia käyttöliittymiä Reactilla ja TypeScriptillä, optimoi datanhallintaa GraphQL:llä ja teki yhteistyötä Siili Solutionsin kanssa laajamittaisessa sovellusprojektissa käyttäen skaalautuvaa AWS-arkkitehtuuria.",
    tacoBell: "👨‍💻 Hallinnoi vuoroja, valvoi henkilökuntaa ruuhka-aikoina ja jakoi tehtävät, jotta palvelu pysyi laadukkaana."
  }
};

export default languageStrings;
