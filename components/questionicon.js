import React from 'react'

export default function Questionicon({children}) {
  return (
    <>
        <div className='flex flex-wrap text-center my-3 content-center '>
            <div className='bg-[#426075] w-[30px] h-[40px] mr-2 flex'>
                <p className='text-white text-3xl font-bold text-center m-auto'>?</p> 
            </div>
            <h1 className='justify-center my-auto text-2xl font-bold'>{children}</h1>
        </div>
    </>
  )
}
