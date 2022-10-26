import React from 'react'
import Image from 'next/image'

export default function Toptips({children}) {
  return (
    <div className='my-8 pt-5 px-3 bg-black pb-3 border-[2px] border-[#40d3b7] max-w-[700px] mx-auto  rounded-lg relative'>
        <div className='bg-[#40d3b7] pt-[13px] pr-[16px] pb-[9px] pl-[30px] absolute rounded-[7px] border-b-[2px] border-b-[#009d87] top-[-24px] left-[21px] text-white text-xl'> 
        <span className='absolute top-[-7px] left-[-14px]'><Image src={'/image/top_tip_icon.png'} width='38' height={45} alt={'image'} /></span>
        TOP TIP </div>
        {children}
        
    </div>
  )
}
