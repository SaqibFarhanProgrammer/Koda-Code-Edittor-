import React from "react";
import CodefileCard from "./CodefileCard";

const Codefiles = () => {
  return (
    <div className="p-1 h-screen w-[100%]  ">
      <div className=" codes mx-auto  items-start justify-start w-[88vw] h-[100vh]  shrink-0 flex gap-4 p-4  flex-wrap overflow-y-scroll">
        <CodefileCard />
        <CodefileCard />
        <CodefileCard />
        <CodefileCard />
        <CodefileCard />
      </div>
    </div>
  );
};

export default Codefiles;
