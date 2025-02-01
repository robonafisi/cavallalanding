// components/ValueProp.tsx

import React from 'react';
import { Video } from './video-play';
import { Button } from '@/components/ui/button'; 

const Landing = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-60px)] pt-[60px]">
      {/* Left column with text */}
      <div className="flex flex-col justify-center space-y-8 px-8 text-center lg:text-left">
        <h1 className="text-3xl md:text-6xl font-bold text-black font-playfair">
          Autonomy With ROI From Day 1
        </h1>
        <p className="text-black text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
          We bring concierge forklift autonomy that does not require CapEx investment or complicated installation. 
          You only pay hourly when you need pallets moved. Focus on your core business while we ensure reliable forklift operations in your warehouse.
        </p>
        <div>
          <a href="https://calendly.com/cavalla/meeting" target="_blank" rel="noopener noreferrer">
            <Button className="bg-teal-800 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-lg font-bold transition">
              Contact Sales
            </Button>
          </a>
        </div>
      </div>

      {/* Right column with video */}
      <div className="relative w-full h-[calc(100vh-60px)] pb-[60px]">
        <Video videoSrc="/forklift-warehouse.mp4" playbackRate={0.5} />
      </div>
    </div>
  );
};

export default Landing;
