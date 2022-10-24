import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "../../../components/section";
import Container from "../../../components/container";
import Title from "../../../components/title";
import TextTitle from "../../../components/TextTitle";
import Header from "../../../components/header";
import Button from "../../../components/button";
import Wideimage from "../../../components/wideimage";
import Mainbullet from "../../../components/mainbullet";
import Bluebutton from "../../../components/bluebutton";
import Borderedbox from "../../../components/borderedbox";
import Squareimage from "../../../components/squareimage";
import Cornerimage from "../../../components/cornerimage"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Imagecarousel from "../../../section/imagecarousel";

function Index() {
  return (
    <>
      <Header>Detailed Review of BetUS – Updated for 2022</Header>
      <Section>
        <Container>
          <p>Have you been exploring online gambling sites in the USA? Then you’ve probably come across several recommendations for BetUS. That’s because it’s one of the top gambling sites for Americans.</p>
          <p>This website has been operating since 1994, so it is one of the original online gambling sites.</p>
          <p>With more than 25 years of experience, BetUS has perfected its site to offer a well-rounded and thrilling gambling site with many options.</p>
          <p>BetUS has more than 20,000 sports betting markets and more than 280 casino games. The site also offers esports betting and a racebook. You will never run out of things to do on BetUS!</p>
          <p>Keep reading this BetUS review to learn more about all the betting options available and the incredible bonus offers you can claim when you sign-up at BetUS.com.pa today.</p>

          <Imagecarousel/>
          {/* leave the button */}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4 mx-auto">
              <div className="h-full bg-[#ebf7ff] border-[2px] border-[#c7d3dc] rounded-[4px] max-w-[400px] mx-auto">
                <div className="bg-[#72a6ca] p-4">
                  <p>Key Information</p>
                </div>
                <div className="p-4">
                  <ul>
                    <li className="flex text-[18px] py-[1px]">
                      <KeyboardArrowRightIcon />
                      <p>Website - betus.com.pa</p>
                    </li>
                    <li className="flex">
                      <KeyboardArrowRightIcon />
                      <p>Launched in 1994</p>
                    </li>
                    <li className="flex">
                      <KeyboardArrowRightIcon />
                      <p>Licensed by Curacao e-gaming</p>
                    </li>
                    <li className="flex">
                      <KeyboardArrowRightIcon />
                      <p>Email - custhelp@betus.com.pa</p>
                    </li>
                    <li className="flex">
                      <KeyboardArrowRightIcon />
                      <p>Telephone - 1-800- 512 - 3887</p>
                    </li>
                    <li className="flex">
                      <KeyboardArrowRightIcon />
                      <p>
                        {" "}
                        Software Providers: Digital Gaming Solutions, Betsof,
                        Visionary iGaming, Nucleus Gaming, Dragon Gaming
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4 mx-auto">
              <div className="h-full bg-[#ebf7ff] border-[2px] border-[#c7d3dc] rounded-[4px] max-w-[400px] mx-auto">
                <div className="bg-[#72a6ca] p-4">
                  <p>Hit and Misses</p>
                </div>
                <div className="p-4">
                  <ul>
                    <li className="flex text-[18px] py-[1px]">
                      <div className="w-8 h-8">
                        <Image
                          src={"/image/green_check.png"}
                          width="20"
                          height="20"
                          alt={"iconimage"}
                        />
                      </div>
                      <p>20,000+ betting markets, including living betting</p>
                    </li>
                    <li className="flex text-[18px] py-[1px]">
                      <div className="w-8 h-8">
                        <Image
                          src={"/image/green_check.png"}
                          width="20"
                          height="20"
                          alt={"iconimage"}
                        />
                      </div>
                      <p>280+ casino games</p>
                    </li>
                    <li className="flex text-[18px] py-[1px]">
                      <div className="w-8 h-8">
                        <Image
                          src={"/image/green_check.png"}
                          width="20"
                          height="20"
                          alt={"iconimage"}
                        />
                      </div>
                      <p>Operating for 25+ years</p>
                    </li>
                    <li className="flex text-[18px] py-[1px]">
                      <div className="w-8 h-8">
                        <Image
                          src={"/image/green_check.png"}
                          width="20"
                          height="20"
                          alt={"iconimage"}
                        />
                      </div>
                      <p>Same-day payouts of to $5,000</p>
                    </li>
                    <li className="flex text-[18px] py-[1px]">
                      <div className="w-8 h-8">
                        <Image
                          src={"/image/green_check.png"}
                          width="20"
                          height="20"
                          alt={"iconimage"}
                        />
                      </div>
                      <p>Multiple bonuses for new and existing customer</p>
                    </li>
                    <li className="flex text-[18px] py-[1px]">
                      <div className="w-8 h-8">
                        <Image
                          src={"/image/red_cross.png"}
                          width="20"
                          height="20"
                          alt={"iconimage"}
                        />
                      </div>
                      <p>Limited tiem to clear bonus playthrough</p>
                    </li>
                    <li className="flex text-[18px] py-[1px]">
                      <div className="w-8 h-8">
                        <Image
                          src={"/image/red_cross.png"}
                          width="20"
                          height="20"
                          alt={"iconimage"}
                        />
                      </div>
                      <p>Few progressive jackpot games</p>
                    </li>
                    <li className="flex text-[18px] py-[1px]">
                      <div className="w-8 h-8">
                        <Image
                          src={"/image/red_cross.png"}
                          width="20"
                          height="20"
                          alt={"iconimage"}
                        />
                      </div>
                      <p>Customer service required for some banking methods</p>
                    </li>
                    <li className="flex text-[18px] py-[1px]">
                      <div className="w-8 h-8">
                        <Image
                          src={"/image/red_cross.png"}
                          width="20"
                          height="20"
                          alt={"iconimage"}
                        />
                      </div>
                      <p>Some withdrawal methos have additional fees</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 p-4 mx-auto">
              <div className="h-full bg-[#ebf7ff] border-[2px] border-[#c7d3dc] rounded-[4px] max-w-[400px] mx-auto">
                <div className="bg-[#72a6ca] p-4">
                  <p>Payment Method</p>
                </div>
                <div className="p-4">
                  <ul className="flex flex-wrap jusity-center mx-auto items-center text-center">
                    <li className="flex text-[18px] py-[1px] px-2">
                      <div className="w-26 h-12">
                        <Image
                          src={"/image/visa.png"}
                          width="70"
                          height="40"
                          alt={"iconimage"}
                        />
                      </div>
                    </li>
                    <li className="flex text-[18px] py-[1px] px-2">
                      <div className="w-26 h-12">
                        <Image
                          src={"/image/visa.png"}
                          width="70"
                          height="40"
                          alt={"iconimage"}
                        />
                      </div>
                    </li>
                    <li className="flex text-[18px] py-[1px] px-2">
                      <div className="w-26 h-12">
                        <Image
                          src={"/image/visa.png"}
                          width="70"
                          height="40"
                          alt={"iconimage"}
                        />
                      </div>
                    </li>
                    <li className="flex text-[18px] py-[1px] px-2">
                      <div className="w-26 h-12">
                        <Image
                          src={"/image/visa.png"}
                          width="70"
                          height="40"
                          alt={"iconimage"}
                        />
                      </div>
                    </li>
                    <li className="flex text-[18px] py-[1px] px-2">
                      <div className="w-26 h-12">
                        <Image
                          src={"/image/visa.png"}
                          width="70"
                          height="40"
                          alt={"iconimage"}
                        />
                      </div>
                    </li>

                    <li className="flex text-[18px] py-[1px] px-2">
                      <div className="w-26 h-12">
                        <Image
                          src={"/image/visa.png"}
                          width="70"
                          height="40"
                          alt={"iconimage"}
                        />
                      </div>
                    </li>
                    <li className="flex text-[18px] py-[1px] px-2">
                      <div className="w-26 h-12">
                        <Image
                          src={"/image/visa.png"}
                          width="70"
                          height="40"
                          alt={"iconimage"}
                        />
                      </div>
                    </li>
                    <li className="flex text-[18px] py-[1px] px-2">
                      <div className="w-26 h-12">
                        <Image
                          src={"/image/visa.png"}
                          width="70"
                          height="40"
                          alt={"iconimage"}
                        />
                      </div>
                    </li>
                    <li className="flex text-[18px] py-[1px] px-2">
                      <div className="w-26 h-12">
                        <Image
                          src={"/image/visa.png"}
                          width="70"
                          height="40"
                          alt={"iconimage"}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="blue">
            <h2>Contents of Our BetUS Review</h2>
            <div>
              {/* leave image */}
              <Mainbullet link={""} linkdesc={"Sports Betting on BetUS"} />
              <Mainbullet link={""} linkdesc={"BetUS Casino Review"} />
              <Mainbullet link={""} linkdesc={"BetUS Mobile App"} />
              <Mainbullet
                link={""}
                linkdesc={"2022 Bonuses and Promotions on BetUS.com"}
              />
              <Mainbullet link={""} linkdesc={"BetUS Loyalty Program"} />
              <Mainbullet link={""} linkdesc={"Banking on BetUS"} />
              <Mainbullet link={""} linkdesc={"About BetUS.com"} />
              <Mainbullet link={""} linkdesc={"Wrap Up"} />
              <Mainbullet link={""} linkdesc={"BetUS FAQ"} />
            </div>
          </div>

          <Title title={"Real Money Sports Betting at BetUS"} />
          <p>
            If you love sports betting, you are going to love BetUS. It is one
            of the most extensive sportsbooks in the industry, with more than
            20,000 betting markets.
          </p>
          <p>
            Of course, you can bet on all the major sporting events, like
            football, basketball, baseball, hockey, and soccer. Our review of
            the BetUS sportsbook also revealed these unique betting options.
          </p>
          <div className="md grid grid-cols-2 lg:grid-cols-3">
            <Mainbullet link={""} desc={"Tennis"} />
            <Mainbullet link={""} desc={"Martial Arts"} />
            <Mainbullet link={""} desc={"Rugby"} />
            <Mainbullet link={""} desc={"Cricket"} />
            <Mainbullet link={""} desc={"Volleyball"} />
            <Mainbullet link={""} desc={"Alpine Skiing"} />
            <Mainbullet link={""} desc={"Handball"} />
            <Mainbullet link={""} desc={"Golf"} />
            <Mainbullet link={""} desc={"Table Tennis"} />
            <Mainbullet link={""} desc={"Nascar"} />
            <Mainbullet link={""} desc={"Darts"} />
            <Mainbullet link={""} desc={"Snooker"} />
            <Mainbullet link={""} desc={"Biathlon"} />
          </div>

          <p>
            They also have betting options for politics and entertainment. For
            example, you can bet on things like who you think will win the next
            election or who will win an Oscar.
          </p>
          <p>
            Because BetUS is a US online sportsbook, you are sure to find
            American teams represented in each of those sports. But you don’t
            have to limit yourself to those teams and players.
          </p>
          <p>
            International betting options are also available. For example, you
            can bet on Japanese baseball, German basketball, and Swiss hockey.
          </p>

          <Squareimage src={"/image/reviews/BetUS-Review-betting-options.jpeg"} desc={'The betting options at BetUS. Most sports have a dropdown menu where you’ll find even more betting opportunities'}/>
          <p>
            BetUS also offers a wide variety of wager options for each of those
            sports. Of course, they offer moneylines, totals, point spreads,
            parlays, and props. You can also bet on futures, matchups, and
            teasers.
          </p>
          <p>
            With all of these options, it is easy to see why online betting at
            BetUS is so popular.
          </p>

          <TextTitle title={"BetUS Sportsbook Terms"} />
          <p>
            Before we explore some of the other betting options at BetUS, we
            want to explain some of the rules and terms that apply to the BetUS
            sportsbook. We will also answer some critical questions about how
            the sportsbook works.
          </p>
          <div>{/* leave FAQ */}</div>

          <TextTitle title={"Live Betting"} />
          <p>
            One of the most exciting parts of the BetUS sportsbook is live
            in-game betting. Live betting allows you to place bets during the
            middle of the game.
          </p>
          <p>
            You can bet on game specifics, like the total of the fourth quarter
            or the second half point spread. If the game goes into overtime,
            additional betting options will get added.
          </p>
          <p>
            The odds are updated in real-time while the game happens, which
            makes betting even more exciting.
          </p>
          <Squareimage src={"/image/reviews/BetUS-Review-live-betting.jpeg"}  desc={'Example of the live betting opportunities at BetUS.com.pa.'}/>
          <p>
            BetUS gives you the option of placing quick bets. All you have to do
            is click on the bet you want to place and enter the amount you want
            to bet. That allows you to make bets quickly before the odds or
            scores change.
          </p>
          <p>
            You can also use a straight bet slip if you prefer, but you will
            need to accept changes if the odds change before you place your
            bets.
          </p>

          <TextTitle title={"Esports"} />
          <p>
            This BetUS sportsbook review would not be complete if we didn’t
            mention the fact that you can use BetUS to bet on esports.
          </p>
          <p>
            You can bet on professional video game competitions, including games
            like Counterstrike, League of Legends, Dota 2, World of Warcraft,
            and Fifa.
          </p>
          <Squareimage src={"/image/reviews/BetUS-Review-esports-betting.jpeg"} desc={'A CSGO match was playing during our BetUS review.'} />
          <p>
            There are dozens of worldwide leagues that you can bet on, including
            leagues from the Netherlands, Belgium, Argentina, and Italy.
          </p>
          <p>
            BetUS also has built-in streaming from Twitch, so you can watch the
            games as they’re happening without ever leaving the betting screen.
          </p>
          <p>
            Most of the esports betting options are moneyline wagers on which
            team will win, but you can also bet on a draw.
          </p>
          <p>
            Depending on the game you are betting on, you might also find totals
            wagers. For example, in FIFA competitions, you can bet on the total
            number of goals scored. You can also make accumulators to add more
            excitement.
          </p>

          <TextTitle title={"Racebook"} />
          <p>
            Another exciting option is to bet on horse racing at the BetUS
            racebook. They have a full range of American and international horse
            races to bet on, including thoroughbred and harness racing.
          </p>
          <p>
            Because there are so many betting options, BetUS has multiple ways
            to find the race you are looking for.
          </p>
          <p>
            For example, if you want to bet on your favorite racetrack, you can
            sort the betting options by track name in alphabetical order.
          </p>
          <p>
            If you don’t have a preferred track, you can also sort the races by
            minutes to post. This option allows you to find the next race
            available.
          </p>
          <Squareimage src={"/image/reviews/BetUS-Review-racebook.jpeg"} desc={'You can quickly sort by track or minutes to post (MTP) in the BetUS racebook.'} />
          <p>
            No matter when you decide to bet, there is almost always an upcoming
            race because BetUS has so many international racetracks available.
          </p>
          <p>
            It might be the middle of the night where you are, but horses in
            Australia could be getting ready to race.
          </p>
          <p>
            One of the things we appreciated during our BetUS betting site
            review is that BetUS displays critical information on the betting
            screen.
          </p>
          <p>
            For example, you can see the purse amount and track surface from the
            top of the betting screen.
          </p>
          <p>
            Those simple organizational details make betting on BetUS more
            enjoyable. It is easy to find the bets you are looking for, and you
            have instant access to critical information.
          </p>

          <Title title={"BetUS Casino Review"} />
          <p>
            In addition to all the sports betting options, BetUS also has a
            fantastic online casino.
          </p>
          <p>
            BetUS makes it easy to enjoy all the gambling options because you
            can use the same account information and bankroll to access their
            entire site.
          </p>
          <p>
            You can easily switch back and forth between the sportsbook and
            casino by simply clicking the appropriate tabs at the top of the
            website.
          </p>
          <Squareimage src={"/image/reviews/BetUS-Review-Casino-lobby.jpeg"} desc={'BetUS’ casino lobby.'}/>
          <p>
            During our BetUS casino review, we noticed that the casino does not
            have as many options as the sportsbook, but plenty of games are
            still available.
          </p>
          <p>
            The following covers everything we experienced reviewing the BetUS
            casino.
          </p>

          <TextTitle title={"Play Slot Machines on BetUS"} />
          <p>
            The online casino at BetUS offers 300 different real money slot
            games.
          </p>
          <p>
            Betsoft is the most prominent software provider for the casino side
            of the site, but you can also enjoy games from Digital Gaming
            Solutions, Amigotech, Nucleus Gaming, and Dragon Gaming.
          </p>
          <p>
            Here are some of the most popular slots we found during our BetUS
            online casino review.
          </p>

          <div className="bg-[#e9ffee]">
            <TextTitle title={"Examples of Slot Games at BetUS"} />
            <div>
              {/* levae image */}
              <Mainbullet
                link={""}
                linkdesc={"The SlotFather Part 11"}
                desc={
                  "is a fun mafia-themed slot game with multiple bonus rounds, stacked symbols, and a gamble feature."
                }
              />
              <Mainbullet
                link={""}
                linkdesc={"Jungle Stripes"}
                desc={
                  "is a new slot game that has a max payout of $50,000! It has both ways pay lines, automatic re-spins, and a high RTP percentage."
                }
              />
              <Mainbullet
                link={""}
                linkdesc={""}
                desc={
                  "A Time to Win from Nucleus Gaming is an exciting slot game with a James Bond theme. The reels are full of sports cars, martinis, and Bond’s high-tech spy watch."
                }
              />
              <Mainbullet
                link={""}
                linkdesc={""}
                desc={
                  "Pirate’s Treasure is a five-reel slot from Digital Gaming Solutions with a pirate theme. It has a fun bonus round where you get to dig for treasure."
                }
              />
              <Mainbullet
                link={""}
                linkdesc={""}
                desc={
                  "Saiyan Warriors is an anime-themed game based on Dragon Ball Z. It was created by Dragon Gaming and has an exciting free spins feature with multipliers."
                }
              />
            </div>
          </div>

          <p>
            These are just a fraction of the slot games available on BetUS. The
            site has a wide variety of games that cover every theme imaginable
            and have different kinds of bonus features.
          </p>
          <p>
            Our only complaint about the slot machine section at BetUS is that
            it isn’t well-organized. All the games are listed in alphabetical
            order, but there is no way to filter the games or search for a
            specific title.
          </p>
          <p>
            If you want to play Yak, Yeti, and Roll, you are stuck scrolling
            through 300 different slot titles to find the one you are looking
            for.
          </p>
          <p>
            It would be a lot easier to find your favorite games if BetUS added
            a search feature or allowed you to filter the games by software
            provider, bonus feature, or the number of reels.
          </p>

          <TextTitle title={"Video Poker Collection"} />
          <p>
            We were pleasantly surprised during our review of the BetUS casino
            to find that this site has an extensive collection of video poker
            games.
          </p>
          <p>Here are some of the games we spotted during our review.</p>
          <div>
            <Mainbullet link={""} desc={"Aces and Eights"} />
            <Mainbullet link={""} desc={"Double Bonus"} />
            <Mainbullet link={""} desc={"Jacks or Better"} />
            <Mainbullet link={""} desc={"All American"} />
            <Mainbullet link={""} desc={"Aces and Faces"} />
            <Mainbullet link={""} desc={"Two Ways Royal"} />
            <Mainbullet link={""} desc={"Deuces Wild"} />
            <Mainbullet link={""} desc={"Double Double Bonus"} />
            <Mainbullet link={""} desc={"Tens or Better"} />
            <Mainbullet link={""} desc={"Jokers Wild"} />
            <Mainbullet link={""} desc={"Joker Poker"} />
          </div>

          <p>Because BetUS works with multiple software providers, there are multiple versions of some video poker games. So you can choose the game you like best based on the graphics, paytable, or betting limits.</p>
          <p>The minimum bet varies for each game, but it is typically between $0.05 and $0.25. Maximum bets range from $2 to $100.</p>
          <p>One of the most exciting options on BetUS is the possibility of playing multi-hand video poker. Most multi-hand games allow you to play 3-5 find hands simultaneously, but some variants go up to 50 hands.</p>

          {/* leave like option */}

          <TextTitle title={"Real Money Table Games"} />
          <div>
            <Cornerimage src={'/image/reviews/BetUS-casino-poker-card-games.png'}/>
            <p>There are more than 35 table games available on BetUS, and that doesn’t include their fifteen blackjack variants. BetUS has so many blackjack options that they have to be listed in a separate section on the website!</p>
            <p>All your favorite table games are available, including roulette, baccarat, and craps. The BetUS casino also has casino war, pontoon, draw high low, three card rummy, and ten casino poker varieties.</p>
            <p>BetUS has a fantastic variety of games available, but there are even more options because they have multiple options for the same game.</p>
            <p>Some of the duplicate games come from different software providers. The basic game rules will be similar, but the betting limits and graphics may vary.</p>
            <p>Many of the table games include multiple variants from the same software provider. Typically, the additional variants have higher betting limits or multi-hand games available.</p>
            <p>Here are a few examples of common table games and the variants you can play on BetUS.</p>
          </div>
          {/* leave the table */}

          <p>All these options make it easy for you to find the table game you are looking for. You can choose the game based on the betting limits or look for multi-hand versions of your favorites.</p>
          <p>No matter what table games you are looking for, BetUS is sure to have at least one option available.</p>

          <TextTitle title={"Live Dealer Casino Games"} />
          <p>Another exciting part of the online casino at BetUS is the live dealer casino. These live dealer games are operated by Visionary iGaming.</p>
          <p>You can play blackjack, roulette, baccarat, and super six with a live dealer. Here is some more information about each of these options.</p>

          {/* leave the table */}
          <p>When you play live dealer casino games on BetUS, you can choose the betting limits that work for you.</p>
          <p>There are typically at least two tables available for each variant, so you can also choose the dealer that you like best.</p>
          <p>If you want to play blackjack, you may have the option to choose which seat at the table you take. However, if the table is full, all the tables have unlimited bet behind options.</p>
          <p>These live dealer games offer an exciting opportunity to incorporate a social element into your gambling experience on BetUS. We enjoyed testing them during our BetUS.com.pa review.</p>

          <TextTitle title={"Specialty Casino Games on BetUS"} />
          <div>
            <Cornerimage src={'/image/reviews/Other-casino-games-BetUS.png'}/>
            <p>When you are on the online casino at BetUS, the tab at the top right says “other games.” It’s easy to miss, but we wanted to point it out because that button is the key to other exciting casino games!</p>
            <p>Under the other games section, you will find a video bingo game, four different versions of keno, and four zip tab games.</p>
            <p>Video bingo is a fast-paced automated bingo game that allows you to play up to eight bingo cards simultaneously. It automatically marks all the numbers as they are called, so the game moves quickly.</p>
            <p>If you are interested in keno, you can choose from standard keno, video keno, keno dragon, and Paddy’s Lucky Charm keno. They all have a maximum bet of $5.</p>
            <p>There are also four zip tab games that are similar to automated scratch cards or pull tabs. You can choose from Tutti Frutti, Overboard, Cosmic Strike, or Buccaneer Booty.</p>
            <p>Each of the zip tab games has five rows of three symbols each. If you get three of the same symbol in a row, you can win a prize based on the game’s paytable. The betting range for all these games is $1.25-$25.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Index;
