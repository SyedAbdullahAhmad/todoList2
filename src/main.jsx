import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LoginPage from './LoginPage.jsx'
import SignupPage from './SignupPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/SignupPage' element={<SignupPage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
