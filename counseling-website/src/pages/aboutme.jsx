import React from 'react'
import headshotImage from '../assets/Headshot.jpeg'


const Aboutme = () => {
  return (
    <div>
      <div className='text-6xl text-white font-cursive font-bold italic mt-8 mb-8 flex justify-center'>
            About Me
      </div>
      <div className='min-h-96 max-w-1xl flex flex-col items-center justify-center bg-amber-100 text-black p-4 mt-8 
      mr-10 ml-10'>
        {/* To place text next to image: flex justify-between items-center mx-auto max-w-4xl */}
        <div className='px-1 w-full flex justify-between items-center mx-auto max-w-4xl'>
          {/* For a square image, change to circular: aspect-square, object-cover, rounded-full border-3*/}
          <img src={headshotImage} alt='Example Headshot' className='flex float-left mt-18 mr-20 justify-center w-72 h-72 aspect-square object-cover rounded-full border-3'/>
          <p1 className= 'text-lg float-right mt-24 justify-center mb-24'>
            Hello! Welcome to Head and Heart Healing! My name is Jane Doe, a licensed clinical social worker (LCSW) with over 10 years of
            experience in providing counseling services! I got my Master's degree in Social Work from the University of Central Florida and
            my ED.S. in Clinical Social Work from Liberty University. I specialize in individual therapy, couples counseling, and family 
            counseling. My approach to therapy has always been client-centered with the focus of tailoring treatment plans to meet the individual
            needs of my clients. I believe in creating a safe, supportive and non-judgemental environment where can clients are free to explroe
            their thoughts and feelings. I am passionate in my work and committed to helping my clients achieve their goals and improve their 
            well-being. Thank you for taking the time to learn about me and Head and Heart Healing. I look forward to working with you!
          </p1>
        </div>
      </div>
    </div>
  )
}

export default Aboutme