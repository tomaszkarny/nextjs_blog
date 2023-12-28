import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='p-3 sm:p-6 md:p-8 lg:p-10 xl:p-20'>
        <h1 className='text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-5 leading-tight'>
          Trusted Webflow Partners for your Marketing & Design team
        </h1>
      </div>
      <div className='flex flex-1 flex-col md:flex-row'>
        <div className='flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-10 w-full h-48'> <!-- Adjust the height as needed -->
          <p className='text-xs sm:text-sm md:text-base lg:text-5 xl:text-xl mb-4 h-24'> <!-- Adjust the height as needed -->
            We help medium-to-large companies and agencies build highly scalable
            Webflow websites and help them do more in less time.
          </p>
        </div>
        <div className='w-full h-full relative md:block'>
          <Image
            src='/2.png'
            alt='Hero Image'
            width={500} // Add the width prop
            height={400} // Decrease the height prop
            objectFit='contain' // Use 'cover' to ensure the image fully covers the div
            priority // Use priority to hint to the browser that this is an important image
            sizes='(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
