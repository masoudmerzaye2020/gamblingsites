import React from "react";
import Image from "next/image";
import Header from "../../components/header";
import Section from "../../components/section";
import Container from "../../components/container";
import Title from "../../components/title";
import TextTitle from "../../components/TextTitle";
import Mainbullet from "../../components/mainbullet";
import Wideimage from "../../components/wideimage";
import Questionicon from "../../components/questionicon";

function index() {
  return (
    <>
      <Header>Entertainment Betting Guide and Top Sites for 2022</Header>
      <Section>
        <Container>
          <p>
            Did know you can bet on TV shows, movies, and award shows such as
            The Voice, Dancing with the Stars, or the Academy Awards?
          </p>
          <Title title={"Best Entertainment Betting Sites"} />
          <Mainbullet
            title={""}
            link={""}
            linkdesc={"22Bet Sports"}
            desc={""}
          />
          <Mainbullet title={""} link={""} linkdesc={""} desc={""} />

          <Wideimage src={"/image/Entertainment-Betting-Sites.jpg"} />
          <p>
            Entertainment betting is fun to do. But it can become a nightmare if
            you accidentally join a shoddy betting site. Sometimes you won’t
            know how bad a site is until you sign up.
          </p>

          <Title title={"How We Rank Entertainment Betting Sites"} />
          <p>
            Look at our rankings. We list the sites from best to worst, and our
            rankings tell you a couple of things.
          </p>

          <TextTitle title={"Betting Site Relevance Test"} />
          <p>
            The relevance test is a measure of how great a site is for a
            specific category, in this case, entertainment betting.
          </p>

          <Title title={"Online Entertainment Betting FAQ"} />
          <Questionicon>
            <p>What types of bets can you make?</p>
          </Questionicon>
          <p>It depends on the market.</p>
          <p>
            Most of the available wagers for TV shows and movies are prop bets.
          </p>

          <Questionicon>
            <p>Can I join more than one website for entertainment betting?</p>
          </Questionicon>
          <p>Yes. In fact, we recommend it.</p>
          <p>
            Every betting site covers different types of entertainment. It makes
            sense to join two to three sites (minimum) to have as many betting
            options as possible.
          </p>
          <Questionicon>
            <p>Is novelty betting the same as entertainment betting?</p>
          </Questionicon>
          <p>
            Many betting sites list all their novelty and entertainment betting
            markets under one main heading. This can include TV show and movie
            betting, political betting, and odd bets, such as death pools or
            Royal Family bets.
          </p>
          <p>
            We have separate pages for novelty, entertainment, and political
            betting because each one is big enough on its own. Plus, some sites
            have great entertainment betting options while having weak politics
            options. It makes sense to drill down and find the perfect betting
            site for the type of betting you want to do.
          </p>
          <Questionicon>
            <p>What are some strange things you can bet on?</p>
          </Questionicon>
          <p>
            Celebrity death pools rank up there, for sure. Another example is
            betting on Eminem and Nick Cannon diss tracks. Or betting on what
            Prince Harry will do after leaving the Royal Family.
          </p>

          <Title title={"Popular Entertainment Betting Markets"} />
          <p>
            Have you made an entertainment bet before? If not, you might be
            surprised at what you can bet on. Join one of our recommended sites
            and you can bet on TV series, award shows, reality shows, movies,
            and more.
          </p>

          <TextTitle title={"TV Series"} />
          <p>
            One recent example of a TV series you could have bet on was Game of
            Thrones. Many online bookmakers and sportsbooks offered the
            following action for the eighth and final season.
          </p>
          <p>Who will claim the Iron Throne?</p>
          <Image
            className="mx-auto text-center justify-center flex"
            src={"/image/entertainment-betting-guide-tv-series-1.png"}
            width="300"
            height="200"
            alt="image"
          />

          <Mainbullet
            title={"Sansa Stark (+400)"}
            link={""}
            linkdesc={""}
            desc={""}
          />
          <p>
            Other TV series you can bet on include Better Call Saul, Doctor Who,
            and Stranger Things.
          </p>

          <TextTitle title={"Reality Shows"} />
          <div className="flex md:flex-wrap">
            <div className="">
              <p>
                Many types of TV shows fit into this category. That includes
                reality shows, competition shows, talent shows, and other
                contests.
              </p>
            </div>
            <div className="min-w-[340px] min-h-[190px]">
              <Image
                className="mx-auto text-center justify-center flex"
                src={"/image/entertainment-betting-guide-reality-shows-1.png"}
                width="300"
                height="200"
                alt="image"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default index;
