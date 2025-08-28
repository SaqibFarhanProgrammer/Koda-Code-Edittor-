import React from "react";
import Codea from "./Mycomponeents/Code";
import "./App.css";
import Terminal from "./Mycomponeents/Terminal";
import Topbar from "./Mycomponeents/Topbar";
import SideNavigate from "./Mycomponeents/SideNavigate";
import Navbar from "./Mycomponeents/Navbar";
const App = () => {
  return (
    <div className="flex items-center   justify-between h-screen w-full ">
      <div className="w-[10vw]">
        <SideNavigate />
      </div>
      <div className="flex  justify-between flex-col bg-amber-700  w-[100vw] h-[100vh]  ">
        <div className="top">
          <Navbar />
        </div>
        <div className="bottom flex  mb-10  ">
          <Codea />
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default App;
