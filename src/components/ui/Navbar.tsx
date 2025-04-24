import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
  <nav className='flex flex-between fixed z-50 w-full h-15 bg-pink-500 px-5 sm:py-4 justify-between '>
    <Link href='/' className='flex items-center gap-1'>
    <Image
    src='/icons//logo.svg'
    width={32}
    height={32}
    alt='Zee'
    className='max-sm:size-10 lg:scale-130 lg:mr-2' />
    <p className='text-[26px] font-bold text-white max-sm:hidden pb-1'>
      Zee
    </p>
    </Link>

    <div className='mt-3'>
      {/* Clerk - User Mnagement */}

      <MobileNav />
    </div>

  </nav>
  )
}

export default Navbar