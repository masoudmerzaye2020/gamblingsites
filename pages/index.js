import Image from "next/image";
import Link from "next/link";
import CheckIcon from '@mui/icons-material/Check';
import Header from "../components/header";
import Accordion from "../components/accordion";
import { indexfaq } from "../data/FAQ/indexfaq";
import Section from "../components/section";
import Container from "../components/container";
import Title from "../components/title";
import Sitescards from "../section/sitescards";
import Button from "../components/button";
import Gamblingsitereviews from "../section/gamblingsitereviews";
import Sitereview from "../section/sitereview";
import Regionalsites from "../section/regionalsites";
import Safegambling from "../section/safegambling";
import Blockedgame from "../section/blockedgame";
import Aboutgamblingsites from "../section/aboutgamblingsites";
import FAQ from "../section/faq";

export default function Home() {
  return (
    <>
      <div className="w-full bg-[#15365a] text-center p-2 mb-3">
        <h1 className="text-2xl md:text-[45px] lg:text-6xl font-semibold text-white py-1">
          The Best Online Gambling Sites for 2022
        </h1>
        <p className="text-lg text-white py-1">
          Rankings and Reviews of 200+ Online Casinos, Sports Betting Sites, and
          Other Gambling Websites
        </p>
      </div>
      <Section>
        <Container>
          <p>
            <b>
              GamblingSites.com is the internet’s most comprehensive guide to
              the world’s best online gambling sites.
            </b>{" "}
            If you’re looking for expert advice on a vast range of
            gambling-related topics, you are certainly in the right place!
          </p>
          <p>
            Above all else, we aim to ensure that you enjoy safe online betting
            and gaming at trustworthy and reputable gambling sites. But that is
            only the beginning. This page contains details of all the key
            subjects we cover, giving you an idea of what we’re about.
          </p>
          <p>
            It only makes sense to begin with our latest rankings of the best
            gambling sites.
          </p>

          <Sitescards />
          <p>We can confidently say that these are the best gambling sites on the internet. Whether you’re looking for online casinos, sports betting sites, or other real money gambling websites, our recommendations check all the boxes – and then some!</p>
          <p>Our team of experts carries out extensive research and thorough testing to track down only the best gambling sites out there. Of course, we don’t expect you to trust our site rankings without knowing anything about them. But once you understand more about our methods, we think you will be more inclined to trust us.

</p>
          <p>Thankfully, we have created a highly successful process for ranking gambling sites. Our thorough and stringent procedures enable us to analyze the ins and outs of any site. That includes the sites’ licensing information, bonuses, banking methods, and every other detail of the site. All of the sites we recommend are 100% legit, so you can rest assured that your money is always in safe hands.</p>
          <p>Click one of the links above to visit one of our recommended sites right away. Or you can read on to discover everything there is to learn about our gambling site rankings and all the other resources we offer on our website.</p>
          
          <Title title={'How to Find the Best Gambling Site for You'}/>
          <p>With hundreds of options to choose from, finding the best gambling site can feel like looking for a needle in a haystack. Brand new online casinos and sportsbooks crop up on the internet all the time, making it increasingly difficult to separate the wheat from the chaff. So, we want to start by explaining how you can use our rankings to figure out which site is best for you.</p>
          <p>The very first thing you need to check is whether the site holds a legitimate gambling license. You don’t have to worry about that with any of our recommendations. But if you are considering sites you heard of elsewhere, it is crucial to check the license first.</p>
          <p>After that, you need to start diving into all of the different aspects of the site, including the company that operates it and the software providers they use. Here are some of the fundamental features we look for.</p>
          <div>
              <p><span className="bg-[#25ae88] rounded-full w-[30px] h-[30px] text-white text-[12px] p-[2px]"><CheckIcon/></span> safe and trustworthy site</p>
              <CheckIcon/><p></p>
          </div>
          

          <Title title={"Detailed Gambling Guides from Expert Gamblers"} />

          <Title title={"Your Online Gambling Questions Answered"} />
          {indexfaq.map((item) => (
            <Accordion
              key={`faq--key${item.id}`}
              title={item.question}
              content={item.answer}
            />
          ))}
        </Container>
      </Section>
    </>
  );
}
