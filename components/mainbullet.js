import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Mainbullet({link,title, desc}) {
  return (
    <>
        <div>
            <ul>
                <li className='flex py-2'>
                    <Image src='/image/main_bullet.gif' width={'20'} height='20' alt='icon'/>
                    <Link href={link}><a>{title}</a></Link>
                    <p className='px-2'>{desc}</p>
                </li>
                        
            </ul>
        </div>
    </>
  )
}
