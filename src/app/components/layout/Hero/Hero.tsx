import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='home-hero_top text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
      <h1
        home-hero_heading='true'
        split-text='true'
        className='home-hero_heading mb-8'
      >
        <span className='line block text-left w-full'>
          Fit Life Tech Innovations
        </span>
        <span className='line block text-left w-full'>Your Daily Blog</span>
      </h1>
      <Image
        src='/2.png'
        alt='Hero Image'
        width={500}
        height={300}
        className='w-full h-auto'
      />
    </div>
  )
}

export default Hero
