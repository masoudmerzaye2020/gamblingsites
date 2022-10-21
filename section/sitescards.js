import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gamblinglink } from "../data/gamblinglinks";

function Sitescards() {
  return (
    <>
    <div className='bg-[#1f2d37] p-2'>
        <h1 className='text-3xl font-bold p-2 text-gray-200'>Best Gambling Sites Ranked by GamblinSites.com</h1>
        <div className='bg-[#ebf5ff] p-6'>            
            {gamblinglink.map((game, index) =>{
                return(
                    <>
                    <div key={index} className='flex w-[100%] md:flex flex-wrap border-[3px] border-[#0099e5] mb-8 bg-[#fff]'>
                        <div className='flex w-[50%] md:w-[20%] md:order-1 md:border-b-[1px] border-gray-400'>
                            <div className='m-auto text-center'>
                                <Image src={game.logo} width="192" height="80" alt='logo' />
                            </div> 
                        </div> 
                        <div className='my-auto w-[50%] md:w-[30%] md:order-7 font-semibold'>
                            <p className='text-xl text-center font-semibold mx-4'>{game.welcomemsg}</p>
                        </div>
                        <div className=' mx-auto py-4 text-center w-[50%] md:w-[20%] md:order-4 border-t-[1px] md:border-l-[1px] md:border-t-[0px] border-gray-400'>
                            <Image src={game.certifiedicon} width="90" height="90" alt='logo' />
                        </div>
                        <div className='w-[50%] md:w-[20%] md:order-8 py-4  border-t-[1px] md:border-l-[1px] md:border-t-[0px] border-gray-400'>
                            <div className=' uppercase font-semibold px-4 text-center text-lg'>
                                <button className='bg-[#fccd1b] w-full  py-2 rounded-lg border-b-2 border-[#d6ae17]'> Visit Site</button>
                            </div>
                            <div className='text-center py-4'>
                                <Link href={game.url}><a className='underline'>READ REVIEW</a></Link>
                            </div>
                        </div>

                        <div className='px-4 pt-4 w-[100%] md:w-[35%] md:order-2 border-t-[1px] md:border-b-[1px] md:border-t-[0px] border-gray-400'>
                            {game.pros.map((pros, index) => {
                                return (                                    
                                    <ul key={index} >
                                        <li className=''>
                                            <Image src='/casino/li-check.png' width="14px" height="14px" alt="image" /> {pros.title}                                         
                                        </li>                                    
                                    </ul>                              
                                    
                                    );
                                })
                            }
                        </div> 

                        <div className='px-4 py-4 w-[100%] md:w-[25%] md:order-3 border-b-[1px] border-gray-400 '>
                            {game.cons.map((cons, index) =>{
                                return(
                                    <ul key={index}>
                                        <li>
                                            <Image src='/casino/li-x.png' width="14px" height="14px" alt="image" className=' text-center flex' /> {cons.title}
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>

                        <div className='px-4 py-6 w-[50%] md:w-[30%] md:order-5 '>
                        {game.payment.map((payment, index) => {
                            return (
                                <div key={index} className='no-underline p-[2px] sans-serif font-normal no-underline '>
                                    <h2 className='text-lg font-semibold pb-3'>{payment.title}</h2>
                                    <div className='flex mx-auto text-center justify-center'>
                                    {
                                        payment.banks.map((banks, index)=> {
                                            return(
                                                <>                                                
                                                    <div key={index} className='px-1'>
                                                      <Image  src={banks.image} width="50px" height="30px" alt='bank'/> 
                                                    </div>                                           
                                              
                                                </>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            );
                            })
                        } 
                        </div>

                        <div className='px-3 h- w-[50%] md:w-[20%] md:order-6 md:border-r-[1px] border-gray-400' > 
                          <p className='py-4 px-3 '>Bitcoin (24 hours) Cerdit Cards (upto 7 days) E-wallets(12 hours)</p>
                        </div> 
                    </div>
                    </>
                )
            })}
        </div>
    </div>    
    </>
    
  )
}

export default Sitescards