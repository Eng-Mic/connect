"use client"


import React, { useState } from 'react'
import Tabs from '../../../_components/Tab';
import { FiPlus } from 'react-icons/fi';
import { MdOutlineCampaign, MdOutlineFilterAlt } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { campaigns, categories } from '@/data';
import Stats from '../../../_components/Stats'
import FilterCampaigns from '../../../_components/FilterCampaigns';
import ManageCampaign from '../../../_components/creatingCampaigns/ManageCampaign';
import CreatingCampaign from '../../../_components/creatingCampaigns/CreatingCampaign';




const filter_options = ["Trending", "Urgent", "Newest", "LastMinute"];

const CampaignsPage = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    // Sorting States
    const [filterOptions, setFilterOptions] = useState<boolean>(false)
    const [activeFilter_option, setActiveFilter_option] = useState<string>('Filter options');

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    // Methods managing modal
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    return (
        <div className='relative'>
            {modalOpen ? (
                <div
                    onClick={() => {
                        setModalOpen(false);
                    }}
                    className = "fixed inset-0 bg-black opacity-60 z-30"
                />
            ) : ''}
            <div className="mb-[1rem]">
                <h2 className='flex items-center gap-2 text-[1.3rem] font-medium capitalize'>
                    <MdOutlineCampaign className='text-[2.5rem] bg-zinc-100 p-[6px] rounded-[5px]' />
                    Campaigns
                </h2>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-[70%]">
                    <Tabs categories={categories} setActiveCategory={setActiveCategory} />
                </div>
                <div className="flex items-center gap-x-[1.5rem]">
                    {/* Filter options */}
                    <div className="relative">
                        <button
                            onClick={() => setFilterOptions(!filterOptions)}
                            className='w-[11rem] text-[15px] bg-zinc-50  rounded-sm flex items-center justify-between py-[10px] px-[15px] cursor-pointer border-[1px] border-zinc-50 hover:bg-zinc-100'>
                                <div className="flex items-center gap-x-[10px]">
                                    <MdOutlineFilterAlt className='text-[1.2rem]'/>
                                    <span className='text-[15px] font-medium lg:text-[14px]'>
                                        {activeFilter_option}
                                    </span>
                                </div>
                                <IoMdArrowDropdown className='text-[1rem]' />
                        </button>
                        {filterOptions && (
                            <div className="w-[100%] bg-white rounded-md flex flex-col items-start gap-y-[5px] absolute top-[3rem] border-[1px] z-20 ">
                                {filter_options.map((option, index) => (
                                    <button
                                        onClick={() => {
                                            setActiveFilter_option(option);
                                            setFilterOptions(false);
                                        }}
                                        className={cn("w-full text-[14px] py-[6px] flex items-start justify-start px-[15px]", activeFilter_option === option ? 'font-medium bg-zinc-100' : 'text-zinc-500')}
                                        key={index}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Button to create campaigns */}
                    <button 
                        type='button'
                        onClick={handleOpenModal}
                        className='bg-zinc-700 text-white flex items-center justify-center gap-x-[5px] px-[20px] py-[10px] rounded-md text-[14px] md:text-[13px] lg:text-[13px]'
                    >
                        <FiPlus className='text-[1.1rem]' />
                        <p>
                            New campaign
                        </p>
                    </button>
                </div>
            </div>
            {modalOpen ? (
                <div className="w-full h-full fixed top-0  left-0 right-0 mx-auto bg-white p-[1rem] rounded-md shadow-sm z-30 lg:max-w-[85%] sm:p-[2rem] md:p-[3rem] lg:top-[0.5rem]">
                    <CreatingCampaign
                        onClose={handleCloseModal}
                    />
                </div>
            ): null}
            {/* Stats */}
            <Stats campaigns={campaigns} categories={categories} activeTabCategory={activeCategory} />

            <div className="mt-[1.5rem]">
                
                <div className="">
                    <FilterCampaigns campaigns={campaigns} activeTabCategory={activeCategory} />
                </div>
            </div>
        </div>
    )
}

export default CampaignsPage