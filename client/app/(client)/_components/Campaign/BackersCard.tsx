"use client"


import { countries, payMethods, predefinedAmount } from '@/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { GiPayMoney } from 'react-icons/gi';

const BackersCard = () => {
    const [selectedAmount, setSelectedAmount] = useState(predefinedAmount[0].amount)
    const [paymentType, setPaymentType] = useState(payMethods[0].type)
    const [openSelect, setOpenSelect] = useState(false); 
    const [selectedOption, setSelectedOption] = useState(countries[0].text);  // country
    return (
        <div className="">
            <div className="w-full border-b-[1px] pb-[10px] mb-[5px]">
                <h2 className='w-[45%] mx-auto text-center text-[1.1rem] font-medium '>
                    Putting the power of change in your hands.
                </h2>
            </div>

            <div className='h-[65vh] overflow-y-scroll overflow-x-hidden scroll-smooth'>
                <form action="" className='mt-[1rem]'>
                    <label htmlFor="" className='flex flex-col gap-[7px] font-medium text-[15px]'>
                        Donation amount
                        <div className="flex items-center gap-[10px] mt-[2px]">
                            {predefinedAmount?.map((amount) => (
                                <button className={cn('border-[1px] border-zinc-300 py-[10px] px-[15px] font-bold rounded-[5px] text-zinc-700 text-[14px]', selectedAmount === amount?.amount && "border-2 border-sky-500")} key={amount?.id}>
                                    ${amount?.amount}
                                </button>
                            ))}
                        </div>
                        <div className="">
                            <div className="border-[1px] border-zinc-300 rounded-[5px] flex items-center px-[10px] py-[5px]">
                                <p className='font-medium'>
                                    $
                                </p>
                                <input type="number" placeholder='Enter your donation amount' className='w-full outline-none px-[10px] text-[13.5px] font-normal' />
                            </div>
                            <p className='text-[10px] font-medium mt-[2px]'>
                                Your donation must be at least $20.00
                            </p>
                        </div>
                        
                    </label>
                    <p className='flex items-center gap-[5px] text-[14px] mt-[1.5rem]'>
                        <span className='font-medium text-[15px]'>
                            Connect.
                        </span>
                        services tip (5% of your donation) :
                        <span className='font-medium text-[15px]'>$0.00</span>
                    </p>
                    {/* Backer Name and Email */}
                    <div className="flex items-center gap-[1rem] mt-[1rem]">
                        <input type="text" placeholder='Enter fullname please' className='w-full border-[1px] border-zinc-300 rounded-[5px] flex items-center px-[10px] py-[5px] font-normal text-[13.5px]' />

                        <input type="email" placeholder='Enter email please' className='w-full border-[1px] border-zinc-300 rounded-[5px] flex items-center px-[10px] py-[5px] font-normal text-[13.5px]' />
                    </div>

                    {/* Payment method */}
                    <div className="form-group payment method my-[1.5rem]">
                        <label htmlFor="" className='text-[11px] font-medium md:text-[15px]'>
                            Payment Method
                        </label>
                        <div className="methods w-[100%] mt-[10px]">
                            {payMethods?.map((method) => {
                                const { id, type, cards } = method;
                                return (
                                    <div
                                        onClick={() => setPaymentType(type)}
                                        key={id} className={cn("method w-[100%] flex gap-4 items-center justify-between bg-zinc-50 py-[5px] px-2 border-[1px] rounded-md mb-2 cursor-pointer md:px-6 ", paymentType === type && 'border-2 border-sky-500')}>
                                        <div className="left flex items-center mr-5">
                                            <div className="w-[13px] h-[12.5px] rounded-full border border-slate-500 flex justify-center items-center">
                                                <div className={cn("w-[7px] h-[7px] scale-0 bg-sky-700 rounded-full", paymentType === type && 'scale-100')}></div>
                                            </div>
                                            <h2 className='text-[11px] font-normal ml-2 md:text-[13px]'>
                                                {type}
                                            </h2>
                                        </div>
                                        {/* Method */}
                                        <div className="payment_method flex gap-2 items-center justify-center md:gap-4">
                                            {cards?.map((card, i) => (
                                                <div key={i} className="mastercard w-[1.4rem] h-[1.4rem] relative">
                                                    <Image 
                                                        fill
                                                        src={card} 
                                                        alt={card} 
                                                        loading="lazy"
                                                        className='w-[100%] h-[100%] object-contain' 
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {paymentType === payMethods[2].type && (
                        <div className="card-info">
                            {/* Card */}
                            <div className="card mt-4">
                                {/* Card name & Card number */}
                                <div className="flex items-center flex-col gap-y-3 mt-4 sm:flex-row md:gap-x-2">
                                    <input
                                        type="text"
                                        name='cardName'
                                        id='cardName'
                                        // required={isSelected === payMethods[2].type}
                                        placeholder='Name on the card please'
                                        className='w-full border-[1px] border-zinc-300 rounded-[5px] flex items-center px-[10px] py-[5px] font-normal text-[13.5px] outline-0'
                                        // value={details?.cardName}
                                        // onChange={handleChange}
                                    />
                                    <input
                                        type="number"
                                        name='cardNumber'
                                        id='cardNumber'
                                        // required={isSelected === payMethods[2].type}
                                        placeholder='Card number'
                                        className='w-full border-[1px] border-zinc-300 rounded-[5px] flex items-center px-[10px] py-[5px] font-normal text-[13.5px] outline-0'
                                        // value={details?.cardNumber}
                                        // onChange={handleChange}
                                    />
                                </div>
                                {/* Card date, Card cvv code and country */}
                                <div className="flex items-center flex-col gap-x-2 gap-y-3 mt-4 sm:flex-row">
                                    {/* Date on the card */}
                                    <input
                                        type="date"
                                        name='cardDate'
                                        id='cardDate'
                                        // required={isSelected === payMethods[2].type}
                                        placeholder='MM | YY'
                                        className='w-fit border-[1px] border-zinc-300 rounded-[5px] flex items-center px-[10px] py-[5px] font-normal text-[13.5px] outline-0'
                                        // value={details?.cardDate}
                                        // onChange={handleChange}
                                    />
                                        
                                    {/* CVV code */}
                                    <input
                                        type="number"
                                        name='cvvCode'
                                        id='cvvCode'
                                        // required={isSelected === payMethods[2].type}
                                        placeholder='CVV code please'
                                        className='w-full border-[1px] border-zinc-300 rounded-[5px] flex items-center px-[10px] py-[5px] font-normal text-[13.5px] outline-0'
                                        // value={details?.cvvCode}
                                        // onChange={handleChange}
                                    />
                                        
                                    {/* Country */}
                                    <div className="country w-[100%] relative">
                                        <div className="output">
                                            {countries?.map((country) => (
                                                selectedOption === country.text && (
                                                    <button
                                                        type='button'
                                                        key={country.text}
                                                        onClick={() => setOpenSelect(!openSelect)}
                                                        className='w-[100%] flex items-center justify-between cursor-pointer border-[1px] border-zinc-300 rounded-[5px] px-[10px] py-[3px] outline-0'
                                                    >
                                                        <p className="output flex flex-col text-[9px] font-medium items-start">
                                                            <span className='text-[6.5px] text-zinc-400'>
                                                                Country
                                                            </span>
                                                            {country?.text}
                                                        </p>
                                                        <BiChevronDown className='text-[1rem]' />
                                                    </button>
                                                )
                                            ))}
                                            
                                        </div>
                                        {/* Options */}
                                        {openSelect && (
                                            <div className="priorities w-[100%] absolute left-0 top-[2.6rem] bg-white py-2 px-3 rounded-md shadow-sm border-[1px] border-slate-100">
                                                {countries?.map((country) => (
                                                    <p
                                                        typeof='button'
                                                        onClick={() => [setSelectedOption(country?.text), setOpenSelect(false)]}
                                                        key={country.id} className="cursor-pointer text-[12px] my-1"
                                                    >
                                                        {country?.text}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Don't show name */}
                    <div className="form-group mt-[1.5rem]">
                        <label htmlFor="public" className='text-[11px] font-medium flex items-center gap-x-1 md:text-[13px]'>
                            <input
                                type="checkbox"
                                name='public'
                                id='public'
                                className='outline-0'
                                // checked={isPublic}
                                // onChange={(e) => setIsPublic(e.target.checked)}
                            />
                            Don't display my name publicly on the donors list please!
                        </label>
                    </div>

                    {/* Donation run-down */}
                    <div className="your-donation border-y-[1px] py-2 mt-[1.5rem]">
                        <h2 className='text-[12px] font-medium mb-4 md:text-[15px]'>
                            Your Donation
                        </h2>
                        <div className="your-donation-run-down">
                            <p className='flex items-center justify-between text-[11px] my-2 sm:text-[14px]'>
                                Amount donated :
                                <span className='font-medium'>
                                    {/* {currency === 'USD' ? '$' : 'LE'}{donation} */}$0.00
                                </span>
                            </p>
                            <div className='flex items-center justify-between text-[11px] my-2 sm:text-[14px]'>
                                <div className="flex items-center gap-x-1">
                                    <span className='name'>Connect. </span>
                                    <p>service tip (5%) :</p>
                                </div>
                                <span className='font-medium'>
                                    {/* {currency === 'USD' ? '$' : 'LE'}{tip} */}$0.00
                                </span>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='w-[100%] bg-gradient-to-r from-[#28659a] to-[#4285bf] text-white mt-5 flex items-center justify-center gap-x-2 text-[11px] py-[6px] rounded-md md:text-[13px] hover:bg-cyan-700'
                            >
                            <GiPayMoney />
                            Donate Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BackersCard