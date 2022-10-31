import React from 'react'
import Section from '../components/section'
import Container from '../components/container'
import Title from '../components/title'
import {blocklist} from '../data/blockedgamblinglist'
import { recommended } from '../data/recommendedlist'
import Image from 'next/image'
import Link from 'next/link'

function Blockedgame() {
  return (
    <>
        <Section>
            <Container>
                <Title title={'Avoid Scam Gambling Sites'}/>
                
                <p>Unfortunately, not all of the gambling sites on the internet are as good as the ones we recommend. There are several scam sites that use unfair games, complicated terms and conditions, or other tactics to take advantage of customers. The point we want to get across here is that avoiding the wrong sites is even more important than finding the best online gambling sites</p>
                <p>Here are a few examples of scam sites and why you should avoid them. You can also visit our casino blacklist where we have a complete list of blacklisted gambling sites.</p>
                <div className='flex flex-wrap w-full'>
                    {blocklist.map((game, index) =>{
                        return(
                            <div key={index} className=' w-full md:w-4/12 lg:w-4/12  px-2 pt-12'>
                                <div className='bg-[#fee] relative h-full p-4 rounded-md border-[1px] border-[#f6d9d5] '>
                                    <div className='absolute top-0 right-0 overflow-hidden'><Image src='/image/warning.webp' width='120' height='120' alt='warning'/></div>
                                    <div className='absolute left-4 -top-7 -mt p-2 bg-black rounded-lg'><Image src={game.logo} width='170' height='50' alt="logo"/></div>
                                    <h1 className='pt-10 text-xl font-semibold pb-4'>{game.title}</h1>
                                    {game.reasons.map((i,p)=>{
                                        return(
                                            <>
                                                <ul key={p} className=' flex flex-wrap w-full'>
                                                <div className='w-1/12 pt-1'>
                                                <Image src='/image/circle-x.webp' width='20px' height='20px' alt='x-icon'/>
                                                </div>
                                                 <li className='w-11/12 py-[1px] pl-2' > {i.title}</li>
                                                </ul>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <p className='py-4'> If you just want to know which online gambling sites you should join, we have you covered there too. The following are the best sites for gambling online in 2022.</p>
                <div className='flex flex-'>
                    <h1 className='flex flex-row text-lg text-green'>RECOMMENDED GAMBLING SITES </h1>                                  
                </div>
                <div className='w-full'>
                    <div className='flex flex-wrap w-full py-4'>
                        {recommended.map((web,index)=>{
                            return(
                                <>
                                    <Link href={web.link} >
                                    <button className='w-12/12 md:w-4/12 lg:w-3/12 p-6 mx-auto '>
                                        <div key={index} className='p-4 mx-auto border-2 border-black rounded-lg hover:bg-[#19242c] hover:text-white'>
                                            <div className='rounded-md justify-center flex border-[1px] hover:border-red-300'>
                                            <Image className='rounded-lg mx-auto flex justify-center' src={web.logo} width='210' height='90' alt={web.title} />
                                            </div>
                                            <div className='bg-[#40d3b7] hover:bg-[#ff6900] w-[70%] mx-auto flex py-2 my-4 rounded-full mx-auto text-center'>
                                            <p className='mx-auto uppercase'>visit site</p>
                                            </div>
                                        </div>
                                    </button>
                                    
                                    </Link>
                                </>
                            )
                        })}
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>Responsible Gambling Resources</h1>
                <p>It is crucial to understand that safe online gambling sites are only as safe as the person using them. Most people can enjoy online gambling as a hobby, but some people let it get out of control.</p>
                <p>Such people are firmly in the minority, but problem gambling is a serious issue. Gambling can be addictive, and it can be very easy for things to get out of control very quickly unless you follow the #1 golden rule.</p>
                
                <div className='bg-gray-200 w-full border-[2px] border-red-900 flex flex-wrap rounded-md'>
                    

                    <div className='w-full lg:w-3/12 py-4 flex justify-center'>
                     <Image src='/image/alert_sign.png' width='170' height='170' alt='wallet' />
                    </div>
                    <div className='w-full lg:w-6/12  text-red-900'>
                        <h1 className='text-6xl text-center py-2'>NEVER GAMBLE</h1>
                        <h1 className='text-4xl text-center'>
WITH MONEY THAT YOU CAN’T AFFORD TO LOSE</h1>
                    </div>
                    <div className='w-full lg:w-3/12 justify-center flex'>
                        <Image src='/image/empty_wallet.png' width='400' height='400' alt='wallet' />
                    </div>              
                </div>

                <div className='flex justify-center py-4'>
                <button className='bg-[#40d3b7] hover:bg-gray-100 px-[100px] rounded-full py-4 border-2 border-[#40d3b7] text-gray-100 hover:text-[#40d3b7] text-lg'> How to Gamble Responsibly</button>
                </div>


                <div className='flex justify-center py-4'>
                    <button className='bg-[#40d3b7] hover:bg-gray-100 px-[100px] rounded-full py-4 border-2 border-[#40d3b7] text-gray-100 hover:text-[#40d3b7] text-lg'> Dealing With Problem Gambling</button>
                </div>
            </Container>
        </Section>
    </>
  )
}

export default Blockedgame