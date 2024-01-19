'use client'

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useRef
} from 'react'

export const SearchContext = createContext<{
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
  postsRef: React.RefObject<HTMLElement>
}>({
  searchTerm: '',
  setSearchTerm: () => {},
  postsRef: { current: null }
})

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const postsRef = useRef<HTMLElement>(null)

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, postsRef }}>
      {children}
    </SearchContext.Provider>
  )
}
