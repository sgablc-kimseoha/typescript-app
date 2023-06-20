import { createContext, useEffect, useState } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import {
  LANGUAGE_LIST,
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
  const [messages, setMessages] = useState({});
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const currentLocale = navigator.language;
    setLocale(currentLocale);
  }, []);

  useEffect(() => {
    const lang = locale.split('-')[0];
    updateLanguage(lang);
  }, [locale]);

  useEffect(() => {
    setMessages(LANGUAGE_LIST[language]);
  }, [language]);

  const updateLanguage = async (lang: string) => {
    if (LANGUAGE_LIST[lang]) setLanguage(lang);
    else setLanguage(GLOBAL_LANGUAGE);
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
