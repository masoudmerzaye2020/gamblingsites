import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Widecard(props) {
  return (
    <>
    <div className='max-w-[350px] md:max-w-full mx-auto'>
          <div className='border-[2px] border-[#aec4d4] rounded-[10px] md:flex flex-wrap'>
            <div className='md:w-1/3 flex flex-wrap'>
              <Image className='rounded-t-[10px] md:rounded-l-[10px] md:rounded-tr-[0px]' src={props.src} width={600} height={400} alt={'image'}/>
            </div>
           <Link href={props.link}>
           <div className='md:w-2/3 px-3 py-2 hover:bg-gray-600 hover:text-white md:rounded-r-[10px] rounded-b-[10px]'>
              <h1 className='py-2 text-xl font-bold'>{props.title}</h1>
              <p>{props.desc}</p>
              <button> Read More</button>
            </div>
           </Link>
          </div>
        </div>
    </>
  )
}
