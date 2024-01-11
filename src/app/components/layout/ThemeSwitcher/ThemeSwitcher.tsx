'use client'
import { useEffect, useState } from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch } from '@nextui-org/react'
import { IoSunny, IoMoon } from 'react-icons/io5'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useNextTheme()
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    if (theme === 'system' || theme === undefined) {
      setTheme('dark')
      setIsLight(false)
    } else {
      setIsLight(theme === 'light')
    }
  }, [theme, setTheme])

  return (
    <div className='flex items-center'>
      <IoMoon className='mr-2' />

      <Switch
        checked={isLight}
        onChange={e => setTheme(e.target.checked ? 'light' : 'dark')}
      />
      <IoSunny className='mr-2' />
    </div>
  )
}
