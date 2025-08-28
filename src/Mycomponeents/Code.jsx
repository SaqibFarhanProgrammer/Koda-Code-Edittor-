import React from 'react';

const Terminal = () => {
  return (
    <div className="w-[55vw] h-[87vh] flex flex-col bg-zinc-900 border-l border-zinc-700">
      {/* Terminal Header */}
      <div className="bg-zinc-800 p-2 text-sm text-zinc-400 font-mono flex items-center justify-between border-b border-zinc-700">
        <span className="text-white ml-2">Code</span>
        <div className="flex gap-2 mr-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="flex-grow p-4 overflow-y-auto text-zinc-300 font-mono text-sm">
        {/* This is the empty, scrollable area where the output will appear */}
      </div>
    </div>
  );
};

export default Terminal;