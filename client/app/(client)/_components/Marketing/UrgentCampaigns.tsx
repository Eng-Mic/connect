"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import CommunityIcon from '/public/community-icon.svg'
import AmountIcon from '/public/noun-invest.svg'
import AmountTargetIcon from '/public/noun-target.svg'
import CommunityDarkIcon from '/public/community-dark-icon.svg'
import AmountDarkIcon from '/public/noun-invest-dark.svg'
import AmountTargetDarkIcon from '/public/noun-target-dark.svg'
import campaignImg from '/public/elp.png'
import ProgressBar from '../ProgressBar'
import { GiPayMoney } from 'react-icons/gi'
import { PiUsersFill } from 'react-icons/pi'

const UrgentCampaigns = () => {
    const targetAmount = 20000;
    const [raisedAmount, setRaisedAmount] = useState(800);
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
                <div className="w-full flex gap-[2rem] p-[1.8rem] rounded-[5px] bg-gradient-to-r from-[#fefeff] to-[#dddfdf] border-[1px] border-zinc-300">
                    {/* Image */}
                    <div className="w-[40%] min-h-full rounded-[5px]">
                        <Image
                            // fill
                            src={campaignImg}
                            alt='campaign img'
                            loading="lazy"
                            className='w-full h-full object-center object-fill rounded-[7px]'
                        />
                    </div>
                    <div className="w-[1px] min-h-full bg-zinc-300" />
                    <div className="w-[60%]">
                        <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px]'>
                            Donation
                        </p>
                        <h2 className='text-[1.4rem] font-semibold line-clamp-1 mb-[3px]'>
                            Revolutionizing the future with cutting-edge technology.
                        </h2>
                        <p className='line-clamp-2 text-[15px]'>
                            We believe that quality healthcare is a fundamental right that should be accessible to all, regardless of their circumstances. Join us in making a difference as we ...
                        </p>
                        {/* Tags */}
                        <div className="flex items-center gap-[1rem] mt-[10px]">
                            <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px]'>
                                Healthcare
                            </p>
                            <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px]'>
                                Healthcare
                            </p>
                            <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px]'>
                                Healthcare
                            </p>
                        </div>
                        {/* progress */}
                        <div className="mt-[15px]">
                            <p className='text-[13px] font-medium'>
                                Raised
                            </p>
                            <div className="flex items-center justify-between font-medium mb-[5px]">
                                <p className='flex items-center gap-[5px] text-[14px]'>
                                    <span className='text-[16px]'>
                                        $800
                                    </span>
                                    raised of $20,000
                                </p>
                                <p className='text-[14px]'>
                                    20 days left
                                </p>
                            </div>
                            <ProgressBar raised={raisedAmount} target={targetAmount} />
                        </div>
                        {/* Footer */}
                        <div className="border-t-[2px] border-dashed border-zinc-300 pt-[15px] mt-[15px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-[5px]">
                                    <PiUsersFill />
                                    <p className='font-medium text-[14px]'>
                                        Donors : 22
                                    </p>
                                </div>

                                <div className="w-[1.5px] h-[1.2rem] bg-zinc-400" />

                                <div className="flex items-center gap-[5px]">
                                    <GiPayMoney />
                                    <p className='font-medium text-[14px]'>
                                        Min. Amount : $10
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
                                        Target : $20,000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-2 gap-[1rem] mt-[1.5rem]">
                    <div className="relative h-[27rem] rounded-[7px] border-[1px] border-zinc-200">
                        <div className="absolute inset-0 rounded-[7px] z-10">
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-zinc-900 via-zinc-800 to-transparent opacity-60 rounded-b-[8px]" />
                            <div className="absolute bottom-0 left-0 right-0 h-[22rem] bg-gradient-to-t from-zinc-900 via-zinc-900 to-transparent opacity-90 rounded-b-[7px]" />
                        </div>
                        <Image
                            fill
                            src='/cam_1.jpg'
                            alt='campaign img'
                            loading="lazy"
                            className=' w-full h-full object-cover object-center rounded-[7px] bg-blend-normal'
                        />
                        
                        <div className="w-[100%] absolute bottom-[0.5rem] left-0 right-0 px-[1.5rem] py-2 text-white z-20 ">
                            <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px]'>
                                Donation
                            </p>
                            <h2 className='text-[1.4rem] font-semibold line-clamp-1 mb-[3px]'>
                                Revolutionizing the future with cutting-edge technology.
                            </h2>
                            <p className='line-clamp-2 text-[15px]'>
                                Our startup is focused on developing AI-driven solutions for real-world problems...
                            </p>
                            {/* Tags */}
                            <div className="flex items-center gap-[1rem] mt-[10px]">
                                <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px]'>
                                    Healthcare
                                </p>
                                <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px]'>
                                    Healthcare
                                </p>
                                <p className='w-fit bg-zinc-200 text-black py-[2px] px-[10px] text-[10px] rounded-[5px]'>
                                    Healthcare
                                </p>
                            </div>
                            {/* progress */}
                            <div className="mt-[15px]">
                                <p className='text-[13px] font-medium'>
                                    Raised
                                </p>
                                <div className="flex items-center justify-between font-medium mb-[5px]">
                                    <p className='flex items-center gap-[5px] text-[14px]'>
                                        <span className='text-[16px]'>
                                            $800
                                        </span>
                                        raised of $20,000
                                    </p>
                                    <p className='text-[14px]'>
                                        20 days left
                                    </p>
                                </div>
                                <ProgressBar raised={raisedAmount} target={targetAmount} />
                            </div>
                            {/* Footer */}
                            <div className="border-t-[2px] border-dashed pt-[15px] mt-[15px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[5px]">
                                        <PiUsersFill />
                                        <p className='font-medium text-[14px]'>
                                            Donors : 22
                                        </p>
                                    </div>

                                    <div className="w-[1.5px] h-[1.2rem] bg-white" />

                                    <div className="flex items-center gap-[5px]">
                                        <GiPayMoney />
                                        <p className='font-medium text-[14px]'>
                                            Min. Amount : $10
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
                                        <p className='font-medium text-[14px]'>
                                            Target : $20,000
                                        </p>
                                    </div>
                                </div>
                                <button className='w-full bg-gradient-to-r from-[#28659a] to-[#4285bf] text-white text-[12px] px-[10px] py-[6px] rounded-[4px] font-medium mt-[15px]'>
                                    Donate
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default UrgentCampaigns