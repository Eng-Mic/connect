import { news_insights } from '@/data'
import Image from 'next/image'
import React from 'react'
import { BiPlay } from 'react-icons/bi'

const GuidelinesTemplateTutorials = () => {
  return (
    <div className='w-full'>
            <div className="grid grid-cols-3 gap-x-[1.3rem] gap-y-[2rem]">
                {news_insights?.map((insight, index) => (
                    <div className="w-full" key={index}>
                        <div className="w-full h-[12rem] relative">
                            <div className="h-full absolute inset-0 rounded-[6px] z-10">
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-zinc-800 opacity-50 rounded-[6px]" />
                            </div>
                            <Image
                                src={insight?.coverImage}
                                alt='insight img'
                                // width={1200} height={800}
                                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                                loading="lazy"
                                className='w-full h-full object-center object-cover rounded-[2px]'
                            />
                            {/* Video Player Button */}
                            <div className="w-full h-full flex items-center justify-center absolute top-0 bottom-0 right-0 left-0 m-auto z-20">
                                <button 
                                    // onClick={() => openModal(testimonial?.authorVideo)}
                                    className='bg-white text-zinc-900 p-[10px] rounded-full hover:bg-zinc-200'
                                >
                                    <BiPlay className='text-[1.5rem]' />
                                </button>
                            </div>
                        </div>
                        <div className="mt-[18px]">
                            <h2 className='w-fit text-[1.15rem] font-medium line-clamp-2'>
                                {insight?.title}
                            </h2>
                            <p className='text-[14.5px] line-clamp-2 text-zinc-600 my-[10px]'>
                                {insight?.tagline}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default GuidelinesTemplateTutorials