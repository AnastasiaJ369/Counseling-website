import React from 'react'
import officeImage from '../assets/Modern-Small-Office-Building.jpg';

const Homepage = () => {
  return (
    <div className='min-h-96 max-w-1xl flex flex-col items-center justify-center bg-amber-100 text-black p-4 mt-8 
    mr-10 ml-10'>
      <img src={officeImage} alt='Office Building' className='w-100 h-80 object-cover'/>
      <h1 className='text-2xl font-cursive font-bold mt-3 mb-3'>
        Welcome to Head and Heart Healing
      </h1>
    </div>
  )
}

export default Homepage