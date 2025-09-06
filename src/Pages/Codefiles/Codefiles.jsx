import React from "react";
import CodefileCard from "./CodefileCard";
import TopNavbar from "../../Mycomponeents/Navbar";
import SearchBar from "./Search";

const Codefiles = () => {
  return (
    <div className="p-6 h-screen w-[90%]">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-[10%] w-[90%] z-20 bg-[#09090B] border-b border-zinc-800">
        <TopNavbar />
      </div>

      {/* Search */}
      <SearchBar />

      <div
        className="codes mx-auto w-[88vw] px-4 pb-6
                   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                   gap-6 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 150px)" }}
      >
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <CodefileCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default Codefiles;
