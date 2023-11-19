'use client'

import { useEffect, useState } from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch } from '@nextui-org/react'
import { IoSunny, IoMoon } from 'react-icons/io5'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useNextTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <div className='flex items-center'>
      <IoSunny style={{ marginRight: '10px' }} />
      <Switch
        checked={isDark}
        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      <IoMoon />
    </div>
  )
}
