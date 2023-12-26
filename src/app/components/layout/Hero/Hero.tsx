import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='home-hero_top flex text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
      <div>
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
        <div className="margin-bottom margin-small">
          <p split-text="true">
            <span className="line" style={{display: "block", textAlign: "start", width: "100%"}}>We help medium-to-large companies</span>
            <span className="line" style={{display: "block", textAlign: "start", width: "100%"}}>and agencies build highly scalable</span>
            <span className="line" style={{display: "block", textAlign: "start", width: "100%"}}>Webflow websites and help them do</span>
            <span className="line" style={{display: "block", textAlign: "start", width: "100%"}}>more in less time.</span>
          </p>
        </div>
      </div>
      <Image
        src='/2.png'
        alt='Hero Image'
        width={500}
        height={300}
        className='w-full h-auto ml-auto'
      />
    </div>
  )
}

export default Hero
