import React, { ReactNode } from 'react'

import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'

const HomeLayout = ( { children }: { children: ReactNode } ) => {
  return (
    <main className='relative'>
      <Navbar/>

      <div className='flex flex-row bg-sky-500'>
      <Sidebar/>

        <section className='flex flex-1 flex-col min-h-screen py-22 max-md:pb-14 sm:px-14 lg:px-5'>
          <div className='w-full'>
            {children}
          </div>
        </section>
        
      </div>
    </main>
  )
}

export default HomeLayout