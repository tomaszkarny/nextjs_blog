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
        className='h-20'
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
        <NavbarContent className='hidden sm:flex items-center w-full px-4'>
          <NavbarMenuItemsComponent />

          <div className='flex items-center gap-4'>
            <DropdownComponent triggerLabel='Dropdown Menu' items={menuItems} />
            <DropdownComponent
              triggerLabel='Subpages'
              items={['Subpage 1', 'Subpage 2']}
            />
            <SearchBar />
            <ThemeSwitcher />
          </div>
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
