import React from 'react'
import Link from 'next/link'
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='background text-foreground p-12 border-t border-foreground/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center'>
        <div className='mb-6 lg:mb-0 flex flex-col'>
          <span className='text-2xl font-bold mb-4'>
            FIT LIFE TECH INNOVATIONS
          </span>
          <span className='text-sm'>
            Go-to Hub for All Things Creator Economy!
          </span>
          {/* Social Icons can be added here */}
        </div>
        <div className='flex flex-wrap justify-center lg:justify-start gap-6'>
          <button className='bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition-colors'>
            LETS TALK
          </button>
          {/* Additional Links or Content */}
        </div>
        <nav className='mt-8 lg:mt-0'>
          <ul className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <li>
              <Link href='#' className='hover:underline'>
                Work
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='mt-8 flex justify-center lg:justify-start space-x-4'>
        <Link href='https://twitter.com' className='hover:text-neutral2'>
          <FaTwitter aria-label='Twitter' className='text-xl' />
        </Link>
        <Link href='https://linkedin.com' className='hover:text-neutral2'>
          <FaLinkedinIn aria-label='LinkedIn' className='text-xl' />
        </Link>
        <Link href='https://instagram.com' className='hover:text-neutral2'>
          <FaInstagram aria-label='Instagram' className='text-xl' />
        </Link>
        <Link href='https://facebook.com' className='hover:text-neutral2'>
          <FaFacebookF aria-label='Facebook' className='text-xl' />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
