import Link from 'next/link'
import React from 'react'
import { TbArrowNarrowLeft } from 'react-icons/tb'

const ForgetPassword = () => {
    return (
        <div className='w-[100%] flex flex-col justify-center items-center'>
            <div className="w-[33%] h-[80vh] flex flex-col justify-center items-center">
                <h2 className='text-[1.4rem] font-medium'>
                    Forget Password?
                </h2>
                <span className='text-[13.5px] text-zinc-500 font-medium'>
                    No worries, we&apos;ll send you reset instructions.
                </span>
                <form action="" className='w-[100%] mt-[2rem]'>
                    <div className="w-[100%]">
                        <label htmlFor="" className='w-[100%] flex flex-col text-[13px] font-medium gap-y-[8px]'>
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Email Address
                            </span>
                            <input
                                type="email"
                                placeholder='your@gmail.com'
                                className='border-[1px] rounded-[5px] py-[6px] px-[10px] text-[12px] bg-transparent placeholder:text-zinc-600'
                            />
                        </label>
                    </div>
                    <div className="w-[100%] mt-[15px] bg-zinc-800 text-white rounded-[5px] transition ease-in-out duration-300 hover:bg-zinc-900">
                        <button className='w-[100%] py-[9px] text-[12.5px] md:py-[8px]'>
                            Reset password
                        </button>
                    </div>
                </form>
                <Link href='/sign-in' className='flex items-center text-[13px] font-medium text-zinc-600 mt-[1rem]'>
                    <TbArrowNarrowLeft className="text-[1rem] mr-1" />
                    Back to sign-in
                </Link>
            </div>
        </div>
    )
}

export default ForgetPassword