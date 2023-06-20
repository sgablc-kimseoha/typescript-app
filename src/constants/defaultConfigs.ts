import enMessages from 'locales/en/translation.json';
import koMessages from 'locales/ko/translation.json';

interface ILocaleEntry {
  label: string;
  language: string;
  messages: any;
}

export const LOCALE_ENTRIRES: { [key: string]: ILocaleEntry } = {
  en: { label: 'english', language: 'en', messages: enMessages },
  ko: { label: 'korean', language: 'ko', messages: koMessages },
};

export const DEFAULT_LANGUAGE = 'ko';
export const GLOBAL_LANGUAGE = 'en';
