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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Content Wrapper */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-80" : "ml-0"
        }`}
      >
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
