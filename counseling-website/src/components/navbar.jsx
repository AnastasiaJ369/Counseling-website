import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/hh_logo_template.webp'

const Navbar = () => {
  return (
    <nav className='bg-purple-500 p-4 text-black font-bold w-full flex flex-col items-center justify-center'>
        <img src={logoImage} alt='Head and Heart Healing Logo' className='w-12 h-12 object-cover'/>
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