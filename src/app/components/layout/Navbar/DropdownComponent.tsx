'use client'
import React from 'react'
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  NavbarItem
} from '@nextui-org/react'

interface DropdownComponentProps {
  triggerLabel: string
  items: string[]
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  triggerLabel,
  items
}) => (
  <Dropdown>
    <NavbarItem>
      <DropdownTrigger aria-label={triggerLabel}>
        <div className='flex items-center cursor-pointer'>
          <span className='text-sm font-medium text-foreground hover:text-textGreen'>
            {triggerLabel}
          </span>
          <svg
            className='ml-1 w-4 h-4'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M19 9l-7 7-7-7'></path>
          </svg>
        </div>
      </DropdownTrigger>
    </NavbarItem>
    <DropdownMenu aria-label='Menu'>
      {items.map((item, index) => (
        <DropdownItem key={index} aria-label={item}>
          {item}
        </DropdownItem>
      ))}
    </DropdownMenu>
  </Dropdown>
)

export default DropdownComponent
