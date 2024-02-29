'use client'
import { NavbarBrand } from '@nextui-org/react'
import Logo from '@/public/logo.svg'

const NavbarBrandComponent = () => (
  <NavbarBrand>
    <Logo aria-label='Website logo' className='w-16 h-16 md:w-20 md:h-20' />
  </NavbarBrand>
)

export default NavbarBrandComponent
