"use client"

import { testimonials } from '@/data'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import type SwiperType from 'swiper';
import { Pagination } from 'swiper/modules';
import { cn } from '@/lib/utils'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { BiPlay } from 'react-icons/bi';
import VideoPlayer from '../VideoPlayer';

const Testimonials = () => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Video player modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);

    // Define states for tracking slide positions
    const isAtStart = activeIndex === 0;
    const isAtEnd = activeIndex === (testimonials.length ?? 0) - 1;

    useEffect(() => {
        if (swiper) {
            swiper.on('slideChange', ({ activeIndex }) => {
                setActiveIndex(activeIndex);
            });
        }
    }, [swiper]);

    const openModal = (videoUrl: string) => {
        setCurrentVideo(videoUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };
    return (
        <div className="w-full">
            <section className="mb-[2rem]">
                <p className='text-[12px] font-[500]'>
                    Take a look
                </p>
                <h2 className='text-[1.3rem] font-[500] max-w-[25rem]'>
                    Real Stories of Success: Hear from Our Community.
                </h2>
                <p className='max-w-[45rem] mt-[5px] text-[15.5px]'>
                    Discover how Connect has transformed lives and fueled innovative projects through the voices of our entrepreneurs, donors, investors, and etc.
                </p>
            </section>
            <section className='group w-full h-full flex overflow-x-hidden relative'>
                <Swiper
                    pagination={{
                        renderBullet: (_, className) => {
                            return `<span class="rounded-full transition ${className}"></span>`;
                        },
                    }}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    spaceBetween={50}
                    modules={[Pagination]}
                    slidesPerView={1}
                    className='h-full w-full'>
                    {testimonials.map((testimonial, i) => (
                        <SwiperSlide
                            key={i}
                            className='w-full h-full flex items-center gap-[1rem] p-[2rem] rounded-[6px]'
                        >
                            <div className="min-w-[20rem] min-h-[18rem] rounded-[5px] relative">
                                <div className="h-full absolute inset-0 rounded-[6px] z-10">
                                    <div className="absolute bottom-0 left-0 right-0 h-full bg-zinc-800 opacity-50 rounded-[6px]" />
                                </div>
                                <Image
                                    fill
                                    src={testimonial?.thumbnail}
                                    loading='eager'
                                    className="h-full w-full object-cover object-center rounded-[6px]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    alt='category image'
                                />
                                {/* Video Player Button */}
                                <div className="w-full h-full flex items-center justify-center absolute top-0 bottom-0 right-0 left-0 m-auto z-20">
                                    <button 
                                        onClick={() => openModal(testimonial?.authorVideo)}
                                        className='bg-white text-zinc-900 p-[1rem] rounded-full hover:bg-zinc-200'
                                    >
                                        <BiPlay className='text-[1.5rem]' />
                                    </button>
                                </div>
                            </div>
                            <div className="py-[1.5rem] px-[5rem]">
                                <p className='text-[15px] min-h-[4rem] mb-[10px] leading-[1.6rem]'>
                                    {testimonial?.messageText}
                                </p>
                                <p className='text-[14.5px] font-medium'>
                                    {testimonial?.authorName}
                                </p>
                                <p className='text-[13px] text-zinc-500'>
                                    {testimonial?.authorRole} - {testimonial?.authorCompany}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation btns */}
                <div className="flex items-center gap-x-[10px] px-[3rem] absolute right-[2rem] bottom-[2rem] z-20">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            swiper?.slidePrev();
                        }}
                        className={`hover:opacity-35 text-[1.1rem] bg-zinc-100 border-[1px] border-zinc-500 rounded-full ${isAtStart ? 'opacity-40 cursor-not-allowed' : ''}`}
                        aria-label='previous testimonial'
                    >
                        <IoIosArrowRoundBack />
                    </button>

                    <button
                        role='button'
                        onClick={(e) => {
                            e.preventDefault();
                            swiper?.slideNext();
                        }}
                        className={`hover:opacity-35 text-[1.1rem] bg-zinc-100 border-[1px] border-zinc-500 rounded-full ${isAtEnd ? 'opacity-40 cursor-not-allowed' : ''}`}
                        aria-label='next testimonial'
                    >
                        <IoIosArrowRoundForward />
                    </button>
                </div>
            </section>
            {isModalOpen && (
                <div className="">
                    <VideoPlayer
                        videoUrl={currentVideo}
                        isOpen={isModalOpen}
                        onClose={closeModal}
                    />
                </div>
            )}
        </div>
    )
}

export default Testimonials