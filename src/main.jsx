import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextComp } from './context/context'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextComp>
        <App />
      </ContextComp>
    </BrowserRouter>
  </StrictMode>,
)
