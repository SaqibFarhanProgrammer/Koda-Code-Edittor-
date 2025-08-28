import React, { useState } from 'react';
import { FaPlay, FaSave, FaUserCircle, FaCaretDown, FaCog, FaSignOutAlt } from 'react-icons/fa';

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-[90vw] h-16 bg-zinc-800 text-white flex items-center justify-between px-6 border-b border-zinc-700">
      {/* Left side: Logo and file details */}
      <div className="flex items-center gap-6">
        <span className="text-xl font-bold text-blue-500">kodo</span>
        <div className="flex items-center">
          <span className="text-zinc-300 font-medium">Untitled</span>
          <span className="text-zinc-500 ml-1">.js</span>
        </div>
      </div>

      {/* Right side: Action buttons and profile dropdown */}
      <div className="flex items-center gap-4">
        {/* Action Buttons */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors">
          <FaSave />
          <span>Save</span>
        </button>

        <button className="flex items-center gap-2 px-6 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors">
          <FaPlay />
          <span>Run</span>
        </button>
        
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors"
          >
            <FaUserCircle className="text-xl" />
            <FaCaretDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-zinc-700 rounded-md shadow-lg py-1 z-10">
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-600">
                <FaUserCircle />
                Profile
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-600">
                <FaCog />
                Settings
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-600">
                <FaSignOutAlt />
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;