"use client";

import React from "react";

const VideoSection = () => {
  return (
    <section id="video" className="bg-[#000000] text-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-3xl shadow-lg mb-8">
          <video
            className="w-full h-auto"
            src="/ForkliftDemo.mov"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <p className="text-gray-50 text-xl max-w-3xl mx-auto mb-6">
          Cavalla delivers warehouse autonomy with a human in the loop. Our system blends AI-driven automation with remote oversight to ensure reliable, high-throughput operations from day one. Fast to deploy, easy to scale, and built for the realities of the warehouse floor.
        </p>
        <a
          href="https://calendly.com/cavalla/meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-300 transition"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
};

export default VideoSection;

