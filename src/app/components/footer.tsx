"use client";

import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
        {/* Left: Logo + Tagline */}
        <div>
          <Image
            src="/logo.png" // Replace with your actual logo path
            alt="Cavalla Logo"
            className="h-10 mb-4"
            width={40}
            height={40}
          />
          <p className="text-gray-400 mb-6">Autonomy with ROI from Day 1</p>
          <div className="flex gap-4 text-xl text-gray-400">
             <a href="https://x.com/CavallaHQ" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaXTwitter className="hover:text-white cursor-pointer" /></a>
            <a href="https://www.linkedin.com/company/cavallainc" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin className="hover:text-white cursor-pointer" /></a>
          </div>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-gray-400 uppercase mb-3">Product</h3>
            <ul className="space-y-2">
              <li><a href="#demo" className="hover:underline">Home</a></li>
              <li><a href="#video" className="hover:underline">Demo</a></li>
              <li><a href="#deployment" className="hover:underline">Deployment</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 uppercase mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#aboutus" className="hover:underline">About</a></li>
              <li><a href="mailto:mo@cavalla.io" className="hover:underline">Careers</a></li>
              <li><a href="mailto:mo@cavalla.io" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
