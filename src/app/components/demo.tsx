"use client";

const Demo = () => {
  return (
    <div id="demo" className="bg-black text-white relative overflow-hidden">
      <div className="px-6 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-6xl sm:text-7xl font-semibold tracking-wide leading-tight">
            Autonomy with ROI From Day 1
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-xl text-gray-50">
            Cavalla has built the most reliable, high throughput, and easy to install forklift autonomy system on the market.
          </p>
        </div>
      </div>

      {/* Full-width image at the bottom */}
      <div className="overflow-hidden rounded-3xl shadow-lg mb-8">
          <video
            className="w-full h-auto"
            src="/WarehouseDemo.mov"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
    </div>
  );
};
export default Demo;

