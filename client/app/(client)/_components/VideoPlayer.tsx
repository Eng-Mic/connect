import React from 'react';
import ReactPlayer from 'react-player';

interface VideoModalProps {
    videoUrl: string | null;
    isOpen: boolean;
    onClose: () => void;
}

const VideoPlayer = ({ videoUrl, isOpen, onClose }: VideoModalProps) => {
    if (!isOpen || !videoUrl) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full min-h-full flex items-center justify-center max-w-2xl">
                <button onClick={onClose} className="absolute top-2 right-2 text-white text-3xl">
                    ×
                </button>
                <ReactPlayer 
                    url={videoUrl} 
                    width="900px" height="400px" 
                    controls 
                    playing
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
