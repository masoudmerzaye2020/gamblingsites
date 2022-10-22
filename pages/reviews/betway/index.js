import React from "react";
import Image from "next/image";
import Accordion from "../../../components/accordion";
import { betway } from "../../../data/FAQ/betway";
import Container from "../../../components/container";
import Header from "../../../components/header";
import Section from "../../../components/section";
import Title from "../../../components/title";
import Button from "../../../components/button";
import Wideimage from "../../../components/wideimage";
import TextTitle from "../../../components/TextTitle";

function Index() {
  return (
    <>
      <Header>Our Expert 2022 Betway Review</Header>
      <Section>
        <Container>
          <div>
            <p>
              You landed on this Betway review because you have questions you
              need answered.
            </p>
            <ul>
              <li className="flex py-2 ">
                <Image
                  className="px-6"
                  src="/image/main_bullet.gif"
                  width="20"
                  height="20"
                  alt="icon"
                />
                <p className="px-2">Is Betway safe or a scam?</p>
              </li>
              <li className="flex py-2">
                <Image
                  className="px-6"
                  src="/image/main_bullet.gif"
                  width="20"
                  height="20"
                  alt="icon"
                />
                <p className="px-2">Will they pay you when you win?</p>
              </li>
              <li className="flex py-2">
                <Image
                  className="px-6"
                  src="/image/main_bullet.gif"
                  width="20"
                  height="20"
                  alt="icon"
                />
                <p className="px-2">Is Betway genuine? Can you trust them?</p>
              </li>
            </ul>

            <p>
              However, if you want to know more, then continue reading our
              review of Betway below. We’ll cover everything you need to know
              about their online casino and sportsbook.
            </p>
            <Button>Visit betway</Button>
          </div>

          <Title title={"Is Betway Legit?"} />
          <Wideimage src="/image/Betway-review-legit-banner.jpg" />
          <p>
            We want to start off by answering your most important question. Is
            Betway a legitimate and trustworthy gambling site? We believe the
            answer is yes, but we don’t expect you to take our word at face
            value. So here are some of the facts that we believe prove that
            Betway is trustworthy today.
          </p>
          <TextTitle title={"Restricted Countries"} />
          <p>
            Most online gambling sites have a list of restricted countries that
            they don’t operate in. Unfortunately, Betway’s list of restricted
            countries is pretty extensive. It is crucial to acknowledge that
            most of that is out of Betway’s control.
          </p>

          <Title title={"Review of Betway Casino"} />
          <Wideimage src="/image/Betway-review-casino-banner.jpg" />
          <p>
            If you love casino games, and slots in particular, you will love the
            casino at Betway. This site has hundreds of games to choose from.
            They include popular slots like Immortal Romance, branded games like
            Motörhead, and traditional table games like blackjack and roulette.
          </p>
          <p>
            Betway is a Microgaming casino, so that is the software provider
            that creates most of their games. However, you can also find casino
            games from NetEnt, Red Tiger Gaming, Pragmatic Play, and Yggdrasil.
          </p>
          <div className="max-w-[730px] my-6 py-4 border-t-2 border-b-2 border-[#486980] text-center mx-auto">
            <p className="text-2xl text-[#7a0623] px-4">
              We even reached out to customer service during our Betway casino
              review, and the customer service agents could not tell us why
              there are two sections for the same games.
            </p>
          </div>
          <p>
            We noticed that the Vegas section allows you to filter “Ways Games,”
            which are games with the Megaways feature. Other than that, there is
            no reason even to visit the Vegas section of the site because you
            can access the same games in the casino section.
          </p>
          <TextTitle title={"Betway’s Jackpot Games"} />
          <Wideimage src={"/image/Betway-review-jackpot-games-banner.jpg"} />
          <p>
            Microgaming is known for producing progressive jackpot games with
            life-changing prizes. In fact, the world record for the largest
            online jackpot ever paid is actually a player who won €17,880,900
            while playing Mega Moolah on Betway.
          </p>
          <div className="max-w-[730px] my-6 py-4 border-t-2 border-b-2 border-[#486980] text-center mx-auto">
            <p className="text-2xl text-[#7a0623] px-4">
              It is also worth noting that Microgaming policy states that
              progressive jackpot winners must receive their prizes in a single
              payment as soon as the win has been verified. So, if you win a
              multi-million dollar prize, you won’t have to worry about making
              hundreds of withdrawals or waiting months to get your money.
            </p>
          </div>
          <p>
            One thing we particularly appreciated during our Betway online
            casino review is that the site allows you to filter by progressive
            jackpot games and must-win jackpot games. In case you are not
            familiar, must-win jackpot games have a threshold amount that the
            prize pool cannot go over.
          </p>
          <TextTitle title={"Non-Progressive Slots"} />
          <Wideimage
            src={"/image/Betway-review-non-progressive-slots-banner.jpg"}
          />
          <p>
            Betway’s online casino has more than 400 additional slot games that
            are not progressive jackpot games. If you are interested in
            five-reel or three-reel slots, there are plenty of options to choose
            from. The slots also cover every theme imaginable, including movies,
            mythology, animals, sports, and classic fruit games.
          </p>
          <TextTitle title={"Table Games and Live Dealer Casino on Betway"} />
          <p>
            You also have access to more than 50 table games on the online
            casino at Betway, including both live dealer casino and digital
            table games. All of the digital games are listed in the casino
            section. Live dealer games can be found in both the casino section
            and the “live and real” section. Here is an overview of the types of
            games you can find in different categories.
          </p>

          <Title title={"Betway Sportsbook Review"} />
          <Wideimage src={"/image/Betway-review-sportsbook-banner.jpg"} />
          <p>
            You can also enjoy a wide variety of options for online betting at
            Betway. Because the site caters primarily to European customers,
            most of the sports focus on European teams. However, there are also
            a few options for betting on American sports or other teams from
            around the world.
          </p>

          <Title title={"Frequently Asked Questions"} />
          {betway.map((item) => (
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

export default Index;
