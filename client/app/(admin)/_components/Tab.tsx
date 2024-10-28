"use client"

import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import throttle from 'lodash.throttle';
import { cn } from '@/lib/utils';

interface Categories {
  id: number;
  slug: string;
  name: string;
}

interface Categories {
  categories?: Categories[];
}

interface TabsProps {
  categories: Categories[];
  setActiveCategory: (slug: string) => void;
}

const Tabs = ({ categories, setActiveCategory }: TabsProps) => {
    //  Sub-categories Tabs Ref
    const tabSlideRef = useRef<HTMLDivElement | null>(null);
    const [targetCategory, setTargetCategory] = useState<string>('all');
    const [isBackButtonVisible, setIsBackButtonVisible] = useState<boolean>(false);
    const [isForwardButtonVisible, setIsForwardButtonVisible] = useState<boolean>(true);
    const [isHovering, setIsHovering] = useState<boolean>(false);

     // Sub-Categories Slider Buttons
    const slideNext = () => {
        if (tabSlideRef.current) {
            tabSlideRef.current.scrollLeft += 200;
        }
    };

    const slidePre = () => {
        if (tabSlideRef.current) {
            tabSlideRef.current.scrollLeft -= 200;
        }
    };
    // End of Header Slider

    // The handleScroll function is a throttled function that calculates whether the back and forward buttons should be visible based on the current scroll position (scrollLeft), the width of the visible area (clientWidth), and the total width of the scrollable content (scrollWidth).
    const handleScroll = throttle(() => {
        // Get the current scroll position, client width, and total scrollable width
        if(tabSlideRef.current) {
            const scrollLeft = tabSlideRef.current.scrollLeft;
            const clientWidth = tabSlideRef.current.clientWidth;
            const scrollWidth = tabSlideRef.current.scrollWidth;

            setIsBackButtonVisible(scrollLeft >= 20);
            setIsForwardButtonVisible(scrollLeft < scrollWidth - clientWidth - 20);
        }
    }, 200); // Throttle interval in milliseconds

    // The useEffect hook is used to attach the scroll event listener when the component mounts.
    // It also handles cleanup by removing the event listener when the component unmounts.
    useEffect(() => {
        const currentRef = tabSlideRef.current;

        if (currentRef) {
            // Attach the scroll event listener when component mounts
            currentRef.addEventListener('scroll', handleScroll);
        }
        
        // Clean up the scroll event listener when component unmounts
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    
    return (
        <div 
            className="categories_tabs w-[100%] flex items-center justify-between border-b-[1px] border-zinc-200 pb-[5px] mb-[10px] cursor-pointer relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="buttons flex items-center z-10">
                <button
                    type='button'
                    id="backButton"
                    onClick={() => slidePre()}
                    className={cn("absolute left-0 px-[20px] py-[10px] bg-gradient-to-r from-zinc-50 to-zinc-50 rounded-l-[5px] transition ease-in duration-300", isHovering && isBackButtonVisible ? 'block' : 'hidden')}
                >
                    <IoIosArrowBack />
                </button>
                <button
                    type='button'
                    id="forwardButton"
                    onClick={() => slideNext()}
                    className={cn("absolute right-0 px-[20px] py-[10px] bg-gradient-to-r from-zinc-50 to-zinc-50 rounded-r-[5px] transition ease-in duration-300", isHovering && isForwardButtonVisible ? 'block' : 'hidden')}
                >
                        <IoIosArrowForward />
                </button>
            </div>
            {/* Tab */}
            <div className="tabs flex items-center justify-between py-[10px] px-[15px] overflow-x-scroll scroll-smooth lg:py-[8px]" ref={tabSlideRef}>
                <button
                    type='button'
                    onClick={() => {
                        setTargetCategory("all");
                        setActiveCategory("all")
                    }}
                    className={cn("text-[15px] px-[1rem] font-medium py-[8px] rounded-md lg:text-[13px]", targetCategory === 'all' && 'bg-zinc-800 text-white')}
                >
                    All
                </button>
                {categories &&
                    categories.map((cat) => (
                        <button
                            type='button'
                            onClick={() => {
                                setTargetCategory(cat?.slug)
                                setActiveCategory(cat?.slug)
                            }}
                            className={cn("min-w-fit text-[15px] mx-[1rem] px-[1rem] py-[8px] last:mx-0 outline-none border-0 rounded-md transition ease-in duration-300 font-medium hover:bg-zinc-100 lg:text-[13px]", targetCategory === cat?.slug && 'bg-zinc-800 text-white')}
                            key={cat?.id}
                            >
                                {cat.name}
                        </button>
                ))}
            </div>
        </div>
    )
}

export default Tabs