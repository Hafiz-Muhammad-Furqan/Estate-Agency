import { House, Search, Triangle, X } from "lucide-react";
import React from "react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full md:w-72 bg-gray-100 z-30 p-3 transition-transform duration-300 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="flex items-center justify-between w-full">
          <Triangle size={20} />
          <X
            className="text-lg font-semibold text-black cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            className="w-52 bg-white rounded-md py-1 outline-none px-2 border border-gray-300"
            placeholder="Quick Search"
          />
          <button className="border border-gray-300 p-1 rounded-lg">
            <Search size={20} strokeWidth={1.25} />
          </button>
        </div>
      </div>
      <div className="flex items-start justify-center flex-col pt-4 gap-4">
        <div className="flex items-center justify-center gap-1">
          <House color="#67666b" strokeWidth={2.25} />
          <p className="text-md font-semibold">Home</p>
        </div>
        <p className="text-md font-semibold text-gray-400">
          Prospect and enrich
        </p>
        <div className="flex items-center justify-center gap-1">
          <House color="#67666b" strokeWidth={2.25} />
          <p className="text-md font-semibold">Leads</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <House color="#67666b" strokeWidth={2.25} />
          <p className="text-md font-semibold">Lists</p>
        </div>
        <p className="text-md font-semibold text-gray-400">Engage</p>
        <div className="flex items-center justify-center gap-1">
          <House color="#67666b" strokeWidth={2.25} />
          <p className="text-md font-semibold">Calls History</p>
        </div>
        <p className="text-md font-semibold text-gray-400">
          Tools and automation
        </p>
        <div className="flex items-center justify-center gap-1">
          <House color="#67666b" strokeWidth={2.25} />
          <p className="text-md font-semibold">Tasks</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <House color="#67666b" strokeWidth={2.25} />
          <p className="text-md font-semibold">Workflows</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <House color="#67666b" strokeWidth={2.25} />
          <p className="text-md font-semibold">Analytics</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <House color="#67666b" strokeWidth={2.25} />
          <p className="text-md font-semibold">Settings</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <House color="#67666b" strokeWidth={2.25} />
          <p className="text-md font-semibold">Username</p>
        </div>
        <button className="bg-[#EBF212] p-2 w-full rounded-lg text-black text-lg font-semibold">
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
