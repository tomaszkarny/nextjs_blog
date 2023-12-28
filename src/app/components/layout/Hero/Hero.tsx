import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='p-10 md:p-20'>
        <h1 className='text-5xl font-bold mb-4 leading-tight'>
          Trusted Webflow Partners for your Marketing & Design team
        </h1>
      </div>
      <div className='flex flex-1 flex-col md:flex-row'>
        <div className='flex flex-col justify-center p-10 md:p-20 md:w-1/2'>
          <p className='text-lg mb-4'>
            We help medium-to-large companies and agencies build highly scalable
            Webflow websites and help them do more in less time.
          </p>
          <button className='btn-primary self-start'>START A PROJECT</button>
          {/* Replace with your button component */}
        </div>
        <div className='md:w-1/2 relative'>
          <Image
            src='/2.png'
            alt='Hero Image'
            layout='fill'
            objectFit='contain' // Use 'cover' to ensure the image fully covers the div
            priority // Use priority to hint to the browser that this is an important image
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
