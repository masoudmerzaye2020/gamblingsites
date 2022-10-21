import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Accordion from '../../../../components/accordion'
import { safesports } from '../../../../data/FAQ/safesports'
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
                <p>Here are some things you should know about our company that may help you trust us more.</p>
                <div className='bg-[#f5f5f5] py-2'>
                   <Mainbullet link={''} title={'Our team has decades of combined experience with online sports betting and online gambling.'} desc={''} />
                   <Mainbullet link={''} title={'We never accept bribes or payment in exchange for positive reviews or higher rankings.'} desc={''}/>
                   <Mainbullet link={''} title={'Our reviewers are experienced and active sports bettors. We never recommend sites that we wouldn’t be willing to use ourselves.'} desc={''}/>
                   <Mainbullet link={''} title={'Take a look at our in-depth reviews. You’ll see that each review is unique. That is because we take the time actually to try the site out and investigate it for ourselves.'} desc={''}/>
                   <Mainbullet link={''} title={'Our reviews also include both the positives and the negatives. We don’t hide information from you or try to sugarcoat it.'} desc={''}/>
  
                </div>
                <p>The best way to know you can trust us when we say that these are the safest betting sites online is to take one of our recommendations for a test drive.</p>

                <Title title={'How to Recognize the Safest Online Sportsbooks'}/>
                <p>We want to empower you to find the safest online betting sites for yourself. That way, you can feel confident about the sportsbooks you choose to use, whether it’s one of our recommendations or not. So, here are some details that will help you recognize betting sites that are safe.</p>

                <TextTitle title={'Licensing Information'}/>
                <p>It’s crucial that you choose to use a licensed online betting site. Licensing organizations have specific standards that they hold betting sites to, and those standards are designed to protect consumers. There are several different licensing organizations throughout the world.</p>




              <Title title={'FAQs About Safe Sports Betting Websites'}/>
              {safesports.map((item) => (
            <Accordion
              key={`faq--key${item.id}`}          
             
              title={item.question}
              content={item.answer}
             
            />
            ))}  
            </Container>
        </Section>
    </>
  )
}
