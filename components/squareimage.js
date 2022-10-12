import React from 'react'
import Image from 'next/image'

export default function Squareimage(props) {
  return (
    <>
      <div className='py-6'>
      <div className='table flex mx-auto justify-center px-[20px]'>
        <Image src={props.src} width='100%' height='100%' alt={'image'}/>
      </div>
      </div>
    </>
  )
}
