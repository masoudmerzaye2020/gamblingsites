import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Mainbullet({link, linkdesc, title, desc}) {
  return (
    <>
        <div>
            <ul>
                <li className=' py-2'>
                  <p className=' align-top  '><Image className='inline-block' src='/image/main_bullet.gif' width='25' height='25' alt='icon'/><span className='inline-block align-top '><Link href={link}><a className='px-2 text-blue-600 text-lg '>{linkdesc}</a></Link> </span><span className='font-bold'>{title}</span>{desc}</p>
            {/*         <div className='w-[20px] h-[20px]'>
                    <Image src='/image/main_bullet.gif' width='20' height='20' alt='icon'/>
                    </div>
                    <div className=''><p> <span><Link href={link}><a className='px-2 text-blue-600 text-lg'>{linkdesc}</a></Link> </span><span>{title}</span>{desc}</p></div> */}
                </li>
                        
            </ul>
        </div>
    </>
  )
}
