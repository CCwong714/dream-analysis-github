import cookies from 'js-cookie';
import { createContext, useState } from 'react';

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const currentLanguageCode = cookies.get('i18next') || 'cn';
  const [languageCode, setLanguageCode] = useState(currentLanguageCode);

  const updateLanguage = (code) => {
    setLanguageCode(code);
  };

  return (
    <LanguageContext.Provider value={{ languageCode, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
