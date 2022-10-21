import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sitereview } from '../data/gamblingsitereview'
import ReviewCard from '../components/reviewcard'
import Title from '../components/title'
import Section from '../components/section'
import Container from '../components/container'


const style = {
    section:'full',
    container:'w-full md:w-11/12 lg:w-10/12 mx-auto px-2 py-4',
    outercard:'bg-[#72a6ca] w-full rounded-lg border-[1px] border-gray-400 my-4',
    innercard:'grid grid-cols-1 md:grid-cols-2  py-8 px-6 bg-gray-100 rounded-b-lg',
}

function Gamblingsitereviews() {

  return (
    <>
    <Section>
        <Container>
            <Title title={'Our Gambling Site Reviews'}/>
            <p>While our rankings compare several top-rated sites based on specific characteristics, our reviews offer an in-depth look at a single site in particular. They cover everything you need to know about a specific site. Here are a few examples of some of our most popular reviews.</p>
            
            <div className='bg-[#112C4A]  flex flex-wrap rounded-md '>
                <div className='flex flex-wrap mx-auto w-full md:w-6/12 lg:w-4/12 p-4 bg-[#112C4A] rounded-lg'>
                    <div className='flex flex-wrap p-4 hover:bg-[#f86b4f] bg-[#141D24] rounded-lg border-2 border-[#FCCD1B]'>
                        <div className='w-6/12 rounded-lg flex w-full border-2  '>                       
                            <Image className='rounded-lg my-auto justify-center flex' src='/image/jackpot-city-casino-logo-gad-table-1.jpg' width="190" height="80" alt="image" />
                        </div>
                        <div className='w-6/12 text-[#FCCD1B] my-auto pl-2 underline-[#FCCD1B]'>                        
                            <Link href="/">
                            <a className='uppercase'>jackpot city casino review</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap mx-auto w-full md:w-6/12 lg:w-4/12 p-4 bg-[#112C4A]'>
                    <div className='flex flex-wrap p-4 hover:bg-[#f86b4f] bg-[#141D24] rounded-lg border-2 border-[#FCCD1B]'>
                        <div className='w-6/12 rounded-lg flex w-full border-2  '>                       
                            <Image className='rounded-lg my-auto justify-center flex' src='/image/jackpot-city-casino-logo-gad-table-1.jpg' width="190" height="80" alt="image" />
                        </div>
                        <div className='w-6/12 text-[#FCCD1B] my-auto pl-2 underline-[#FCCD1B]'>                        
                            <Link href="/">
                            <a className='uppercase'>jackpot city casino review</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap mx-auto w-full md:w-6/12 lg:w-4/12 p-4 bg-[#112C4A]'>
                    <div className='flex flex-wrap p-4 hover:bg-[#f86b4f] bg-[#141D24] rounded-lg border-2 border-[#FCCD1B]'>
                        <div className='w-6/12 rounded-lg flex w-full border-2  '>                       
                            <Image className='rounded-lg my-auto justify-center flex' src='/image/jackpot-city-casino-logo-gad-table-1.jpg' width="190" height="80" alt="image" />
                        </div>
                        <div className='w-6/12 text-[#FCCD1B] my-auto pl-2 underline-[#FCCD1B]'>                        
                            <Link href="/">
                            <a className='uppercase'>jackpot city casino review</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap mx-auto w-full md:w-6/12 lg:w-4/12 p-4 bg-[#112C4A]'>
                    <div className='flex flex-wrap p-4 hover:bg-[#f86b4f] bg-[#141D24] rounded-lg border-2 border-[#FCCD1B]'>
                        <div className='w-6/12 rounded-lg flex w-full border-2  '>                       
                            <Image className='rounded-lg my-auto justify-center flex' src='/image/jackpot-city-casino-logo-gad-table-1.jpg' width="190" height="80" alt="image" />
                        </div>
                        <div className='w-6/12 text-[#FCCD1B] my-auto pl-2 underline-[#FCCD1B]'>                        
                            <Link href="/">
                            <a className='uppercase'>jackpot city casino review</a>
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>


            <p>Our reviews are designed to work for you. Read the review from top to bottom if you want to know everything about a site. You can also skip to relevant sections to find specific pieces of information.</p>
            <p>Honesty is the most valuable part of our reviews. We tell it like it is, intentionally pointing out aspects of the site that we didn’t like. Our reviews are mostly positive because we only recommend the best sites. But every site has flaws, and we aren’t afraid to point those out.</p>
            <p>Another thing you should know about our reviews is that the information we include depends on the form of gambling the site offers. We include some basic information in every review, but the rest depends on the gambling options. Here are some examples.</p>
            <p></p>
            
            
            
            {sitereview.map((list, index)=>{
                return(
                    <>
                        <div key={index}>
                            <div>
                                {list.review.map((p, i)=>{
                                    return(
                                        <>
                                            <p>{p.text}</p>
                                        </>
                                    )
                                })}
                            </div>                        
                        
                            
                            <div className={style.outercard}>
                                <h1 className='p-4 text-2xl text-white uppercase'>general information</h1>
                                <div className={style.innercard}>
                                    {list.generalinformation.map((item) => (
                                        <ReviewCard
                                        key={`team--key${item.id}`}                            
                                        title={item.title}                        
                                        />
                                    ))}
                                </div>
                            </div>



                            <div className={style.outercard}>
                                <h1 className='p-4 text-2xl text-white uppercase'>Sports Betting information</h1>
                                <div className={style.innercard}>
                                    {list.sportsbetting.map((item) => (
                                        <ReviewCard
                                        key={`team--key${item.id}`}                            
                                        title={item.title}                        
                                        />
                                    ))}
                                </div>
                            </div>


                            <div className={style.outercard}>
                                <h1 className='p-4 text-2xl text-white uppercase'>Online Casino information</h1>
                                <div className={style.innercard}>
                                    {list.onlinecasino.map((item) => (
                                        <ReviewCard
                                        key={`team--key${item.id}`}                            
                                        title={item.title}                        
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className={style.outercard}>
                                <h1 className='p-4 text-2xl text-white uppercase'>Pkersite information</h1>
                                <div className={style.innercard}>
                                    {list.pokersites.map((item) => (
                                        <ReviewCard
                                        key={`team--key${item.id}`}                            
                                        title={item.title}                        
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </Container>
    </Section>
    </>
  )
}

export default Gamblingsitereviews