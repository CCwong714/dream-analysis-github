import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    
    supportedLngs: ['cn', 'en', 'my', 'th'],
    fallbackLng: 'cn',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        'cookie',
        'htmlTag',        
        'localStorage',
        'querystring',
        'sessionStorage',
        'navigator',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
