import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-amber-100 p-4 text-black font-bold w-full flex items-center justify-center'>
      <div className='flex gap-4'>
        <Link to="/" className="text-xl">Home</Link>
        <Link to="/about" className="text-xl">About</Link>
        <Link to="/services" className="text-xl">Services</Link>
        <Link to="/booking" className="text-xl">Booking</Link>
        <Link to="/contact" className="text-xl">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar