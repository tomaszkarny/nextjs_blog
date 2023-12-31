import './globals.css'
import { Providers } from './providers'
import type { Metadata } from 'next'
import Navbar from '@/src/app/components/layout/Navbar/Navbar'

import { DM_Sans } from 'next/font/google'

const DMsans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-DM_Sans'
})

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${DMsans.variable} font-sans`}>
        <Providers>
          <header>
            <Navbar />
          </header>

          <main>{children}</main>

          <footer className=' text-sm font-medium uppercase text-stone-400 px-8 py-4'>
            <div className='container'>
              <p>Footer</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
