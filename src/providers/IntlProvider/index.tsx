import { createContext, useEffect, useState } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import {
  LOCALE_ENTRIRES as entries,
  DEFAULT_LANGUAGE,
  GLOBAL_LANGUAGE,
} from 'constants/defaultConfigs';

const LocaleContext = createContext<{
  language: string;
  updateLanguage: any;
}>({
  language: GLOBAL_LANGUAGE,
  updateLanguage: () => null,
});

const IntlProvider = ({ children }: any) => {
  const [locale, setLocale] = useState(DEFAULT_LANGUAGE);
  const [messages, setMessages] = useState();
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const lo = navigator.language;
    setLocale(lo);
  }, []);

  useEffect(() => {
    const lang = locale.split('-')[0];
    updateLanguage(lang);
  }, [locale]);

  const updateLanguage = (lang: string) => {
    const entry = entries[lang];

    if (entry) {
      setLanguage(entry.language);
      setMessages(entry.messages);
    } else {
      const globalEntry = entries[GLOBAL_LANGUAGE];
      setLanguage(globalEntry.language);
      setMessages(globalEntry.messages);
    }
  };

  return (
    <LocaleContext.Provider value={{ language, updateLanguage }}>
      <ReactIntlProvider locale={locale} messages={messages}>
        {children}
      </ReactIntlProvider>
    </LocaleContext.Provider>
  );
};

export default IntlProvider;
