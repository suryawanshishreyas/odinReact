import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import General from './components/general.jsx'
import Education from './components/education.jsx'
import NextButton from './components/nextButton.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <NextButton/>
  </StrictMode>
)
