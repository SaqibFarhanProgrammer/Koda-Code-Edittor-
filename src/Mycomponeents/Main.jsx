import React, { Suspense } from "react";
import Topbar from "./Topbar";
const Code = React.lazy(() => import("../Mycomponeents/Code"));
const Terminal = React.lazy(() => import("../Mycomponeents/Terminal"));
const Main = () => {
  return (
    <div className="flex w-[90%]  h-[100%] overflow-y-hidden ">
      <Suspense fallback={<p>Loading Code Editor...</p>}>
        <Code />
        <Terminal />
      </Suspense>
    </div>
  );
};

export default Main;
