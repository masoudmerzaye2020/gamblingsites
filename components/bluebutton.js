import React from 'react'
import Image from 'next/image'

export default function Bluebutton({children}) {
  return (
    <>
<div className='bg-[#06c] rounded-full flex flex-wrap  p-1 text-white hover:text-[#06c] hover:bg-white border-2 border-[#06c] max-w-[742px] min-w-[300px] mx-[12px] my-2 align-center'>
        <div className='w-10/12 justify-center mx-auto text-sm md:text-lg pl-2'>
        {children}
        </div>
        <div className='w-2/12 flex my-auto justify-center  '>
            <div className='h-[25px] w-[26px] flex m-1 justify-center rounded-full bg-[#fccd1b]  '>
             <Image className='' src='/svg/right-arrow.svg' width='15' height='15' alt='svg' />
            </div>
        </div>
    </div>
    </>
  )
}
