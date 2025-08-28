import React from "react";

const Terminal = () => {
  return (
    <div className="w-full   h-[92vh] flex flex-col bg-zinc-900 border-l border-zinc-700">
      {/* Terminal Header */}
      <div className="bg-zinc-800 p-2 text-sm text-zinc-400 font-mono flex items-center justify-between border-b border-zinc-700">
        <span className="text-white ml-2">Terminal</span>
        <div className="flex gap-2 mr-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="flex-grow p-4 overflow-y-auto text-zinc-300 font-mono text-sm">
        {/* Placeholder for the output */}
        <pre className="whitespace-pre-wrap">
          <span className="text-green-400">user@desktop:~$ </span>
          <span className="text-zinc-300">npm run build</span>
          <br />
          <span className="text-zinc-500">> project-name@1.0.0 build</span>
          <br />
          <span className="text-zinc-500">> react-scripts build</span>
          <br />
          <br />
          <span className="text-blue-400">✔ Successfully compiled!</span>
          <br />
          <span className="text-zinc-500">
            The project is ready to be deployed to a static hosting service.
          </span>
          <br />
          <br />
          <span className="text-green-400">user@desktop:~$ </span>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
