import React from "react";
import { FaFileCode, FaTrash, FaEdit } from "react-icons/fa";

const CodefileCard = () => {
  return (
    <div className=" bg-[#09090B] p-4 white shrink-0 border border-zinc-700 rounded-[5px] shadow-md  w-[20vw] h-[36vh] text-white hover:border-zinc-500 transition">
      {/* File Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div>
            <h3 className="font-semibold text-lg">App.js</h3>
            <div className="extention">
              <p className="text-xs text-zinc-400">Javascript File</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 text-zinc-400">
          <button className="hover:text-green-400">
            <FaEdit />
          </button>
          <button className="hover:text-red-500">
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Code Preview */}
      <div className=" bg-[#151516] borderrounded-lg p-3 text-sm font-mono text-zinc-200 overflow-hidden">
        <pre className="whitespace-pre-wrap break-words max-h-40 overflow-y-auto">
          {`import React from "react";

function App() {
  return <h1>Hello World</h1>;
}a

export default App;`}
        </pre>
      </div>
    </div>
  );
};

export default CodefileCard;
