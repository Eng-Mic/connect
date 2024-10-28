import React from 'react'
import Recommendations from './Recommendations'
import Tutorials from './Tutorials'
import Insights from './Insights'

interface CreatingCampaignProps {
    onClose: () => void;
}

const CreatingCampaign = ({ onClose }: CreatingCampaignProps) => {
    return (
        <div className="relative">
            <h2 className='text-[1.6rem] mb-[1rem]'>
                Create a campaign
            </h2>
            <button
                type='button'
                onClick={onClose}
                className="absolute top-[-2rem] right-[-1rem] text-[13px] font-medium py-[5px] px-[10px] rounded-[5px] hover:bg-zinc-200"
            >
                Close
            </button>
            <div className="creatingCampaign space-y-[20px] overflow-auto h-[80vh]">
                {/* Recommendations */}
                <div className="bg-white border-[1px] border-zinc-200 p-[15px] rounded-[5px]">
                    <Recommendations />
                </div>
                {/* Tutorials */}
                <div className="bg-white border-[1px] border-zinc-200 p-[15px] rounded-[5px]">
                    <Tutorials />
                </div>
                {/* Insights */}
                <div className="bg-white border-[1px] border-zinc-200 p-[15px] rounded-[5px]">
                    <Insights />
                </div>
            </div>
        </div>
    )
}

export default CreatingCampaign