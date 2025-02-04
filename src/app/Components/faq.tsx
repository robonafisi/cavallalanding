'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; 

const faqData = [
  {
    question: "Do you have a pilot program?",
    answer: "Yes. We usually start with a pilot program where you can test our solution for 2 weeks. In those 2-4 weeks we set goals for the throughput and reliability of our system. After the pilot program we ask our customers to sign a longer term contract."
  },
  {
    question: "What states and areas are you live in?",
    answer: "We are currently focused on California. We expect to expand into 3 other states by the end of this year. We are open to priotitizing new states depending on the customer interest. Get in touch if you think your warehouse can benefit from our solution."
  },
  {
    question: "What kind of warehouses can benefit from Cavalla?",
    answer: "Right now we are working with warehouses with 10 or more forklifts or 100K SQFT and above. We have seen that these warehouses can get the most out of our system."
  },
  {
    question: "What is your installation process like?",
    answer: "Our installation process is designed to be flexible and seamless. We can integrate with your existing forklifts, equipping them with our autonomous technology to minimize disruptions and costs. Alternatively, we offer a forklift swap, providing new autonomous forklifts tailored to your warehouse needs. Durnig the installation process we will have a team of remote operators that will be monitoring the system. We will be able to remotely fix any issues that arise and fit right into your existing workflows."
  },
  {
    question: "Is Cavalla safe to use in our warehouse?",
    answer: "The short answer is yes. The long answer is that we have multiple layers of safety systems. Each layer has a great chance of preventing an accident. All together they make it almost impossible to have an accident. We are insured by top robotics insurer and pride ourselves in not having a single accident so far in our journey."
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className='py-10'>
      <h1 className="text-4xl font-bold text-black text-center font-playfair">Frequently Asked Questions</h1>
      </div>
      <div className="w-4/5 max-w-4xl flex flex-col gap-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-5 cursor-pointer w-full">
            <div className="flex justify-between items-center" onClick={() => toggleAnswer(index)}>
              <h3 className="text-xl font-semibold text-black font-playfair">{item.question}</h3>
              <span className="text-2xl font-bold">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="pt-3 text-lg text-gray-600">
                <p className='font-sourcesans'>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="py-6">
        <a href="https://calendly.com/cavalla/meeting" target="_blank" rel="noopener noreferrer">
          <Button className="bg-teal-800 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-lg font-bold transition">
            Contact Sales
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Faq;

