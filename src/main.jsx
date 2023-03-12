import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next';

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  fallbackLng: 'es',
  resources: {
    es:{
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

const handleLanguageChange = () => {
  const currentLanguage = i18next.language;
  document.documentElement.lang = currentLanguage;
};

i18next.on('languageChanged', handleLanguageChange);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
