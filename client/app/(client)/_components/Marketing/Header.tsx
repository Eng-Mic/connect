"use client"

import React, { useState } from 'react'
import TopNav from '../TopNav'
import Line from '/public/line.png'
import Hotspot from '/public/hotspot-tower-icon.svg'
import Community from '/public/community.png'
import Image from 'next/image'
import { IoIosMegaphone } from 'react-icons/io'
import ProgressBar from '../ProgressBar'


const Header = () => {
    
  return (
    <div className="w-full mx-auto min-h-screen bg-desktop bg-no-repeat bg-cover bg-center overflow-hidden relative">
        <div className="w-[90%] mx-auto lg:w-[82%] lg:max-w-screen-xl">
            <TopNav />
        </div>
        <div className="w-[90%]  mx-auto flex flex-col justify-center items-center lg:w-[85%]">
            <div className="relative mb-[10px]">
                {/* Hero primary text */}
                <h1 className="text-[2.5rem] font-semibold tracking-tight sm:text-[2.5rem]">
                    Imagine a community
                </h1>
                <Image
                    src={Line}
                    alt='border line'
                    // width={1200} height={800}
                    // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                    loading="lazy"
                    className='w-[17rem] absolute bottom-[-5px] right-[-1rem] md:w-[15rem] md:right-[-2.5rem] md:bottom-[-2px]'
                />
            </div>
            {/* Hero secondary text */}
            <>
                <p className="text-center text-[1.2rem] tracking-tight sm:w-[65%] md:w-[45%]">
                    Where your 
                    <span className="px-[6px]">
                        ideas
                    </span> 
                    matter, your 
                    <span className="px-[6px]">
                        investments
                    </span> 
                </p>
                <p className='text-center text-[1.2rem] tracking-tight sm:w-[65%] md:w-[45%]'>
                    yield exponential returns. 
                </p>
            </>
            {/* Hero join connect & Start a campaign btns */}
            <div className="flex items-center gap-[1rem]">
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
        <div className="w-full mx-auto max-h-[21rem]">
            <Image
                src={Community}
                alt='connect community'
                // width={1200} height={800}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                loading="lazy"
                className='w-full h-full object-contain'
            />
        </div>
        
    </div>
  )
}

export default Header