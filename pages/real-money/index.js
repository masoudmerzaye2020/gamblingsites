import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Section from '../../components/section'
import Container from '../../components/container'
import Title from '../../components/title'
import Header from '../../components/header'
import Button from '../../components/button'
import Wideimage from '../../components/wideimage'

function Index() {
  return (
    <>
        <Header>Sports Betting Guide: How to Bet On Sports For Fun & Profit</Header>
        <Section>
          <Container>
            <p>It’s no surprise that a lot of people like to gamble for real money, online and in person. Playing poker, visiting casinos to enjoy the games there, or betting on sports are all fun and could bring you some rewards, too. Naturally, though, there are also a lot of risks involved.</p>
            <Title title={'What Is Real Money Gambling?'}/>
            <p>Put simply, real money gambling involves placing a wager on an uncertain outcome with the chance of winning or losing money depending on what outcome transpires.</p>
            <div className='w-full md:w-8/12 mx-auto py-4'>
              <Wideimage src='/image/01_Real-Money-Gambling-Page-Graphics_no1-1.png'/>
            
            </div>
            <Title title={'The Most Popular Ways to Gamble Online for Real Money'}/>
            <p>As you probably know, there are many different forms of gambling. Examples include making a bet with your friends, playing in a casino, and betting on sports with a bookmaker. As long as a real money wager is being placed on an uncertain outcome, it’s gambling.</p>
            <div className='w-full md:w-8/12 mx-auto py-4'>
              <Wideimage  src='/image/01_Real-Money-Gambling-Page-Graphics_no2-1.png'/>
              
            </div>
            <div className='w[100%] h-[100%] relative bg-gray-300' >
                <Image
                  alt='Mountains'
                  src='/image/01_Real-Money-Gambling-Page-Graphics_no2-1.png'
                  layout='fill'
                 
                />
                ffd
              </div>
          </Container>
        </Section>
    </>
  )
}

export default Index