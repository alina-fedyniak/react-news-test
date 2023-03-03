import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/common.json';
import translationUA from './locales/ua/common.json';

export const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
});

export { i18n }
