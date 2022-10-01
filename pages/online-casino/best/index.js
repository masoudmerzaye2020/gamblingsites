import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Container from '../../../components/container'
import Section from '../../../components/section'
import Header from '../../../components/header'
import Title from '../../../components/title'
import TextTitle from '../../../components/TextTitle'
import Link from 'next/link'

export default function index() {
  return (
    <>
        <Header>Best Online Casinos – Our Top 5 Most Trusted Sites</Header>
        <Section>
            <Container>
                <p>Maybe you’re new to playing casino games online. Maybe you’ve had enough of using casino sites that don’t deliver on their promises. Maybe you want to know which casino apps pay real money. Or maybe you simply want to know which is the best online casino out there.</p>
                <p></p>

                <Title title={'Our Top-Rated Online Casinos for 2022'}/>
                <p>Let’s start with a quick look at some of our top-rated online casinos and why we like them so much.</p>
                <div>
                    <ul className='py-2'>
                        <li className='flex py-2'>
                            <Image src='/image/main_bullet.gif' width='20' height='20' alt=''/>
                            <Link href={'/'}><a className='px-2 text-blue-400 '>Las Atlantis Casino</a></Link>
                            <p>– A great selection of games and a huge deposit bonus offer</p>

                        </li>
                        <li className='flex py-2'>
                            <Image src='/image/main_bullet.gif' width='20' height='20' alt=''/>
                            <Link href={'/'}><a className='px-2 text-blue-400 '>Las Atlantis Casino</a></Link>
                            <p>– A great selection of games and a huge deposit bonus offer</p>

                        </li>
                        <li className='flex py-2'>
                            <Image src='/image/main_bullet.gif' width='20' height='20' alt=''/>
                            <Link href={'/'}><a className='px-2 text-blue-400 '>Las Atlantis Casino</a></Link>
                            <p>– A great selection of games and a huge deposit bonus offer</p>

                        </li>
                    </ul>
                </div>

                <TextTitle title={'Casino Apps vs. Casino Sites'}/>
                <div>
                    <ul className='py-2'>
                        <li className='flex py-2'>
                            <Image src='/image/main_bullet.gif' width='20' height='20' alt=''/>
                            <Link href={'/'}><a className='px-2 text-blue-400 '>Best Mobile Casino</a></Link>
                           

                        </li>
                        <li className='flex py-2'>
                            <Image src='/image/main_bullet.gif' width='20' height='20' alt=''/>
                            <Link href={'/'}><a className='px-2 text-blue-400 '>Iphone Casinos</a></Link>
                           

                        </li>
                        <li className='flex py-2'>
                            <Image src='/image/main_bullet.gif' width='20' height='20' alt=''/>
                            <Link href={'/'}><a className='px-2 text-blue-400 '>Ipad Casisnos</a></Link>
                           

                        </li>
                    </ul>
                </div>

                <TextTitle title={'Best Online Casinos by Country'}/>
                <p>Online gambling laws vary around the world, so your access to casino sites will depend on your country. For example, you can enjoy online gambling in Canada, Australia, and the United Kingdom. Here is where you can find our recommendations for where to play real money casino games in these regions.</p>

                <div className='max-w-'>
                    <ul className='flex flex-wrap w-full mx-auto justify-center'>
                        <li className='w-[150px] my-[20px] mx-[10px] '>
                            <div>
                            <Image className='rounded-lg' src='/image/Australia-Online-Casinos-Button.png' width={'150'} height='150' alt='image'/>
                            </div>
                            <div className=' w-[150px] bg-[#fccd1b] text-center py-[2px] rounded-lg my-2'>
                                <Link className='w-[150] ' href={'/'}>
                                <a className='uppercase'>australia</a>
                                </Link>
                            </div>   
                        </li>
                        <li className='w-[150px] my-[20px] mx-[10px] '>
                            <div>
                            <Image className='rounded-lg' src='/image/Australia-Online-Casinos-Button.png' width={'150'} height='150' alt='image'/>
                            </div>
                            <div className=' w-[150px] bg-[#fccd1b] text-center py-[2px] rounded-lg my-2'>
                                <Link className='w-[150] ' href={'/'}>
                                <a className='uppercase'>australia</a>
                                </Link>
                            </div>   
                        </li>
                        <li className='w-[150px] my-[20px] mx-[10px] '>
                            <div>
                            <Image className='rounded-lg' src='/image/Australia-Online-Casinos-Button.png' width={'150'} height='150' alt='image'/>
                            </div>
                            <div className=' w-[150px] bg-[#fccd1b] text-center py-[2px] rounded-lg my-2'>
                                <Link className='w-[150] ' href={'/'}>
                                <a className='uppercase'>australia</a>
                                </Link>
                            </div>   
                        </li>
                        
                       
                        
                        
                    </ul>
                </div>

            </Container>
        </Section>
    </>
  )
}
