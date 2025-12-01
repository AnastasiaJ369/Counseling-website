import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Homepage from './pages/homepage.jsx'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App
