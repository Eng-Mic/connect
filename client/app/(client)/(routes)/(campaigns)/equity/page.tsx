"use client"

import TopNav from "../../../_components/TopNav"
import Image from "next/image"
import { IoIosMegaphone } from "react-icons/io"
import Hotspot from '/public/hotspot-tower-icon.svg'
import Campaigns from "@/app/(client)/_components/Campaigns"
import Tabs from "@/app/(admin)/_components/Tab"
import { campaigns, categories, stats } from "@/data"
import { useState } from "react"
import { cn } from "@/lib/utils"

const EquityCampaigns = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const filterEquityCategories = categories.filter((category) => category?.categoryType === "funding")

    const equityCampaigns = campaigns?.filter((campaign) => campaign?.campaignType === "funding")
    return (
        <div className="">
           <div className="w-[90%] mx-auto lg:w-[82%] lg:max-w-screen-xl">
                <TopNav />
            </div>
            <div className="w-[90%] mx-auto mb-[3rem] lg:w-[82%] lg:max-w-screen-xl">
                <div className="flex flex-col items-center justify-center my-[3rem]">
                    <p className="text-[11px] font-medium py-[3px] px-[12px] bg-zinc-200 rounded-[5px]">
                        Funding
                    </p>
                    <h2 className="w-[30rem] text-[2.1rem] font-semibold text-center">
                        Empower Growth, Back the Next Big Startup.
                    </h2>
                    <p className="w-[35rem] text-[1.1rem] text-center mt-[10px]">
                        Discover promising startups with game-changing ideas. By investing in Connect, you’re not just funding a project you’re fueling a movement. Empower entrepreneurs to turn their dreams into reality and be part of their success story.
                    </p>
                    {/* Hero join connect & Start a campaign btns */}
                    <div className="w-full flex items-center justify-center gap-[1rem]">
                        <button
                            role='button'
                            // onClick={() => setWaitListModel(true)}
                            className='bg-gradient-to-r from-[#28659a] to-[#4285bf] text-white text-[13px] px-[15px] py-[6px] rounded-[4px] font-medium mt-[1.5rem] flex items-center gap-x-[5px]'
                        >
                            <Image
                                src={Hotspot}
                                alt='connect hotspot'
                                // width={1200} height={800}
                                // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                                loading="lazy"
                                className='w-[1rem]'
                            />
                            Join Connect.
                        </button>
                        <button
                            role='button'
                            // onClick={() => setWaitListModel(true)}
                            className='bg-gradient-to-r from-[#f0f4f7] to-[#f7f9fa] text-[13px] px-[15px] py-[6px] rounded-[4px] font-medium mt-[1.5rem] flex items-center gap-x-[5px] border-[1.5px] border-zinc-700'
                        >
                            <IoIosMegaphone className='text-[15px]' />
                            Start a campaign.
                        </button>
                    </div>
                </div>
                {/* Stats */}
                <div className="w-[90%] mx-auto flex justify-between border-t-[1px] border-b-[1px] border-zinc-300 pt-[1rem] pb-[1.5rem] mt-[2rem]">
                    {stats.slice(0, 3)?.map((stat, index) => (
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
                        <div className={cn("hidden w-[1px] min-h-fit bg-zinc-300", index === stats.length - 1 || stat?.id === 3 || stat?.id === 4 ? "hidden" : "md:flex")} />
                    </div>
                    ))}
                </div>
                <div className="mt-[5rem] mb-[3rem]">
                    <Tabs categories={filterEquityCategories} setActiveCategory={setActiveCategory} />
                    <div className="">
                        <Campaigns campaigns={equityCampaigns} />
                    </div>
                </div>
                <div className="mt-[5rem]">
                    <p className="w-full border-b-[1px] border-zinc-300 pb-[10px] mb-[1rem]text-[1.3rem] font-medium">
                        Completed Campaigns
                    </p>
                    <div className="">
                        <Campaigns campaigns={equityCampaigns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EquityCampaigns