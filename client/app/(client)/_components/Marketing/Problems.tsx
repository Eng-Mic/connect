import React from 'react'
import { PiDotFill } from 'react-icons/pi'

const Problems = () => {
    return (
        <div className="my-[5rem]">
            <section className="">
                <p className='text-[12px] font-[500]'>
                    Problems
                </p>
                <h2 className='text-[1.3rem] font-[500] max-w-[25rem]'>
                    What we will be solving as a community.
                </h2>
            </section>
            <section className="mt-[2rem]">
                <div className="flex justify-between gap-[1.5rem]">
                {/* Limited access */}
                    <div className="w-[100%]">
                        {/* Heading */}
                        <div className="flex items-center gap-x-[10px] mb-[10px] border-b-[1px] border-zinc-300 pb-[10px]">
                            <p className="text-[1.2rem] font-semibold">01.</p>
                            <p className="text-[1.1rem] font-semibold">
                                Limited Access to Funding
                            </p>
                        </div>
                        {/* Points */}
                        <div className="text-[15px] font-medium pl-[10px] space-y-[10px]">
                            {/* Point */}
                            <div className="flex items-justify gap-x-[5px]">
                                <div className="min-h-fit">
                                    <PiDotFill className="text-[1.2rem] mt-[3px]" />
                                </div>
                                <p className="">
                                    More than 94% of entrepreneurs and startups in Sierra Leone struggle to secure funding.
                                </p>
                            </div>
                            {/* Point */}
                            <div className="flex items-start gap-x-[5px]">
                                <div className="min-h-fit">
                                    <PiDotFill className="text-[1.2rem] mt-[3px]" />
                                </div>
                                <p>
                                    This is largely due to a disconnect among key players within the entrepreneurial ecosystem (startups, investors, founders, entrepreneurs, mentors, and etc.)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="hidden w-[1px] min-h-fit bg-zinc-300 md:flex" />
                    {/* High failure rate */}
                    <div className="w-[100%]">
                        {/* Heading */}
                        <div className="flex items-center gap-x-[10px] mb-[10px] border-b-[1px] border-zinc-300 pb-[10px]">
                            <p className="text-[1.2rem] font-semibold">02.</p>
                            <p className="text-[1.1rem] font-semibold">
                                High Failure Rates
                            </p>
                        </div>
                        {/* Point */}
                        <div className="text-[15px] font-medium pl-[10px] space-y-[10px]">
                            {/* Point */}
                            <div className="flex items-start">
                                <div className="min-h-fit">
                                    <PiDotFill className="text-[1.2rem] mt-[3px]" />
                                </div>
                                <p>
                                    90% of startups, social initiatives, and entrepreneurial ventures close due to various factors such as:
                                </p>
                            </div>
                            {/* Point */}
                            <div className="pl-[1rem] space-y-[5px]">
                                {/* Point */}
                                <div className="flex items-start">
                                    <div className="min-h-fit">
                                        <PiDotFill className="text-[1.2rem] mt-[3px]" />
                                    </div>
                                    <p>
                                        <span className="font-semibold">Dishonesty</span> in relationships with partners, supporters, and investors.
                                    </p>
                                </div>
                                {/* Point */}
                                <div className="flex items-start">
                                    <div className="min-h-fit">
                                        <PiDotFill className="text-[1.2rem] mt-[3px]" />
                                    </div>
                                    <p>
                                        <span className="font-semibold">Inconsistent funding</span>, making it hard to maintain momentum.
                                    </p>
                                </div>
                                {/* Point */}
                                <div className="flex items-start">
                                    <div className="min-h-fit">
                                        <PiDotFill className="text-[1.2rem] mt-[3px]" />
                                    </div>
                                    <p>
                                        <span className="font-semibold">Insufficient training</span> in critical areas like business, entrepreneurship, and digital skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Problems