import { StrictMode,createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const countingContext=createContext();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
   
  </StrictMode>,
)

// export default countingContext;