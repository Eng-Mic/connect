"use client"

import React, { useState } from 'react'
import ConnectLogo from '/public/logo.png'
import Image from 'next/image'
import { MdEmail, MdOutlineCampaign } from 'react-icons/md'
import { BsBellFill } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { IoMdArrowDropdown, IoMdSettings } from 'react-icons/io'
import { BiLogOut } from 'react-icons/bi'
import { GrOverview } from 'react-icons/gr'
import Link from 'next/link'

const Navigation = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };
  return (
    <div className="relative">
        {isHovered ? (
            <div
                // onClick={() => {
                //     setIsOpened(false);
                //     setIsMenuOpened(false)
                // }}
                className = "fixed inset-0 bg-black opacity-40 z-20"
            />
        ) : null}
    
        <nav className='w-full flex items-center justify-between py-[1rem]'>
            <div>
                <Link href='/' className="">
                    <Image
                        src={ConnectLogo}
                        alt='Connect logo'
                        // width={1200} height={800}
                        // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                        loading="lazy"
                        className='w-[5rem]'
                    />
                </Link>
            </div>
            <ul className="flex items-center gap-2 text-[13px] text-zinc-400">
                <li className='flex items-center gap-2 font-medium py-[0.75rem] px-4 text-slate-800 capitalize'>
                    <GrOverview className='text-[1rem]' />
                    Overview
                </li>
                <li className='flex items-center gap-2 font-medium py-[0.75rem] px-4 text-slate-800 capitalize'>
                    <MdOutlineCampaign className='text-[1.4rem]' />
                    Campaigns
                </li>
            </ul>
            <div className="flex items-center gap-4">
                <div className="mail">
                    <MdEmail className='text-[14px]' />
                </div>
                <div className="notification">
                    <BsBellFill className='text-[14px]' />
                </div>
                <div
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    className="hidden relative flex-col items-center justify-center cursor-pointer h-[3rem] z-30 md:flex"
                >
                    <div className="flex items-center gap-x-[3px]">
                        <FiUser className='text-[1rem]' />
                        <div className='flex items-center text-[12px] gap-x-[5px]'>
                            <p>
                                Michael L Bangura
                            </p> 
                            <IoMdArrowDropdown className='text-[1rem]' />
                        </div>
                    </div>

                    {/* Settings Modal :: Display when hover upon  */}
                    {isHovered && (
                        <div className="bg-zinc-50 w-[16rem] absolute top-[2.5rem] right-0 p-[1rem] rounded-[5px] z-30">
                            <section className='flex items-center gap-x-[10px] border-b-[1px] border-zinc-300 pb-[10px] mb-[10px]'>
                                <FiUser className='text-[1.5rem]' />
                                <div>
                                    <p className='text-[13px] font-medium flex items-center gap-x-[5px]'>
                                        Michael
                                    </p>
                                    <p className='text-[10px]'>
                                        michlawbang123@gmail.com
                                    </p>
                                </div>
                            </section>

                            {/* Settings */}
                            <section className='px-2'>
                                <p className='flex items-center gap-2 text-[12.5px] capitalize text-zinc-600'>
                                    <IoMdSettings className='text-[1rem]' />
                                    Profile Settings
                                </p>
                                
                            </section>
                            
                            {/* Logout */}
                            <section className='flex items-center justify-center gap-x-[10px] bg-zinc-700 text-white text-[11px] py-[8px] rounded-[4px] mt-[1.5rem]'>
                                <BiLogOut className='text-[1rem]' />
                                <p>
                                    Logout
                                </p>
                            </section>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation