import React from 'react'
import contactImage from '../assets/contact_us.jpg'

const Contact = () => {
  return (
    <div class="bg-purple-100 py-8 sm:py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/*Title*/}
      <div class="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
        <h2 class="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">Contact Us</h2>
        <span
          class="from-primary/40 to-primary/5 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"
        ></span>
      </div>

      <div class="grid items-center gap-12 lg:grid-cols-2">
        {/* Image Section */}
        <img
          src={contactImage}
          alt="Contact Photo"
          class="size-full"
        />

        {/* Contact Info Section */}
        <div>
          {/* Section Title */}
          <h3 class="text-base-content mb-6 text-2xl font-semibold">We look forward to hearing from you!</h3>

          {/* Contact Info Grid */}
          <div class="grid gap-6 md:grid-cols-2">
            {/* Office Hours */}
            <div class="card shadow-none">
              <div class="card-body items-center gap-3">
                <div class="avatar avatar-placeholder">
                  <div class="border-primary/20 text-primary w-9 rounded-full border">
                    <span class="icon-[tabler--clock] text-primary size-6"></span>
                  </div>
                </div>
                <h4 class="text-base-content text-lg font-medium">Office Hours</h4>
                <div class="text-center">
                  <p class="text-base-content/80">Monday-Thursday</p>
                  <p class="text-base-content/80">8:00 am to 5:00 pm</p>
                  <p class="text-base-content/80">Saturday</p>
                  <p class="text-base-content/80">9:00 am to 1:00 pm</p>
                  <p class="text-base-content/80">Friday & Sunday</p>
                  <p class="text-base-content/80">Closed</p>
                </div>
              </div>
            </div>

            {/* Our Address */}
            <div class="card shadow-none">
              <div class="card-body items-center gap-3">
                <div class="avatar avatar-placeholder">
                  <div class="border-primary/20 text-primary w-9 rounded-full border">
                    <span class="icon-[tabler--map-pin] text-primary size-6"></span>
                  </div>
                </div>
                <h4 class="text-base-content text-lg font-medium">Our Address</h4>
                <address class="text-base-content/80 text-center not-italic">
                  123 Main St,Daytona Beach, FL
                  <br />
                  32117, USA
                </address>
              </div>
            </div>

            {/* Get in Touch */}
            <div class="card shadow-none">
              <div class="card-body items-center gap-3">
                <div class="avatar avatar-placeholder">
                  <div class="border-primary/20 text-primary w-9 rounded-full border">
                    <span class="icon-[tabler--phone] text-primary size-6"></span>
                  </div>
                </div>
                <h4 class="text-base-content text-lg font-medium">Get in Touch</h4>
                <div class="text-center">
                  <p class="text-base-content/80">+1-123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center'>
        <iframe className='mt-6' width="600" height="450" 
            style={{border: 0}}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.97072582554!2d-81.01707785965931!3d29.224415575449378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6da3c0b207649%3A0xfa1cd5c2564a8e39!2s123%20Main%20St%2C%20Daytona%20Beach%2C%20FL%2032118!5e0!3m2!1sen!2sus!4v1764689444347!5m2!1sen!2sus">
        </iframe>
    </div>
  </div>
  )
}

export default Contact