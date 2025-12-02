import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-amber-100 p-4 text-black font-bold w-full flex justify-center">
      <Link to="/" className="mr-4 text-xl">Home</Link>
      <Link to="/about" className="text-xl">About</Link>
      <Link to="/services" className="ml-4 text-xl">Services</Link>
      <Link to="/modalities" className="ml-4 text-xl">Modalities</Link>
      <Link to="/booking" className="ml-4 text-xl">Booking</Link>
      <Link to="/contact" className="ml-4 text-xl">Contact</Link>
    </nav>
  )
}

export default Navbar