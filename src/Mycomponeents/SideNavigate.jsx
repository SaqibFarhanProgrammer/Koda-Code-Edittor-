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
import { GoPlus } from "react-icons/go";
import SidebarProfie from "./SidebarProfie";

const SideNavigate = () => {
  const { setNewfileisopen } = useContext(Context);

  return (
    <div className="w-[10vw] fixed border-r-1 border-[#1e1e20] mb-1  h-[99.5vh] bg-[#09090B] text-white flex flex-col">
      <SidebarProfie />
      <div className="p-3 justify-between  overflow-y-auto gap-10 flex-col">
        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-700 transition-colors"
        >
          <IoCodeSlashOutline className="text-[1vw] " />
          <p>Profile</p>
        </a>
        <div
          onClick={() => setNewfileisopen(true)}
          href="#"
          className="flex items-center gap-3 p-3 rounded-md hover:bg-zinc-700 transition-colors"
        >
          <GoPlus className="text-[1vw]" />
          <p>New File</p>
        </div>
      </div>

      {/* Bottom Section: Branding */}
      <div className="p-4 border-t w-full absolute bottom-0 justify-end items-end border-[#27272A] text-center text-zinc-500 text-xs">
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
