import React from "react";

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

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  return (
    <div className="w-full mx-auto mt-[-5vw] bg-[#0d0d0f] text-white rounded-lg shadow-lg overflow-hidden">
      {/* Cover Section */}
      <div
        className="h-48 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${user.cover})` }}
      >
        <button className="absolute top-3 right-3 bg-zinc-900/70 text-sm px-3 py-1 rounded hover:bg-zinc-800 transition">
          Edit Profile
        </button>
      </div>

      {/* Profile Info Section */}
      <div className="relative px-6 pb-6">
        {/* Avatar */}
        <div className="flex items-end gap-4 -mt-12">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-lg border-4 border-[#0d0d0f] shadow-md object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-zinc-400">{user.username}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-4">
          <p className="text-sm text-zinc-300">{user.description}</p>
          <p className="text-sm text-zinc-500 mt-1">{user.email}</p>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
