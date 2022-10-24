import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Imagewithlink({src, title, link}) {
  return (
    <>
    <div className='justify-center'>
        <div className='w-[150px] my-[10px] mx-[20px]'>
          <div>
            <Image className='rounded-lg' src={src} width={'150'} height='150' alt='image'/>
          </div>
          <div className=' w-[150px] bg-[#fccd1b] text-center py-[2px] rounded-lg my-2'>
              <Link className='w-[150] ' href={link}>
                      <a className='uppercase px-2'>{title}</a>
                </Link>
           </div> 
        </div>

                </div>
    </>
  )
}
