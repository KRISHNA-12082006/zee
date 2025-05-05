'use client'

import React from 'react'
import Link from 'next/link'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
  } from "@/components/ui/sheet"
import Image from 'next/image'

import { GrHomeRounded } from 'react-icons/gr'
import { MdUpcoming } from "react-icons/md";
import { BiVideoRecording } from "react-icons/bi";
import { RxTrackPrevious } from "react-icons/rx";
import { BsTv } from "react-icons/bs";
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { sideBarLinks } from '@/constants'

  

const MobileNav = () => {
      const pathname = usePathname();
    
  return (
    <section className='w-full max-w-[246px]'>
    
    <Sheet>
     <SheetTrigger asChild>
        <Image 
        src='/icons/hamburger.svg'
        width={36}
        height={36}
        alt='Menu icom'
        className='cursor-pointer sm:hidden max-sm:scale-120 lg:hidden'
        />
     </SheetTrigger>
    <SheetContent side='left' className='border-none bg-[#161925]'>
    <Link href='/' className='flex items-center gap-1 mb-10 p-5'>
    <Image
    src='/icons/logo.svg'
    width={32}
    height={32}
    alt='Zee'
    className='max-sm:size-10 lg:scale-130 lg:mr-2' />
    <p className='text-[26px] font-bold text-white pb-1'>
      Zee
    </p>
    </Link>

    <div className='flex flex-col pl-2'>
        {sideBarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route);
          const IconComponent = {
            GrHomeRounded,
            MdUpcoming,
            BiVideoRecording,
            RxTrackPrevious,
            BsTv,
          }[link.imageIcon];

            return (
            <SheetClose asChild>
            <Link
              href={link.route}
              key={link.label}
              className={cn(
              'font-semibold hover:bg-purple-100 hover:text-black w-[90%] pl-5 py-8 my-1 rounded-lg flex items-center h-8 min-w-full border-b border-blue-500',
              {
                'bg-gray-300 text-black': isActive && !(link.label === 'Home' ? pathname !== '/' : link.route.endsWith('/')),
              }
              )}
            >
              {IconComponent && <IconComponent className="mr-4 scale-115 text-2xl" />}
              <span className='text-xl'>{link.label}</span>
            </Link>
            </SheetClose>
            );
        })}
        
    </div>
    </SheetContent>
    </Sheet>


    </section>
)
}

export default MobileNav