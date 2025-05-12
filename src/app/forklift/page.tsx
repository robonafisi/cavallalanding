"use client";

import Image from "next/image";

// ✅ Squares (Dock, Lane, Entry, etc.)
const Item = ({
  label,
  type,
}: {
  label: string;
  type: "dock" | "lane" | "entry" | "charging" | "forklift";
}) => {
  let width = "";
  let height = "";
  let bgColor = "";

  switch (type) {
    case "dock":
      width = "w-24";
      height = "h-12";
      bgColor = "bg-blue-500";
      break;
    case "lane":
      width = "w-12";
      height = "h-36";
      bgColor = "bg-green-500";
      break;
    case "entry":
      width = "w-48";
      height = "h-12";
      bgColor = "bg-yellow-500";
      break;
    case "charging":
      width = "w-16";
      height = "h-36";
      bgColor = "bg-yellow-600";
      break;
    case "forklift":
      width = "w-24";
      height = "h-20";
      bgColor = "bg-purple-500";
      break;
  }

  return (
    <div
      className={`rounded ${width} ${height} ${bgColor} flex items-center justify-center text-white text-sm font-medium text-center px-1`}
    >
      {label}
    </div>
  );
};

// ✅ Dock Button Panel
const DockControl = ({ dock }: { dock: string }) => (
  <div className="flex flex-col items-center bg-gray-800 rounded p-3 w-36">
    <span className="text-white font-medium mb-2 text-sm">{dock}</span>
    <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded mb-2 w-full text-sm">
      Load
    </button>
    <button className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded w-full text-sm">
      Unload
    </button>
  </div>
);

// ✅ Forklift Status Panel (Right Side)
const ForkliftStatus = () => (
  <div className="flex flex-col items-center bg-gray-800 rounded p-4 w-44">
    <Image
      src="/forkliftsm.png"
      alt="Forklift"
      width={60}
      height={60}
      className="mb-2 object-contain"
    />
    <span className="text-white text-sm">
      Status: <span className="text-emerald-400">Unloading Dock 1</span>
    </span>
  </div>
);

// ✅ Support + Priority List Panel (Bottom Right)
const ControlPanel = () => (
  <div className="flex flex-col bg-gray-800 text-white p-4 rounded w-60">
    <button className="mb-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded text-sm">
      Call Support
    </button>
    <div>
      <h3 className="text-base font-semibold mb-2">Priority List</h3>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>🟢 Active Job: Unload Dock 1</li>
        <li>🟡 Staging Prep: Lane 3</li>
      </ul>
    </div>
  </div>
);

// ✅ Main Page
const Forklift = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md h-16 flex items-center justify-center border-b border-white">
        <Image
          src="/logo.png"
          alt="Cavalla Logo"
          width={52}
          height={52}
          className="h-12 w-auto object-contain"
        />
      </nav>

      {/* Layout */}
      <div className="pt-16 px-4 flex flex-col items-center gap-6 overflow-x-hidden">
        {/* Top Section */}
        <div className="flex gap-6 justify-center flex-wrap">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <Item label="Entry Door" type="entry" />
            <Item label="Charging Station" type="charging" />
          </div>

          {/* Grid Area */}
          <div className="flex flex-col gap-4 overflow-x-auto">
            <div className="flex gap-4 flex-nowrap">
              <Item label="Staging Lane 1" type="lane" />
              <Item label="Dock Door 1" type="dock" />
              <Item label="Staging Lane 2" type="lane" />
              <Item label="Dock Door 2" type="dock" />
              <Item label="Staging Lane 3" type="lane" />
              <Item label="Dock Door 3" type="dock" />
              <Item label="Staging Lane 4" type="lane" />
              <Item label="Dock Door 4" type="dock" />
            </div>

            <div className="flex gap-4 flex-nowrap">
              <Item label="Forklift Parking A" type="forklift" />
              <Item label="Forklift Parking B" type="forklift" />
              <Item label="Forklift Parking C" type="forklift" />
              <Item label="Forklift Parking D" type="forklift" />
            </div>
          </div>

          {/* Right Forklift Status */}
          <ForkliftStatus />
        </div>

        {/* Divider */}
        <div className="border-t border-white w-full my-6"></div>

        {/* Bottom Section: Dock Controls + Support */}
        <div className="w-full px-4 pb-6 flex justify-center gap-10 flex-wrap">
          <div className="flex gap-4 flex-wrap justify-center">
            <DockControl dock="Dock Door 1" />
            <DockControl dock="Dock Door 2" />
            <DockControl dock="Dock Door 3" />
            <DockControl dock="Dock Door 4" />
          </div>
          <ControlPanel />
        </div>
      </div>
    </div>
  );
};

export default Forklift;
