import React from 'react'
import Header from '../../components/header'
import Section from '../../components/section'
import Container from '../../components/container'
import Title from '../../components/title'
import TextTitle from '../../components/TextTitle'
import Mainbullet from '../../components/mainbullet'
import Wideimage from '../../components/wideimage'
import Bluebutton from '../../components/bluebutton'
import Button from '../../components/button'
import Borderedbox from '../../components/borderedbox'
import Squareimage from '../../components/squareimage'
import Questionicon from '../../components/questionicon'
import Image from 'next/image'

function Index() {
  return (
    <>
    <Header>A Guide to Bitcoin and Bitcoin Gambling</Header>
    <Section>
        <Container>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <Title title={''}/>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

            {/* leaveee */}
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

            <Button>gambling sites accepting bitcoin</Button>
            <p></p>

            <Title title={''}/>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

            {/* leave it */}
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

            <Button>cryptocurrency guide</Button>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

            <Squareimage src={'/image/guides/bitcoin_graphic.png'}/>
            <p></p>

            {/* leave it */}

            <Title title={'Getting Started With Bitcoin'}/>
            <p></p>
            <p></p>
            <div>
                <Bluebutton link={''} title={''}/>
            </div>
            <p></p>
            {/* leave */}
            <p></p>

            <Title title={'Mining Bitcoin'}/>
            <p></p>
            <p></p>
            <p></p>
            <div>
                <Bluebutton link={''} title={''}/>
            </div>

            <Title title={'Buying Bitcoin'}/>
            <p></p>
            <p></p>
            <p></p>
            <div>
                <Bluebutton link={''} title={''}/>
                <Bluebutton link={''} title={''}/>
            </div>

            <Title title={'Receiving Bitcoin as Payment'}/>
            <p></p>
            <p></p>
            {/* leave */}
            <p></p>
            <p></p>
            <div>
                <Bluebutton link={''} title={''}/>
            </div>

            <Title title={'Bitcoin & Bitcoin Gambling'}/>
            <p></p>
            <p></p>
            <p></p>
            <Borderedbox>
                <p></p>
            </Borderedbox>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

            <div>
                <Bluebutton link={''} title={''}/>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <div>
                <Image src={'/image/guides/sports_betting_bitcoin.png'} width={120} height={90} alt={''}/>
                <p>Sports Betting With Bitcoin</p>
            </div>

            <div>
                <Image src={'/image/guides/casino_gambling_bitcoin.png'} width={120} height={90} alt={''}/>
                <p>Casino Gambling With Bitcoin</p>
            </div>

            <div>
                <Image src={'/image/guides/poker_bitcoin.png'} width={120} height={90} alt={''}/>
                <p></p>
            </div>

            <p></p>

            <div>
                <Bluebutton link={''} title={''}/>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <div>
                <Bluebutton link={''} title={''}/>
            </div>
            <p></p>

            <Title title={'Investing In Bitcoin'}/>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <Borderedbox>
                <p>The price of bitcoin is EXTREMELY volatile.</p>
            </Borderedbox>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

            <div>
                <Bluebutton link={''} title={''}/>
                <Bluebutton link={''} title={''}/>
            </div>

            <Title title={'More Bitcoin Information & Advice'}/>
            <p></p>
            {/* leave the box */}
        </Container>
    </Section>
    </>
  )
}

export default Index