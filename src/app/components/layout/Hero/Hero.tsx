'use client'

import React from 'react'

const Hero = () => {
  return (
    <div className='home-hero_top text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
      <img src="/public/2.png" alt="Hero Image" />
      <h1
        home-hero_heading='true'
        split-text='true'
        className='home-hero_heading'
      >
        <span className='line block text-left w-full'>
          Fit Life Tech Innovations
        </span>
        <span className='line block text-left w-full'>Your Daily Blog</span>
      </h1>
    </div>
  )
}

export default Hero
