import React from "react";

const Topbar = () => {
  return (
    <div className="w-[100%] bg-blue-900 h-[6vh] flex justify-between  items-center px-3 text-white ">
      <div className="logo">kodo</div>
      <div className="nuttons">
        <div className="run">
          <button className="btn btn-soft bg-green-500">Run</button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
