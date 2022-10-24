import React from 'react'
import Image from 'next/image'

export default function Squareimage(props) {
  return (
    <>
      <div className='py-6'>
      <div className='table flex mx-auto justify-center px-[20px]'>
        <Image src={props.src} width={700} height={400} alt={'image'}/>
      </div>
      <p className='text-center text-gray-400 max-w-[600px] mx-auto py-2'>{props.desc}</p>
      </div>
    </>
  )
}
