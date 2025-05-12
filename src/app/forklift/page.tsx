"use client";

import Image from "next/image";

const Item = ({
  label,
  type,
}: {
  label: string;
  type: "dock" | "lane" | "entry" | "charging" | "forklift";
}) => {
  const base = "relative rounded group cursor-pointer transition-all duration-300";
  let style = "";

  switch (type) {
    case "dock":
      style = "w-24 h-12 bg-gray-600 hover:bg-blue-500";
      break;
    case "lane":
      style = "w-12 h-48 bg-gray-700 hover:bg-green-500";
      break;
    case "entry":
      style = "w-48 h-16 bg-gray-700 hover:bg-yellow-500";
      break;
    case "charging":
      style = "w-16 h-48 bg-gray-700 hover:bg-yellow-500";
      break;
    case "forklift":
      style = "w-24 h-24 bg-gray-500 hover:bg-purple-500";
      break;
  }

  return (
    <div className={`${base} ${style}`}>
      <span className="absolute inset-0 flex items-center justify-center text-white text-sm text-center px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </div>
  );
};

const DockControl = ({ dock }: { dock: string }) => (
  <div className="flex flex-col items-center bg-gray-800 rounded p-4 w-40">
    <span className="text-white font-medium mb-2">{dock}</span>
    <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded mb-2 w-full">
      Load
    </button>
    <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-1 rounded w-full">
      Unload
    </button>
  </div>
);

const ForkliftStatus = () => (
  <div className="flex flex-col items-center bg-gray-800 rounded p-4 w-48">
    <Image
      src="/forkliftsm.png"
      alt="Forklift"
      width={80}
      height={80}
      className="mb-2 object-contain"
    />
    <span className="text-white text-sm">
      Status: <span className="text-emerald-400">Unloading Dock 1</span>
    </span>
  </div>
);

const ControlPanel = () => (
  <div className="flex flex-col bg-gray-800 text-white p-6 rounded w-64">
    <button className="mb-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded">
      Call Support
    </button>
    <div>
      <h3 className="text-lg font-semibold mb-2">Priority List</h3>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>🟢 Active Job: Dock Door 1</li>
        <li>🟡 Staging Prep: Lane 3</li>
      </ul>
    </div>
  </div>
);

const Forklift = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md h-20 flex items-center justify-center border-b border-white">
        <Image
          src="/logo.png"
          alt="Cavalla Logo"
          width={64}
          height={64}
          className="h-16 w-auto object-contain"
        />
      </nav>

      {/* Layout */}
      <div className="pt-24 px-6 flex justify-center gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <Item label="Entry Door" type="entry" />
          <Item label="Charging Station" type="charging" />
        </div>

        {/* Main Area */}
        <div className="flex flex-col gap-6">
          {/* Top row: Docks and Staging */}
          <div className="flex gap-6">
            <Item label="Staging Lane 1" type="lane" />
            <Item label="Dock Door 1" type="dock" />
            <Item label="Staging Lane 2" type="lane" />
            <Item label="Dock Door 2" type="dock" />
            <Item label="Staging Lane 3" type="lane" />
            <Item label="Dock Door 3" type="dock" />
            <Item label="Staging Lane 4" type="lane" />
            <Item label="Dock Door 4" type="dock" />
          </div>

          {/* Forklift Parking Row */}
          <div className="flex gap-6">
            <Item label="Forklift Parking A" type="forklift" />
            <Item label="Forklift Parking B" type="forklift" />
            <Item label="Forklift Parking C" type="forklift" />
            <Item label="Forklift Parking D" type="forklift" />
          </div>
        </div>

        {/* Right Sidebar: Forklift Status */}
        <ForkliftStatus />
      </div>

      {/* Divider */}
      <div className="border-t border-white my-12 w-full"></div>

      {/* Bottom Control Section */}
      <div className="px-6 pb-12 flex justify-center gap-12">
        {/* Dock Controls */}
        <div className="flex gap-6">
          <DockControl dock="Dock Door 1" />
          <DockControl dock="Dock Door 2" />
          <DockControl dock="Dock Door 3" />
          <DockControl dock="Dock Door 4" />
        </div>

        {/* Right Panel */}
        <ControlPanel />
      </div>
    </div>
  );
};

export default Forklift;
