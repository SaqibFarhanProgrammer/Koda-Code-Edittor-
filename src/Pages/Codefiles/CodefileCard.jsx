import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const CodefileCard = () => {
  return (
    <div
      className="bg-[#0d0d0f] p-5 border border-zinc-800 rounded-xl  
                 shadow-md hover:shadow-lg hover:border-zinc-600 
                 transition-all duration-200 w-full h-[260px] flex flex-col"
    >
      {/* File Info */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg text-white">App.js</h3>
          <p className="text-xs text-zinc-400">Javascript File</p>
        </div>
        <div className="flex gap-3 text-zinc-400">
          <button className="hover:text-green-400 transition">
            <FaEdit />
          </button>
          <button className="hover:text-red-500 transition">
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Code Preview */}
      <div className="bg-[#151516] rounded-lg p-3 text-sm font-mono text-zinc-200 overflow-hidden flex-1">
        <pre className="whitespace-pre-wrap break-words max-h-full overflow-y-auto">
          {`import React from "react";

function App() {
  return <h1>Hello World</h1>;
}

export default App;`}
        </pre>
      </div>
    </div>
  );
};

export default CodefileCard;
