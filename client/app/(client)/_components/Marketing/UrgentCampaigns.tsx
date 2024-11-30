"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import AmountTargetIcon from '/public/noun-target.svg'
import AmountTargetDarkIcon from '/public/noun-target-dark.svg'
import ProgressBar from '../ProgressBar'
import { GiPayMoney } from 'react-icons/gi'
import { PiUsersFill } from 'react-icons/pi'
import { campaigns } from '@/data'
import { formatAmount } from '@/lib/utils'

const UrgentCampaigns = () => {
    const targetAmount = 20000;
    const [raisedAmount, setRaisedAmount] = useState(800);
    const urgentCampaigns =  campaigns.filter(campaign => campaign.isUrgent === true );
    return (
        <div className="w-full my-[5rem]">
            <section className="">
                <p className='text-[12px] font-[500]'>
                    Urgent Campaigns
                </p>
                <h2 className='text-[1.3rem] font-[500] max-w-[25rem]'>
                    Support urgent campaigns and make an immediate difference.
                </h2>
            </section>
            <section className="mt-[2rem]">
                {/* Active urgent campaign */}
                {urgentCampaigns.slice(0, 1)?.map((campaign) => (
                    <div className="w-full flex gap-[2rem] p-[1.8rem] rounded-[5px] bg-gradient-to-r from-[#fefeff] to-[#dddfdf] border-[1px] border-zinc-300" key={campaign?.id}>
                        {/* Image */}
                        <div className="w-[40%]">
                            <div className="w-full min-h-full rounded-[5px] relative">
                                <Image
                                    fill
                                    src={campaign?.coverImg[0]}
                                    alt='campaign img'
                                    loading="lazy"
                                    className='w-full h-full object-center object-cover rounded-[7px]'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                        {/* Separator */}
                        <div className="w-[1px] min-h-full bg-zinc-300" />
                        {/* End of Separator */}
                        <div className="w-[60%]">
                            <div className="w-full flex items-center justify-between">
                                <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px] font-medium'>
                                    {campaign?.campaignType}
                                </p>
                                <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px] font-medium'>
                                    {campaign?.isUrgent && "Urgent"}
                                </p>
                            </div>
                            
                            <h2 className='text-[1.4rem] font-semibold line-clamp-1 mb-[3px]'>
                                {campaign?.campaignTagline}
                            </h2>
                            <p className='line-clamp-2 text-[15px]'>
                                {campaign?.campaignBody}
                            </p>
                            <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px] font-medium my-[1.1rem]'>
                                {campaign?.category}
                            </p>
                            {/* Tags */}
                            <div className="flex items-center gap-[1rem] mt-[10px]">
                                {campaign?.tags?.map((tag, index) => (
                                    <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[9px] rounded-[5px] font-medium' key={index}>
                                        {tag}
                                    </p>
                                ))}
                            </div>
                            {/* progress */}
                            <div className="mt-[15px]">
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
                                    <p className='text-[13.5px]'>
                                        {campaign?.daysLeft} days left
                                    </p>
                                </div>
                                <ProgressBar raised={campaign?.raisedAmount} target={campaign?.targetAmount} />
                            </div>
                            {/* Footer */}
                            <div className="border-t-[2px] border-dashed border-zinc-300 pt-[15px] mt-[15px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[5px]">
                                        <PiUsersFill />
                                        <p className='font-medium text-[14px]'>
                                            Donors : {campaign?.totalBackers}
                                        </p>
                                    </div>

                                    <div className="w-[1.5px] h-[1.2rem] bg-zinc-400" />

                                    <div className="flex items-center gap-[5px]">
                                        <GiPayMoney />
                                        <p className='font-medium text-[14px]'>
                                            Min. Amount : {formatAmount(campaign?.minAmount)}
                                        </p>
                                    </div>

                                    <div className="w-[1.5px] h-[1.2rem] bg-zinc-400" />

                                    <div className="flex items-center gap-[5px]">
                                        <div className="">
                                            <Image
                                                src={AmountTargetDarkIcon}
                                                alt='border line'
                                                // width={1200} height={800}
                                                // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                                                loading="lazy"
                                                className='w-[1.1rem]'
                                            />
                                        </div>
                                        <p className='font-medium text-[14px]'>
                                            Target : {formatAmount(campaign?.targetAmount)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Inactive urgent campaigns */}
                <div className="w-full grid grid-cols-3 gap-[10px] mt-[1.5rem]">
                    {urgentCampaigns.slice(1, 6)?.map((campaign) => (
                    <div className="relative h-[30rem] rounded-[7px] border-[1px] border-zinc-300" key={campaign?.id}>
                        <div className="absolute inset-0 rounded-[7px] z-10">
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-zinc-900 via-zinc-800 to-transparent opacity-60 rounded-b-[8px]" />
                            <div className="absolute bottom-0 left-0 right-0 h-[22rem] bg-gradient-to-t from-zinc-900 via-zinc-900 to-transparent opacity-90 rounded-b-[7px]" />
                        </div>
                        <Image
                            fill
                            src={campaign?.coverImg[0]}
                            alt='campaign img'
                            loading="lazy"
                            className=' w-full h-full object-cover object-center rounded-[7px] bg-blend-normal'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <p className='w-fit bg-zinc-100 text-black py-[2px] px-[10px] text-[10px] rounded-[5px] absolute left-[1rem] top-[1rem] font-medium'>
                            {campaign?.isUrgent && "Urgent"}
                        </p>
                        {/* Campaign content */}
                        <div className="w-[100%] absolute bottom-[0.5rem] left-0 right-0 px-[1rem] py-2 text-white z-20 ">
                            <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px] font-medium'>
                                {campaign?.campaignType}
                            </p>
                            <h2 className='text-[1.3rem] font-semibold line-clamp-1 mb-[3px]'>
                                {campaign?.campaignTagline}
                            </h2>
                            <p className='line-clamp-2 text-[15px]'>
                                {campaign?.campaignBody}
                            </p>
                            <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px] font-medium my-[1.1rem]'>
                                {campaign?.category}
                            </p>
                            {/* Tags */}
                            <div className="flex items-center gap-[1rem] mt-[10px]">
                                {campaign?.tags?.map((tag, index) => (
                                    <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[9px] rounded-[5px] font-medium' key={index}>
                                        {tag}
                                    </p>
                                ))}
                            </div>
                            {/* progress */}
                            <div className="mt-[15px]">
                                <p className='text-[13px] font-medium'>
                                    Raised
                                </p>
                                <div className="flex items-center justify-between font-medium my-[5px]">
                                    <p className='flex items-center gap-x-[5px] text-[13px]'>
                                        <span className='text-[14px]'>
                                            {formatAmount(campaign?.raisedAmount)}
                                        </span>
                                        raised of {formatAmount(campaign?.targetAmount)}
                                    </p>
                                    <p className='text-[13px]'>
                                        {campaign?.daysLeft} days left
                                    </p>
                                </div>
                                <ProgressBar raised={campaign?.raisedAmount} target={campaign?.targetAmount} />
                            </div>
                            {/* Footer */}
                            <div className="border-t-[2px] border-dashed pt-[15px] mt-[15px]">
                                <div className="flex items-center justify-between">
                                    {/* <div className="flex items-center gap-[5px]">
                                        <PiUsersFill />
                                        <p className='font-medium text-[14px]'>
                                            Donors : 22
                                        </p>
                                    </div>

                                    <div className="w-[1.5px] h-[1.2rem] bg-white" /> */}

                                    <div className="flex items-center gap-[5px]">
                                        <GiPayMoney />
                                        <p className='font-medium text-[13px]'>
                                            Min. Amount : {formatAmount(campaign?.minAmount)}
                                        </p>
                                    </div>

                                    <div className="w-[1.5px] h-[1.2rem] bg-white" />

                                    <div className="flex items-center gap-[5px]">
                                        <div className="">
                                            <Image
                                                src={AmountTargetIcon}
                                                alt='amount target icon'
                                                // width={1200} height={800}
                                                // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                                                loading="lazy"
                                                className='w-[1.1rem]'
                                            />
                                        </div>
                                        <p className='font-medium text-[13px]'>
                                            Target : {formatAmount(campaign?.targetAmount)}
                                        </p>
                                    </div>
                                </div>
                                <button className='w-full bg-gradient-to-r from-[#28659a] to-[#4285bf] text-white text-[12px] px-[10px] py-[6px] rounded-[4px] font-medium mt-[15px]'>
                                    {campaign?.campaignType === 'donation' ? "Donate" : "Fund"}
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default UrgentCampaigns