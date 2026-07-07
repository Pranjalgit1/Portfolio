// This is the entry point of the whole app — the very first JavaScript file
// that runs in the browser (see index.html, which loads this file as a <script>).
// Its only job is to find the empty <div id="root"> and render the <App /> component into it.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Global styles + Tailwind, applied to the whole app

// React.StrictMode is a development-only helper that warns about common mistakes.
// It does not affect the production build or what users see.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
