import React from 'react'
import Image from 'next/image'
const style = {
    header:'w-full bg-[#324959] border-2 border-[#88c6f2] py-4',
    headertext:'text-3xl w-11/12 flex mx-auto font-semibold text-gray-200 pl-4',
    section:'w-full bg-gray-200',
    container:'w-full md:w-11/12 lg:w-10/12 mx-auto px-2 py-4',
    paragraph: 'py-[5px]',
    boldparagraph:' font-semibold pl-8',
    title: 'text-4xl font-semibold pb-2',
    divider:' w-full border-t-2 border-b-[1px]  h-[5px] border-t-gray-900 border-b-blue-500',
    quate_box:'bg-[#c4ffc4] border-2 border-[#afe4af] rounded-lg flex px-6 py-8 my-6 font-semibold italic drop-shadow-2xl shadow-gray-900',
    box:'flex font-semibold italic flex-wrap mx-auto justify-center px-auto',
    

}
export default function Index() {
  return (
    <>
        <div className={style.header}>
            <div className={style.headertext}>
                <p className={style.headertext}>About GamblingSites.com</p>
            </div>
        </div>
        <div className={style.section}>            
            <div className={style.container}>
                <p className={style.paragraph}>
                Since the early days of gambling over the internet, the industry has evolved at a fast pace, but it’s still relatively young and the online gambling landscape is constantly shifting.
                </p>
                <p className={style.paragraph}>
                Legislation around the world changes all the time, technology advances, new sites open, and some sites make improvements while others get left behind.
                </p>
                <p className={style.paragraph}>
                All of this makes it hard to stay up to date with what’s happening, and in particular, it’s difficult to know which sites to use and which ones to avoid. A leading site one year could easily be overtaken by several others and might no longer be one of the best options the following year.
                </p>
                <p className={style.paragraph}>
                This is why we make sure that everything we have to offer is accurate, current, and useful. We not only tell you which sites are the best and safest to use, we also explain why we recommend them.
                </p>
                <p className={style.paragraph}>
                We will help you find the site that’s right for you, and we will help you
get the most out of your online gambling experience.
                </p>
                <p className={style.paragraph}>
                Please see below for a summary of what we have to offer.
                </p>
                <p className={style.paragraph}>
                GamblingSites.com is your complete guide to gambling in all forms, with a focus on online gambling. It’s run by a dedicated team with a high level of gambling knowledge and experience.
                </p>
                <p className={style.paragraph}>
                This team is committed to providing our readers with accurate and up-to-date information. To find out more about who we are, what we offer, and our mission, please read on.
                </p>
            </div>
        </div>

        <div className={style.section}>
            <div className={style.container}>
                <h1 className={style.title}>Our Mission</h1>
                <div className={style.divider}></div>
                
                <p className={style.paragraph}>Our mission is twofold.</p>
                <p className={style.boldparagraph}>
                First, we aim to help as many people as possible to find the best and most suitable gambling site for their own personal needs.
                </p>
                <p className={style.paragraph}>
                This is why we rank the leading gambling sites in a variety of different categories. We constantly update our rankings to ensure they are current and accurate.
                </p>
                <p className={style.boldparagraph}>
                Secondly, we aim to make GamblingSites.com the single best resource on the internet for all things related to online gambling.
                </p>
                <p className={style.paragraph}>
                We are already well on our way with this. The site already contains a huge amount of information that covers a wide range of gambling-related topics. We have more information coming, and are continuing to grow the site.
                </p>
            </div>
        </div>

        <div className={style.section}>
            <div className={style.container}>
                <h1 className={style.title}>What We Offer</h1>
                <div className={style.divider}></div>
                <p className={style.paragraph}>What we offer is a very well-designed, easy-to-navigate website that gives our readers the information they need to get the most out of their online gambling experience.</p>
                <p className={style.paragraph}>We recommend the best gambling sites, listed in categories to make it easy to find the most suitable option. We also provide detailed and accurate reviews of these sites so readers can easily compare exactly what the different sites have to offer.</p>
                <p className={style.paragraph}>In addition to our recommendations and reviews, we have written a number of articles regarding all forms of gambling. These articles are full of exciting information, valuable advice, and useful strategy.</p>
           
            </div>
        </div>

        <div className={style.section}>
            <div className={style.container}>
                <h1 className={style.title}>About The Editor</h1>
                <div className={style.divider}></div>
                <p className={style.paragraph}>The editor of GamblingSites.com is Kory Walker, an experienced writer and web publisher with an in-depth knowledge of all forms of gambling. Kory has managed the content for many websites and written on a wide range of subjects.</p>
                <p className={style.paragraph}>He has worked directly with some of the biggest online gambling operators in a number of roles, including developing a new bonus scheme for an online casino and a VIP program for a sports betting site. He also founded a successful national live poker league in the UK.</p>
                <p className={style.paragraph}>Here are a few words from Kory:</p>
                <div className={style.quate_box}>
                    <div className={style.box}>
                        <div className='w-11/12 mx-auto '>
                            <p>“Being editor of GamblingSites.com is an ideal role for me. I have worked in a few different industries throughout my career, but it’s writing and gambling that are my greatest passions.</p>
                            <p>Being able to combine the two of them and provide a useful service to fellow gamblers at the same time is quite simply perfect. The online gambling industry is an incredibly exciting one to work in, and it will be interesting to see how it continues to develop.</p>
                        </div>
                        <div className='w-1/12 text-center'>
                        <Image src="/image/big_quote_sign.png" width="33" height="22px" alt="quate" className=''/>
                        </div>
                    </div>
                </div>
                <div className={style.quate_box}>
                    <div className={style.box}>
                        <div className='w-11/12 mx-auto '>
                            <p>“Being editor of GamblingSites.com is an ideal role for me. I have worked in a few different industries throughout my career, but it’s writing and gambling that are my greatest passions.</p>
                            <p>Being able to combine the two of them and provide a useful service to fellow gamblers at the same time is quite simply perfect. The online gambling industry is an incredibly exciting one to work in, and it will be interesting to see how it continues to develop.</p>
                        </div>
                        <div className='w-1/12 text-center'>
                        <Image src="/image/big_quote_sign.png" width="33" height="22px" alt="quate" className=''/>
                        </div>
                    </div>
                </div>
                <div className={style.quate_box}>
                    <div className={style.box}>
                        <div className='w-11/12 mx-auto '>
                            <p>“Being editor of GamblingSites.com is an ideal role for me. I have worked in a few different industries throughout my career, but it’s writing and gambling that are my greatest passions.</p>
                            <p>Being able to combine the two of them and provide a useful service to fellow gamblers at the same time is quite simply perfect. The online gambling industry is an incredibly exciting one to work in, and it will be interesting to see how it continues to develop.</p>
                        </div>
                        <div className='w-1/12 text-center'>
                        <Image src="/image/big_quote_sign.png" width="33" height="22px" alt="quate" className=''/>
                        </div>
                    </div>
                </div>

                <div className={style.section}>
                    <div className={style.container}>
                    <h1 className={style.title}>The Team</h1>
                    <div className={style.divider}></div>
                    <p className={style.paragraph}>In addition to our editor and the technical guys, there are a number of writers that contribute to GamblingSites.com. We are delighted to have a team with such a diverse range of gambling-related knowledge and experience.</p>
                    <p className={style.paragraph}>This makes it much easier for us to cover all the topics we want, and provide you with the best information currently out there. It also means we can provide a balanced view when it comes to reviewing and ranking gambling sites, rather than just the opinions of one or two individuals.</p>
                    <p className={style.paragraph}>We will soon be adding more details about each member of our team here, so please check back if you would like to find out a little bit more about us all.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}