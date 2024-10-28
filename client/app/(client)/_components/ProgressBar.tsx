import React from 'react'

type ProgressBarProps = {
    raised: number;
    target: number;
    color?: string;
};

const ProgressBar = ({ raised, target, color = 'bg-gradient-to-r from-[#28659a] to-[#4285bf]' }: ProgressBarProps) => {
// Calculate the percentage of money raised relative to the target
  const progress = Math.min((raised / target) * 100, 100); // Ensure progress does not exceed 100%
    return (
        <div className="w-full bg-gray-200 rounded-full h-[10px]">
            <div
                className={`${color} h-full rounded-l-full transition-all duration-300 ease-out`}
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}

export default ProgressBar