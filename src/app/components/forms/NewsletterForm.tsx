'use client'
import React, { useState, useMemo } from 'react'
import { Button, Input } from '@nextui-org/react'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)

  const isInvalidEmail = useMemo(() => {
    if (email === '') return false
    return !validateEmail(email)
  }, [email])

  return (
    <form
      className='w-full max-w-md space-y-4'
      action='/submit-form-url'
      method='POST'
    >
      <Input
        label='Enter your name'
        value={name}
        onChange={e => setName(e.target.value)}
        // className='max-w-xs'
        id='name'
        name='userName'
      />
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type='email'
        label='Email'
        variant='bordered'
        isInvalid={isInvalidEmail}
        errorMessage={isInvalidEmail ? 'Please enter a valid email' : ''}
        description="We'll never share your email with anyone else."
        // className='max-w-xs'
        id='email'
        name='userEmail'
      />
      <Button
        size='lg'
        type='submit'
        className='bg-darkSlateGrey text-primaryColorDark shadow-lg tracking-wide uppercase font-medium leading-snug no-underline px-6 py-3 w-full text-xs sm:text-sm'
      >
        Subscribe
      </Button>
      <p className='text-xs text-gray-500 dark:text-gray-400 mt-4'>
        Subscribe to get notified about our latest updates.
        {/* Link do Terms & Conditions */}
      </p>
    </form>
  )
}

export default NewsletterForm
