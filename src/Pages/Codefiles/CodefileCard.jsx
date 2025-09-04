import React from "react";
import { FaFileCode, FaTrash, FaEdit } from "react-icons/fa";

const CodefileCard = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-md p-4 w-full max-w-md text-white hover:border-zinc-500 transition">
      {/* File Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <FaFileCode className="text-blue-400" size={20} />
          <div>
            <h3 className="font-semibold text-lg">App.js</h3>
            <p className="text-xs text-zinc-400">JS File</p>
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
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-sm font-mono text-zinc-200 overflow-hidden">
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
