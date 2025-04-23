'use client'

import { sideBarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import { GrHomeRounded } from 'react-icons/gr'
import { MdUpcoming } from "react-icons/md";
import { BiVideoRecording } from "react-icons/bi";
import { RxTrackPrevious } from "react-icons/rx";
import { BsTv } from "react-icons/bs";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showLabels, setShowLabels] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      timer = setTimeout(() => setShowLabels(true), 300);
    } else {
      setShowLabels(false);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <section
      className={`sticky top-0 left-0 h-screen bg-purple-600 transition-all duration-500 ease-in-out py-6 pt-22 ${isOpen ? 'w-64' : 'w-18'} max-md:hidden`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className='flex flex-col items-center justify-center'>
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
            <Link
              href={link.route}
              key={link.label}
              className={cn(
              'font-semibold hover:bg-purple-100 hover:text-black w-[90%] pl-5 py-8 mx-4 my-1 rounded-lg flex items-center h-8',
              {
                'bg-purple-100 text-black': isActive && !(link.label === 'Home' ? pathname !== '/' : link.route.endsWith('/')),
              }
              )}
            >
              {IconComponent && <IconComponent className="mr-4 scale-115 text-2xl" />}
              {showLabels && <span className='text-xl'>{link.label}</span>}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;