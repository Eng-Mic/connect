import { insights } from '@/data'
import Image from 'next/image'
import React from 'react'

const Insights = () => {
    return (
        <div>
            <p className='text-[14px] font-medium text-zinc-600 flex items-center justify-between border-b-[1px] border-zinc-200 pb-[5px] mb-[10px]'>
                Insights
                <span className='font-normal text-[12.5px]'>
                    Show all
                </span>
            </p>
            <div className="grid grid-cols-3 gap-[10px]">
                {insights?.map((insight) => (
                    <div className="flex flex-col gap-[5px] border-[1px] border-zinc-200 rounded-[5px]" key={insight?.id}>
                        <div className="bg-zinc-100 p-[5px] h-[10rem] rounded-md flex items-center justify-center">
                            <div className="w-full h-full rounded-md">
                                <Image
                                    src={insight?.coverImage} 
                                    alt={insight?.title}
                                    className='w-full h-full object-cover rounded-md'
                                /> 
                            </div>
                        </div>
                        <div className="p-[10px]">
                            <span
                                className='w-fit text-[11px] font-medium bg-zinc-50 py-[3px] px-[10px] border-[1px] border-zinc-400 rounded-[5px]'
                            >
                                {insight?.category}
                            </span>
                            <p
                                className='text-[17px] font-medium line-clamp-1 mt-[4px]'
                            >
                                {insight?.title}
                            </p>
                            <p
                                className='text-[13.5px] line-clamp-3 mt-[10px]'
                            >
                                {insight?.tagline}
                            </p>
                            <button className='text-[12px] bg-zinc-800 text-white py-[6px] px-[15px] rounded-[5px] mt-[10px]'>
                                Read now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Insights