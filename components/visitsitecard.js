import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Visitsitecard(props) {
  return (
    <>
        <Link href={props.link} >
                        <button className='w-12/12 md:w-4/12 lg:w-3/12 p-6 mx-auto '>
                                        <div key={props.id} className='p-4 mx-auto border-2 border-gray-900 rounded-lg hover:bg-[#19242c] hover:text-white'>
                                            <div className='rounded-md justify-center flex border-[1px] hover:border-red-300'>
                                            <Image className='rounded-lg mx-auto flex justify-center' src={props.src} width='210' height='90' alt={props.title} />
                                            </div>
                                            <div className='bg-[#40d3b7] hover:bg-[#ff6900]  w-[70%] mx-auto flex py-2 my-4 rounded-full mx-auto text-center'>
                                            <p className='mx-auto uppercase'>visit site</p>
                                            </div>
                                        </div>
                                    </button>
                                    
                                    </Link>
                                </>
  )
}
