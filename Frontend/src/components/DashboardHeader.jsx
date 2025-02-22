import {
  AlignRight,
  CalendarDays,
  ChevronDown,
  CircleX,
  Search,
  Settings,
  SlidersHorizontal,
  Zap,
} from "lucide-react";
import React from "react";

const DashboardHeader = ({ setIsFilterPanelOpen, isFilterPanelOpen }) => {
  return (
    <div className="w-full  items-center justify-between border-b border-gray-300 md:px-6 px-2 pb-1 hidden lg:flex">
      <div className="flex items-center justify-center gap-7">
        <div className="flex items-center justify-center gap-1">
          <CalendarDays size={20} />
          <p className="text-sm font-semibold">Default View</p>
          <ChevronDown size={20} strokeWidth={3} />
        </div>
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
        >
          <SlidersHorizontal size={20} strokeWidth={1.25} />
          <p className="text-sm font-semibold">Filters</p>
        </div>
        <div className="flex items-center justify-center p-1 bg-gray-200 rounded-lg gap-1 px-2">
          <Search size={16} strokeWidth={1.25} />
          <div className="bg-white px-1 flex items-center justify-center gap-1 rounded-lg">
            <p className="text-sm font-semibold">Real Estate</p>
            <CircleX size={16} strokeWidth={1.25} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[1px ] border border-gray-200 rounded-md p-1">
          <Zap size={20} strokeWidth={1.5} />
          <p className="text-sm font-semibold">Create Workflow</p>
          <ChevronDown size={20} strokeWidth={3} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-7">
        <p className="p-1 border border-gray-300 rounded-md text-sm font-medium">
          Save as new search
        </p>
        <div className="flex items-center justify-center gap-1">
          <AlignRight strokeWidth={1.25} />
          <p className="text-sm font-semibold">Relevance</p>
          <ChevronDown size={20} strokeWidth={3} />
        </div>
        <div className="flex items-center justify-center gap-1">
          <Settings size={20} strokeWidth={1.5} />
          <p className="text-sm font-semibold">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
