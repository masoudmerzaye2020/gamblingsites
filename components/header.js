import React from 'react'
import Section from './section'
import Container from './container'

export default function Header({children}) {
  return (
    <>
      <Section>
      <div className='w-full bg-[#324959]'>
        <Container>
        <div className='mx-4 w-10/12 text-white md:text-5xl text-3xl font-semibold py-2 mb-3'>
                {children}
            </div>
        </Container>
        </div>
      </Section>       
    </>
  )
}
