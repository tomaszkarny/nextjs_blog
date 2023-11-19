import './globals.css'
import { Providers } from './providers'
import type { Metadata } from 'next'
import Navbar from '@/src/app/components/layout/Navbar'

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
      <body>
        <Providers>
          <header>
            <Navbar />
          </header>

          <main className='container p-8'>{children}</main>

          <footer className='bg-stone-100 text-sm font-medium uppercase text-stone-400 px-8 py-4'>
            <div className='container'>
              <p>Footer</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
