import { tutorials } from '@/data'
import Image from 'next/image'
import React from 'react'

const Tutorials = () => {
    return (
        <div>
            <p className='text-[14px] font-medium text-zinc-600 flex items-center justify-between border-b-[1px] border-zinc-200 pb-[5px] mb-[10px]'>
                Tutorials
                <span className='font-normal text-[12.5px]'>
                    Show all
                </span>
            </p>
            <div className="grid grid-cols-3 gap-[10px]">
                {tutorials?.map((tutorial) => (
                    <div className="flex flex-col gap-[10px]" key={tutorial?.id}>
                        <div className="bg-zinc-100 p-[5px] h-[12rem] rounded-md flex items-center justify-center">
                            <div className="w-full h-full rounded-md">
                                <Image
                                    src={tutorial?.thumbnail} 
                                    alt={tutorial?.title}
                                    className='w-full h-full object-cover rounded-md'
                                /> 
                            </div>
                        </div>
                        <p
                            className='text-[13px] font-medium'
                        >
                            {tutorial?.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tutorials