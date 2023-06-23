import { createContext, useContext, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

export const DEFAULT_LOCALE = 'ko-KR';
export const DEFAULT_LANGUAGE = 'ko';

export enum Languages {
  en = 'en',
  ko = 'ko',
}

const LocaleContext = createContext<{
  language: string;
  updateLanguage: any;
}>({
  language: 'en',
  updateLanguage: () => null,
});

export const useIntlContext = () => useContext(LocaleContext);

const I18nProvider = ({ children }: any) => {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const [messages, setMessages] = useState();
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const currentLocale = navigator.language;
    setLocale(currentLocale);
  }, []);

  useEffect(() => {
    const lang = locale.split(/[-_]/)[0];

    if (lang in Languages) updateLanguage(lang);
    else updateLanguage('en');
  }, [locale]);

  const updateLanguage = async (lang: string) => {
    setLanguage(lang);

    const translation = (await import(`./translations/${lang}.json`)).default;
    setMessages(translation);
  };

  return (
    <LocaleContext.Provider value={{ language, updateLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default I18nProvider;
