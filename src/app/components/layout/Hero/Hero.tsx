import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='p-4 sm:p-6 md:p-8 lg:p-10 xl:p-20'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight'>
          Trusted Webflow Partners for your Marketing & Design team
        </h1>
      </div>
      <div className='flex flex-1 flex-col sm:flex-row'>
        <div className='flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-10 w-full sm:w-1/2'>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4'>
            We help medium-to-large companies and agencies build highly scalable
            Webflow websites and help them do more in less time.
          </p>
          <button className='btn-primary self-start'>START A PROJECT</button>
          {/* Replace with your button component */}
        </div>
        <div className='w-full relative'>
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
