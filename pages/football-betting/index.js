import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Section from '../../components/section'
import Container from '../../components/container'
import Title from '../../components/title'
import Header from '../../components/header'
import Button from '../../components/button'
import Bluebutton from '../../components/bluebutton'

function index() {
  return (
    <>
        <Header>Football Betting Sites</Header>
        <Section>
            <Container>
            <p>We’ve ranked the best real money football betting sites for 2022, so you can safely bet football online with absolute confidence. They’re listed below, so check out these football betting sites if you’re ready to get in on the action.</p>
                <p>We want to be absolutely certain that we steer people in the right direction for their online football betting. That’s why we conduct a lot of in-depth research and extensive testing when ranking the best football betting sites for you to choose from.</p>
                <Title title={'Best Football Betting Sites 2022'}/>
                <div>
                    <ul>
                        <li className='flex py-2'>
                            <Image src='/image/main_bullet.gif' width='25' height='25' alt='icon'/><Link href='/'><a className='px-2 text-blue-400 hover:underline'>BetUS </a></Link> <p> - Safe betting site with special football bonuses.</p>
                        </li>
                       
                    </ul>
                </div>
                <p>American football has become popular all over the world. It’s still most popular within the US, though, where it’s the country’s number one spectator sport and also attracts the most betting interest.</p>
                <Title title={'Ranking the Best Real Money Football Betting Sites'}/>
                <p>When it comes to ranking real money football betting sites, or any type of gambling site for that matter, we have to bear in mind that people have different preferences and requirements. The “best” site for one person may not necessarily be the best for someone else.</p>
                <div className='my-4'>
                    <Image src='/image/Safe-Trusted-Football-Betting-Sites.jpg' width='45' height='45' alt='football'/>
                </div>
                <p>The benefits of using legal football betting sites that are subject to regulation by reputable authorities should be obvious. The last thing you want to worry about when betting on football online is whether a site is going to disappear with your money or not pay you your winnings.</p>


                <Title title={'Why Use Online Football Betting Sites?'}/>
                <p>There are brick-and-mortar sports betting parlors in some parts of the United States, and they are as common as convenience stores in many parts of Europe. If you have access to a physical sportsbook, why would you want to bet football online?</p>
                <div className='my-4'>
                    <Image src='/image/Why-Bet-On-Football-Online.jpg' width='100%' height='100%' alt='football'/>
                </div>

                <Title title={'NFL and College Football Betting'}/>
                <p>The best football betting sites emphasize both the National Football League and NCAA college football. Regardless of the specific flavor you prefer, the highly trusted sites that we recommend will exceed your expectations.</p>

                <div className='flex flex-wrap'>
                <Bluebutton>NFT Bettin Sites</Bluebutton>
                <Bluebutton>College Football Betting Sites</Bluebutton>
                <Bluebutton>College Football Betting Sites</Bluebutton>
                <Bluebutton>College Football Betting Sites</Bluebutton>
                </div>

                <div className='my-4'>
                    <div className='bg-[#1a2d37] rounded-lg max-w-[720px] mx-auto text-center p-4'>
                        <h1 className='text-white px-auto'>
                        KANSAS CITY CHIEFS AT PITTSBURGH STEELERS
                        </h1>
                        <h1 className='text-green-300 px-auto'>POINT SPREAD</h1>
                        <div className='flex flex-wrap my-4'>                            
                            <div className='w-12/12 md:w-6/12 p-2 w-full'>
                                <div className='flex flex-wrap'>
                                    <div className='w-9/12 rounded-l-lg bg-white p-4 text-justify'>Chiefs (-2)</div>
                                    <div className='bg-[#21558f] rounded-r-lg py-4 h-full w-3/12 text-yellow-300 text-xl'>-110</div>
                                </div>
                            </div>
                            <div className='w-12/12 md:w-6/12 p-2 w-full'>
                                <div className='flex flex-wrap'>
                                    <div className='w-9/12 rounded-l-lg bg-white p-4 text-justify'>Pittsburgh Steelers (+3)</div>
                                    <div className='bg-[#21558f] rounded-r-lg py-4 h-full w-3/12 text-yellow-300 text-xl'>-110</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </Container>
        </Section>
    </>
  )
}

export default index