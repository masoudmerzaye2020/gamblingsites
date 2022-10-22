import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "../../../components/section";
import Container from "../../../components/container";
import Title from "../../../components/title";
import Header from "../../../components/header";
import Button from "../../../components/button";
import Bluebutton from "../../../components/bluebutton";
import Mainbullet from "../../../components/mainbullet";
import Wideimage from "../../../components/wideimage";
import TextTitle from "../../../components/TextTitle";
import Borderedbox from "../../../components/borderedbox";
import Squareimage from "../../../components/squareimage";

function Index() {
  return (
    <>
      <Header>Top Real Money Casino Apps Online in 2022</Header>
      <Section>
        <Container>
          <p>
            If you’re looking for the best casino apps with real money games,
            you’ve come to the right place!
          </p>
          <p>
            Our team of online gambling experts has recommended some safe mobile
            casinos that offer exciting games and cool promotions. Here are our
            top real money casino apps for those of you who want to start
            playing immediately.
          </p>
          <p>
            Legal online casino apps offer a safe environment for gambling. They
            have legit gambling licenses and stainless reputations in the
            industry. They also offer a strong variety of quality mobile games,
            handsome bonuses, and various other advantages.
          </p>
          <p>
            In this guide we offer our picks for the best mobile casinos for
            specific games and offer lots of useful information that can help
            you make smart decisions when gambling online with real cash.
          </p>

          <div className="bg-[#e9ffee] p-4">
            <h1>
              Our Guide to the Top-Rated Casino Apps That Let You Win Money
            </h1>
            <div>
              <Mainbullet
                link={""}
                linkdesc={"Best Online Casino Apps for 2021"}
              />
              <Mainbullet
                link={""}
                linkdesc={"Types of Mobile Casino Gambling Apps"}
              />
              <Mainbullet
                link={""}
                linkdesc={"How We Select the Top Online Casino Apps"}
              />
              <Mainbullet
                link={""}
                linkdesc={"Getting Started with Real Money Casino Apps"}
              />
              <Mainbullet link={""} linkdesc={"Best Mobile Casino Games"} />
              <Mainbullet link={""} linkdesc={"Mobile Casino Apps FAQ"} />
            </div>
            <Wideimage src={"/image/gamblingapps/best-casino-apps.jpg"} />
          </div>

          <Title title={"Best Online Casino Apps for 2021"} />
          <p>
            Let’s take a deeper look at what the best casino apps for real money
            gambling have to offer their customers.
          </p>
          <p>
            We spent a lot of time testing their games and features, so we know
            what’s available at every single one of them.
          </p>
          <p>
            These are all trusted mobile casino apps that can bring you plenty
            of fun and some good opportunities to make money.
          </p>

          <TextTitle title={"Top US Casino Apps"} />
          <p>
            First in line are our top-rated US mobile casino apps. We made sure
            to select safe options that accept deposits from American customers.
          </p>
          <p>
            They offer various perks and can be found on all popular mobile
            devices. There are casino apps for Android and iPhone, casino apps
            for iPads and other tablets, and more.
          </p>
          <p>
            Let’s take a look at their main features and you could learn more
            about the ones that interest you by visiting our casino app reviews.
          </p>

          <div className="bg-[#e9ffee] p-4">
            <h1 className="text-2xl font-semibold py-4">
              <span className="underline underline-offset-4">
                Las Atlantis{" "}
              </span>
              - #1 USA Casino App for 2021
            </h1>
            <div className="">
              <div className="text-center md:float-right">
                <Image
                  src={
                    "/image/gamblingapps/Las-Atlantis-casino-app_347x166.png"
                  }
                  width={400}
                  height={200}
                  alt={"image"}
                />
              </div>
              <div>
                <Mainbullet
                  link={""}
                  title={"Welcome Offer:"}
                  desc={"280% up to $14,000"}
                />
                <Mainbullet
                  link={""}
                  title={"Games By:"}
                  desc={"RealTime Gaming, Visionary Gaming"}
                />
                <Mainbullet link={""} title={"Live Casino"} desc={"Yes"} />
                <Mainbullet
                  link={""}
                  title={"Progressive Jackpots:"}
                  desc={" Yes"}
                />
                <Mainbullet link={""} title={"Bitcoin"} desc={"Yes"} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Index;
