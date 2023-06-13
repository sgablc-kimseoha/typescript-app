import { useEffect, useState } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { defaultLocale } from 'constants/default';
import localeEntry from 'texts/localeEntry';

const IntlProvider = ({ children }: any) => {
  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState();

  useEffect(() => {
    const currentLocale = navigator.language;
    setLocale(currentLocale);
  }, []);

  useEffect(() => {
    const lang = locale.split('-')[0];
    const currentMessage = localeEntry[lang];

    if (currentMessage) setMessages(currentMessage);
    else setMessages(localeEntry.en);
  }, [locale]);

  return (
    <ReactIntlProvider locale={locale} messages={messages}>
      {children}
    </ReactIntlProvider>
  );
};

export default IntlProvider;
