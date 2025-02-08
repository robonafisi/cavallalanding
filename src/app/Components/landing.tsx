import React from 'react';
import { Video } from './video-play';
import { Button } from '@/components/ui/button'; 

const Landing = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen pt-[60px]">
      {/* Left column with text */}
      <div className="flex flex-col justify-center space-y-6 px-4 md:px-8 text-center md:text-left w-full md:w-1/2">
      <div className='py-3'>
        <div className='py-3'>
        <h1 className="text-7xl md:text-7xl font-bold text-black md:py-5 sm:py-3 leading-[1.3]">
           Autonomy With ROI From Day 1
        </h1>

        </div>
        <p className="text-black text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
          We bring hands-on forklift autonomy that does not require CapEx investment or complicated installation. 
          You only pay hourly when you need pallets moved. Focus on your core business while we ensure reliable forklift operations in your warehouse.
        </p>
        </div>
        <div className="flex justify-center md:justify-start py-3">
          <a href="https://calendly.com/cavalla/meeting" target="_blank" rel="noopener noreferrer">
            <Button className="bg-teal-800 hover:bg-emerald-700 text-white px-6 py-6 rounded-lg text-lg font-bold transition">
              Contact Sales
            </Button>
          </a>
        </div>
      </div>

      {/* Right column with video */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <Video videoSrc="/forklift-warehouse.mp4" playbackRate={0.5} />
      </div>
    </div>
  );
};

export default Landing;