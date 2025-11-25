import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // This import is CRITICAL for styles to work

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)