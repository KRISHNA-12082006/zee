import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


const Navbar = () => {
  return (
  <nav className='flex flex-between fixed z-50 w-full h-15 bg-[#161925] px-5 sm:py-4 justify-between lg:px-5 lg:p-2 '>
    <Link href='/' className='flex items-center gap-1'>
    <Image
    src='/icons/zoom.png'
    width={32}
    height={32}
    alt='Zee'
    className='max-sm:size-10 lg:scale-130 lg:mr-2'
    style={{ filter: 'brightness(160%)' }} />
    <p className='text-[30px] font-bold text-white max-sm:hidden pb-1 chivo-tu font-extrabold'>
      Zee
    </p>
    </Link>


    <div className='flex flex-row gap-3 mt-3'>
    <div className='mt-1 lg:mt-0 lg:scale-130'>
        <SignedIn>
          <UserButton />
        </SignedIn>
    </div>
    <div className=''>
      <MobileNav />
    </div>
    </div>

  </nav>
  )
}

export default Navbar