import React from 'react'
import Section from '../components/section'
import Container from '../components/container'
import Header from '../components/header'
import Title from '../components/title'
import Image from 'next/image'

function Aboutgamblingsites() {
  return (
    <>
        <Section>
            <Container>
                <Title title={'About GamblingSites.com'}/>
                <p>You already know that we rank and review dozens of online gambling sites, but that is not all we do here at GamblingSites.com. Our website is full of resources, blogs, betting picks, and more.</p>
                <p>The team at GamblingSites.com is the only reason we are able to offer so much valuable information. Our team includes dozens of people of all ages, locations, and backgrounds. But the one thing we all have in common is a passion for gambling. You can learn more about our team here.</p>
                <div className='relative mx-auto max-w-6/12 min-w-4/12 border-t-[2px] border-b-[2px] border-gray-600 m-4'>
                    <div className='absolute inset-x-0 top-0 bg-gray-300 p-2 rounded-full  '>
                        <Image className='flex m-auto justify-center py-auto' src='/image/who_are_we.png' width='60' height='60' alt='profile' />
                    </div>
                    <h1 className='text-4xl mx-auto text-center py-4'>who are we?</h1>
                    <p className='text-xl text-center pb-6'>Learn all about the passionate team behind GamblingSites.com</p>

                    <div className='absolute '>
                        <p className='uppercase bg-yellow-400 py-2 rounded-full text-center w-[200px]'>about us</p>
                    </div>

                </div>
            </Container>
        </Section>
    </>
  )
}

export default Aboutgamblingsites