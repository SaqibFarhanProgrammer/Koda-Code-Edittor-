import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";

const Profile = () => {
  const user = {
    name: "Shahzaib",
    username: "@shahzaib-the-animator",
    description: "Full-Stack Developer | React & Node.js Enthusiast",
    email: "shahzaib@example.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    cover:
      "https://i.pinimg.com/736x/7b/51/55/7b5155f9cbe20b84f0f4236cce3d78b4.jpg",
  };

  return (
    <div className="w-full h-[100%]  flex flex-col justify-center items-center mx-auto  text-white rounded-lg  overflow-hidden">
      {/* Cover Section */}
      <div
        className="h-56 w-full bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url(${user.cover})` }}
      ></div>

      {/* Profile Info Section */}
      <div className="relative px-6 pb-6 ju flex flex-col justify-center items-center">
        {/* Avatar */}
        <div className="flex flex-col  items-center gap-4 mb-5 mt-[-2vw]">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-lg border-4 border-[#0d0d0f] shadow-md object-cover"
          />
          <div>
            <h2 className="text-2xl text-center font-bold">{user.name}</h2>
            <p className="text-zinc-400 text-center">{user.username}</p>
          </div>
        </div>

        {/* Bio */}
        <div className=" text-center">
          <p className="text-sm text-zinc-300">{user.description}</p>
          <p className="text-sm text-zinc-500 mt-1">{user.email}</p>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <button
            href="#"
            className="flex bg-[#291D21] items-center gap-2 px-4 py-2 text-red-300 hover:text-[#e4767b] "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
