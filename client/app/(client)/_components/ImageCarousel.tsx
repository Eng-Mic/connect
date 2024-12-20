"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import type SwiperType from 'swiper'
import { Pagination } from 'swiper/modules'
import { cn } from '@/lib/utils'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [swiper, setSwiper] = useState<null | SwiperType>(
        null
    )
    const [activeIndex, setActiveIndex] = useState(0)

    const [slideConfig, setSlideConfig] = useState({
        isBeginning: true,
        isEnd: activeIndex === (images.length ?? 0) - 1,
    })

    useEffect(() => {
        swiper?.on('slideChange', ({ activeIndex }) => {
            setActiveIndex(activeIndex)
                setSlideConfig({
                isBeginning: activeIndex === 0,
                isEnd: activeIndex === (images.length ?? 0) - 1,
            })
        })
    }, [swiper, images])

    const activeStyles = 'active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-6 w-6 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300'

    const inactiveStyles = 'hidden text-gray-400'

    return (
        <div className='w-full h-full group relative bg-zinc-100 aspect-square overflow-hidden rounded-[6px]'>
            <div className='absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition'>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        swiper?.slideNext()
                    }}
                    className={cn(
                        activeStyles,
                        'right-3 transition',
                        {
                        [inactiveStyles]: slideConfig.isEnd,
                        'hover:bg-primary-400 text-primary-800 opacity-100':
                            !slideConfig.isEnd,
                        }
                    )}
                    aria-label='next image'>
                    <IoIosArrowForward className='text-zinc-700' />{' '}
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        swiper?.slidePrev()
                    }}
                    className={cn(activeStyles, 'left-3 transition', {
                        [inactiveStyles]: slideConfig.isBeginning,
                        'hover:bg-primary-400 text-primary-800 opacity-100':
                        !slideConfig.isBeginning,
                    })}
                    aria-label='previous image'>
                    <IoIosArrowBack className='text-zinc-700' />{' '}
                </button>
            </div>

            <Swiper
                pagination={{
                    renderBullet: (_, className) => {
                        return `<span class="rounded-full transition ${className}"></span>`
                    },
                }}
                onSwiper={(swiper) => setSwiper(swiper)}
                spaceBetween={50}
                modules={[Pagination]}
                slidesPerView={1}
                className='h-full w-full'>
                {images.map((image, i) => (
                    <SwiperSlide
                        key={i}
                        className='relative h-full w-full'>
                        <Image
                            fill
                            src={image}
                            loading='eager'
                            className="h-full w-full object-cover object-center rounded-[6px] bg-blend-normal"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt='category image'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ImageCarousel