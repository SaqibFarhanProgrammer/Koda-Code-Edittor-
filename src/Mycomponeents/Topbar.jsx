import React from "react";
import { FaPlay, FaSave, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="w-[55vw] bg-zinc-800 border-b border-zinc-700 shadow-sm px-4">
      {/* --- Topbar with Dots + File Dropdown + Actions --- */}
      <div className="h-12 px-4 flex items-center justify-between">
        
        {/* Left Side: Dots + File Dropdown */}
        <div className="flex items-center gap-4">
          {/* Mac-style dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* File dropdown */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-xs bg-zinc-700 border border-zinc-600 text-zinc-200 hover:bg-zinc-600 hover:border-zinc-500 hover:text-white transition-all"
            >
              Untitled.js ▾
            </label>

            {/* Dropdown content */}
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-zinc-800 border border-zinc-700 rounded w-40 mt-1"
            >
              <li>
                <a className="flex items-center gap-2 hover:bg-zinc-700 hover:text-white transition-all rounded px-2 py-1">
                  <FaPlus /> New File
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 hover:bg-zinc-700 hover:text-white transition-all rounded px-2 py-1">
                  <FaEdit /> Rename
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 hover:bg-zinc-700 hover:text-white transition-all rounded px-2 py-1">
                  <FaTrash /> Delete
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-2">
          <button className="btn btn-xs bg-zinc-700 border border-zinc-600 text-zinc-300 hover:bg-zinc-600 hover:text-white gap-2">
            <MdContentCopy size={14} /> Copy
          </button>

          <button className="btn btn-xs bg-zinc-700 border border-zinc-600 text-zinc-300 hover:bg-zinc-600 hover:text-white gap-2">
            <FaSave size={14} /> Save
          </button>

          <button className="btn btn-xs bg-green-600 border-none text-white hover:bg-green-500 shadow-md gap-2">
            <FaPlay size={14} /> Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
