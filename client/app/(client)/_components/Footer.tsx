import Image from 'next/image'
import ConnectLogo from '/public/logo.png'
import Link from 'next/link'
import { BsFacebook, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaLinkedin, FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6"


const Footer = () => {
    return (
        <div className="w-full mt-[1rem]">
            <div className="bg-slate-100 rounded-[5px] p-[2.5rem] grid grid-cols-2 gap-[1rem]">
                <div className="w-full">
                    <Link href='/' className="flex flex-col gap-[5px]">
                        <Image
                            src={ConnectLogo}
                            alt='Connect logo'
                            // width={1200} height={800}
                            // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                            loading="lazy"
                            className='w-[5rem]'
                        />
                        <p className="font-medium">
                            Fostering Collaboration & Synergy.
                        </p>
                    </Link>
                    <p className="w-[23rem] text-[14px] mt-[10px]">
                        Building a community with the right tools, resources, and networks needed to turn bold ideas and initiatives into impactful realities.
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 gap-y-[2rem] gap-x-[7rem] sm:grid-cols-2">
                    {/* Company */}
                    <div className="categories w-full ">
                        <h2 className="head text-[13px] font-medium mb-1.5 sm:text-[15px]">
                            Company
                        </h2>
                        <div className="content-link">
                            {/* {[""]} */}
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Campaigns
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Our Agenda
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Connect Programs
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Contact
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Partner with us
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Careers
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Privacy Policy
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Terms of use
                            </p>
                        </div>
                    </div>
                    {/* Resources */}
                    <div className="w-full resources">
                        <h2 className="head text-[13px] font-medium mb-1.5 sm:text-[15px]">
                            Resources
                        </h2>
                        <div className="content-link">
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                New & Insights
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Events & Workshops
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Startup Directory
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Startup | Entrepreneurship Library
                            </p>
                            <p className='text-[11px] flex items-center gap-1 mb-1 sm:text-[13px]'>
                                How
                                <span className='logo'>Connect</span>
                                works
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Success Stories
                            </p>
                            <p className='text-[11px] mb-1 sm:text-[13px]'>
                                Investors | Backers | Donors
                            </p>
                            
                            <p className='text-[11px] mb-1 sm:text-[12.5px]'>
                                Careers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-zinc-100 flex flex-col justify-center items-center gap-[1rem] mt-[10px] py-[15px] px-[2.5rem] rounded-[5px] md:flex-row md:justify-between'>
                <div className="socials flex items-center gap-3 text-zinc-700">
                    <a target="_blank" rel="noreferrer" href='https://chat.whatsapp.com/LUhDROrOz8LFi5QM1V8GjU'>
                        <FaWhatsapp className='text-[1rem] hover:text-zinc-800' />
                    </a>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/company/theconnect-space/'>
                        <FaLinkedin className='text-[1rem] hover:text-zinc-800' />
                    </a>
                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/theconnect_community/'>
                        <AiFillInstagram className='text-[1rem] hover:text-zinc-800' />
                    </a>
                    {/* <AiFillYoutube className='text-[1rem] hover:text-zinc-800' /> */}
                    <a target="_blank" rel="noreferrer" href='https://x.com/TheConnect_X'>
                        <FaSquareXTwitter className='text-[1rem] hover:text-zinc-800'  />
                    </a>
                    <a target="_blank" rel="noreferrer" href='https://www.youtube.com/@Connect_Community'>
                        <BsYoutube className='text-[1.1rem] hover:text-zinc-800'  />
                    </a>
                    {/* <BsFacebook className='text-[1rem] hover:text-zinc-800' /> */}
                </div>

                <p className='text-[12.5px] font-medium text-zinc-500'>
                    &copy;{new Date().getFullYear()} Connect. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer