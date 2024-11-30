"use client"

import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import NewsInsights from './TabContent/NewsInsights';
import EventsWorkshop from './TabContent/EventsWorkshop';
import GuidelinesTemplateTutorials from './TabContent/GuidelinesTemplateTutorials';

const Resources = () => {
    const [currentTab, setCurrentTab] = useState(1);
    const renderTabContent = () => {
        switch (currentTab) {
            case 1:
                return (
                    <NewsInsights />
                );
            case 2:
                return (
                    <EventsWorkshop />
                );
            case 3:
                return (
                    <GuidelinesTemplateTutorials />
                );
            default:
                return null;
        }
    };
    return (
        <div className="mt-[5rem] mb-[1rem]">
            <section className="mb-[2rem]">
                <p className='text-[12px] font-[500]'>
                    Insights
                </p>
                <h2 className='text-[1.3rem] font-[500] max-w-[25rem]'>
                    Your go-to resources library to success.
                </h2>
                <p className='max-w-[45rem] mt-[5px] text-[14px] font-medium'>
                    Unlock tools, guides, and insights to help you succeed. Whether you&apos;re starting a venture, looking for investment, or driving social impact, our resources are here to support you.
                </p>
                <button className='border-b-[1px] border-zinc-700 text-[14px] flex items-center gap-x-[10px] mt-[1rem] font-medium'>
                    Explore more <IoIosArrowRoundForward className="text-[1.1rem]" />
                </button>
            </section>
            <section className='flex items-center justify-center gap-[1rem]'>
                {['News & insights', 'Events & workshops', 'Guidelines, templates & tutorials'].map((tab, index) => (
                    <div 
                        role='button'
                        onClick={() => setCurrentTab(index + 1)}
                        key={index}
                        className={cn("text-[14px] text-zinc-600 font-medium", currentTab === index + 1 && "bg-zinc-100 py-[5px] px-[10px] rounded-[5px] text-[13px] text-zinc-800 font-semibold" )}
                    >
                        <p>
                            {tab}
                        </p>
                    </div>
                ))}
            </section>
            <section className='mt-[2rem]'>
                { renderTabContent() }
            </section>
        </div>
    )
}

export default Resources