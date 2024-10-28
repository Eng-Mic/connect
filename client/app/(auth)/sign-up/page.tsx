"use client"


import React, { useState } from 'react'
import Image from 'next/image'
import ConnectLogo from '/public/logo.png'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useGoogleLogin } from '@react-oauth/google';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle visibility of password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log('Google login successful', tokenResponse);
            // You can now use the tokenResponse to authenticate the user in your app
        },
        onError: () => {
            console.error('Google login failed');
            // Handle login errors here
        },
        flow: 'auth-code', // Use 'auth-code' for the authorization code flow
    });
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
                        Get started with Connect.
                    </h2>
                    <p className='text-[13px] text-zinc-500 text-center'>
                        Connect, collaborate, and grow—step into a world of endless possibilities!
                    </p>
                    <form action="" className='w-full my-[1.2rem] space-y-[15px]'>
                        {/* User Full name */}
                        <div className="">
                            <label htmlFor="" className='flex flex-col text-[13px] font-medium gap-y-[8px]'>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Name
                                </span>
                                <input
                                    type="text"
                                    placeholder='John Doe'
                                    className='border-[1px] rounded-[5px] py-[6px] px-[10px] text-[12px] placeholder:text-zinc-600'
                                />
                            </label>
                        </div>
                        
                        {/* User Email */}
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
                        
                        {/* User Password */}
                        <div className="">
                            <label htmlFor="" className='flex flex-col text-[13px] font-medium gap-y-[8px] relative'>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Password
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='************'
                                    className='border-[1px] rounded-[5px] py-[6px] px-[10px] text-[12px] bg-transparent placeholder:text-zinc-600'
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className='absolute inset-y-[26px] bottom-0 right-[1rem] flex items-center px-2 lg:right-0'
                                >
                                    {showPassword ?
                                        <AiOutlineEye className='text-sm text-zinc-600' /> :
                                        <AiOutlineEyeInvisible className='text-sm text-zinc-600' />
                                    }
                                </button>
                            </label>
                        </div>
                        {/* Create an account btn */}
                        <div className="bg-zinc-800 text-white rounded-[5px] transition ease-in-out duration-300 hover:bg-zinc-900">
                            <button className='w-[100%] py-[7px] text-[12px]'>
                                Create an account
                            </button>
                        </div>

                        <div className="flex items-center gap-x-[10px]">
                            <div className="w-[100%] h-[1px] bg-zinc-400" />
                            <p className='text-[11px] text-zinc-500 font-medium'>
                                OR
                            </p>
                            <div className="w-[100%] h-[1px] bg-zinc-400" />
                        </div>
                    </form>
                    {/* Google btn */}
                    <button 
                        onClick={() => googleLogin()}
                        className='w-full flex items-center justify-center gap-x-[10px] border-[1px] rounded-[5px] py-[7px] text-[12px] font-medium text-zinc-600  transition ease-in-out duration-300 hover:bg-zinc-100'
                    >
                        <FcGoogle className='text-[1.2rem]' />
                        Continue with Google
                    </button>
                    
                    <div className="text-center mt-[10px] lg:w-[90%]">
                        <p className='text-[12px] text-zinc-500 font-medium'>
                            Already have an account? <Link href='/sign-in' className='text-cyan-700 text-[12.8px] underline'>sign-in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp