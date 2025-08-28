import React from "react";
import { FaPlay, FaSave } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="w-[55vw] flex flex-col border-b border-base-200 shadow-sm">
      {/* --- Editor Window Bar (Red, Yellow, Green buttons) --- */}
      <div className="bg-zinc-800 px-5 py-2 text-sm text-zinc-400 font-mono flex items-center justify-between border-b border-zinc-700">
        <span className="text-white ml-2">Code</span>
        <div className="flex gap-2 mr-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* --- File dropdown + Action Buttons --- */}
      <div className="bg-base-300 h-14 flex items-center justify-between px-6">
        {/* Left: File dropdown */}
        <div className="flex items-center gap-2">
          <div className="dropdown">
            {/* Trigger Button */}
            <label
              tabIndex={0}
              className="btn btn-sm bg-base-300 border border-base-200 text-zinc-200 hover:bg-base-200 hover:border-base-100 hover:text-white transition-all"
            >
              Untitled.js ▾
            </label>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow-lg bg-base-300 border border-base-200 rounded-md w-44 text-sm text-zinc-200"
            >
              <li>
                <a className="hover:bg-base-200 hover:text-white transition-all">
                  ➕ New File
                </a>
              </li>
              <li>
                <a className="hover:bg-base-200 hover:text-white transition-all">
                  ✏️ Rename
                </a>
              </li>
              <li>
                <a className="hover:bg-base-200 hover:text-white transition-all">
                  🗑️ Delete
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Action buttons */}
        <div className="flex items-center gap-2">
          <button className="btn btn-sm bg-base-200 border border-base-100 text-zinc-300 hover:bg-base-100 hover:text-white gap-2">
            <MdContentCopy size={16} /> Copy
          </button>

          <button className="btn btn-sm bg-base-200 border border-base-100 text-zinc-300 hover:bg-base-100 hover:text-white gap-2">
            <FaSave size={16} /> Save
          </button>

          <button className="btn btn-sm bg-green-600 border-none text-white hover:bg-green-500 shadow-md gap-2">
            <FaPlay size={16} /> Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
