import { Spinner } from '@/components/spinner';
import React from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';

const VerifyAccount = () => {
    return (
        <div className="w-full">
            <div className="w-[100%] h-[80vh] flex flex-col justify-center items-center">
                <Spinner size="lg" />
                <span className="mb-4 text-[16px] text-slate-500">
                    Awaiting user confirmation.
                </span>
                <button
                    // onClick={HandleConfirmation}
                    className='bg-zinc-700 text-white text-[12px] flex items-center py-[7px] px-[15px] font-medium rounded-md'
                >
                    Confirm to log in
                    <TbArrowNarrowRight className="ml-2" />
                </button>
            </div>
        </div>
    )
}

export default VerifyAccount;