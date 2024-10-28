"use client"

import { categories } from '@/data'
import { ArrowBigLeft } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ImageCarousel from '../ImageCarousel'

const Categories = () => {
    const categories_container = useRef<HTMLDivElement | null>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const handleLeftSlide = (e: React.MouseEvent) => {
        e.preventDefault();
        if (categories_container.current) {
            categories_container.current.scrollLeft -= categories_container.current.offsetWidth;
        }
    }

    const handleRightSlide = (e: React.MouseEvent) => {
        e.preventDefault();
        if (categories_container.current) {
            categories_container.current.scrollLeft += categories_container.current.offsetWidth;
        }
    }

    const checkScrollPosition = () => {
        if (categories_container.current) {
            const { scrollLeft, scrollWidth, offsetWidth } = categories_container.current;
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft + offsetWidth >= scrollWidth);
            // console.log({
            //     "scrollLeft": scrollLeft,
            //     "offsetWidth": offsetWidth,
            //     "offsetWidth + offsetWidth": (scrollLeft + offsetWidth),
            //     "scrollWidth": scrollWidth,
            // })
        }
    };

    useEffect(() => {
        checkScrollPosition(); // Check on initial render

        const container = categories_container.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);

    if (!categories || !categories.length) return null;
    return (
        <div className='w-full'>
            <section className="mb-[2rem]">
                <p className='text-[12px] font-[500]'>
                    Categories
                </p>
                <div className="w-full flex items-center justify-between">
                    <h2 className='text-[1.3rem] font-[500] max-w-[22rem]'>
                        Explore diverse categories and drive change.
                    </h2>
                    <div className="flex items-center gap-x-[10px]">
                        <IoIosArrowBack
                            role='button'
                            onClick={isAtStart ? undefined : handleLeftSlide}
                            className={`hover:opacity-35 ${isAtStart ? 'opacity-40 cursor-not-allowed' : ''}`}
                        />
                        <IoIosArrowForward
                            role='button'
                            onClick={isAtEnd ? undefined : handleRightSlide}
                            className={`hover:opacity-35 ${isAtEnd ? 'opacity-40 cursor-not-allowed' : ''}`}
                        />
                    </div>
                </div>
            </section>
            <section className="categories_container min-w-[100%] flex items-center justify-between gap-2 overflow-auto scroll-smooth cursor-pointer pb-1 md:gap-3" ref={categories_container}>
                {categories?.map((category) => (
                    <div className="min-w-[20rem] h-[20rem] relative rounded-[6px]" key={category?.id}>
                        <div className="h-full absolute inset-0 rounded-[5px] z-10">
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-zinc-700 via-zinc-700 to-transparent opacity-20 rounded-b-[6px]" />
                            <div className="absolute bottom-0 left-0 right-0 h-[8rem] bg-gradient-to-t from-zinc-900 via-zinc-900 to-transparent opacity-90 rounded-b-[6px]" />
                        </div>
                        <ImageCarousel images={category?.coverImg} />
                        <p className='w-[100%] text-[1rem] font-medium absolute bottom-[0.5rem] left-0 right-0 px-[1.5rem] py-2 text-white line-clamp-1 z-20'>
                            {category?.name}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Categories