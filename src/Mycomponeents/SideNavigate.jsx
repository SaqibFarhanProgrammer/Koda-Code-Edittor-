import React, { useContext } from "react";
import {
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaFolder,
  FaFileCode,
} from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import Newfile from "./Newfile";
import { Context } from "../context/context";

const SideNavigate = () => {
  const { setNewfileisopen } = useContext(Context);

  return (
    <div className="w-[10vw] mb-1 relative h-[99.5vh] bg-[#09090B] text-white flex flex-col">
      <div className="p-4 border-b border-[#27272A]">
        <div className="flex flex-col items-center cursor-pointer">
          <IoPersonCircleOutline className="text-5xl  mb-2" />
          <span className="font-semibold text-lg">User Profile</span>
        </div>
      </div>

      <div className="p-4 justify-between  overflow-y-auto gap-10 flex-col">
        <div
        onClick={()=>setNewfileisopen(true)}
          href="#"
          className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-700 transition-colors"
        >
          <IoCodeSlashOutline className="text-xl" />
          <button >New File</button>
        </div>
        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-700 transition-colors"
        >
          <IoCodeSlashOutline className="text-xl" />
          <span>Codes</span>
        </a>
      </div>

      {/* Bottom Section: Branding */}
      <div className="p-4 border-t absolute bottom-0 justify-end items-end border-[#27272A] text-center text-zinc-500 text-xs">
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
        </div>{" "}
      </div>
    </div>
  );
};

export default SideNavigate;
