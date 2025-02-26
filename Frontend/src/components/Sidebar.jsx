import { House, Search, Triangle, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full md:w-80 bg-[#1d3d58] z-30 p-5 transition-transform duration-300 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="flex items-center justify-between w-full text-white">
          <Triangle size={30} />
          <X
            className="text-lg font-semibold text-white cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            className="w-60 bg-white rounded-md py-1 outline-none px-2 border border-gray-300"
            placeholder="Quick Search"
          />
          <button className="border border-gray-300 p-1 rounded-lg">
            <Search size={20} strokeWidth={1.25} className="text-white" />
          </button>
        </div>
      </div>
      <div className="flex items-start justify-center flex-col pt-4 gap-4">
        <Link
          onClick={() => setIsSidebarOpen(false)}
          to="/leads"
          className="flex items-center justify-center gap-2"
        >
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">Leads</p>
        </Link>
        <p className="text-md font-semibold text-gray-300">
          Prospect and enrich
        </p>
        <Link
          onClick={() => setIsSidebarOpen(false)}
          to="/today-leads"
          className="flex items-center justify-center gap-2"
        >
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">Today Leads</p>
        </Link>
        <Link
          onClick={() => setIsSidebarOpen(false)}
          to="/delayed-leads"
          className="flex items-center justify-center gap-2"
        >
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">Delayed Leads</p>
        </Link>
        <Link
          onClick={() => setIsSidebarOpen(false)}
          to="/list"
          className="flex items-center justify-center gap-2"
        >
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">List</p>
        </Link>
        <Link
          onClick={() => setIsSidebarOpen(false)}
          to="/upgrade"
          className="flex items-center justify-center gap-2"
        >
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">Upgrade Plan</p>
        </Link>
        <p className="text-md font-semibold text-gray-300">Engage</p>
        <div className="flex items-center justify-center gap-2">
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">Calls History</p>
        </div>
        <p className="text-md font-semibold text-gray-300">
          Tools and automation
        </p>
        <div className="flex items-center justify-center gap-2">
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">Tasks</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">Workflows</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">Analytics</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">Settings</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <House className="text-gray-300" strokeWidth={2.25} />
          <p className="text-md font-semibold text-white">Username</p>
        </div>
        <button className="bg-[#EBF212] p-2 w-full rounded-lg text-black text-lg font-semibold">
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
