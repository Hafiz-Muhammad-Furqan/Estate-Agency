import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import UserDetails from "./UserDetails";
import { SlidersHorizontal } from "lucide-react";

const Dashboard = () => {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  return (
    <div className="w-full  border border-gray-300 my-4 py-2 ">
      <DashboardHeader
        setIsFilterPanelOpen={setIsFilterPanelOpen}
        isFilterPanelOpen={isFilterPanelOpen}
      />
      <div
        className="flex items-center justify-center gap-2 lg:hidden cursor-pointer"
        onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
      >
        <SlidersHorizontal size={20} strokeWidth={1.25} />
        <p>Filters</p>
      </div>
      <UserDetails
        isFilterPanelOpen={isFilterPanelOpen}
        setIsFilterPanelOpen={setIsFilterPanelOpen}
      />
    </div>
  );
};

export default Dashboard;
