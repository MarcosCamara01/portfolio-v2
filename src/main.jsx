import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next';

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: getDefaultLanguage(),
  fallbackLng: 'en',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

function getDefaultLanguage() {
  const userLanguage = navigator.language || "es";

  const languageCode = userLanguage.split("-")[0];

  if (languageCode === "es" || languageCode === "en") {
    return languageCode;
  } else {
    return "en";
  }
}

const handleLanguageChange = (newLanguage) => {
  const currentLanguage = i18next.language;
  if (currentLanguage !== newLanguage) {
    i18next.changeLanguage(newLanguage);
  }
  document.documentElement.lang = newLanguage;
};

i18next.on('languageChanged', handleLanguageChange);

const Root = () => {
  useEffect(() => {
    const currentLanguage = i18next.language;
    if (currentLanguage !== navigator.language) {
      handleLanguageChange(navigator.language);
    }
  }, []);

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);