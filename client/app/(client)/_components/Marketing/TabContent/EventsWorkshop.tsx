import { news_insights } from '@/data'
import Image from 'next/image'
import React from 'react'
import { FaVideo } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

const EventsWorkshop = () => {
    return (
        <div className='w-full'>
            <div className="grid grid-cols-3 gap-x-[1.3rem] gap-y-[2rem]">
                {news_insights?.map((insight, index) => (
                    <div className="w-full" key={index}>
                        <div className="w-full h-[12rem] relative">
                        <Image
                            src={insight?.coverImage}
                            alt='insight img'
                            // width={1200} height={800}
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                            loading="lazy"
                            className='w-full h-full object-center object-cover rounded-[2px]'
                        />
                        </div>
                        <div className="mt-[18px]">
                            <h2 className='w-fit text-[1.15rem] font-medium line-clamp-2'>
                                {insight?.title}
                            </h2>
                            <p className='text-[14.5px] line-clamp-2 text-zinc-600 my-[10px]'>
                                {insight?.tagline}
                            </p>
                            <div className='border-t-[1px] border-zinc-300 pt-[10px]'>
                                <p className='flex items-center gap-x-[10px] text-[13px]'>
                                    <MdDateRange className='text-[1rem]' />
                                    Tue 9 Jan, 2024 | 4:00 am GMT- 12:00
                                </p>
                                <div className="grid grid-cols-2 gap-[10px] my-[10px]">
                                    <>
                                        {index === 2 || index === 3 ? (
                                            <p className='flex items-center gap-x-[10px] text-[13px]'>
                                                <FaVideo className='text-[1rem]' />
                                                Online
                                            </p>
                                        ): (
                                            <p className='flex items-center gap-x-[10px] text-[13px]'>
                                                <BiCurrentLocation className='text-[1rem]' />
                                                Connect Gallery
                                            </p>
                                        )}
                                    </>
                                    <p className='flex items-center gap-x-[10px] text-[13px]'>
                                        <FaUsers className='text-[1rem]' />
                                        100 Attendees
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className='w-full text-[12px] bg-zinc-700 text-white py-[6px] rounded-[5px] mt-[10px]'>
                            {index === 2 || index === 3 ? "Book your spot" : "Close"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventsWorkshop