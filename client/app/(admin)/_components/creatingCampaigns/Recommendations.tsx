"use client";

import { templates } from '@/data'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import ManageCampaign from './ManageCampaign';

const Recommendations = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState([]);
    // Methods managing modal
    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const HandleNewCampaign = () => {
        handleCloseModal();
    }
    const HandleUpdate = () => {}
    return (
        <div className='relative'>
            <p className='text-[14px] font-medium text-zinc-600 flex items-center justify-between border-b-[1px] border-zinc-200 pb-[5px] mb-[10px]'>
                Recommended templates
                <span className='font-normal text-[12.5px]'>
                    Show all
                </span>
            </p>
            <div className="grid grid-cols-4 gap-[10px]">
                <div
                    role='button'
                    className="flex flex-col gap-[10px]"
                    onClick={handleOpenModal}
                >
                    <div className=" bg-zinc-700 text-white h-[10rem] px-[2rem] rounded-md flex items-center justify-center">
                        <Plus className='text-[1.3rem]' />
                    </div>
                    <p className='text-[12px] font-medium'>
                        New Campaign
                    </p>
                </div>
                {modalOpen ? (
                    <div className="w-full h-full fixed top-0  left-0 right-0 mx-auto bg-white p-[1rem] rounded-md shadow-sm z-30 lg:max-w-[85%] sm:p-[2rem] md:p-[3rem] lg:top-[0.5rem]">
                        <ManageCampaign
                            onClose={handleCloseModal}
                            onSubmit={formData ? HandleUpdate : HandleNewCampaign}
                            initialData={formData}
                        />
                    </div>
                ): null}
                {templates?.map((template) => (
                    <div className="flex flex-col gap-[10px]" key={template?.id}>
                        <div className="bg-zinc-100 p-[5px] h-[10rem] rounded-md flex items-center justify-center">
                            <div className="w-full h-full rounded-md">
                                <Image 
                                    src={template?.image} 
                                    alt={template?.name}
                                    className='w-full h-full object-fill object-center rounded-md'
                                /> 
                            </div>
                        </div>
                        <p
                            className='text-[13px] font-medium'
                        >
                            {template.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recommendations