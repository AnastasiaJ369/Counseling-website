import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Homepage from './pages/homepage.jsx'
import Aboutme from './pages/aboutme.jsx'
import Footer from './components/footer.jsx'
import Services from './pages/services.jsx'
import Bookings from './pages/bookings.jsx'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Bookings />} />
        {/* Add other routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
