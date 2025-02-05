import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-amber-50 min-h-[calc(100vh-60px)] pt-[60px]">
      {/* Left column with text */}
      <div className="flex flex-col justify-center space-y-8 px-8 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          About Us
        </h1>
        <p className="text-black text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
         We live and breathe forklifts. Our team has background in industrial equipment, robot deployments, and material handling software. We started with humble begining and have been dedicated to working closely with each customer to bring them highest ROI possible.
        </p>
         <div className="py-6">
        <a href="https://calendly.com/cavalla/meeting" target="_blank" rel="noopener noreferrer">
          <Button className="bg-teal-800 hover:bg-emerald-700 text-white px-6 py-6 rounded-lg text-lg font-bold transition">
            Contact Sales
          </Button>
        </a>
      </div>
      </div>
      

      {/* Right column with image */}
      <div className="flex justify-center items-center px-8 py-3">
        <Image
          src="/images/TeamPicture1.png" 
          alt="Cavalla team working on autonomous forklifts"
          width={1000}
          height={500}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
