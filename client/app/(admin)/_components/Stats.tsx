import React from 'react'
import { BsGraphUpArrow } from 'react-icons/bs'

interface Campaign {
    id: number;
    campaignName: string;
    category: string;
    raised: number;
    // Add other fields as necessary
}

interface Category {
    id: number;
    name: string;
    slug: string;
    // Add other fields as necessary
}

interface StatsProps {
    campaigns: Campaign[];
    categories: Category[];
    activeTabCategory: string;
}

const Stats = ({ campaigns, categories, activeTabCategory }: StatsProps) => {
    // Calculate total money raised per category
    const categoryTotals = categories.map(category => {
        const totalRaised = campaigns
            .filter(campaign => campaign.category.toLowerCase().split(' ').join('-') === category.slug)
            .reduce((sum, campaign) => sum + campaign.raised, 0);
        return { ...category, totalRaised };
    });

    // Sort categories by totalRaised in descending order and assign ranks
    let rank = 1;
    const rankedCategories = [...categoryTotals]
        .sort((a, b) => b.totalRaised - a.totalRaised)
        .map((category, index, array) => {
            if (index > 0 && category.totalRaised < array[index - 1].totalRaised) {
                rank = index + 1;
            }
            return { ...category, rank };
        });

    // Find the active category based on activeTabCategory
    const activeCategoryData = rankedCategories.find(category => category.slug === activeTabCategory);

    // If activeTabCategory is "all", sum up all campaigns and amounts
    if (activeTabCategory === "all") {
        const totalCampaigns = campaigns.length;
        const totalRaised = campaigns.reduce((sum, campaign) => sum + campaign.raised, 0);
        
        return (
            <div className="">
                <h2 className='text-[1.4rem] font-semibold mb-[1rem]'>
                    All Campaigns
                </h2>
                <div className="flex items-center gap-x-[10px]">
                    <div className="w-[13rem] border-[1px] border-zinc-200 p-[8px] rounded-md md:p-[1rem]">
                        <div className="h-[3.5rem]">
                            <p className='text-[10px] font-medium uppercase mb-[10px] text-zinc-400'>
                                Total Campaigns
                            </p>
                            <h2 className='text-[1.4rem] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                                {totalCampaigns}
                            </h2>
                        </div>
                    </div>
                    <div className="w-[13rem] border-[1px] border-zinc-200 p-[8px] rounded-md md:p-[1rem]">
                        <div className="h-[3.5rem]">
                            <p className='text-[10px] font-medium uppercase mb-[10px] text-zinc-400'>
                                Total Raised
                            </p>
                            <h2 className='text-[1.4rem] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                                ${totalRaised.toLocaleString()}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="">
            <h2 className='text-[1.4rem] font-semibold mb-[1rem]'>
                {activeCategoryData?.name || "Category Not Found"}
            </h2>
            <div className="flex items-center gap-x-[10px]">
                <div className="w-[13rem] border-[1px] border-zinc-200 p-[8px] rounded-md md:p-[1rem]">
                    <div className="h-[3.5rem]">
                        <p className='text-[10px] font-medium uppercase mb-[10px] text-zinc-400'>
                            Total Campaigns
                        </p>
                        <h2 className='text-[1.4rem] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                            {campaigns.filter(campaign => campaign.category === activeTabCategory).length}
                        </h2>
                    </div>
                    <p className='text-[10px] font-medium text-zinc-400 mt-[3px] flex items-center gap-2'>
                        <span className='text-green-500 font-semibold text-[9px] flex items-center gap-1 md:text-[11px]'>
                            <BsGraphUpArrow className='text-green-500 font-bold' />
                            9.0%
                        </span>
                        up from last week
                    </p>
                </div>
                <div className="w-[13rem] border-[1px] border-zinc-200 p-[8px] rounded-md md:p-[1rem]">
                    <div className="h-[3.5rem]">
                        <p className='text-[10px] font-medium uppercase mb-[10px] text-zinc-400'>
                            Total Raised
                        </p>
                        <h2 className='text-[1.4rem] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                            ${activeCategoryData?.totalRaised.toLocaleString() || 0}
                        </h2>
                    </div>
                    <p className='text-[10px] font-medium text-zinc-400 mt-[3px] flex items-center gap-2'>
                        <span className='text-green-500 font-semibold text-[9px] flex items-center gap-1 md:text-[11px]'>
                            <BsGraphUpArrow className='text-green-500 font-bold' />
                            9.0%
                        </span>
                        up from last week
                    </p>
                </div>
                <div className="w-[13rem] border-[1px] border-zinc-200 p-[8px] rounded-md md:p-[1rem]">
                    <div className="h-[3.5rem]">
                        <p className='text-[10px] font-medium uppercase mb-[10px] text-zinc-400'>
                            Rank
                        </p>
                        <h2 className='text-[1.4rem] font-semibold leading-3 flex items-center gap-2 py-1 md:py-0'>
                            {activeCategoryData?.rank}
                        </h2>
                    </div>
                    <p className='text-[10px] font-medium text-zinc-400 mt-[3px] flex items-center gap-2'>
                        <span className='text-green-500 font-semibold text-[9px] flex items-center gap-1 md:text-[11px]'>
                            <BsGraphUpArrow className='text-green-500 font-bold' />
                            9.0%
                        </span>
                        up from last week
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Stats;
