import React from "react";
import { FaUserCircle, FaCog, FaSignOutAlt, FaFolder, FaFileCode } from "react-icons/fa";

const SideNavigate = () => {
  return (
    <div className="w-[15vw] h-screen bg-zinc-800 text-white flex flex-col">
      {/* Top Section: Profile and Settings */}
      <div className="p-4 border-b border-zinc-700">
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-5xl text-blue-500 mb-2" />
          <span className="font-semibold text-lg">User Profile</span>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-700 transition-colors"
          >
            <FaCog className="text-xl" />
            <span>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-700 transition-colors text-red-400"
          >
            <FaSignOutAlt className="text-xl" />
            <span>Logout</span>
          </a>
        </div>
      </div>

      {/* Middle Section: Code/File Navigation */}
      <div className="p-4 flex-grow overflow-y-auto">
        <div className="flex items-center gap-3 text-zinc-400 mb-3">
          <FaFolder className="text-lg" />
          <span className="text-sm font-semibold uppercase tracking-wider">My Codes</span>
        </div>
        <div className="flex flex-col gap-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-700 text-blue-400 font-medium"
          >
            <FaFileCode className="text-lg" />
            <span>script.js</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-700 transition-colors"
          >
            <FaFileCode className="text-lg" />
            <span>main.py</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-700 transition-colors"
          >
            <FaFileCode className="text-lg" />
            <span>styles.css</span>
          </a>
        </div>
      </div>

      {/* Bottom Section: Branding */}
      <div className="p-4 border-t border-zinc-700 text-center text-zinc-500 text-xs">
        &copy; 2025 Kodo. All rights reserved.
      </div>
    </div>
  );
};

export default SideNavigate;