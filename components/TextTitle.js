import React from 'react'

export default function TextTitle({title, size, underline, color}) {
    return (
        <div className=' w-fit'>
            <h1 className='text-[32px] font-bold py-[5px]'>{title}</h1>
            <div className='w-[50%] border-t-4 border-black h-[10px] border-b-4 border-b-blue-400 mb-4 '></div> 
           
        </div>
    )
}