import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Container from '../../../../components/container'
import Section from '../../../../components/section'
import Header from '../../../../components/header'
import Title from '../../../../components/title'
import Wideimage from '../../../../components/wideimage'
import TextTitle from '../../../../components/TextTitle'
import Mainbullet from '../../../../components/mainbullet'

export default function index() {
  return (
    <>
        <Header>The Safest Online Betting Sites for 2022</Header>
        <Section>
            <Container>
                <p className=''>Online sports betting is an exciting hobby, but it’s important to protect yourself. The best way to do that is to make sure you’re using the safest betting sites available.</p>

                <div className='my-4 mx-auto max-w-[730px] py-6 px-4 border-t-2 border-b-2 border-gray-400 py-6 text-center'>
                    <p className='text-xl'>It’s frustrating that some sportsbooks take advantage of customers, especially because it makes people less willing to trust legitimate betting sites.</p>
                </div>

                <p>The good news is that there are way more safe online betting sites than there are ones to avoid. So as long as you choose a reputable sportsbook, you can bet online safely.</p>

                <p>You have already taken the first step towards protecting yourself by checking out this page. We’re here to recommend the safest sportsbooks and give you more information that will help you bet online securely.</p>
                <Title title={'Top 5 Safest Betting Sites for the USA'}/>
                <Wideimage src={'/image/Safest-Betting-Sites.jpg'}/>
                <p>Here is a little more information about the sites we recommend for US bettors.</p>
                <TextTitle title={'How Do You Know You Can Trust Our Sportsbook Ratings?'}/>
                <p>You’re here because you’re wise and cautious about who to trust when it comes to real money betting online. Odds are you’re also skeptical about us and wonder why you should trust our recommendations and ratings.</p>
                <div>
                   
                </div>
            </Container>
        </Section>
    </>
  )
}
