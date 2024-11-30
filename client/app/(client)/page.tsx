"use client"

import Categories from "./_components/Marketing/Categories";
import Header from "./_components/Marketing/Header";
import UrgentCampaigns from "./_components/Marketing/UrgentCampaigns";
import { PiUsersFill } from "react-icons/pi";
import { GiPayMoney } from "react-icons/gi";
import { cn } from '@/lib/utils'
import ProgressBar from "./_components/ProgressBar";
import { useState } from "react";
import Testimonials from "./_components/Marketing/Testimonials";
import Resources from "./_components/Marketing/Resources";
import Problems from "./_components/Marketing/Problems";
import Image from "next/image";

const featuredCams = [
    {
        id: 1,
        campaignName: "Empower Education",
        campaignTagline: "Bringing quality education to underserved communities.",
        target: 200000,
        raised: 75000,
        totalBackers: 250,
    },
    {
        id: 2,
        campaignName: "Empower Education",
        campaignTagline: "Bringing quality education to underserved communities.",
        target: 200000,
        raised: 75000,
        totalBackers: 250,
    },
    {
        id: 3,
        campaignName: "Empower Education",
        campaignTagline: "Bringing quality education to underserved communities.",
        target: 200000,
        raised: 75000,
        totalBackers: 250,
    }
]

const stats = [
  {
    id: 1,
    numbers: 0,
    name: "Total Campaigns"
  },
  {
    id: 2,
    numbers: 0,
    name: "Funded Campaigns"
  },
  {
    id: 3,
    numbers: 0,
    name: "Portfolio Market Cap"
  },
  {
    id: 4,
    numbers: 0,
    name: "Community Members"
  },
]

const joinAs = [
  {
    id: 1,
    role: "#Investor",
    tagline: "Empower Ideas, Shape the Future!",
    body: "At Connect, your investments fuel innovation. Discover groundbreaking opportunities, connect with passionate visionaries, and make a lasting impact on businesses and communities.",
    img: '/investor.png'
  },
  {
    id: 2,
    role: "#Campaigner",
    tagline: "Have a Vision? We’ve Got the Platform!",
    body: "Join Connect and launch campaigns that resonate. Share your story, inspire backers, and turn your dreams into realities. Let’s bring your bold ideas to life!",
    img: '/campaigner.png'
  },
  {
    id: 3,
    role: "#Partner",
    tagline: "Collaboration That Makes an Impact!",
    body: "Be part of a community that thrives on synergy. Join Connect to align with innovators, investors, donors, and etc, co-create solutions, and drive meaningful change. Together, we can achieve more!",
    img: '/partner.png'
  }
]

export default function Home() {
  const targetAmount = 20000;
  const [raisedAmount, setRaisedAmount] = useState(800);
  return (
    <div className="">
      <header className="relative">
        <Header />
        {/* Featured campaigns */}
        <div className="max-w-[80%] flex items-center justify-center gap-x-[1rem] absolute bottom-[-7.8rem] left-0 right-0 mx-auto z-10">
          {featuredCams?.map((cam, index) => (
            <div className="w-[18rem] bg-white p-[12px] rounded-[5px] border-[1px] border-zinc-300" key={cam?.id}>
              
              <p className='w-fit bg-zinc-100 text-black py-[2px] px-[10px] text-[10px] rounded-[5px] font-semibold'>
                Donation
              </p>
              <h2 className='text-[15px] font-medium mb-[3px] line-clamp-1'>
                  Empower Education
              </h2>
              <p className='text-[12.5px] line-clamp-2'>
                  Bringing quality education to undeserved communities.
              </p>
              <div className="mt-[5px]">
                  <p className='text-[11px] font-medium'>
                      Raised
                  </p>
                  <div className="flex items-center justify-between font-medium mb-[5px] line-clamp-1">
                      <p className=' text-[12px]'>
                          <span className='text-[14px]'>$800</span> raised of $20,000
                      </p>
                  </div>
                  <ProgressBar raised={raisedAmount} target={targetAmount} />
              </div>
              <div className="border-t-[2px] border-dashed border-zinc-300 pt-[10px] mt-[10px] flex items-center justify-between">
                  <div className="flex items-center gap-[5px]">
                      <PiUsersFill />
                      <p className="text-[11px]">
                          10+ Backers
                      </p>
                  </div>
                  <div className="flex items-center gap-[5px]">
                      <GiPayMoney />
                      <p className="text-[11px]">
                          Min. Amount : $10
                      </p>
                  </div>
              </div>
              <button className='w-full bg-gradient-to-r from-[#28659a] to-[#4285bf] text-white text-[11px] px-[10px] py-[5px] rounded-[4px] font-medium mt-[10px]'>
                  Join the cause.
              </button>
            </div>
          ))}
        </div>
      </header>
      
      <main className="w-[90%]  mx-auto lg:w-[82%] mt-[9rem] mb-[2rem] lg:max-w-screen-xl">
        <div className="w-full flex flex-col items-center justify-center pt-[4rem] mb-[6rem]">
          <p className="bg-[#EBF6F4] text-[13px] px-[15px] py-[6px] rounded-[4px] font-medium mt-[1.5rem] flex items-center gap-x-[5px]">
            Join the movement to drive change and make an impact today
          </p>
          <p className="max-w-[80%] text-[1.8rem] font-semibold text-center leading-[3rem] mt-[1.5rem] underline">
            We are building a community with the right tools, resources, and networks needed to turn bold ideas and initiatives into impactful realities.
          </p>
        </div>
        <Problems />
        <Categories />
        <UrgentCampaigns />
        <div className="w-full flex flex-col items-center justify-center mb-[5rem]">
          <p className="max-w-[85%] text-[1.8rem] font-semibold text-center leading-[2.8rem] mt-[1.5rem] underline">
            As a community, we can and must do better. The passion, energy, and vision that entrepreneurs, investors, donors, startup founders, and socially-conscious individuals bring to these ventures are resources too precious to waste.
          </p>
          <p className="w-[85%] text-[1.8rem] font-semibold text-center leading-[3rem] mt-[1.5rem] underline">
            It is our challenge to do something great with the opportunity we have been given.
          </p>
        </div>
        <Testimonials />
        <div className="w-full my-[4rem]">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="w-[45%] text-[1.8rem] font-semibold text-center leading-[2.4rem] mb-[15px]">
              Join the community, change now for a sustainable future.
            </p>
            <p className="text-[1rem] font-medium">
              Putting the power of change in your hands.
            </p>
          </div>
          {/* Stats */}
          <div className="w-[90%] mx-auto flex justify-between border-t-[1px] border-b-[1px] border-zinc-300 pt-[1rem] pb-[1.5rem] mt-[2rem]">
            {stats?.map((stat, index) => (
              <div className="w-full flex justify-between" key={stat?.id}>
                <div className="w-full flex flex-col items-center gap-[5px]">
                  <p className="text-[2rem] font-semibold flex items-center">
                    {stat?.numbers}+
                  </p>
                  <p className="text-[14px] font-medium">
                    {stat?.name}
                  </p>
                </div>
                {/* Separator */}
                <div className={cn("hidden w-[1px] min-h-fit bg-zinc-300", index === stats.length - 1 || stat?.id === 4 ? "hidden" : "md:flex")} />
              </div>
            ))}
          </div>

            <div className="flex border-b-[1px] border-zinc-300">
              {joinAs?.map((status, index) => (
                <div className={cn("w-full pt-[1.5rem] px-[1.5rem]", index === 1 && "bg-zinc-800 text-white")} key={status?.id}>
                  <div className="h-[15.5rem] mb-[10px]">
                    <p className="text-[#4285bf] text-[13px] font-medium">
                      {status?.role}
                    </p>
                    <p className="text-[1.15rem] font-semibold w-[80%]">
                      {status?.tagline}
                    </p>
                    <p className="text-[13.5px] mt-[10px]">
                      {status?.body}
                    </p>
                    <button className="w-fit text-[14px] font-medium border-b-[1.6px] border-[#4285bf] pb-[1px] mt-[15px]">
                      {index === 0 ? "Invest in the future" : index === 1 ? "Start a campaign" : "Partner with us"}
                    </button>
                  </div>
                  
                  <div className="w-full h-[10rem] relative">
                    <Image
                      fill
                      src={status?.img}
                      alt='insight img'
                      // width={1200} height={800}
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                      loading="lazy"
                      className='w-full h-full object-center object-contain rounded-[2px]'
                    />
                  </div>
                </div>
              ))}
            </div>
        </div>
        <Resources />
      </main>
    </div>
  );
}
