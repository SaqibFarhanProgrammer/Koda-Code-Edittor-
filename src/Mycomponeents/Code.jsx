import React from 'react';
import Topbar from './Topbar';

const Terminal = () => {
  return (
    <div className="w-[60%] h-[100%] flex flex-col bg-zinc-900 border-l border-zinc-700">
      <Topbar/>
     

      <div className="flex-grow p-4 overflow-y-auto text-zinc-300 font-mono text-sm">
      </div>
    </div>
  );
};

export default Terminal;