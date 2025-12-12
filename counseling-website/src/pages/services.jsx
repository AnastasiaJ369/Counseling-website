import React from 'react'
import depressionImage from '../assets/depression.webp'
import couplesImage from '../assets/Couples.avif'
import familyImage from '../assets/family.jpg'

const Services = () => {
  return (
    <div className='bg-purple-100 min-h-screen'>
        <div className='text-3xl text-black font-cursive font-bold italic pt-8 mb-8 flex justify-center animate-fade-in'>
            Services
        </div>
        <div className='min-h-36 max-w-1xl flex flex-col items-center justify-center bg-purple-200 text-black p-4 mt-8 
    mr-10 ml-10 animate-fade-in'>
            <div className='text-xl text-color-black italic mb-4 items-center'>
                Here at Head and Heart Healing, we offer a variety of therapy approaches to meet your unique needs with
                primary focuses on Cognitive Behavioral Therapy(CBT), Dialectal Behavioral Therapy(DBT), Person-Centered
                Therapy(PCT), and Emotion Focused Therapy. We offer individual therapy, couples therapy, and family therapy
                sessions both in-person and via telehealth. Our goal is to provide a safe and supportive environment where you
                can explore your thoughts and feelings, develop coping skills, and work towards your personal goals.
            </div>
        </div>
        <div className='min-h-40 max-w-1xl flex flex-col items-center justify-center bg-purple-300 text-black p-4 mt-8 
    mr-10 ml-10 mb-10 animate-fade-in'>
            <div className='px-1 w-full flex justify-between items-center mx-auto max-w-4xl'>
                <img src={depressionImage} alt='Depression' className='flex float-left mt-18 mr-20 justify-center w-72 h-72 aspect-square object-cover rounded-full border-3'/>
                <div className='text-xl text-color-black bold mb-4'>
                    Individual therapy sessions are designed to help you work through your personal challenges and achieve
                    your mental and wellness goals. Whether you're struggling with anxiety, depression or trauma, our
                    therapists are here to provide compassion and support every step of the way.
                </div>
            </div>
        </div>
        <div className='min-h-40 max-w-1xl flex flex-col items-center justify-center bg-purple-200 text-black p-4 mt-8 
    mr-10 ml-10 animate-fade-in'>
            <div className='px-1 w-full flex justify-between items-center mx-auto max-w-4xl'>
                <div className='text-xl text-color-black bold mb-4'>
                    Couples therapy sessions are designed to help you and your partner improve communication, resolve conflicts,
                    and strengthen your relationship. Our therapists will work with you to identify patterns and behaviors that may
                    be impacting your relationship and provide tools and strategies to help you build a stronger, healthier connection.
                </div>
                <img src={couplesImage} alt='Couples' className='flex float-right mt-18 ml-20 justify-center w-72 h-72 aspect-square object-cover rounded-full border-3'/>
            </div>
        </div>
        <div className='min-h-40 max-w-1xl flex flex-col items-center justify-center bg-purple-300 text-black p-4 mt-8 
    mr-10 ml-10 mb-12 animate-fade-in'>
            <div className='px-1 w-full flex justify-between items-center mx-auto max-w-4xl'>
                <img src={familyImage} alt='Family' className='flex float-left mt-18 mr-20 justify-center w-72 h-72 aspect-square object-cover rounded-full border-3'/>
                <div className='text-xl text-color-black bold mb-4'>
                    Family therapy sessions are designed to help families improve communication, resolve conflicts, and strengthen
                    relationships. Our therapists will work with you to identify patterns and dynamics that may be impacting your family
                    and provide tools and strategies to help you build a stronger, healthier family unit.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services