import React from 'react'

import { MdOutlineFileCopy } from "react-icons/md";
import { LuNotepadText } from "react-icons/lu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const upcoming = () => {
  return (
    <main className='flex flex-col w-full h-fit gap-10 p-4'> 
      <h1 className='text-3xl font-bold text-start mt-10'>
        Upcoming Events
      </h1>

    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="w-full bg-cyan-500 shadow-md hover:shadow-lg transition-shadow duration-300 max-w-[300px]">
          <CardHeader>
            <CardTitle>Event Title</CardTitle>
            <CardDescription>Event Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Date: 2023-10-01</p>
            <p>Location: Event Location</p>
          </CardContent>
          <CardFooter className='flex flex-row flex-1 gap-1 px-2 justify-center'>
            <button className="bg-blue-500 text-white py-2 px-3 rounded flex flex-row w-fit items-center justify-center">
              <LuNotepadText />Register</button>
            <button className='bg-blue-300 text-white px-3 py-2 rounded flex flex-row w-fit items-center justify-center'><MdOutlineFileCopy />Copy invitation</button>
          </CardFooter>
        </Card>
        {/* Add more cards as needed */}
      </div>
    </section>

    </main>
  )
}

export default upcoming