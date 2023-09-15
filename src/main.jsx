import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import global_en from "./translation/en/global.json"
import global_es from "./translation/es/global.json"
import global_pt from "./translation/pt/global.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: 'es',
    resources: {
      es: {
        global: global_es
      },
      en: {
        global: global_en
      },
      pt: {
        global: global_pt
      }
    },
    detection: {
      order: ['localStorage', 'navigator'],
      convertDetectedLanguage: (lng) => lng.split('-')[0],
    },
    
    lookupLocalStorage: 'lng',
  });

  const detectedLanguage = i18next.language;
  if (detectedLanguage.split('-')[0] !== 'es' && detectedLanguage.split('-')[0] !== 'en' && detectedLanguage.split('-')[0] !== 'pt') {
    // Establece manualmente 'es' como el idioma predeterminado en localStorage
    i18next.language = "es";
    localStorage.setItem('i18nextLng', 'es');
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </I18nextProvider>
  // </React.StrictMode>,
)
