import { NavbarItem, Link } from '@nextui-org/react'

const NavbarMenuItemsComponent = () => (
  <>
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
