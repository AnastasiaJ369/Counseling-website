import React from 'react'
import officeImage from '../assets/Modern-Small-Office-Building.jpg'
import button from '../components/button.jsx'

const Homepage = () => {
  return (
    <div className='bg-purple-100 mt-8 mb-12'>
      <div className='flex flex-col items-center justify-center mt-8 mb-8'>
        <img src={officeImage} alt='Office Building' className='w-100 h-80 object-cover animate-fade-in'/>
      <div className='w-10/12 flex flex-col items-center justify-center mt-6 mb-6 animate-fade-in'>
        <h1 className='flex justify-center items-center text-2xl font-cursive italic font-bold mt-3 mb-3'>
          Welcome to Head and Heart Healing
        </h1>
        <p className='flex justify-center items-center text-1xl font-cursive italic'>
          At Head and Heart Healing, we are dedicated to providing personalized and compassionate counseling services
          tailored to the specific needs of each individual or group. Whether it's support for anxiety, depressison,
          marriage or family counseling, our experienced therapists are here to help you along your journey to improve
          your mental and emotional well-being.
        </p>
        <p2 className='flex justify-center items-center text-1xl font-cursive italic mt-3'>
          Located at 123 Main Street, Daytona Beach, FL 32117, we welcome you to visit our offices or, click the button
          below or call at 123-456-7890 to schedule an appointment. We look forward to hearing from you!
        </p2>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center mt-6 mb-6'>
      {button()}
      <p3 className='bg-purple-100 flex justify-center items-center text-1xl font-cursive italic bold mt-6 items-center'>
        Office Hours
          <div>Monday:9am - 5pm</div>
          <div>Tuesday: 9am - 5pm</div>
          <div>Wednesday: 9am - 5pm</div>
          <div>Thursday: 9am - 5pm</div>  
          <div>Friday: Closed</div>
          <div>Saturday: 9am - 1pm</div>
          <div>Sunday: Closed</div>
      </p3>
    </div>
    </div>
  )
}

export default Homepage