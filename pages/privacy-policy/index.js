import React from 'react'
import Image from 'next/image'
import Header from '../../components/header'
import Section from '../../components/section'
import Container from '../../components/container'
import Title from '../../components/title'
import TextTitle from '../../components/TextTitle'

function index() {
  return (
    <>
      <Header>Privacy Policy for GamblingSites.com</Header>
      <Section>
        <Container>
          <p>At GamblingSites.com we care about and respect the privacy of our users.</p>
          <p>When you access this website we’ll learn certain information about you, and we are committed to keeping all information private.</p>
          <p>This privacy policy details exactly how we handle any information that we have about our users. The following definitions apply.</p>
          <Image src={'/image/Star-icon.png'} width='35' height='35' alt='star'/>
          <TextTitle title={'About the Policy'}/>
          <p>This Privacy Policy sets out the terms for how the site and/or the owners collects information from users and how that information is used.</p>
          <p>This Privacy Policy doesn’t relate to how any third-party websites that may be linked from our pages will use the user information.</p>
          <Image src={'/image/Star-icon.png'} width='35' height='35' alt='star'/>

          <TextTitle title={'Non-Personal Information'}/>
          <p>Certain non-personal information is collected and stored when users visit the site. This includes the browser being used, the type of computer being used, the domain being used, the date and time of access, and other technical information.</p>
          <p>This information may collectively be used to analyze traffic to the site, but it’s not linked in any way to individual users accessing the site.</p>
          <Image src={'/image/Star-icon.png'} width='35' height='35' alt='star'/>
          <TextTitle title={'Personal Information'}/>
          <p>Personal information is only collected and stored by the site if a user volunteers such information by contacting the site or the owners. Such information is only used for the purposes of responding to users.</p>
          
          <Image src={'/image/Star-icon.png'} width='35' height='35' alt='star'/>
          <TextTitle title={'Sale or Disclosure of Personal Information'}/>
          <p>Neither the site nor the owners will sell or disclose any personal information to any third-party under any circumstances.</p>
          <Image src={'/image/Star-icon.png'} width='35' height='35' alt='star'/>

          <TextTitle title={'Cookies'}/>
          <p>The site may use cookies for the purposes of improving user experience, tracking traffic coming from other websites, and tracking traffic leaving to other websites. Cookies aren’t linked in any way to individual users accessing the site.</p>
          <Image src={'/image/Star-icon.png'} width='35' height='35' alt='star'/>

          <TextTitle title={'Acceptance of Privacy Policy'}/>
          <p>By using the site all users agree to accept the terms of this Privacy Policy.</p>
          <Image src={'/image/Star-icon.png'} width='35' height='35' alt='star'/>

          <TextTitle title={'Questions Relating to Privacy Policy'}/>
          <p>If you as the user have any questions relating to these terms you may contact the site. Details of how to contact the site can be found on the following page: Contact Us.</p>
          <Image src={'/image/Star-icon.png'} width='35' height='35' alt='star'/>

          <TextTitle title={'Updating and Amending of Privacy Policy'}/>
          <p>The owners, or agent acting on behalf of the owners, may update or amend this Privacy Policy at any time without notice.</p>


        </Container>
      </Section>
    </>
  )
}

export default index