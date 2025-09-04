import React, { Suspense, useContext } from "react";
import "./App.css";
import { Context } from "./context/context";
import Newfile from "./Mycomponeents/Newfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Codefiles from "./Pages/Codefiles/Codefiles";
import Main from "./Mycomponeents/Main";

const SideNavigate = React.lazy(() => import("./Mycomponeents/SideNavigate"));
const TopNavbar = React.lazy(() => import("./Mycomponeents/Navbar"));
const App = () => {
  const { Newfileisopen } = useContext(Context);

  return (
    <div className="flex  bg-[#09090B] h-screen w-full">
      <div className="left w-[10%] ">
        <Suspense fallback={<p>Loading Sidebar...</p>}>
          <SideNavigate />
        </Suspense>
      </div>
      <div className="right h-[90%] w-[90%] ">
        <Suspense fallback={<p>Loading Main...</p>}>
          <TopNavbar />
          <Routes>
            <Route path="/" element={((<TopNavbar />), (<Main />))} />
          </Routes>
        </Suspense>
      </div>
      {Newfileisopen && <Newfile />}
      <Suspense fallback={<p>Loading Files...</p>}>
        <Routes>
          <Route path="/codes" element={<Codefiles />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
