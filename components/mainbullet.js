import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Mainbullet({link, linkdesc, title, desc}) {
  return (
    <>
        <div>
            <ul>
                <li className='flex py-2'>
                    <div className='w-[20px] h-[20px]'>
                    <Image src='/image/main_bullet.gif' width='20' height='20' alt='icon'/>
                    </div>
                    <div className=''><p> <span><Link href={link}><a className='px-2 text-blue-600 text-lg'>{linkdesc}</a></Link> </span><span>{title}</span>{desc}</p></div>
                </li>
                        
            </ul>
        </div>
    </>
  )
}
