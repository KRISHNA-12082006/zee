'use client';

import React, { useEffect, useState } from 'react';

import { MdOutlineFileCopy } from "react-icons/md";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Home = () => {
  const [liveTime, setLiveTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <main className='flex flex-col w-full h-fit gap-10 bg-amber-500 p-4'>
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

      <section className='flex flex-col mt-4  '>
        <Card className='w-full h-40 bg-blue-800'>
          <CardHeader>
            <CardTitle>Upcoming Meeting</CardTitle>
            <CardDescription>Meeting with Zee</CardDescription>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <p className='text-2xl font-semibold'>Time: 10:00 AM</p>
            <p className='text-xl'>Duration: 1 hour</p>
          </CardContent>
          <CardFooter className='flex justify-end'>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Join Now</button>
          </CardFooter>
        </Card>
      </section>

      <section>
        <div className='flex flex-row justify-between mt-4'>
        <h1 className='text-2xl font-semibold'>
          Today's Upcoming Meetings
        </h1>
        <p className='text-blue-300 font-semibold cursor-pointer hover:text-blue-800 pt-2'>
          See all 
        </p>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <Card className='w-full h-40 bg-cyan-500'>

            <CardHeader>
              <CardTitle>Meeting with Zee</CardTitle>
              <CardDescription>Meeting with Zee</CardDescription>
            </CardHeader>
            <CardContent className='flex justify-between items-center'>
              <p className='text-2xl font-semibold'>Time: 10:00 AM</p>
              <p className='text-xl'>Duration: 1 hour</p>
            </CardContent>
            <CardFooter className='flex justify-end gap-1'>
              <button className='bg-blue-600 font-semibold text-white px-4 py-2 rounded-lg w-fit items-center'>Start</button>
              <button className='bg-blue-300 font-semibold text-white px-4 py-2 rounded-lg flex flex-row w-fit items-center justify-center'><MdOutlineFileCopy />Copy invitation</button>
            </CardFooter>
          </Card>
          </div>
      </section>

    </main>
  )
}

export default Home