'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@nextui-org/react'
import { IoSunny, IoMoon } from 'react-icons/io5'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isDarkMode = theme === 'dark'

  const handleThemeChange = () => {
    setTheme(isDarkMode ? 'light' : 'dark')
  }

  if (!isMounted) return null

  return (
    <div className='flex items-center'>
      {isDarkMode ? <IoMoon className='mr-2' /> : <IoSunny className='mr-2' />}
      <Switch checked={isDarkMode} onChange={handleThemeChange} />
    </div>
  )
}
