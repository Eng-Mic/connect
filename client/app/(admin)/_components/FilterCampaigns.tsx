import { cn } from '@/lib/utils';
import React from 'react'
import { BiSolidEditAlt } from 'react-icons/bi';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { TbBucketOff } from 'react-icons/tb';

interface Campaign {
    id: number;
    campaignName: string;
    category: string;
    targetAmount: number;
    raisedAmount: number;
    totalBackers: number;
    creatorName: string;
}

interface FilterCampaignsProps {
    campaigns: Campaign[];
    activeTabCategory: string;
}

const FilterCampaigns = ({ campaigns, activeTabCategory }: FilterCampaignsProps) => {
    // Filter campaigns based on activeTabCategory
    const filteredCampaigns = activeTabCategory === 'all'
        ? campaigns
        : campaigns.filter(campaign => 
            campaign.category.toLowerCase().replace(/\s+/g, '-') === activeTabCategory
        );
    return (
        <div>
            {filteredCampaigns.length > 0 ? (
                <>
                    <div className={cn("uppercase font-bold grid gap-x-[1.5rem]", activeTabCategory === "all" ? "grid-cols-7" : "grid-cols-6")}>
                        {['name', 'target', 'raised', '# of backers', 'creator', 'end date', 'category'].map((head, index) => (
                            <div key={index} className={cn("border-b-[2px] pb-[10px] mb-[10px] px-[5px] border-zinc-800", activeTabCategory !== "all" ? "last:hidden" : "last:block" )}>
                                <h2 className='text-[14px] tracking-tighter'>
                                    {head}
                                </h2>
                            </div>
                        ))}
                    </div>
                    
                    {filteredCampaigns?.map((campaign) => (
                        <div className={cn("group/campaign grid gap-x-[1.5rem] border-b-[1px] border-zinc-400 font-medium text-[14px] py-[15px] px-[5px] cursor-pointer hover:bg-zinc-100 transition-all ease-in-out duration-300 last:border-0 relative", activeTabCategory === 'all' ? "grid-cols-7" : "grid-cols-6")} key={campaign?.id}>
                            <div className="line-clamp-1">
                                {campaign?.campaignName}
                            </div>
                            <div className="line-clamp-1">
                                {campaign?.targetAmount}
                            </div>
                            <div className="line-clamp-1">
                                {campaign?.raisedAmount}
                            </div>
                            <div className="">
                                {campaign?.totalBackers}
                            </div>
                            <div className="line-clamp-1">
                                {campaign?.creatorName}
                            </div>
                            <div className="">
                                {campaign?.endDate}
                            </div>
                            {activeTabCategory === "all" && (
                                <div className="pr-[5px] line-clamp-1">
                                    {campaign?.category}
                                </div>
                            )}
                            <div className="flex items-center gap-x-[10px] px-[15px] text-[1rem] h-full absolute top-0 right-0 bg-gradient-to-r from-zinc-100 to-zinc-300 opacity-0 group-hover/campaign:opacity-100 transition">
                                <BiSolidEditAlt />
                                <BsFillTrash3Fill />
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div className="h-[50vh] flex justify-center items-center">
                    <p className='text-[14px] font-medium flex flex-col justify-center items-center'>
                        <TbBucketOff className='text-[3rem] mb-4'/>
                        No campaign
                    </p>
                </div>
            )}
        </div>
    )
}

export default FilterCampaigns