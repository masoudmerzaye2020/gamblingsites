import React from 'react'
import Image from 'next/image'

export default function Wideimage({src}) {
  return (
    <>
    <div className='my-4 flex flex-wrap m-auto max-w-[1900px] h-[150px] md:h-[200px] lg:h-[300px]'>
         <Image className='flex w-full' src={src} width='1800' height='100%' alt='football'/>
    </div>
    </>
  )
}
