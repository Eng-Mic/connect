"use client"

import { campaigns } from "@/data";
import TopNav from "../../_components/TopNav";
import Image from "next/image";
import { formatAmount } from "@/lib/utils";
import ProgressBar from "../../_components/ProgressBar";
import { PiUsersFill } from "react-icons/pi";
import { GiPayMoney } from "react-icons/gi";
import { BiBookmark, BiShare } from "react-icons/bi";
import Overview from "../../_components/Campaign/Overview";
import About from "../../_components/Campaign/About";
import Discussion from "../../_components/Campaign/Discussion";
import BackersList from "../../_components/Campaign/BackersList";
import Updates from "../../_components/Campaign/Updates";
import { useState } from "react";
import CampaignTab from "../../_components/Campaign/Tab";
import { MdBookmark } from "react-icons/md";
import BackersCard from "../../_components/Campaign/BackersCard";

const Campaign = () => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [backersCard, setBackersCard] = useState<boolean>(true)
    const renderTabContent = () => {
        switch (activeTab) {
            case 1:
                return (
                    <Overview />
                );
            case 2:
                return (
                    <About />
                );
            case 3:
                return (
                    <Discussion />
                );
            case 4:
                return (
                    <BackersList />
                );
            case 5:
                return (
                    <Updates />
                );
            default:
                return null;
        }
    };
    return (
        <div className="relative">
            {backersCard ? (
                <div
                    // onClick={() => {
                    //     setIsOpened(false);
                    //     setIsMenuOpened(false)
                    // }}
                    className = "fixed inset-0 bg-black opacity-40 z-20"
                />
            ) : null}
            <div className="w-[90%] mx-auto lg:w-[82%] lg:max-w-screen-xl">
                <TopNav />
            </div>
            <div className="w-[90%] mx-auto my-[4rem] lg:w-[82%] lg:max-w-screen-xl">
                {/* Breadcrumb */}
                <div className="w-[45%] flex items-center gap-x-[5px]">
                    <p className="w-fit text-[12px] text-zinc-400">
                        Home
                    </p>
                    {/* Separator */}
                    <div className="w-[2px] h-[1rem] bg-zinc-400"/>
                    <p className="text-[12px] text-zinc-400 line-clamp-1">
                        Innovations in Health and Medicine
                    </p>
                    {/* Separator */}
                    <div className="w-[2px] h-[1rem] bg-zinc-400"/>
                    <p className="text-[12px] font-medium line-clamp-1">
                        Promoting wellness through natural and sustainable practices.
                    </p>
                </div>
                {/* Campaign Media */}
                <div className="w-full mt-[1rem]">
                    {campaigns && campaigns.slice(0, 1)?.map((campaign) => (
                        <div className="" key={campaign?.id}>
                            {/* Campaign category | status | End data | Campaign Title | Bookmark | Favorite Invest & Share campaign btns */}
                            <div className="border-b-[1px] border-zinc-300 pb-[5px] mb-[10px] mt-[2rem] h-fit">
                                {/* Category | Status | End date */}
                                <div className="flex items-center gap-[5px] mb-[3px]">
                                    <p className="w-fit text-[11px] bg-zinc-100 font-medium rounded-[5px] py-[2px] px-[10px]">
                                        {campaign?.category}
                                    </p>
                                    <p className='w-fit bg-zinc-100 text-black py-[2px] px-[10px] text-[10px] rounded-[5px] font-medium'>
                                        {campaign?.isUrgent && "Urgent"}
                                    </p>
                                    <p className='w-fit bg-zinc-100 text-black py-[2px] px-[10px] text-[10px] rounded-[5px] font-medium'>
                                        {campaign?.daysLeft} days left
                                    </p>
                                </div>
                                {/* Campaign Title */}
                                <div className="w-full flex items-center justify-between  mb-[1rem]">
                                    <div className="w-full">
                                        <h2 className="w-full text-[1.8rem] font-medium leading-[1.9rem]">
                                            {campaign?.campaignTagline}
                                        </h2>
                                    </div>
                                    {/* Invest & Share campaign btns */}
                                    <div className="w-full flex items-center justify-end gap-[10px]">
                                        <button className="flex items-center justify-center mt-[1.5rem]">
                                            <BiBookmark className="text-[1.1rem]" />
                                            <MdBookmark className="text-[1.2rem] hidden" />
                                        </button>
                                        <button
                                            role='button'
                                            // onClick={() => setWaitListModel(true)}
                                            className='bg-gradient-to-r from-[#28659a] to-[#4285bf] text-white text-[13px] px-[15px] py-[6px] rounded-[4px] font-medium mt-[1.5rem] flex items-center gap-x-[5px]'
                                        >
                                            <GiPayMoney className='text-[15px]' />
                                            Invest
                                        </button>
                                        <button
                                            role='button'
                                            // onClick={() => setWaitListModel(true)}
                                            className='bg-gradient-to-r from-[#f0f4f7] to-[#f7f9fa] text-[13px] px-[15px] py-[6px] rounded-[4px] font-medium mt-[1.5rem] flex items-center gap-x-[5px] border-[1.5px] border-zinc-700'
                                        >
                                            <BiShare />
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[45%] min-h-fit bg-white p-[2rem] fixed top-0 bottom-0 left-0 right-0 m-auto z-20">
                                <BackersCard />
                            </div>
                            {/* Campaign Tagline | Tags | Min Amount | Backers | Raised */}
                            <div className="w-full my-[2rem] flex gap-[5px] border-b-[1px] border-zinc-300 pb-[1.5rem] mb-[1.3rem]">
                                {/* Campaign Taglines | Tags */}
                                <div className="w-[47%]">
                                    <p className="text-[15.5px]">
                                        {campaign?.campaignBody}
                                    </p>
                                    <div className="flex items-center gap-[1rem] mt-[10px]">
                                        {campaign?.tags?.map((tag, index) => (
                                            <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px] font-medium' key={index}>
                                                {tag}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                {/* Backers | Raised | Min Amount */}
                                <div className="w-[53%] flex gap-[10px]">
                                    {/* Backers | Min Amount */}
                                    <div className="w-[40%] bg-zinc-100 p-[15px] rounded-[5px]">
                                        <div className="flex items-center justify-center gap-[1.1rem]">
                                            <div className="flex flex-col items-center gap-[5px]">
                                                <PiUsersFill className="text-[1.2rem]" />
                                                <p className='font-medium text-[13px] flex flex-col items-center'>
                                                    Backers
                                                    <span>
                                                        {campaign?.totalBackers}
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="w-[1.2px] min-h-[4rem] bg-zinc-400" />

                                            <div className="flex flex-col items-center gap-[5px]">
                                                <GiPayMoney className="text-[1.2rem]" />
                                                <p className='font-medium text-[13px] flex flex-col items-center'>
                                                    Min. Amount
                                                    <span>
                                                        {formatAmount(campaign?.minAmount)}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* progress */}
                                    <div className="w-[73%] bg-zinc-100 p-[15px] rounded-[5px]">
                                        <p className='text-[13px] font-medium'>
                                            Raised
                                        </p>
                                        <div className="flex items-center justify-between font-medium my-[5px]">
                                            <p className='flex items-center gap-[5px] text-[13.5px]'>
                                                <span className='text-[15px]'>
                                                    {formatAmount(campaign?.raisedAmount)}
                                                </span>
                                                raised of {formatAmount(campaign?.targetAmount)}
                                            </p>
                                            
                                        </div>
                                        <ProgressBar raised={campaign?.raisedAmount} target={campaign?.targetAmount} />
                                    </div>
                                    
                                </div>
                            </div>
                            {/* Media */}
                            <div className="w-full border-b-[1px] border-zinc-300 pb-[1.8rem]">
                                <p className="font-medium">
                                    Media
                                </p>
                                <div className="w-full grid grid-cols-3 gap-[5px] mt-[14px]">
                                    {campaign?.coverImg?.map((media, i) => (
                                        <div className="w-full h-[19rem] relative border-[1px] border-zinc-300 rounded-[5px]" key={i}>
                                            <div className="absolute inset-0 rounded-[7px] z-10">
                                                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-zinc-900 via-zinc-800 to-transparent opacity-10 rounded-b-[5px]" />
                                            </div>
                                            <Image
                                                fill
                                                src={media}
                                                alt='campaign img'
                                                loading="lazy"
                                                className='w-full h-full object-cover object-center rounded-[5px]'
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="">
                    <div className="">
                        <CampaignTab setActiveTab={setActiveTab} />
                    </div>
                    <div className="">
                        { renderTabContent() }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaign;