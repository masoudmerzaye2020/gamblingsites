import React from 'react'
import Header from '../../components/header'
import Section from '../../components/section'
import Container from '../../components/container'
import Title from '../../components/title'
import TextTitle from '../../components/TextTitle'
import Bluebutton from '../../components/bluebutton'

function Index() {
  return (
    <>
    <Header>Contact GamblingSites.com</Header>
    <Section>
      <Container>
        <p>We welcome our readers to contact us for any reason whatsoever. The whole reason our website exists is to provide you with the very best gambling information possible, and if we can assist you in any further way, we would be delighted to help.</p>
        <p>On our site, we have provided answers to a comprehensive range of frequently asked questions related to all forms of gambling and betting.</p>
        <p>You might want to take a look at one of the following pages first to see if we have already answered your question.</p>
        <div className='flex flex-wrap'>
          <Bluebutton link={''} title={'Poker FAQ'}/>
          <Bluebutton link={''} title={'Casino FAQ'}/>
          <Bluebutton link={''} title={'Bingo FAQ'}/>
          <Bluebutton link={''} title={'Online Gabling FAQ'}/>
          <Bluebutton link={''} title={'Sports Betttin FAq'}/>
          <Bluebutton link={''} title={'horse Racing Betting FAQ'}/>
        </div>
        <Title title={'Support and General Inquiries'}/>
        <p>If you have any questions relating to the content on our website or to online gambling in general, or if we can offer you assistance in any way, please don’t hesitate to contact us.</p>

        <TextTitle title={'Complaints'}/>
        <p>In the event that you have a complaint about anything on this website, we promise to address your complaint swiftly and fairly.</p>

        <Title title={'Advertising'}/>
        <p>We don’t accept any form of advertising at GamblingSites.com, so please don’t contact us with advertising offers. If you have a product or service that you think our readers may be interested in, please use our support email address above.</p>
        <p>We will consider reviewing your products or services if we deem it appropriate.</p>
      </Container>
    </Section>
    </>
  )
}

export default Index