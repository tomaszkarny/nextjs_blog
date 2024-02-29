import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { Button, Input } from '@nextui-org/react'
import NewsletterForm from '@/src/app/components/forms/NewsletterForm'

import medium from '@/public/medium.jpeg'

const Hero = () => {
  const frameStyle = {
    border: '3px solid #d0edd6',
    boxShadow: '20 20 10px rgba(45, 38, 38, 0.3)',
    clipPath:
      'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease'
  }
  return (
    <div className=' flex flex-col pb-8 items-center'>
      <div className='p-3 sm:p-6 md:p-8 lg:p-10 xl:p-15'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight'>
          Navigating the Future of Wellbeing
        </h1>
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-2'>
          Welcome to the Tech-Enhanced Fitness Blog
        </h2>
      </div>
      <div className='flex flex-1 flex-col md:flex-row '>
        <div className='flex flex-col justify-center p-4  sm:p-4 items-baseline  sm:items-center md:p-10 md:h-fit  lg:p-8 xl:p-10 w-full h-58'>
          <p className='text-xs sm:text-sm md:2xl lg:text-5 xl:text-xl mb-4 h-24'>
            Explore our latest fitness tips and articles to help you achieve
            your health goals. Join our community today!
          </p>
          <NewsletterForm />
        </div>
        <div
          className='w-full h-full relative md:block mb-4 sm:mb-0 rounded-lg overflow-hidden '
          style={frameStyle}
        >
          <Image
            src={medium}
            alt='Hero Image'
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
