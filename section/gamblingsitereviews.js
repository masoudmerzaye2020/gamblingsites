import React from 'react'
import { sitereview } from '../data/gamblingsitereview'
import ReviewCard from '../components/reviewcard'
import Title from '../components/title'
import Section from '../components/section'
import Container from '../components/container'

const style = {
    section:'full',
    container:'w-full md:w-11/12 lg:w-10/12 mx-auto px-2 py-4',
    outercard:'bg-[#72a6ca] w-full rounded-lg border-[1px] border-gray-400 my-4',
    innercard:'grid grid-cols-1 md:grid-cols-2  py-8 px-6 bg-gray-100',
}

function Gamblingsitereviews() {

  return (
    <>
    <Section>
        <Container>
            <Title title={'Our Gambling Site Reviews'}/>
            <p>While our rankings compare several top-rated sites based on specific characteristics, our reviews offer an in-depth look at a single site in particular. They cover everything you need to know about a specific site. Here are a few examples of some of our most popular reviews.</p>
            
            
            
            
            {sitereview.map((list, index)=>{
                return(
                    <>
                        <div key={index}>
                            <div>
                                {list.review.map((p, i)=>{
                                    return(
                                        <>
                                            <p>{p.text}</p>
                                        </>
                                    )
                                })}
                            </div>                        
                        
                            
                            <div className={style.outercard}>
                                <h1 className='p-4 text-2xl text-white uppercase'>general information</h1>
                                <div className={style.innercard}>
                                    {list.generalinformation.map((item) => (
                                        <ReviewCard
                                        key={`team--key${item.id}`}                            
                                        title={item.title}                        
                                        />
                                    ))}
                                </div>
                            </div>



                            <div className={style.outercard}>
                                <h1 className='p-4 text-2xl text-white uppercase'>Sports Betting information</h1>
                                <div className={style.innercard}>
                                    {list.sportsbetting.map((item) => (
                                        <ReviewCard
                                        key={`team--key${item.id}`}                            
                                        title={item.title}                        
                                        />
                                    ))}
                                </div>
                            </div>


                            <div className={style.outercard}>
                                <h1 className='p-4 text-2xl text-white uppercase'>Online Casino information</h1>
                                <div className={style.innercard}>
                                    {list.onlinecasino.map((item) => (
                                        <ReviewCard
                                        key={`team--key${item.id}`}                            
                                        title={item.title}                        
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className={style.outercard}>
                                <h1 className='p-4 text-2xl text-white uppercase'>Pkersite information</h1>
                                <div className={style.innercard}>
                                    {list.pokersites.map((item) => (
                                        <ReviewCard
                                        key={`team--key${item.id}`}                            
                                        title={item.title}                        
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </Container>
    </Section>
    </>
  )
}

export default Gamblingsitereviews