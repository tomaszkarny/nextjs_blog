import React from 'react'
import Image from 'next/image'
import heroImg from '@/public/heroImg.png'
import { Button } from '@nextui-org/react'

const Hero = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='p-3 sm:p-6 md:p-8 lg:p-10 xl:p-20'>
        <h1 className=' sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-5 leading-tight'>
          Trusted Webflow Partners for your Marketing & Design team
        </h1>
      </div>
      <div className='flex flex-1 flex-col md:flex-row'>
        <div className='flex flex-col justify-center p-4 sm:p-4 md:p-10 md:h-fit  lg:p-8 xl:p-10 w-full h-58'>
          <p className='text-xs sm:text-sm md:2xl lg:text-5 xl:text-xl mb-4 h-24'>
            We help medium-to-large companies and agencies build highly scalable
            Webflow websites and help them do more in less time.
          </p>
          <div className=' flex flex-wrap gap-4 items-center'>
            <Button
              radius='lg'
              size='lg'
              className='bg-gradient-to-tr from-foreground to-darkSeaGreen w-1/2' // increased width to 50%
            >
              Button
            </Button>
          </div>
        </div>

        <div className='w-full h-full relative md:block'>
          <Image src={heroImg} alt='Hero Image' />
        </div>
      </div>
    </div>
  )
}

export default Hero
