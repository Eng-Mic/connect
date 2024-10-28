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

export default function Home() {
  const targetAmount = 20000;
  const [raisedAmount, setRaisedAmount] = useState(800);
  return (
    <div className="relative">
      <header className="">
        <Header />
      </header>
      {/* Featured campaigns */}
      <div className="w-full absolute top-[20rem] z-20">
        {featuredCams?.map((cam, index) => (
          <div className={cn('w-[18rem] bg-white p-[12px] rounded-[5px]', index === 0 ? 'absolute top-[3rem] left-[2rem]' : index === 2 ? 'absolute top-[1rem] right-[2rem]' : index === 1 ? 'absolute top-[11rem] left-0 right-0 mx-auto' : '')} key={cam?.id}>
            
            <p className='w-fit bg-zinc-100 text-black py-[2px] px-[10px] text-[10px] rounded-[5px]'>
              Donation
            </p>
            <h2 className='text-[1rem] font-medium mb-[3px] line-clamp-1'>
                Empower Education
            </h2>
            <p className='text-[13px] line-clamp-2'>
                Bringing quality education to undeserved communities.
            </p>
            <div className="mt-[5px]">
                <p className='text-[12px] font-medium'>
                    Raised
                </p>
                <div className="flex items-center justify-between font-medium mb-[5px] line-clamp-1">
                    <p className=' text-[13px]'>
                        <span className='text-[16px]'>$800</span> raised of $20,000
                    </p>
                </div>
                <ProgressBar raised={raisedAmount} target={targetAmount} />
            </div>
            <div className="border-t-[2px] border-dashed border-zinc-300 pt-[10px] mt-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[5px]">
                    <PiUsersFill />
                    <p className="text-[12px]">
                        10+ Backers
                    </p>
                </div>
                <div className="flex items-center gap-[5px]">
                    <GiPayMoney />
                    <p className="text-[12px]">
                        Min. Amount : $10
                    </p>
                </div>
            </div>
            <button className='w-full bg-gradient-to-r from-[#28659a] to-[#4285bf] text-white text-[12px] px-[10px] py-[6px] rounded-[4px] font-medium mt-[10px]'>
                Join the cause.
            </button>
          </div>
        ))}
      </div>
      <main className="w-[90%]  mx-auto lg:w-[80%] my-[7rem] lg:max-w-screen-xl">
        <Categories />
        <UrgentCampaigns />
        <Testimonials />
        <Resources />
      </main>
    </div>
  );
}
