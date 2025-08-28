import React from "react";
import { FaUserCircle, FaCog, FaSignOutAlt, FaFolder, FaFileCode } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";

const SideNavigate = () => {
  return (
    <div className="w-[10vw] relative h-[99.5vh] bg-zinc-800 text-white flex flex-col">
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

      <div className="p-4 justify-between  overflow-y-auto gap-10 flex-col">
            <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-700 transition-colors"
          >
            <IoCodeSlashOutline className="text-xl" />
            <span>Codes</span>
          </a>
   
      </div>

      {/* Bottom Section: Branding */}
      <div className="p-4 border-t absolute bottom-0 justify-end items-end border-zinc-700 text-center text-zinc-500 text-xs">
        &copy; 2025 Kodo. All rights reserved.
      </div>
    </div>
  );
};

export default SideNavigate;