'use client'
import React, { useState } from 'react'
import NavbarBrandComponent from '@/src/app/components/layout/Navbar/NavbarBrandComponent'
import NavbarMenuItemsComponent from '@/src/app/components/layout/Navbar/NavbarMenuItemsComponent'
import DropdownComponent from '@/src/app/components/layout/Navbar/DropdownComponent'
import ThemeSwitcher from '@/src/app/components/layout/ThemeSwitcher/ThemeSwitcher'
import SearchBar from '@/src/app/components/layout/SearchBar/SearchBar'
import {
  Navbar,
  NavbarMenuToggle,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  Link
} from '@nextui-org/react'

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out'
  ]

  return (
    <nav>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Hamburger Menu and Brand visible only on small screens */}
        <NavbarContent className='sm:hidden flex justify-between items-center gap-4'>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
          <NavbarBrandComponent />
          <SearchBar />
          <ThemeSwitcher />
        </NavbarContent>

        {/* Full Navigation visible only on larger screens */}
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarBrandComponent />
          <NavbarMenuItemsComponent />
          <DropdownComponent triggerLabel='Dropdown Menu' items={menuItems} />
          <DropdownComponent
            triggerLabel='Subpages'
            items={['Subpage 1', 'Subpage 2']}
          />
        </NavbarContent>

        <NavbarContent justify='end' className='hidden sm:flex'>
          <SearchBar />
          <ThemeSwitcher />
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className='sm:hidden'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link className='w-full' href='#'>
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </nav>
  )
}

export default NavbarComponent
