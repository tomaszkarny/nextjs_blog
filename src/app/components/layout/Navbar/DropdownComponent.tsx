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
      <DropdownTrigger>
        <Button>{triggerLabel}</Button>
      </DropdownTrigger>
    </NavbarItem>
    <DropdownMenu>
      {items.map((item, index) => (
        <DropdownItem key={index}>{item}</DropdownItem>
      ))}
    </DropdownMenu>
  </Dropdown>
)

export default DropdownComponent
