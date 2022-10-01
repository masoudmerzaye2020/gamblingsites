import React from 'react'

export default function Header({children}) {
  return (
    <>
        <div className='w-full bg-[#324959]'>
            <div className='mx-4 w-10/12 text-gray-100 md:text-4xl text-3xl font-semibold py-2'>
                {children}
            </div>
        </div>
    </>
  )
}
