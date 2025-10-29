import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from './locales/fr.json';
import en from './locales/en.json';
import pt from './locales/pt.json';
import { i18nConfig } from './config';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ...i18nConfig,
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      pt: { translation: pt }
    }
  });

export default i18n;