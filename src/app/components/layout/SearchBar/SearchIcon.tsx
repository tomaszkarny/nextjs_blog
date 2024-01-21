import React from 'react'

interface SearchIconProps {
  className?: string
  onClick?: () => void
}

const SearchIcon = ({ className, onClick }: SearchIconProps) => {
  return (
    <svg
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      viewBox='1 -1 25 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <line x1='21' y1='21' x2='16.65' y2='16.65' />
    </svg>
  )
}

export default SearchIcon
