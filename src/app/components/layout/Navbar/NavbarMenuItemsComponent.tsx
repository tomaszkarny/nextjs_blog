'use client'
import { NavbarItem, Link } from '@nextui-org/react'
import NavbarBrandComponent from '@/src/app/components/layout/Navbar/NavbarBrandComponent'

const NavbarMenuItemsComponent = () => (
  <>
    <NavbarItem>
      <NavbarBrandComponent />
    </NavbarItem>
    <NavbarItem>
      <Link className='navbar-link' href='/posts'>
        Posts
      </Link>
    </NavbarItem>
    <NavbarItem>
      <Link className='navbar-link' href='/' aria-current='page'>
        Home
      </Link>
    </NavbarItem>
  </>
)

export default NavbarMenuItemsComponent
