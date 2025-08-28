import React from "react";
import { FaPlay, FaSave } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-[90vw] bg-zinc-800 h-16 flex items-center justify-between px-6 text-white border-b border-zinc-700">
      {/* Left side: Logo and file details */}
      <div className="flex items-center gap-6">
        <span className="text-xl font-bold text-blue-500">kodo</span>
        <div className="flex items-center">
          <span className="text-zinc-300 font-medium">Untitled</span>
          <span className="text-zinc-500 ml-1">.js</span>
        </div>
      </div>

      {/* Right side: Action buttons */}
      <div className="flex items-center gap-4">
        {/* Save Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors"
        >
          <FaSave />
          <span>Save</span>
        </button>

        {/* Run Button */}
        <button
          className="flex items-center gap-2 px-6 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors"
        >
          <FaPlay />
          <span>Run</span>
        </button>
      </div>
    </div>
  );
};

export default Topbar