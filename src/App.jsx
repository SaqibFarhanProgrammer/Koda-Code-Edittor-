import React from "react";
import Codea from "./Mycomponeents/Code";
import "./App.css";
import Terminal from "./Mycomponeents/Terminal";
import Topbar from "./Mycomponeents/Topbar";
const App = () => {
  return (
    <div className="flex items-center flex-col  justify-between p-5">
      <div>
        <Topbar />
      </div>
      <div className="flex justify-between">
        <Codea />
        <Terminal />
      </div>
    </div>
  );
};

export default App;
