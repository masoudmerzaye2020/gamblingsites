import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { footerlist } from '../footerlist';

export default function Footer() {
      return (
        <>
            <div className='w-full bg-[#11191e]'>
                <div className='lg:w-8/12 md:w-11/12 mx-auto py-8'>
                    <div className="grid grid-flow-row-dense lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                        {
                            footerlist.map((menu, index) => {
                                return (
                                    <>
                                        <div key={index} className="text-lg text-gray-200">                                            
                                            <div className='no-uderline underline-none'>
                                                <p className='text-gray-100 text-lg'>{menu.title}</p>
                                                <div className='w-10 border-[1px] border-gray-200'></div> 

                                                {menu.submenu.map((submenu, index) => {
                                                return (
                                                    <div key={index} className='no-underline p-[2px] sans-serif font-normal no-underline '>
                                                        <Link href="{submenu.url}"><a className="hover:underline hover:text-gray-500 visited:text-purple-600">{submenu.title}</a></Link>
                                                
                                                    </div>
                                                    );
                                                })
                                                }   
                                            
                                            </div>
                                        </div> 
                                    </>                
                                );
                            })
                        }
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-4 w-full py-10 ">
                        <div className='text-gray-100 my-auto'>
                        <Image src="/image/gambling-sites-logo.png" width="192" height="43" alt='logo' />                
                        </div>
                        <div className='col-span-2 flex text-gray-600 rounded-lg border-[1px] border-gray-500 py-2 flex justify-center'>
                            <div className='flex'>
                                <div className='my-auto'><Image src="/image/18_age.png" width="54" height="54" alt='logo'/></div>
                                <div className='my-auto px-2'><Image src="/image/gamcare.png" width="54" height="54" alt='logos'/></div>
                                <div className='my-auto px-2'><Image src="/image/be_gamble_aware.png" width="54" height="54" alt='logo'/></div>
                            </div>
                            <div>
                                <div>
                                    <p className='text-gray-300'>We Offer <Link href="/"><a className='text-yellow-400 underline'>tips for responsible gambling</a></Link></p>
                                </div>
                                <div>
                                    <p className='text-gray-300'>and advice for <Link href="/"><a className='text-yellow-400 underline'>dealing with problem gambling</a></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
            <div className='bg-[#0c1216] py-8 flex mx-auto justify-center text-gray-200 uppercase'>
            <Link href="/"><a className='px-2'>about us</a></Link>|
            <Link href="/"><a className='px-2'>terms of use</a></Link>|
            <Link href="/"><a className='px-2'>contact us</a></Link>|
            <Link href="/"><a className='px-2'>privacy policy</a></Link>|                    
            <Link href="/"><a className='px-2'>sitmap</a></Link>                   
            </div>
            <div className='bg-[#0c1216] flex mx-auto text-center text-blue-300 justify-center'>
                copyright @ 2022 Gamblinsites.com All Rights Reserved
            </div>
        </>
    );
}