"use client"


import React, { useState } from 'react'
import Image from 'next/image'
import ConnectLogo from '/public/logo.png'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle visibility of password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className=''>
            <div className="w-[90%] mx-auto min-h-fit flex flex-col items-center justify-center sm:w-[55%] lg:w-[30%]">
                <div className="my-[2rem] flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center mb-[1rem]">
                        <Link href='/' className="">
                            <Image
                                src={ConnectLogo}
                                alt='Connect logo'
                                // width={1200} height={800}
                                // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                                loading="lazy"
                                className='w-[5rem]'
                            />
                        </Link>
                    </div>
                    <h2 className='text-[1.5rem] font-medium'>
                        Sign-In to Connect.
                    </h2>
                    <p className='text-[13.5px] text-zinc-500 text-center'>
                        Connect, collaborate, and grow—step into a world of endless possibilities!
                    </p>
                    <form action="" className='w-full my-[1.2rem] space-y-[15px]'>
                        <div className="">
                            <label htmlFor="" className='flex flex-col text-[13px] font-medium gap-y-[8px]'>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Email Address
                                </span>
                                <input
                                    type="email"
                                    placeholder='your@gmail.com'
                                    className='border-[1px] rounded-[5px] py-[6px] px-[10px] text-[12px] placeholder:text-zinc-600'
                                />
                            </label>
                        </div>
                        <div className="">
                            <label htmlFor="" className='flex flex-col text-[13px] font-medium gap-y-[8px] relative'>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Password
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='************'
                                    className='border-[1px] rounded-[5px] py-[9px] px-[10px] text-[11.8px] bg-transparent placeholder:text-zinc-600 md:py-[7px]'
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className='absolute bottom-[10px] right-[1rem] flex items-center px-2 lg:right-0'
                                >
                                    {showPassword ?
                                        <AiOutlineEye className='text-[1rem] text-zinc-600 lg:text-sm' /> :
                                        <AiOutlineEyeInvisible className='text-[1rem] text-zinc-600 lg:text-sm' />
                                    }
                                </button>
                            </label>
                            <div className="text-right">
                                <Link href='/forgetPassword' className='text-[11px] font-medium underline decoration-solid '>
                                    Forget password?
                                </Link>
                            </div>
                        </div>

                        {/* Login btn */}
                        <div className="bg-zinc-800 text-white rounded-[5px] transition ease-in-out duration-300 hover:bg-zinc-900">
                            <button className='w-[100%] py-[9px] text-[12.5px] md:py-[7px]'>
                                Login to account
                            </button>
                        </div>
                        
                        <div className="flex items-center gap-x-[10px]">
                            <div className="w-[100%] h-[1px] bg-zinc-400" />
                            <p className='text-[11px] text-zinc-500 font-medium'>
                                OR
                            </p>
                            <div className="w-[100%] h-[1px] bg-zinc-400" />
                        </div>
                        {/* Google btn */}
                        <button className='w-full flex items-center justify-center gap-x-[10px] border-[1px] rounded-[5px] py-[7px] text-[12px] font-medium text-zinc-600 transition ease-in-out duration-300 hover:bg-zinc-100'>
                            <FcGoogle className='text-[1.2rem]' />
                            Continue with Google
                        </button>
                        <div className="text-center mt-[10px]">
                            <p className='text-[12px] text-zinc-500 font-medium'>
                                Don&apos;t have an account? <Link href='/sign-up' className='text-cyan-700 text-[12.8px] underline'>sign-up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn