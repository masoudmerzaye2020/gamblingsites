import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Section from '../components/section'
import Container from '../components/container'
import RegionalCard from '../components/regionalcard'
import { regionalsites } from '../data/regionalgambline'
import Title from '../components/title'
import Button from '../components/button'
const style = {
    section:'full',
    container:'w-full md:w-11/12 lg:w-10/12 mx-auto px-2 py-4 ',
    outercard:'bg-[#72a6ca] w-full rounded-lg border-[1px] border-gray-400 my-4',
    innercard:'grid grid-cols-1 md:grid-cols-2  py-8 px-6 bg-gray-100',
    paragraph:'',
}
function Regionalsites() {
  return (
    <>
    <Section>
        <Container>
            <Title title='More Gambling Site Rankings – Finding the Best Gambling Site for You' />
           <Link href="/about" passHref>
                <Button variant="contained" color="secondary">ALL GAMBLING SITE COMPARISONS</Button>
            </Link>
   
            <div className='flex flex-wrap  mx-auto'>
            {regionalsites.map((item) => (
                 <RegionalCard
                 key={`team--key${item.id}`}
                 src={item.flag}
                 altText={item.country}
                 title={item.country}
                 url={item.url}
          
               />
            ))}
            </div>

            <p className={style.paragraph}>These are only a few of our most popular categories. We actually rank the top sites in dozens of different categories. Many of these categories are based on specific regions, types of gambling, or payment methods, but there are all kinds of other ones, too.</p> 
            <p className={style.paragraph}>Basically, we make it as easy as possible for you to find the very best gambling sites for your own personal wants and needs.</p> 
            <p className={style.paragraph}></p> 
        </Container>
    </Section>
    </>
  )
}

export default Regionalsites