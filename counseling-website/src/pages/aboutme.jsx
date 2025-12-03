import React from 'react'
import headshotImage from '../assets/Headshot.jpeg'

const Aboutme = () => {
  return (
    <div className='min-h-96 max-w-1xl flex flex-col items-center justify-center bg-amber-100 text-black p-4 mt-8 
    mr-10 ml-10'>
      <div className='px-1 w-full'>
        <img src={headshotImage} alt='Example Headshot' className='flex mt-24 justify-center w-60 aspect-square object-cover rounded-full border-3'/>
      </div>
      <div className='float-right px-1 w-full'>
        <h1 className='text-1xl font-cursive mt-6'/>
        <p1>
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
  )
}

export default Aboutme