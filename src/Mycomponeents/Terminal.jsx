import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";

const Terminal = () => {
  const { output } = useContext(Context);
  

  return (
    <div className="w-full   h-[92vh] flex flex-col border-l border-[#27272A]">
      {/* Terminal Header */}
      <div className=" p-3.5 text-sm text-zinc-400 font-mono flex items-center justify-between border-b border-[#27272A]">
        <span className="text-white ml-2">Output</span>
        <div className="flex gap-2 mr-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="flex-grow p-4 text-2xl overflow-y-auto text-zinc-300 font-mono ">
        {output}
      </div>
    </div>
  );
};

export default Terminal;
