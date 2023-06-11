import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { defaultLocale } from 'constants/default';
import { locales } from 'texts/locales';

const LocaleProvider = ({ children }: any) => {
    const [locale, setLocale] = useState(defaultLocale);
    const [messages, setMessages] = useState({});

    useEffect(() => {
        const currentLocale = navigator.language;
        if (currentLocale !== defaultLocale) {
            setLocale('en-US');
        }
    }, []);

    useEffect(() => {}, [locale]);

    return (
        <IntlProvider locale={locale} messages={messages}>
            {children}
        </IntlProvider>
    );
};

export default LocaleProvider;
