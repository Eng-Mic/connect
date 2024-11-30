import Campaigns from "@/app/(client)/_components/Campaigns"
import TopNav from "@/app/(client)/_components/TopNav"
import { campaigns, categories, stats } from "@/data"
import Image from "next/image"
import { IoIosMegaphone } from "react-icons/io"
import Hotspot from '/public/hotspot-tower-icon.svg'
import { cn } from "@/lib/utils"

const CampaignsRoute = () => {
    return (
        <div className="">
            <div className="w-[90%] mx-auto lg:w-[82%] lg:max-w-screen-xl">
                <TopNav />
            </div>
            <div className="w-[90%] mx-auto lg:w-[82%] lg:max-w-screen-xl">
                <div className="my-[3rem]">
                    <p className="w-[30rem] mx-auto text-[2.1rem] font-semibold text-center leading-[2.55rem]">
                        Putting the power of change in your hands.
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
                    {/* Stats */}
                    <div className="w-[90%] mx-auto flex justify-between border-t-[1px] border-b-[1px] border-zinc-300 pt-[1rem] pb-[1.5rem] mt-[3rem]">
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
                    <div className="w-[90%] mx-auto flex flex-col items-center justify-center gap-y-[10px] my-[3rem]">
                        <p className="text-[1rem] font-medium border-b-[1px] border-zinc-600 pb-[8px] mb-[1rem]">
                            Explore Categories
                        </p>
                        <div className="flex items-center gap-[10px]">
                            {categories?.slice(0, 6)?.map((category) => (
                                <p className="bg-[#ebedee] py-[6px] px-[12px] rounded-[5px] text-[12px] font-medium" key={category?.id}>
                                    {category?.name}
                                </p>
                            ))}
                        </div>
                        <div className="flex items-center gap-[10px]">
                            {categories?.slice(7, 11)?.map((category) => (
                                <p className="bg-[#ebedee] py-[6px] px-[12px] rounded-[5px] text-[12px] font-medium" key={category?.id}>
                                    {category?.name}
                                </p>
                            ))}
                        </div>
                        <div className="flex items-center gap-[10px]">
                            {categories?.slice(12, 15)?.map((category) => (
                                <p className="bg-[#ebedee] py-[6px] px-[12px] rounded-[5px] text-[12px] font-medium" key={category?.id}>
                                    {category?.name}
                                </p>
                            ))}
                        </div>
                        <div className="flex items-center gap-[10px]">
                            {categories?.slice(13, 17)?.map((category) => (
                                <p className="bg-[#ebedee] py-[6px] px-[12px] rounded-[5px] text-[12px] font-medium" key={category?.id}>
                                    {category?.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="mt-[4rem] mb-[3rem]">
                    <Campaigns campaigns={campaigns} />
                </div>

                <div className="mt-[4rem]">
                    <p className="w-full border-b-[1px] border-zinc-300 pb-[10px] mb-[1rem]text-[1.3rem] font-medium">
                        Completed Campaigns
                    </p>
                    <div className="">
                        <Campaigns campaigns={campaigns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignsRoute