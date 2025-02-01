import React from 'react';
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-16 flex flex-col justify-center">
      {/* Benefits Section */}
      <div className="container mx-auto px-8 text-center">
        {/* <h2 className="text-4xl font-semibold font-playfair text-black mb-12">
          Built For Reliability
        </h2> */}
        <div className="flex flex-col md:flex-row justify-center gap-9">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div>
              <div className="bg-[#D2B48C] p-6 rounded-lg shadow-lg w-full text-center relative z-10">
              <h3 className="text-2xl font-semibold text-black mb-4 font-playfair">Setup Within Hours</h3>
              <p className="text-black text-xl font-sourcesans">
                Our remote supervisors ensure a seamless setup within hours. They will work closely with your team to smoothly integrate the autonomy system, ensuring it adapts to your warehouse environment with zero downtime. You&apos;ll be up and running quickly, with everything optimized for maximum efficiency from the start.
              </p>
            </div>
              <div className="flex justify-center items-center mb-6">
                <Image 
                  src="/images/pallet.svg" 
                  alt="Benefit 1" 
                  width={1000} 
                  height={100} 
                />
              </div>
            </div>
          </div>

          
          {/* Column 2 */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div>
              <div className="bg-[#D2B48C] p-6 rounded-lg shadow-lg w-full text-center relative z-10">
              <h3 className="text-2xl font-semibold text-black font-playfair mb-4">Immediate ROI</h3>
              <p className="text-black text-xl font-sourcesans">
                Cavalla&apos;s hourly model means you get instant ROI—no upfront costs, just forklifts that start delivering value from the first hour. Plus, with industry-leading throughput, you get performance without sacrificing speed. We keep up with your operations so that you can serve your customers with little headache.
              </p>
            </div>
              <div className="flex justify-center items-center mb-6">
                <Image 
                  src="/images/pallet.svg" 
                  alt="Benefit 1" 
                  width={1000} 
                  height={100} 
                />
              </div>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div>
              <div className="bg-[#D2B48C] p-6 rounded-lg shadow-lg w-full text-center relative z-10">
              <h3 className="text-2xl font-semibold text-black font-playfair mb-4">Reliability and Full Service</h3>
              <p className="text-black text-xl font-sourcesans">
                Cavalla operates on your schedule—any shift, any time. Our remote supervisors quickly resolve issues like blockages, while routine maintenance keeps everything running smoothly. You get reliable performance without worrying about servicing or downtime—just set your hours, and we&apos;ll take care of the rest.
              </p>
            </div>
              <div className="flex justify-center items-center mb-6">
                <Image 
                  src="/images/pallet.svg" 
                  alt="Benefit 1" 
                  width={1000} 
                  height={100} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* As Seen In Section */}
      <div className="py-8 mt-16">
        <div className="container mx-auto px-8 text-center">
          <h3 className="text-5xl font-semibold text-black font-playfair mb-10">
            As Seen In
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Example logos with links */}
            <a href="https://www.automatedwarehouseonline.com/cavalla-offers-cavalier-on-site-retrofitting-kit-to-add-autonomy-to-forklifts/" target="_blank" rel="noopener noreferrer" className="relative w-48 h-24">
              <Image 
                src="/images/TheRobotReport.png" 
                alt="The Robot Report" 
                layout="fill"
                objectFit="contain"
              />
            </a>
            <a href="https://whserobotics.com/news/the-missing-piece-of-automation-puzzle/" target="_blank" rel="noopener noreferrer" className="relative w-48 h-24">
              <Image 
                src="/images/WHSERobotics.png" 
                alt="Warehouse Robotics" 
                layout="fill"
                objectFit="contain"
              />
            </a>
            <a href="https://whserobotics.com/news/the-missing-piece-of-automation-puzzle/" target="_blank" rel="noopener noreferrer" className="relative w-48 h-24">
              <Image 
                src="/images/TheFoundersJourney.png" 
                alt="Founders Journey" 
                layout="fill"
                objectFit="contain"
              />
            </a>
            <a href="https://www.youtube.com/watch?v=vzQt19wcVkU&t=602s" target="_blank" rel="noopener noreferrer" className="relative w-48 h-24">
              <Image 
                src="/images/RobotixWithSina.png" 
                alt="RobotixWithSina" 
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
