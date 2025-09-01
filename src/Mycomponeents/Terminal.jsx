import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";

const Terminal = () => {
  const [TCode, setTCode] = useState("");
  const { terminalCode } = useContext(Context);
  useEffect(() => {
    setTCode(terminalCode);
  }, []);
  

  console.log("render");
  

  return (
    <div className="w-full   h-[92vh] flex flex-col bg-zinc-900 border-l border-zinc-700">
      {/* Terminal Header */}
      <div className="bg-zinc-800 p-3.5 text-sm text-zinc-400 font-mono flex items-center justify-between border-b border-zinc-700">
        <span className="text-white ml-2">Terminal</span>
        <div className="flex gap-2 mr-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="flex-grow p-4 overflow-y-auto text-zinc-300 font-mono text-sm">
        {TCode}
        
      </div>
    </div>
  );
};

export default Terminal;
