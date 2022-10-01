import React from 'react'
import Image from 'next/image'

export default function ImageCard() {
  return (
    <>
        <div className='flex flex-wrap'>
            <div className='flex flex-wrap w-12/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto m-4 p-8'>
                <div className='border-2 border-black rounded-lg p-4 justify-center mx-auto'>
                    <div className='mx-auto justify-center content-center text-center'>
                    <Image className='rounded-lg' src='/image/jackpot-city-casino-logo-gad-table-1.jpg' width='700px' height='280' alt='icon' />
                    <h1 className='text-center text-xl'>10BET</h1>

                    <hr className='border-gray-600'></hr>
                    <p>Cashout Time</p>
                    <p>1-3 DAYS</p>
                    <button className='w-full bg-green-300 rounded-md py-4 text-white my-2'>Read Review</button>
                    </div>
                </div>                
            </div>

            <div className='flex flex-wrap w-12/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto m-4 p-8'>
                <div className='border-2 border-black rounded-lg p-4 justify-center mx-auto'>
                    <div className='mx-auto justify-center content-center text-center'>
                    <Image className='rounded-lg' src='/image/jackpot-city-casino-logo-gad-table-1.jpg' width='700px' height='280' alt='icon' />
                    <h1 className='text-center text-xl'>10BET</h1>

                    <hr className='border-gray-600'></hr>
                    <p>Cashout Time</p>
                    <p>1-3 DAYS</p>
                    <button className='w-full bg-green-300 rounded-md py-4 text-white my-2'>Read Review</button>
                    </div>
                </div>                
            </div>

            <div className='flex flex-wrap w-12/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto m-4 p-8'>
                <div className='border-2 border-black rounded-lg p-4 justify-center mx-auto'>
                    <div className='mx-auto justify-center content-center text-center'>
                    <Image className='rounded-lg' src='/image/jackpot-city-casino-logo-gad-table-1.jpg' width='700px' height='280' alt='icon' />
                    <h1 className='text-center text-xl'>10BET</h1>

                    <hr className='border-gray-600'></hr>
                    <p>Cashout Time</p>
                    <p>1-3 DAYS</p>
                    <button className='w-full bg-green-300 rounded-md py-4 text-white my-2'>Read Review</button>
                    </div>
                </div>                
            </div>

            <div className='flex flex-wrap w-12/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto m-4 p-8'>
                <div className='border-2 border-black rounded-lg p-4 justify-center mx-auto'>
                    <div className='mx-auto justify-center content-center text-center'>
                    <Image className='rounded-lg' src='/image/jackpot-city-casino-logo-gad-table-1.jpg' width='700px' height='280' alt='icon' />
                    <h1 className='text-center text-xl'>10BET</h1>

                    <hr className='border-gray-600'></hr>
                    <p>Cashout Time</p>
                    <p>1-3 DAYS</p>
                    <button className='w-full bg-green-300 rounded-md py-4 text-white my-2'>Read Review</button>
                    </div>
                </div>                
            </div>
          
        </div>
    </>
  )
}
