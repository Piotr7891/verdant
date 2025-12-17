import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './translations';

type Language = 'ro' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.ro;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ro');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ro' ? 'en' : 'ro'));
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};