"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    title: "Site Assessment",
    image: "/warehouse1.png",
    description:
      "We evaluate your warehouse layout, workflows, and safety protocols to ensure a smooth deployment. Our team identifies the best locations for forklift operation and remote oversight — no infrastructure changes required.",
  },
  {
    title: "Pilot Deployment Within Hours",
    image: "/warehouse2.png",
    description:
      "We deliver and activate our autonomous forklifts in just a few hours. No complex integration, no disruptions. You'll see pallets moving autonomously on Day 1.",
  },
  {
    title: "Go Live & Support",
    image: "/warehouse3.png",
    description:
      "Once the system is live, our remote operations team monitors and supports every forklift in real-time. We ensure 24/7 uptime, resolve edge cases instantly, and help you scale confidently.",
  },
];

const DeploymentProcess = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="deployment" className="bg-black py-20 px-4 text-center text-white">
      <h2 className="text-4xl font-semibold mb-12">Deployment Process</h2>
      <div className="flex max-w-7xl mx-auto gap-4 transition-all duration-500">
        {steps.map((step, index) => {
          const isHovered = hovered === index;
          const isOtherHovered = hovered !== null && hovered !== index;

          return (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-3xl shadow-lg cursor-pointer h-[450px] transition-all duration-500 ${
                isHovered
                  ? "flex-[1.4]"
                  : isOtherHovered
                  ? "flex-[0.9]"
                  : "flex-1"
              }`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={step.image}
                alt={step.title}
                layout="fill"
                objectFit="cover"
                className={`transition duration-500 ${
                  isHovered ? "opacity-30 scale-105" : "opacity-100"
                }`}
              />
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-white transition duration-500 p-6 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-md max-w-xs">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DeploymentProcess;
