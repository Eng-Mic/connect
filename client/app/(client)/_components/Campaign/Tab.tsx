"use client"

import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import throttle from 'lodash.throttle';
import { cn } from '@/lib/utils';
import { Table2 } from 'lucide-react';

interface TabsProps {
  setActiveTab: (i: number) => void;
}

const CampaignTab = ({ setActiveTab }: TabsProps) => {
     //  Sub-categories Tabs Ref
    const tabSlideRef = useRef<HTMLDivElement | null>(null);
    const [currentTab, setCurrentTab] = useState<number>(1);
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
            className="categories_tabs w-[100%] flex items-center justify-between border-b-[1px] border-zinc-200 pb-[5px] my-[10px] cursor-pointer relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Navigation button */}
            <div className="buttons flex items-center z-10 md:hidden">
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
            <div className="tabs flex items-center justify-between py-[10px] px-[15px] overflow-x-scroll scroll-smooth md:justify-start md:overflow-x-hidden lg:py-[8px]" ref={tabSlideRef}>
                {
                    ['Overview', 'About', 'Discussion', 'Backers List', 'Updates'].map((tab, i) => (
                        <button
                            type='button'
                            onClick={() => {
                                setCurrentTab(i + 1)
                                setActiveTab(i + 1)
                            }}
                            className={cn("min-w-fit text-[15px] mx-[5px] px-[1rem] py-[5px] last:mx-0 outline-none border-0 rounded-md transition ease-in duration-300 font-medium hover:bg-zinc-100 lg:text-[12px]", currentTab === i + 1 && 'bg-zinc-800 text-white')}
                            key={i}
                            >
                                {tab}
                        </button>
                ))}
            </div>
        </div>
    )
}

export default CampaignTab;