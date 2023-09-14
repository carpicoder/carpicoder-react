import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import global_en from "./translation/en/global.json"
import global_es from "./translation/es/global.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: {escapeValue: true},
  react:{
    bindI18n: 'languageChanged',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: false //   <---- this will do the magic
  },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

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
