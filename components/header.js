import React from 'react'

export default function Header({children}) {
  return (
    <>
        <div className='w-full bg-[#324959]'>
            <div className='mx-auto w-10/12 text-gray-100 text-2xl font-semibold py-2'>
                {children}
            </div>
        </div>
    </>
  )
}
