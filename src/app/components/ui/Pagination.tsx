// src/app/components/ui/Pagination.tsx

'use client'

import React from 'react'

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange
}: {
  totalPages: number
  currentPage: number
  onPageChange: (number: number) => void
}) => {
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a
              onClick={() => onPageChange(number)}
              className={
                number === currentPage ? 'page-link active' : 'page-link'
              }
              href='#!'
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
