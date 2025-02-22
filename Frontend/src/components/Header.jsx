import React from "react";
import { AlignJustify, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <div className="w-full h-16 bg-[#1d3d58] flex items-center justify-end gap-5 md:px-6 px-2">
      <AlignJustify
        strokeWidth={2.25}
        className="text-white mr-auto cursor-pointer"
        onClick={() => setIsSidebarOpen(true)}
      />
      <Link
        to="/upgrade"
        className="bg-[#Ebf212] cursor-pointer rounded-md p-1 text-sm font-semibold"
      >
        Upgrade Now
      </Link>
      <X className="text-white text-sm" />
    </div>
  );
};

export default Header;
