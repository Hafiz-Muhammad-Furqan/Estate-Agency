// import React, { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import { Outlet } from "react-router-dom";

// const MainLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   return (
//     <>
//       <Sidebar
//         isSidebarOpen={isSidebarOpen}
//         setIsSidebarOpen={setIsSidebarOpen}
//       />
//       <Header setIsSidebarOpen={setIsSidebarOpen} />
//       <Outlet />
//     </>
//   );
// };

// export default MainLayout;

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="relative flex transition-all duration-500 ease-in-out">
      {/* Sidebar */}
      <Sidebar
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />

      {/* Content Wrapper */}
      <div
        className={`flex-1 transition-all duration-500 ease-in-out ${
          isSidebarExpanded ? "ml-80" : "ml-20"
        }`}
      >
        <Header setIsSidebarOpen={setIsSidebarExpanded} />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
