import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Section from '../components/section'
import Container from '../components/container'
import Title from '../components/title'
import Sitescards from '../section/sitescards'
import Button from '../components/button'
import Gamblingsitereviews from '../section/gamblingsitereviews'
import Sitereview from '../section/sitereview'
import Regionalsites from '../section/regionalsites'
import Safegambling from '../section/safegambling'
import Blockedgame from '../section/blockedgame'
import Aboutgamblingsites from '../section/aboutgamblingsites'
import FAQ from '../section/faq'





export default function Home() {
  return (
    <>
        
        <div className='w-full bg-[#15365a] text-center p-2'>
         <h1 className='text-2xl md:text-[45px] font-semibold text-gray-200 py-1'>The Best Online Gambling Sites for 2022</h1>
        <p className='text-lg text-gray-300 py-1'>Rankings and Reviews of 200+ Online Casinos, Sports Betting Sites, and Other Gambling Websites</p>
        </div>
        <Section>
            <Container>              

                <p >
                    <span className='text-lg font-semibold '> GamblingSites.com is the internet’s most comprehensive guide to the world’s best online gambling sites.</span> This website is a genuine goldmine for gamblers, with information and expert advice on just about every gambling-related topic under the sun.

                Our main objective is to ensure you enjoy safe online betting and gaming at reputable and trustworthy gambling sites. You’ll find full details on everything else we have to offer throughout this page, but let’s start with our latest rankings of the best gambling sites.
                </p> 
                <Sitescards/>
                <p >When we say that these are the best gambling sites, we mean it. This is not some hastily assembled list of online casinos, sports betting sites, and other real money gambling websites. These rankings are based on extensive research and thorough testing that is carried out by our resident experts in online gambling.</p>       
                <p >Our experts have years and years of experience in online gaming. They know what to look for in sites to ensure that we only recommend those that provide a safe online gambling experience as well as an enjoyable one.</p>
                <p >The top-rated gambling sites listed above are all of the highest quality. We feel comfortable recommending them to our readers because they are safe and reputable operations. They are sites that we happily use ourselves, which is perhaps the biggest endorsement of all.</p>
                <p >If you’re looking for somewhere to gamble online for real money right now, then you can visit any one of these sites and be confident of a positive experience. If you’d like to learn more about our gambling site rankings and everything else we have to offer on our website, please keep reading.</p>

                <Regionalsites/>
                <Safegambling/>
                <Blockedgame/> 
                <Aboutgamblingsites/> 
                <Gamblingsitereviews/>
                <FAQ/>
            </Container>
        </Section>          
    </>    
  )
}
