'use client';

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [liveTime, setLiveTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <main className='flex flex-col w-full h-fit gap-10 p-4'>
      <section className='w-full rounded-lg bg-blue-700 h-60 py-4 px-6 justify-between flex flex-col shadow-lg shadow-border shadow-indigo-600'>
      <div className='bg-blue-800 w-fit h-[10%] rounded-lg m-1 py-6 px-4 flex justify-center items-center text-center'>
        <p>
          Upcoming meeting at:
        </p>
      </div>
      <div className='flex flex-col mx-2 justify-end'>
        <p className='text-2xl font-semibold'>
          {liveTime}
        </p>
        <p> 
          {new Date().toLocaleDateString()} {new Date().toLocaleString('en-US', { weekday: 'long' })}
        </p>
      </div>
      </section>
    </main>
  )
}

export default Home