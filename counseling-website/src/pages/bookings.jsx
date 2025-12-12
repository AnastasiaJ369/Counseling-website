import React, {useState} from 'react'

const Bookings = () => {
      const[formSubmitted, setFormSubmitted] = useState(false);

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        e.target.reset();

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
    };

return (
    <div className='bg-purple-100 min-h-screen animate-fade-in'>
      <div className='text-4xl text-black font-cursive font-bold italic pt-8 mb-8 flex justify-center'>
          Bookings
      </div>
      <div className='flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto bg-purple-100'>
        {/* Insurance */}
        <div className='md:w-1/2'>
          <h1 className='text-2xl font-bold mb-4'>Accepted Insurance</h1>
          <ul className='list-disc list-inside space-y-2 text-lg'>
            <li>Blue Cross Blue Shield</li>
            <li>Aetna</li>
            <li>Cigna</li>
            <li>Humana</li>
            <li>Medicaid</li>
          </ul>
          <br />
          <p className='text-lg'>
            If your insurance is not listed, please contact our office to discuss
            self-pay options and sliding scale fees.
          </p>
          
          {/* Pricing */}
          <div className='mt-8'>
            <h1 className='text-2xl font-bold mb-4'>Pricing</h1>
            <ul className='list-disc list-inside space-y-2 text-lg'>
              <p>Initial Consultation: Free</p>
              <li>Individual therapy: $100</li>
              <li>Couples Therapy: $150</li>
              <li>Family Therapy: $200</li>
            </ul>
          </div>
        </div>
        {/* Contact Form space */}
        <div className='md:w-1/2 bg-purple-200'>
          <div className='mx-auto flex flex-col min-h-screen justify-center items-center'>
            <h1 className="text-3xl font-bold leading-tight text-black text-center">Book With Us!</h1>
            <form onSubmit={handleSubmit}className="w-2/3 md:w-1/3 space-y-8 flex flex-col">
                        <div>
                            <input
                                type="text"
                                name="name"
                                className=" border-b border-black placeholder-zinc-500 bg-transparent focus:outline-none w-full mt-12 xl:mt-36 py-3 transition-transform hover:border-b-2"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="number"
                                className="border-b border-black placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                placeholder="Number"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                className="border-b border-black placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                className="border-b border-black placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                rows="4"
                                placeholder="What would you like to discuss?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-amber-950 text-amber-50 mx-auto mt-4 p-2 w-48"
                        >
                            Submit
                        </button>
                    </form>
                    {formSubmitted && (
                            <p className='text-md font-bold text-black text-center mt-4'> Thank you for reaching out! We'll
                            be in touch shortly!</p>
                        )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookings