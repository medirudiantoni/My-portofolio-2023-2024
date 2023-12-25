import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RootProvider } from './context/RootContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RootProvider>
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </RootProvider>,
)
