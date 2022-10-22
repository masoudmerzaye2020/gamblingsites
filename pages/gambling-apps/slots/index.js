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
import Head from "next/head";

import { slots } from "../../../data/slots";
import Cornerimage from "../../../components/cornerimage";

function Index() {
  return (
    <>
      <Header>Best Real Money Slots Apps for 2022</Header>
      <Section>
        <Container>
          <p>
            We all love to play online slots from the comfort of our home. But
            what happens when you get the urge to play slot games when you’re on
            the go? That’s where real money slot apps come in!
          </p>
          <p>
            With mobile slots, you can play just about anywhere you want as long
            as you have a phone and a solid internet connection. But what are
            the best slot apps that pay real money? Allow us to show you.
          </p>
          <p>
            In this guide, we’ll be explaining more about the best casino apps
            for slots. We aim to answer any questions that you might have about
            using gambling apps with slots games and help you get the most out
            of your mobile slot machine play.
          </p>
          <p>Let’s get started!</p>

          {slots.map((items, i) => {
            return (
              <>
                <Title title={items.title} />
                {items.desc.map((desc, i) => {
                  return (
                    <>
                      <p>{desc.para}</p>
                    </>
                  );
                })}

                {items.subslots.map((subs, i) => {
                  return (
                    <>
                      <TextTitle title={subs.title} />

                      {subs.desc.map((desc, i) => {
                        return (
                          <>
                            <p>{desc.para}</p>
                          </>
                        );
                      })}

                      {subs.details.map((det, i) => {
                        return (
                          <>
                            <div className="bg-[#e9ffee]  py-4 px-3">
                              <TextTitle title={det.title} />
                              <Cornerimage src={det.image} />
                              <Mainbullet
                                link={""}
                                title={"launched:"}
                                desc={det.launched}
                              />
                              <Mainbullet
                                link={""}
                                title={"Welcome Bonus:"}
                                desc={det.bonus}
                              />
                              <Mainbullet
                                link={""}
                                title={"Slot Developer:"}
                                desc={det.developer}
                              />
                              <Mainbullet
                                link={""}
                                title={"Progressive Jackpots:"}
                                desc={det.jackpots}
                              />
                              <Mainbullet
                                link={""}
                                title={"Banking Options:"}
                                desc={det.banking}
                              />
                            </div>
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </>
            );
          })}

          <Title title={""} />
        </Container>
      </Section>
    </>
  );
}

export default Index;
