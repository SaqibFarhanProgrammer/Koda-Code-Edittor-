import React, { useContext, useState } from "react";
import { FaPlay, FaSave, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Context } from "../context/context";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Topbar = () => {
  const {
    funczoomin,
    funczoomout,
    outputformconsole,
    Copy,
    copied,
    Copiednotificatio,
  } = useContext(Context);

  return (
    <div className="w-[55vw]  text-white border-b border-[#27272A] shadow-sm px-4">
      <div
        className={`copied-notigication  left-[45%] ${
          Copiednotificatio ? "top-[2%]" : "top-[-10%]"
        } flex items-center fixed py-2 px-7 gap-2 bg-zinc-800 z-10 justify-between`}
      >
        Copied
        <IoCheckmarkDoneCircle />
      </div>
      <div className="h-12 px-4 flex items-center justify-between">
        {/* ---------------- Left Side ---------------- */}
        <div className="flex items-center gap-4">
          {/* Mac-style dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* File Dropdown */}

          {/* ✅ Custom Dropdown with Scroll */}
        </div>

        {/* ---------------- Right Side ---------------- */}
        <div className="flex items-center gap-2">
          <button
            onClick={funczoomout}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            Zoom-Out
            <FiMinus size={14} />
          </button>

          <button
            onClick={funczoomin}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            Zoom-In
            <FiPlus size={14} />
          </button>

          <button
            onClick={Copy}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            <MdContentCopy size={14} />
            {copied ? "Copied" : "Copy"}
          </button>

          <button className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2">
            <FaSave size={14} /> Save
          </button>

          <button
            onClick={outputformconsole}
            className="btn btn-xs bg-green-600 border-none text-white hover:bg-green-500 shadow-md gap-2"
          >
            <FaPlay size={14} /> Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
