import React, { Suspense } from "react";
import "./App.css";

// Lazy loaded components
const Code = React.lazy(() => import("./Mycomponeents/Code"));
const Terminal = React.lazy(() => import("./Mycomponeents/Terminal"));
const Topbar = React.lazy(() => import("./Mycomponeents/Topbar"));
const SideNavigate = React.lazy(() => import("./Mycomponeents/SideNavigate"));
const Navbar = React.lazy(() => import("./Mycomponeents/Navbar"));

const App = () => {
  return (
    <div className="flex items-center overflow-y-hidden bg-[#09090B] justify-between h-screen w-full">
      <div className="w-[10vw]">
        <Suspense fallback={<p>Loading Sidebar...</p>}>
          <SideNavigate />
        </Suspense>
      </div>

      <div className="flex justify-between flex-col w-[100vw] h-[100vh]">
        <div className="top">
          <Suspense fallback={<p>Loading Navbar...</p>}>
            <Navbar />
          </Suspense>
        </div>

        <div className="bottom flex mb-10">
          <Suspense fallback={<p>Loading Editor...</p>}>
            <Code />
          </Suspense>

          <Suspense fallback={<p>Loading Terminal...</p>}>
            <Terminal />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
