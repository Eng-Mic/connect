"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import ConnectLogo from '/public/logo.png'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { MdArrowDropDown } from 'react-icons/md'
import { TbLayoutDashboard } from 'react-icons/tb'
import { FiUser } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'

const TopNav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };
  return (
    <div className='relative'>
      {isHovered ? (
            <div
                // onClick={() => {
                //     setIsOpened(false);
                //     setIsMenuOpened(false)
                // }}
                className = "fixed inset-0 bg-black opacity-40 z-20"
            />
        ) : null}
      <div className='flex items-center justify-between py-[1rem] text-[13px] font-[500] border-b-[1px] border-zinc-300 pb-[5px] mb-[1rem]'>
        <div className="flex items-center gap-x-[1.5rem]">
          {/* Connect Logo container */}
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
          <ul className='flex items-center gap-x-[15px]'>
            <li>
              Our Agenda
            </li>
            <li className='flex items-center gap-x-[5px]'>
              Campaigns
              <IoMdArrowDropdown className='text-[15px]' />
            </li>
            <li className="flex items-center gap-x-[5px]">
              Resources
              <IoMdArrowDropdown className='text-[15px]' />
            </li>
            <li className="flex items-center gap-x-[5px]">
              Programs
              <IoMdArrowDropdown className='text-[15px]' />
            </li>
          </ul>
        </div>
        <ul className="flex items-center gap-x-[15px]">
          <li>
            Start a campaign
          </li>
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className='hidden relative flex-col items-center justify-center cursor-pointer h-[3rem] z-30 md:flex'
          >
            <div className="flex">
                <AiOutlineUser className='text-[1.3rem] lg:text-[0.8rem]' />
                <MdArrowDropDown className='hidden md:flex' />
            </div>
            
            {isHovered && !isAuthenticated ? (
                <div className="notAuthenticated absolute top-[2.5rem] right-0 w-[15rem] p-[1rem] bg-zinc-100 rounded-[5px] flex flex-col items-center z-30">
                    <Link
                        href='/sign-in'
                        className='w-[100%] bg-zinc-700 mt-3 py-[7px] rounded-md text-[11px] text-white text-center outline-none transition ease-in-out duration-300 hover:bg-zinc-900'
                        onClick={() => setIsHovered(false)}
                    >
                        Sign-In
                    </Link>
                    <p className='mt-[5px] text-[10.5px]'>
                        New user?
                        <Link
                            href='/sign-up'
                            onClick={() => setIsHovered(false)}
                        >
                            <span className='text-cyan-800 font-semibold text-[12px] ml-[5px] underline transition ease-in-out duration-300 hover:text-cyan-500'>
                                start here
                            </span>
                        </Link>
                    </p>
                </div>
            ) : isHovered && isAuthenticated ?
            (
              <div className="bg-zinc-50 w-[16rem] absolute top-[2.5rem] right-0 p-[1rem] rounded-[5px] z-40">
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

                {/* Dashboard */}
                <section className='px-2'>
                  <p className='text-[13px] flex items-center gap-x-[10px] my-[10px] capitalize text-zinc-500 transition ease-in-out duration-200 hover:text-zinc-700'>
                      <TbLayoutDashboard className='text-[1rem]' />
                      {/* {authUser?.role} Dashboard */} User Dashboard
                  </p>
                </section>
                
                {/* Logout */}
                <section className='flex items-center justify-center gap-x-[10px] bg-zinc-800 text-white text-[11px] py-[8px] rounded-[4px] mt-[1rem] transition ease-in-out duration-300 hover:bg-zinc-700'>
                    <BiLogOut className='text-[1rem]' />
                    <p>
                        Logout
                    </p>
                </section>
              </div>
            )
            : null}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default TopNav