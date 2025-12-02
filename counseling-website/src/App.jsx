import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Homepage from './pages/homepage.jsx'
import Aboutme from './pages/aboutme.jsx'
import Footer from './components/footer.jsx'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutme />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
