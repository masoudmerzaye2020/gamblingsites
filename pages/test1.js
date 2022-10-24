import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Section from "../components/section";
import Table from "../components/table";
import Bluebutton from "../components/bluebutton";
import Borderedbox from "../components/borderedbox";
import Borderedcard from "../components/borderedcard";
import button from "../components/button"
import Cornerimage from "../components/cornerimage"
import ImageCard from "../components/imagecard";
import Imagewithlink from "../components/imagewithlink";
import Mainbullet from "../components/mainbullet";
import Questionicon from "../components/questionicon"
import RegionalCard from "../components/regionalcard";
import Reviewcard from "../components/reviewcard"
import Squareimage from "../components/squareimage";
import Wideimage from "../components/wideimage";
import Widecard from "../components/widecard"
import Blockedgame from "../section/blockedgame";
import Aboutgamblingsites from "../section/aboutgamblingsites";
import Gamblingsitereviews from "../section/gamblingsitereviews";
import Regionalsites from "../section/regionalsites";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";



import Imagecarousel from "../section/imagecarousel";
import Toptips from "../components/toptips";
function Test1() {
  return (
    <>
      <Section>
        <Container>
            <Imagecarousel/>
            <div className="flex w-[90%] flex-wrap mx-auto">
                <Borderedbox
                  src={"/image/sportsbetting/UFC-Betting-Sites.png"}
                  title={"something"}
                  link={""}
                />
              </div>
              <Borderedbox>
                <p>jl;aksjdf;laksdj</p>
              </Borderedbox>

              {/*  */}

              <div className="flex flex-wrap justify-center">
                <RegionalCard title={'usa online gambling'} url={''} src={'/image/us_flag_home_icon.png'} altText={''}/>

                <RegionalCard title={'Sites for uk gamblers'} url={''} src={'/image/uk_flag_home_icon.png'} altText={''}/>
                <RegionalCard title={'online gambling canada guide'} url={''} src={'/image/canadian_flag_home_icon.png'} altText={''}/>
                <RegionalCard title={'online gambling in australia'} url={''} src={'/image/australian_flag_home_icon.png'} altText={''}/>
              </div>

              {/* adsfa */}
              <Regionalsites />
              <Safegambling />
              <Blockedgame />
              <Aboutgamblingsites />
              <Gamblingsitereviews />



              <div className="relative h-[400px] w-full">
              <Cornerimage
                src={"/image/reviews/BetOnline-review.png"}
                /* type={'wide'} */
              />
              <p>The continuous growth is a sign that 10bet listens to its customers and is willing to make modifications based on customer feedback. We want to acknowledge that 10bet did have some issues in the past, but they have addressed many of them to become one of the most trusted online gambling sites available.

Our review of 10bet will tell you all about these past issues, as well as what to expect from the 10bet sportsbook and online casino. Our review starts below.

Or, if you’re ready to start gambling at 10bet for real money now, then click the button below to get started.</p>
              </div>


              {/*  */}
              <Toptips>
                <p>   KANSAS CITY CHIEFS AT PITTSBURGH STEELERS</p>
              </Toptips>
             

              <p>wide image</p>
              <Wideimage src="/image/best-online-sports-betting-sites-what-they-offer.jpg" />

              <Imagewithlink
              src={"/image/sportsbetting/Bovada-bonuses-170.png"}
              title={"BOVADA BONUS CODES"}
              link={""}
            />

            <Squareimage
              src={"/image/sportsbetting/sports-bet-on-online.jpg"}
              desc={"Online betting sites work on most mobile devices."}
            />
          
          <Borderedbox>
            <p>The price of bitcoin is EXTREMELY volatile.</p>
          </Borderedbox>

          <Questionicon>How Many Cryptocurrencies Are There?</Questionicon>

          <div className="w-8/12 md:w-6/12 p-4 mx-auto">
                <div className="relative border-2 border-gray-400 rounded-lg p-2 hover:bg-[#11191e] hover:text-white">
                  <div className="absolute top-0 right-0 mr-6 rounded-b-lg p-2 h-10 w-10 bg-[#40d3b7]">
                    <Image
                      src="/image/upper-right-arrow-in-square-button-outline.png"
                      width="20"
                      height="20"
                      alt="icon"
                    />
                  </div>
                  <h1 className="text-xl py-2">Why Bet On Sport</h1>
                  <p>
                    A look at the many valid reasons for choosing to bet on
                    sports, along with a couple of reasons for choosing not to
                  </p>
                </div>
              </div>




              <div className="my-4">
            <div className="bg-[#1a2d37] rounded-lg max-w-[720px] mx-auto text-center p-4">
              <h1 className="text-white px-auto">
                KANSAS CITY CHIEFS AT PITTSBURGH STEELERS
              </h1>
              <h1 className="text-green-300 px-auto">POINT SPREAD</h1>
              <div className="flex flex-wrap my-4">
                <div className="w-12/12 md:w-6/12 p-2 w-full">
                  <div className="flex flex-wrap">
                    <div className="w-9/12 rounded-l-lg bg-white p-4 text-justify">
                      Chiefs (-2)
                    </div>
                    <div className="bg-[#21558f] rounded-r-lg py-4 h-full w-3/12 text-yellow-300 text-xl">
                      -110
                    </div>
                  </div>
                </div>
                <div className="w-12/12 md:w-6/12 p-2 w-full">
                  <div className="flex flex-wrap">
                    <div className="w-9/12 rounded-l-lg bg-white p-4 text-justify">
                      Pittsburgh Steelers (+3)
                    </div>
                    <div className="bg-[#21558f] rounded-r-lg py-4 h-full w-3/12 text-yellow-300 text-xl">
                      -110
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-wrap">
            <div className="w-1/1 md:w-1/2 p-4">
              <div className=" border-2 rounded-lg border-[#27ae60] py-2 px-3 ">
                <div className="bg-[#27ae60] text-center text-xl text-white py-3 rounded-lg">
                  <h1>Pros</h1>
                </div>
              </div>
            </div>
            <div className="w-1/1 md:w-1/2 p-4">
              <div className=" border-2 rounded-lg border-[#c0392b] py-2 px-3">
                <div className="bg-[#c0392b] text-center text-xl text-white rounded-lg py-3">
                  <h1>Cons</h1>
                </div>

                <div className="py-2">
                  <ul>
                    <li>
                      <p>
                        <Image
                          className="justify-center"
                          src={"/image/red_cross.png"}
                          width={21}
                          height={21}
                          alt={""}
                        />{" "}
                        <span className="pl-4 justify-center mb-2">
                          Various fees on non-crypto withdrawals
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <Widecard
            link={""}
            src={
              "/image/reviews/real-money-slot-games-las-atlantis-casino-2020.jpg"
            }
            title={
              "Reviewing the Real Money Slot Games at Las Atlantis Casino in 2020"
            }
            desc={
              "when i fist start reviewing onlin slots, i found its interesting that plaoyes refered to casono by the softwarethey used, id read references to Betsoft Casnos or Micrograming Casino. it Seemed odd that online casino users know as much about the.."
            }
          />

          {/*  */}

          <Link href={"/"}>
              <div className="bg-gray-300 lg:w-[165px] lg:h-[197px] w-[145px] h-[177px] rounded-[7px] flex flex-col m-[8px] p-[15px] text-center text-[#333333] hover:text-yellow-300 hover:bg-gray-800">
                <Image
                  src={"/image/gamblingapps/Esports-logo-card1-1.png"}
                  width={"103"}
                  height={"127"}
                  alt={"image"}
                />
                <p className=" bold text-md font-bold uppercase">
                  apps for esports betting{" "}
                </p>
              </div>
            </Link>

            {/*  */}





          <div className="w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12   mx-auto p-4">
              <div className="w-[250px] mx-auto rounded-lg border-[2px] border-[#1f2d37] hover:border-green-400">
                <Image
                  className="flex"
                  src="/image/Week-5-NCAAF-odds-1-250-140.jpg"
                  width="400px"
                  height="200px"
                  alt=""
                />
                <h1 className="px-2 py-4">
                  College Footbvall Picks and Odds for Week 52022
                </h1>
                <p className="px-2 pb-2 text-sm">
                  {" "}
                  Theres nothing quite like the roller coaster of college
                  football. you always think a game will go..
                </p>
              </div>
            </div>








            {/*  */}
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

          {/*  */}






          <table />
          <div className="overflow-x-auto relative sm:rounded-lg my-4 mx-6">
            <table className="w-full text-sm text-center text-gray-500  border border-gray-300">
              <thead className=" bg-[#294757] h-[52px]">
                <tr className="text-gray-200">
                  <th
                    scope="col"
                    className="py-3 px-6 border-r border-[#386076]"
                  >
                    Betting Site
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 border-r border-[#386076]"
                  >
                    Cashout Speed
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 border-r border-[#386076]"
                  >
                    Bonus
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 border-r border-[#386076]"
                  >
                    US Player
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b  ">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium border-r border-gray-300 whitespace-nowrap"
                  >
                    BetUS
                  </th>
                  <td className="py-4 px-6 border-r border-gray-300">
                    24 Hours
                  </td>
                  <td className="py-4 px-6 border-r border-gray-300">
                    100% up to $2,500
                  </td>
                  <td className="py-4 px-6 border-r border-gray-300">Yes</td>
                </tr>
                <tr className="bg-[#0000000d] border-b">
                  <th
                    scope="row"
                    className=" py-3 font-medium  whitespace-nowrap border-r border-gray-300 "
                  >
                    MyBookie
                  </th>
                  <td className=" py-3 border-r border-gray-300">1-2 Days</td>
                  <td className=" py-3 border-r border-gray-300">
                    50% up to $1,000
                  </td>
                  <td className="py-3  border-r border-gray-300">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Test1;
