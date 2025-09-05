import React from "react";
import CodefileCard from "./CodefileCard";
import SearchBar from "../profile/Search";
import Profile from "../profile/Profile";

const Mainprofile = () => {
  return (
    <div className="p-1 h-[130vh] w-[100%]   flex flex-col pt-16 justify-start  items-start">
      <div className="profile  w-[100%] h-[50vh] ">
        <Profile />
      </div>
      <div className="files">

      <div className="search">
        <SearchBar />
      </div>

      <div
        className="codes mx-auto   w-[88vw] px-4 pb-6 
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
    </div>
  );
};

export default Mainprofile;
