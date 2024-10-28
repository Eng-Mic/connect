"use client"

import { campaignTypes, categories } from '@/data';
import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdSave } from 'react-icons/io'

interface CampaignType {
    id: number;
    title: string;
    info: string;
} 

interface CampaignCategory {
    id: number,
    name: string,
    title: string,
    info2: string
}

interface ManageCampaignProps {
    onClose: () => void;
    onSubmit: () => void;
    initialData?: any; // Define a proper type based on initialData's structure
}

const ManageCampaign = ({ onClose, onSubmit, initialData }: ManageCampaignProps) => {
    const [showCampaignTypes, setShowCampaignTypes] = useState(false);
    const [selectedCampaignType, setSelectedCampaignType] = useState<CampaignType | null>(null);
    const [showCampaignCategories, setShowCampaignCategories] = useState(false);
    const [selectedCampaignCategory, setSelectedCampaignCategory] = useState<CampaignCategory | null>(null);
    
    
    const HandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <div className="relative">
                <div className="w-full flex items-center justify-between border-b-[1px] border-zinc-200 mt-[1.5rem] mb-[10px] pb-[10px]">
                    <h2 className='text-[1rem] font-medium'>
                        {/* {initialData ? 'Update Campaign' : 'New Campaign'} */} New Campaign
                    </h2>
                    <button
                        type='submit'
                        className='bg-zinc-700 text-white flex items-center justify-center gap-x-[8px] px-[10px] py-[6px] rounded-[5px] text-[14px] md:text-[13px]'
                    >
                        <IoMdSave className='text-[1rem]' />
                        <p>
                            {/* {initialData ? 'Update' : 'Create'} */} Create
                        </p>
                    </button> 
                </div>
                <button 
                    type='button'
                    onClick={onClose}
                    className='absolute top-0 right-[-1rem] text-[13px] font-medium py-[5px] px-[10px] rounded-[5px] hover:bg-zinc-200 lg:top-[-3rem]'
                >
                    close
                </button>
            </div>
            
            <form 
                action="" 
                className='manageCampaign overflow-auto h-[78vh] mt-[1rem] pb-[15px]'
                onSubmit={HandleSubmit}
            >
                <div>
                    {/* Thumbnail & video */}
                    <div className="">
                        
                    </div>
                    <div className="grid grid-cols-2 gap-[2rem]">
                        {/* Left-hand side: Campaign title, Campaign type, Campaign target amount, Campaign equity offered, Campaign end date, Campaign tags, Campaign contacts (email, and phone number) */}
                        <div className="space-y-[20px] text-[16px]">
                            {/* Campaign title */}
                            <div className="flex flex-col">
                                <label htmlFor="" className='font-medium mb-[3px]'>
                                    Campaign Title
                                </label>
                                <span className='text-[12px] mb-[10px] text-zinc-600'>
                                    Choose a campaign title that clearly and concisely represents your campaign, making it easily identifiable and appealing to potential backers.
                                </span>
                                <input 
                                    type="text" 
                                    name="campaignTitle" 
                                    id="campaignTitle" 
                                    placeholder="eg. Revolutionizing project management"
                                    className='w-[100%] text-[13px] py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px]  capitalize placeholder:italic'
                                />
                            </div>
                            {/* Campaign types container */}
                            <div className="">
                                <h2 className='text-[16px] font-medium mb-[3px]'>
                                    Campaign Types :
                                </h2>
                                <span className='text-[12px] mb-[10px] text-zinc-600'>
                                    Select the campaign type that fits your project and matches your supporters&apos; expectations.
                                </span>
                                {/* Button to show campaign types */}
                                <div
                                    role='button'
                                    onClick={() => setShowCampaignTypes(!showCampaignTypes)}
                                    className="w-[100%] flex items-center justify-between cursor-pointer text-[13px] py-[7px] px-[10px] rounded-[5px] font-medium bg-zinc-50 border-[1px] border-zinc-400 mt-[15px] lg:text-[12px]"
                                >
                                    Select Campaign Type
                                    <IoMdArrowDropdown className='text-[14px]' />
                                </div>
                                {/* Display campaign types] */}
                                {showCampaignTypes ? (
                                    <div className="bg-zinc-50 p-[15px] rounded-[5px] border-[1px] border-zinc-400 mt-[8px]">
                                        {campaignTypes?.map((type) => (
                                            <div 
                                                role='button'
                                                onClick={() => {
                                                    setSelectedCampaignType(type)
                                                    setShowCampaignTypes(false)
                                                }}
                                                className="border-b-[1px] py-[7px] hover:bg-zinc-100 transition ease-in-out duration-300 last:border-0"
                                                key={type?.id}
                                            >
                                                <p className='capitalize font-medium text-[15px] mb-[2px]'>
                                                    {type?.title}
                                                </p>
                                                <p className='text-[13px]'>
                                                    {type?.info}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                                {/* Selected campaign type */}
                                {selectedCampaignType && selectedCampaignType ? (
                                    <div className="bg-zinc-50 p-4 rounded-md mt-1 border-[1px] border-zinc-700">
                                        <div className="flex items-center gap-x-[10px] border-b-[1px] border-zinc-400 pb-[5px] mb-[5px]">
                                            {/* Radio box */}
                                            <div className="min-w-[0.84rem] h-[0.8rem] border-[1.5px] border-zinc-700 rounded-full flex items-center justify-center">
                                                <div className="w-[0.47rem] h-[0.48rem] bg-zinc-700 rounded-full"></div>
                                            </div>
                                            <h2 className='text-[15px] font-medium'>
                                                {selectedCampaignType?.title}
                                            </h2>
                                        </div>
                                        {/* Content */}
                                        <div className="">
                                            
                                            <p className='text-[13px]'>
                                                {selectedCampaignType?.info}
                                            </p>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            {/* Campaign target & Campaign equity offered */}
                            <div className="flex items-center gap-[10px]">
                                {/* Campaign target */}
                                <div className="w-full flex flex-col">
                                    <label htmlFor="" className='font-medium mb-[3px]'>
                                        Campaign Target
                                    </label>
                                    <span className='text-[12px] mb-[10px] text-zinc-600'>
                                        Set a realistic funding goal that matches your project’s needs
                                    </span>
                                    <input 
                                        type="number" 
                                        name="" 
                                        id="" 
                                        placeholder='eg. $1000'
                                        className='w-[100%] text-[13px] py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] capitalize placeholder:italic'
                                    />
                                </div>
                                {/* Campaign equity offered: display if selectedCamapignType.slug === "equity" */}
                                {selectedCampaignType && selectedCampaignType?.slug === 'equity' ? (
                                    <div className="w-full flex flex-col">
                                        <label htmlFor="" className='font-medium mb-[3px]'>
                                            Equity Offered
                                        </label>
                                        <span className='text-[12px] mb-[10px] text-zinc-600'>
                                            Specify the percentage of your project you’re willing to offer to investors.
                                        </span>
                                        <input 
                                            type="number" 
                                            name="" 
                                            id="" 
                                            placeholder='eg. 10%'
                                            className='w-[100%] text-[13px] py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] capitalize placeholder:italic'
                                        />
                                    </div>
                                ) : null}
                            </div>
                            {/* Campaign end date, Campaign tags */}
                            <div className="flex items-center gap-x-[10px]">
                                {/* Campaign end date */}
                                <div className="w-full flex flex-col">
                                    <label htmlFor="" className='font-medium mb-[3px]'>
                                        End Date
                                    </label>
                                    <span className='text-[12px] mb-[10px] text-zinc-600'>
                                        Choose a deadline that gives enough time to reach your funding goal.
                                    </span>
                                    <input 
                                        type="date" 
                                        name="" 
                                        id="" 
                                        className='w-[100%] text-[13px] py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] placeholder:italic'
                                    />
                                </div>
                                {/* Campaign tags */}
                                <div className="w-full flex flex-col">
                                    <label htmlFor="" className='font-medium mb-[3px]'>
                                        Tags
                                    </label>
                                    <span className='text-[12px] mb-[10px] text-zinc-600'>
                                        Enter 3 keywords, separated by a comma and a space, to boost your campaign's visibility.
                                    </span>
                                    <input 
                                        type="text" 
                                        name="" 
                                        id="" 
                                        placeholder='AI, innovation, tech'
                                        className='w-[100%] text-[13px] py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] capitalize placeholder:italic'
                                    />
                                </div>
                            </div>
                            {/* Contacts */}
                            <div className="flex flex-col">
                                <label htmlFor="" className='font-medium mb-[3px]'>
                                    Contacts
                                </label>
                                <span className='text-[12px] mb-[10px] text-zinc-600'>
                                    Kindly provide your organization or business contact info. Ensure the information you&apos;ve providing is up-to-date and accurate.
                                </span>
                                {/* Organization | Company contact info: Business name, email, address, and phone number */}
                                <div className="space-y-[20px]">
                                    {/* Business | Organization name, and Email */}
                                    <div className="w-full flex items-center gap-x-[10px]">
                                        <label htmlFor="" className='flex flex-col gap-y-[5px] text-[14px] font-medium w-full'>
                                            Business Name | Organization Name
                                            <input 
                                                type="text" 
                                                name="" 
                                                id="" 
                                                placeholder='eg. ease'
                                                className='w-[100%] text-[13px] font-normal py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] placeholder:italic'
                                            />
                                        </label>
                                        <label htmlFor="" className='flex flex-col gap-y-[5px] text-[14px] font-medium w-full'>
                                            Email
                                            <input 
                                                type="email" 
                                                name="" 
                                                id="" 
                                                placeholder='eg. contact@techstartup.com'
                                                className='w-[100%] text-[13px] font-normal py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] placeholder:italic'
                                            />
                                        </label>
                                    </div>
                                    {/* Address, and Phone number */}
                                    <div className="w-full flex items-center gap-x-[10px]">
                                        <label htmlFor="" className='flex flex-col gap-y-[5px] text-[14px] font-medium w-full'>
                                            Address
                                            <input 
                                                type="text" 
                                                name="" 
                                                id="" 
                                                placeholder='eg. 83 Mama beach'
                                                className='w-[100%] text-[13px] font-normal py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] placeholder:italic'
                                            />
                                        </label>
                                        <label htmlFor="" className='flex flex-col gap-y-[5px] text-[14px] font-medium w-full'>
                                            Phone
                                            <input 
                                                type="text" 
                                                name="" 
                                                id="" 
                                                placeholder='eg. +1234567890'
                                                className='w-[100%] text-[13px] font-normal py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] placeholder:italic'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right-hand side: Campaign tagline, Campaign category, Campaign creator's information(Name, email, address, and phone number) */}
                        <div className="space-y-[20px]">
                            {/* Campaign tagline */}
                            <div className="flex flex-col">
                                <label htmlFor="" className='font-medium mb-[3px]'>
                                    Campaign Tagline
                                </label>
                                <span className='text-[12px] mb-[10px] text-zinc-600'>
                                    Provide a short description that best describes your campaign to your audience.
                                </span>
                                <textarea 
                                    name="" 
                                    id=""
                                    className='w-full h-[10rem] rounded-[5px] bg-zinc-50 border-[1px] border-zinc-400 text-[14px] lg:text-[13px]'
                                ></textarea>
                            </div>
                            {/* Campaign categories */}
                            <div className="">
                                <h2 className='text-[16px] font-medium mb-[3px]'>
                                    Campaign Category :
                                </h2>
                                <span className='text-[12px] mb-[10px] text-zinc-600'>
                                    Choose a campaign category that best fits your campaign&apos;s nature
                                </span>
                                <div
                                    role='button'
                                    onClick={() => setShowCampaignCategories(!showCampaignCategories)}
                                    className="w-[100%] flex items-center justify-between cursor-pointer text-[13px] py-[7px] px-[10px] rounded-[5px] font-medium bg-zinc-50 border-[1px] border-zinc-400 mt-[15px] lg:text-[12px]"
                                >
                                    Select Campaign Categories
                                    <IoMdArrowDropdown className='text-[14px]' />
                                </div>
                                {/* Display campaign categories] */}
                                {showCampaignCategories ? (
                                    <div className="bg-zinc-50 p-[15px] rounded-[5px] border-[1px] border-zinc-400 mt-[8px] manageCampaign overflow-auto h-[50vh]">
                                        {categories?.map((category) => (
                                            <div 
                                                role='button'
                                                onClick={() => {
                                                    setSelectedCampaignCategory(category)
                                                    setShowCampaignCategories(false)
                                                }}
                                                className="border-b-[1px] py-[7px] hover:bg-zinc-100 transition ease-in-out duration-300 last:border-0"
                                                key={category?.id}
                                            >
                                                <p className='capitalize font-medium text-[15px] mb-[2px]'>
                                                    {category?.name}
                                                </p>
                                                <p className='text-[13px]'>
                                                    {category?.info2}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                                {/* Selected campaign type */}
                                {selectedCampaignCategory && selectedCampaignCategory ? (
                                    <div className="bg-zinc-50 p-4 rounded-md mt-1 border-[1px] border-zinc-700">
                                        <div className="flex items-center gap-x-[10px] border-b-[1px] border-zinc-400 pb-[5px] mb-[5px]">
                                            {/* Radio box */}
                                            <div className="min-w-[0.84rem] h-[0.8rem] border-[1.5px] border-zinc-700 rounded-full flex items-center justify-center">
                                                <div className="w-[0.47rem] h-[0.48rem] bg-zinc-700 rounded-full"></div>
                                            </div>
                                            <h2 className='text-[15px] font-medium'>
                                                {selectedCampaignCategory?.name}
                                            </h2>
                                        </div>
                                        {/* Content */}
                                        <div className="">
                                            
                                            <p className='text-[13px]'>
                                                {selectedCampaignCategory?.info2}
                                            </p>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            {/* Creator's primary contact : Fullname, Email, Address, Phone number */}
                            <div className="">
                                <h2 className='text-[16.5px] font-medium mb-[3px]'>
                                    Creator&apos;s Primary Contact
                                </h2>
                                <p className='text-[12px] mb-4 text-zinc-600'>
                                    Kindly provide your primary contact info. It is important to note that your contact info may be shared as necessary to fulfill reporting or disclosure obligations.
                                </p>
                                <div className="space-y-[20px]">
                                    {/* Contact fullname and email */}
                                    <div className="w-full flex items-center gap-x-[10px]">
                                        <label htmlFor="" className='flex flex-col gap-y-[5px] text-[14px] font-medium w-full'>
                                            Fullname
                                            <input 
                                                type="text" 
                                                name="" 
                                                id="" 
                                                placeholder='eg. michael l bangura'
                                                className='w-[100%] text-[13px] font-normal py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] capitalize placeholder:italic'
                                            />
                                        </label>
                                        <label htmlFor="" className='flex flex-col gap-y-[5px] text-[14px] font-medium w-full'>
                                            Email
                                            <input 
                                                type="email" 
                                                name="" 
                                                id="" 
                                                placeholder='eg. name@gmail.com'
                                                className='w-[100%] text-[13px] font-normal py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] placeholder:italic'
                                            />
                                        </label>
                                    </div>
                                    {/* Contact address and phone number */}
                                    <div className="w-full flex items-center gap-x-[10px]">
                                        <label htmlFor="" className='flex flex-col gap-y-[5px] text-[14px] font-medium w-full'>
                                            Address
                                            <input 
                                                type="text" 
                                                name="" 
                                                id="" 
                                                placeholder='eg. 82B mama beach'
                                                className='w-[100%] text-[13px] font-normal py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] capitalize placeholder:italic'
                                            />
                                        </label>
                                        <label htmlFor="" className='flex flex-col gap-y-[5px] text-[14px] font-medium w-full'>
                                            Phone
                                            <input 
                                                type="text" 
                                                name="" 
                                                id="" 
                                                placeholder='eg. +1234567890'
                                                className='w-[100%] text-[13px] font-normal py-[7px] px-[10px] bg-zinc-50 border-[1px] border-zinc-400 rounded-[5px] placeholder:italic'
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ManageCampaign