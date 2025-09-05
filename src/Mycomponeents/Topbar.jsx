import React, { useContext, useState } from "react";
import { FaPlay, FaSave } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Context } from "../context/context";
import lenguagesicon from "../lenguagesname";

const Topbar = () => {
  const {
    funczoomin,
    funczoomout,
    outputformconsole,
    Copy,
    copied,
    Copiednotificatio,
    setIssavefileopen,
      selectedLang,
      setSelectedLang
  } = useContext(Context);

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="w-[55vw] text-white border-b border-[#27272A] shadow-sm px-4">
      {/* ✅ Copy notification */}
      <div
        className={`copied-notigication left-[45%] ${
          Copiednotificatio ? "top-[2%]" : "top-[-10%]"
        } flex items-center fixed py-2 px-7 gap-2 bg-zinc-800 z-10 justify-between rounded-md transition-all duration-300`}
      >
        Copied <IoCheckmarkDoneCircle />
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

          {/* ✅ Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-md hover:bg-zinc-800 transition-all"
            >
              <img src={selectedLang.icon} alt="" className="h-4 w-4" />
              <span className="text-sm">{selectedLang.name}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {openDropdown && (
              <ul className="absolute left-0 mt-2 w-48 bg-[#09090B] border border-zinc-700 rounded-md shadow-lg max-h-52 overflow-y-auto z-20">
                {lenguagesicon.map((lang, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        setSelectedLang(lang);
                        setOpenDropdown(false);
                      }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-white hover:bg-zinc-800 transition-all"
                    >
                      <img src={lang.icon} alt="" className="h-4 w-4" />
                      {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* ---------------- Right Side ---------------- */}
        <div className="flex items-center gap-2">
          <button
            onClick={funczoomout}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            Zoom-Out <FiMinus size={14} />
          </button>

          <button
            onClick={funczoomin}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            Zoom-In <FiPlus size={14} />
          </button>

          <button
            onClick={Copy}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
            <MdContentCopy size={14} />
            {copied ? "Copied" : "Copy"}
          </button>

          <button
            onClick={() => setIssavefileopen(true)}
            className="btn btn-xs bg-zinc-900 border border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-white gap-2"
          >
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
