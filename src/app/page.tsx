import React from 'react'
import {Button} from "@/components/ui/button"
import prisma from "@/lib/db"
const page = async() => {
  const user = await prisma.user.findMany();
  return (
    <div className='flex justify-center items-center min-w-screen min-h-screen'>
     {JSON.stringify(user)}
    </div>
  )
}

export default page