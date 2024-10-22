import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppCat from './AppCat.jsx'
import Separation from './Separation.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Separation /> 
    <AppCat />
  </StrictMode>,
)
