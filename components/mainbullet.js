import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Mainbullet({link, linkdesc, title, desc}) {
  return (
    <>
        <div>
            <ul>
                <li className='flex py-2'>
                    <Image src='/image/main_bullet.gif' width={'20'} height='20' alt='icon'/>
                    <Link href={link}><a className='px-2 text-blue-600 text-lg'>{linkdesc}</a></Link>
                    <h1>{title}</h1>
                    <p className='px-2'>{desc}</p>
                </li>
                        
            </ul>
        </div>
    </>
  )
}
