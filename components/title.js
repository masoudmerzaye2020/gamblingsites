import React from 'react'

export default function Title({title, size, underline, color}) {
    return (
        <div>
            <h1 className='text-[32px] font-bold pb-[5px] pt-[8px] '>{title}</h1>
            <div className='border-t-4 border-black h-[10px] border-b-4 border-b-blue-400 mb-4 '></div>
           
        </div>
    )
}