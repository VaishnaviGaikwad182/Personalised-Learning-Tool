import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  // Decide dashboard link dynamically
  const dashboardLink = location.pathname.startsWith("/student")
    ? "/student/dashboard"
    : location.pathname.startsWith("/teacher")
    ? "/teacher/dashboard"
    : "/";

  return (
    <nav className="bg-blue-200 text-black flex justify-between items-center px-4 py-2 min-h-[64px]">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="College Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="font-bold text-sm sm:text-base md:text-lg leading-tight">
  Pimpri Chinchwad College of Engineering
</h1>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6 font-semibold">
        <Link
          to={dashboardLink}
          className="hover:underline"
        >
          Dashboard
        </Link>

        <div className="w-9 h-9 bg-red-500 rounded-full text-white flex items-center justify-center font-bold">
          VG
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
