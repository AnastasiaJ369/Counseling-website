import React from 'react'
import { useNavigate } from 'react-router-dom'

const button = () => {
    const navigate = useNavigate()

    const gotToNewPage = () => {
        navigate('/booking')
    }
  return (
    <>
        <button onClick={() => gotToNewPage()} className='mt-6 border-black rounded-md border-3 bg-orange-300 w-64 h-16 font-bold'>Schedule an Appointment</button>
    </>
  )
}

export default button