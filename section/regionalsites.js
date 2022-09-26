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
            <p className={style.paragraph}>We don’t take a “one-size fits all” approach to recommending online gambling sites. It’s important that we help our users find sites that suit their own personal needs and requirements.</p>
            <p className={style.paragraph}>That’s why we maintain regularly updated rankings of the best gambling sites in a wide range of categories. You’ll find all these categories listed and discussed on the following page.</p>
            <Link href="/about" passHref>
                <Button variant="contained" color="secondary">ALL GAMBLING SITE COMPARISONS</Button>
            </Link>
            <p className={style.paragraph}>There are many websites on the internet that provide a similar service to GamblingSites.com. You only have to do a Google search for “top 5 gambling sites” to see that.</p>
            <p className={style.paragraph}>We don’t believe that offering one single list of the best sites is enough though. While all of our recommendations have been carefully reviewed and rated, we know everyone has their own preferences. The best site for you might not be the same as the best site for me.</p>
            <p className={style.paragraph}>For example, if you’re looking to bet on sports online from the United States, then you’ll want a completely different site from someone that’s looking to play real money casino games from the United Kingdom. Online gambling covers a broad spectrum of gaming activities, and things work differently in different regions.</p>
            <p className={style.paragraph}>It’s for precisely that reason that we haven’t stopped with just the one list of the top gambling sites. Here are some examples of other categories we rank sites for.</p>
            
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