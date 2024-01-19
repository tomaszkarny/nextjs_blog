'use client'

import React, { useState } from 'react'
import { useSearch } from '@/contexts/SearchContext'
import { useDebouncedCallback } from 'use-debounce'
import { Input, Button } from '@nextui-org/react'
import SearchIcon from '@/src/app/components/layout/SearchBar/SearchIcon'

const SearchBar = () => {
  const { searchTerm, setSearchTerm, postsRef } = useSearch()

  const handleSearch = () => {
    updateSearchTerm(searchTerm) // Debounced aktualizacja searchTerm i przewijanie
  }

  const updateSearchTerm = useDebouncedCallback(term => {
    setSearchTerm(term)

    if (postsRef.current) {
      postsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, 300)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='w-small sm:w-1/2 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-foreground to-primaryColor text-background shadow-lg'>
      <Input
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='Type to search...'
        isClearable
        radius='lg'
        classNames={{
          label: 'text-black/50 dark:text-white/90',
          input: [
            'bg-transparent',
            'text-black/90 dark:text-white/90',
            'placeholder:text-default-700/50 dark:placeholder:text-white/60'
          ],
          innerWrapper: 'bg-transparent',
          inputWrapper: [
            'shadow-xl',
            'bg-default-200/50',
            'dark:bg-default/60',
            'backdrop-blur-xl',
            'backdrop-saturate-200',
            'hover:bg-default-200/70',
            'dark:hover:bg-default/70',
            'group-data-[focused=true]:bg-default-200/50',
            'dark:group-data-[focused=true]:bg-default/60',
            '!cursor-text'
          ]
        }}
        startContent={
          <Button
            onClick={handleSearch}
            className='bg-transparent border-0 shadow-none p-0 w-auto inline-flex items-center justify-center focus:outline-none'
          >
            <SearchIcon className='text-foreground dark:text-white/90  w-7 h-7' />
          </Button>
        }
      />
    </div>
  )
}

export default SearchBar
