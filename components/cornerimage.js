import React from 'react'
import Image from 'next/image'

export default function Cornerimage(props) {
  return (
    <div className='md:float-right justify-center flex'><Image src={props.src} width={200} height={200} alt={''}/></div>
  )
}
