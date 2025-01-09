import React from 'react';

const ModulePop = ({ onClose, isVisible, videoUrl }) => {
  // If the modal is not visible, return null to not render anything
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center ">
      <div className="relative  rounded-md shadow-lg   w-[70vw] bg-black">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-5 text-white hover:text-gray-800"
        >
          ✕
        </button>
        
        {/* Video Section */}
        <div className="mb-5  w-full bg-black">
          {/* Check if a video URL is provided */}
          {videoUrl ? (
            <div className="video-container w-full h-full mt-10">
              {/* You can embed a video using an iframe (for YouTube or Vimeo), or use the video tag for local videos */}
         <iframe
            width="100%"
            height="500"
          src={videoUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
  ></iframe>
            </div>
          ) : (
            <p>No video available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModulePop;
