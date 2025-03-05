// import {
//   ALargeSmall,
//   AlignJustify,
//   ChartColumnIcon,
//   FolderCheck,
//   House,
//   Phone,
//   Search,
//   Settings,
//   Triangle,
//   Users,
//   X,
// } from "lucide-react";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getAuth, signOut } from "firebase/auth";

// const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
//   const auth = getAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       localStorage.removeItem("token");
//       navigate("/signin");
//     } catch (error) {
//       console.error("Logout Error:", error.message);
//     }
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 h-full  w-80 bg-white z-30 p-6 transition-transform duration-300 transform ${
//         true ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       <div className="flex flex-col items-center justify-center w-full gap-4">
//         <div className="flex items-center justify-between w-full text-black">
//           <Triangle size={30} className="text-gray-500" />
//           <X
//             className="text-lg font-semibold text-gray-500 cursor-pointer"
//             // onClick={() => setIsSidebarOpen(false)}
//           />
//         </div>
//         <div className="flex pl-3 items-center justify-center gap-2">
//           <input
//             type="text"
//             className="w-60  rounded-md py-1 outline-none px-2 border border-gray-300"
//             placeholder="Quick Search"
//           />
//           <button className="border border-gray-300 p-1 rounded-lg">
//             <Search size={20} strokeWidth={1.25} className="text-black" />
//           </button>
//         </div>
//       </div>
//       <div className="flex items-start justify-center flex-col pt-4 gap-4">
//         <Link
//           onClick={() => setIsSidebarOpen(false)}
//           to="/leads"
//           className="pl-3 flex items-center justify-center gap-2"
//         >
//           <Users className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">Leads</p>
//         </Link>
//         <p className="text-md font-semibold text-gray-700">
//           Prospect and enrich
//         </p>
//         <Link
//           onClick={() => setIsSidebarOpen(false)}
//           to="/today-leads"
//           className="pl-3 flex items-center justify-center gap-2"
//         >
//           <House className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">Today Leads</p>
//         </Link>
//         <Link
//           onClick={() => setIsSidebarOpen(false)}
//           to="/delayed-leads"
//           className="pl-3 flex items-center justify-center gap-2"
//         >
//           <House className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">Delayed Leads</p>
//         </Link>
//         <Link
//           onClick={() => setIsSidebarOpen(false)}
//           to="/list"
//           className="pl-3 flex items-center justify-center gap-2"
//         >
//           <AlignJustify className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">List</p>
//         </Link>
//         <Link
//           onClick={() => setIsSidebarOpen(false)}
//           to="/upgrade"
//           className="pl-3 flex items-center justify-center gap-2"
//         >
//           <House className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">Upgrade Plan</p>
//         </Link>
//         <p className="text-md font-semibold text-gray-700">Engage</p>
//         <div className="flex pl-3 items-center justify-center gap-2">
//           <Phone className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">Calls History</p>
//         </div>
//         <p className="text-md font-semibold text-gray-700">
//           Tools and automation
//         </p>
//         <div className="flex pl-3 items-center justify-center gap-2">
//           <FolderCheck className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">Tasks</p>
//         </div>
//         <div className="flex pl-3 items-center justify-center gap-2">
//           <House className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">Workflows</p>
//         </div>
//         <div className="flex pl-3 items-center justify-center gap-2">
//           <ChartColumnIcon className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">Analytics</p>
//         </div>
//         <div className="flex  items-center justify-center gap-2">
//           <Settings className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">Settings</p>
//         </div>
//         <div className="flex items-center justify-center gap-2">
//           <ALargeSmall className="text-gray-700" strokeWidth={2.25} />
//           <p className="text-md font-semibold text-black">Username</p>
//         </div>
//         <button className="bg-[#EBF212] p-2 w-full rounded-lg text-black text-lg font-semibold">
//           Upgrade
//         </button>
//         <button
//           onClick={handleLogout}
//           className="bg-[#EBF212] p-2 w-full rounded-lg text-black text-lg font-semibold"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import {
  ALargeSmall,
  AlignJustify,
  ChartColumnIcon,
  FolderCheck,
  House,
  Phone,
  Search,
  Settings,
  Triangle,
  Users,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white z-30 p-6 transition-all flex items-start justify-center flex-col duration-500 ease-in-out  ${
        isExpanded ? "w-80" : "w-20"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Top Section */}
      <div className="flex flex-col items-start justify-center w-full gap-4">
        <Triangle size={30} className="text-gray-500 absolute top-4" />

        {isExpanded && (
          <div className="flex pl-3 items-center justify-center gap-2">
            <input
              type="text"
              className="w-60 rounded-md py-1 outline-none px-2 border border-gray-300"
              placeholder="Quick Search"
            />
            <button className="border border-gray-300 p-1 rounded-lg">
              <Search size={20} strokeWidth={1.25} className="text-black" />
            </button>
          </div>
        )}
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col pt-4 gap-4">
        <SidebarItem
          to="#"
          icon={<ALargeSmall />}
          label="Username"
          isExpanded={isExpanded}
        />
        <SidebarItem
          to="/leads"
          icon={<Users />}
          label="Leads"
          isExpanded={isExpanded}
        />
        <SidebarItem
          to="/today-leads"
          icon={<House />}
          label="Today Leads"
          isExpanded={isExpanded}
        />
        <SidebarItem
          to="/delayed-leads"
          icon={<House />}
          label="Delayed Leads"
          isExpanded={isExpanded}
        />
        <SidebarItem
          to="/list"
          icon={<AlignJustify />}
          label="List"
          isExpanded={isExpanded}
        />
        <SidebarItem
          to="/upgrade"
          icon={<House />}
          label="Upgrade Plan"
          isExpanded={isExpanded}
        />
        <SidebarItem
          to="#"
          icon={<Phone />}
          label="Calls History"
          isExpanded={isExpanded}
        />

        <SidebarItem
          to="#"
          icon={<ChartColumnIcon />}
          label="Analytics"
          isExpanded={isExpanded}
        />
        <SidebarItem
          to="#"
          icon={<Settings />}
          label="Settings"
          isExpanded={isExpanded}
        />

        {isExpanded && (
          <>
            <button className="bg-[#EBF212] p-2 w-full rounded-lg text-black text-lg font-semibold">
              Upgrade
            </button>
            <button
              onClick={handleLogout}
              className="bg-[#EBF212] p-2 w-full rounded-lg text-black text-lg font-semibold"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ to, icon, label, isExpanded }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg"
    >
      <div className="text-gray-700">{icon}</div>
      {isExpanded && (
        <p className="text-md font-semibold text-black">{label}</p>
      )}
    </Link>
  );
};

export default Sidebar;
