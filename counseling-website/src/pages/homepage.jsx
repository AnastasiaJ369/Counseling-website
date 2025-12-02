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
      <p className='text-1xl font-cursive'>
        At Head and Heart Healing, we are dedicated to providing personalized and compassionate counseling services
        tailored to the specific needs of each individual or group. Whether it's support for anxiety, depressison,
        marriage or family counseling, our experienced therapists are here to help you along your journey to improve
        your mental and emotional well-being.
      </p>
      <p2 className='text-1xl font-cursive mt-3'>
        Located at 123 Main Street, Daytona Beach, FL 32117, we welcome you to visit our offices or, click the button
        below or call at 123-456-7890 to schedule an appointment. We look forward to hearing from you!
      </p2>
      <button className='mt-6 border-black rounded-md border-3 bg-orange-300 w-64 h-16'>Schedule an Appointment</button>
      <iframe className='mt-6' width="600" height="450"
        style={{border: 0}}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.97072582554!2d-81.01707785965931!3d29.224415575449378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6da3c0b207649%3A0xfa1cd5c2564a8e39!2s123%20Main%20St%2C%20Daytona%20Beach%2C%20FL%2032118!5e0!3m2!1sen!2sus!4v1764689444347!5m2!1sen!2sus">
      </iframe>
    </div>
  )
}

export default Homepage