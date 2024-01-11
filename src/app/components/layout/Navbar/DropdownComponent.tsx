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
        <Button>{triggerLabel}</Button>
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
