import React from 'react'
import Image from 'next/image'

export default function Button({children, color}) {
  return (
    <>
      <button className='bg-[#fccd1b] text-center rounded-full flex justify-between py-2 md:py-6 my-4 w-full md:w-[70%] m-auto flex'>
        <div  className='flex my-auto px-4'>
          <Image src='/image/right-arrow-black-triangle.png' width='18' height='18' alt='arrow' />
        </div>
        <div className=' spa'>{children}</div>
        <div className='flex my-auto px-4'>
          <Image src='/image/left-filled-arrow-triangle.png' width='18' height='18' alt='arrow' />
        </div>
      </button>
    </>
  )
}
