import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { languageStrings, LanguageType, WorkExperience,  } from '../Translate/Languages';


interface LanguageContextType {
  selectedLanguage: LanguageType;
  setSelectedLanguage: (lang: LanguageType) => void;
  language: WorkExperience;
  isModelOpen: boolean;
   setIsModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>('en');
  const storedLanguage = localStorage.getItem('selectedLanguage') as LanguageType | null;
  const [language, setLanguage] = useState(storedLanguage ? languageStrings[storedLanguage] : languageStrings[selectedLanguage]);

  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    setLanguage(languageStrings[selectedLanguage]);
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, language, isModelOpen, setIsModelOpen  }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
