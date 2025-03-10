import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { SignedOut, SignedIn, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='flex justify-end items-center p-4'>
      <SignedIn><UserButton></UserButton></SignedIn>
      <SignedOut>
      <Link href="/sign-in"><Button>Login</Button></Link>
      </SignedOut>
      
    </div>
  )
}

export default Header
