import { news_insights } from '@/data'
import Image from 'next/image'
import React from 'react'
import { BsDot } from 'react-icons/bs'
import { FiArrowUpRight } from "react-icons/fi";

const NewsInsights = () => {
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
                  <div className='text-[11px] flex items-center justify-between font-medium mb-[5px]'>
                    <div className='flex items-center gap-x-[1px]'>
                      <p>
                        Michael L. Bangura
                      </p> 
                      <BsDot className="text-[13px]" />
                      <p>
                        11 oct 2024
                      </p>
                    </div>
                    <p>
                      2 min read
                    </p>
                  </div>
                  <div className="flex items-center gap-x-[2rem]">
                    <h2 className='w-fit text-[1.15rem] font-medium line-clamp-1'>
                      {insight?.title}
                    </h2>
                    <FiArrowUpRight className='w-fit text-[1.05rem]' />
                  </div>
                  <p className='text-[14.5px] line-clamp-2 text-zinc-600 my-[10px]'>
                    {insight?.tagline}
                  </p>
                  <div className="flex items-center gap-x-[10px] mt-[10px]">
                    <p className='w-fit bg-zinc-100 py-[3px] px-[10px] rounded-[5px] text-[11px]'>
                      Marketing
                    </p>
                    <p className='w-fit bg-zinc-100 py-[3px] px-[10px] rounded-[5px] text-[11px]'>
                      leadership
                    </p>
                  </div>
                </div>
              </div>
          ))}
        </div>
    </div>
  )
}

export default NewsInsights