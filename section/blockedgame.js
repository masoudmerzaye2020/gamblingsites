import React from 'react'
import Section from '../components/section'
import Container from '../components/container'
import Title from '../components/title'
import {blocklist} from '../data/blockedgamblinglist'
import Image from 'next/image'

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
                            <div key={index} className=' w-full md:w-6/12 lg:w-4/12  p-2'>
                                <div className='bg-[#f6d9d5] relative h-full'>
                                    <div className='absolute'><Image src={game.logo} width='80' height='50' alt="logo"/></div>
                                    <h1>{game.title}</h1>
                                    {game.reasons.map((i,p)=>{
                                        return(
                                            <>
                                                <ul>
                                                    <li>{i.title}</li>
                                                </ul>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Section>
    </>
  )
}

export default Blockedgame