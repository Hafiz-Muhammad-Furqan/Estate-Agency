import {
  ChevronDown,
  ListFilter,
  Search,
  Settings,
  SlidersHorizontal,
} from "lucide-react";
import React from "react";

const LeadsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between w-full py-3 ">
      <div className="flex items-center justify-center w-full  gap-8">
        <div className="flex items-center gap-1">
          <SlidersHorizontal size={20} strokeWidth={1.5} />
          <p className="text-sm font-semibold">Show Filters</p>
        </div>
        <div className="flex items-center gap-1">
          <Search size={20} strokeWidth={1.5} />
          <p className="text-sm font-semibold">Search Lists</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-8 mt-3 md:mt-0">
        <div className="flex items-center gap-1">
          <ListFilter size={20} strokeWidth={1} />
          <p className="text-sm font-semibold">Last Modified</p>
          <ChevronDown size={20} strokeWidth={1} />
        </div>
        <Settings size={20} strokeWidth={1.25} />
      </div>
    </div>
  );
};

export default LeadsHeader;
