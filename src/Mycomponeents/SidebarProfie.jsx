import React from "react";
import profile from "../assets/images/images (7).jpg";
const SidebarProfie = () => {
  return (
    <div className="p-4 border-b border-[#27272A]">
      <div className="flex  flex-col justify-between items-center cursor-pointer">
        <div className="profile-cion  h-[10vh] w-[6vw] flex items-center justify-center rounded-full ">
          <img
            src={profile}
            className="  h-[100%] w-[100%] object-cover mix-blend-screen rounded-full "
          />
        </div>
        <span className="font-semibold  text-lg">User Profile</span>
      </div>
    </div>
  );
};

export default SidebarProfie;
