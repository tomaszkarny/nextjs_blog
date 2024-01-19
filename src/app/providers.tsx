'use client'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { SearchProvider } from '@/contexts/SearchContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <NextUIProvider>
        <NextThemesProvider
          attribute='class'
          defaultTheme='dark'
          themes={['light', 'dark']}
        >
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </SearchProvider>
  )
}
