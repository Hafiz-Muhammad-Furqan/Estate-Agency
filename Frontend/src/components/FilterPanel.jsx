// import { ChevronDown, CircleX, Factory } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { useProperty } from "../Context/PropertyContext";

// const FilterPanel = () => {
//   const { properties, setFilteredProperties } = useProperty();
//   const [selectedCounts, setSelectedCounts] = useState([]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedPlatforms, setSelectedPlatforms] = useState([]);
//   const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);

//   const { setIsFilterPanelOpen, isFilterPanelOpen } = useProperty();
//   useEffect(() => {
//     if (selectedCounts.length === 0 && properties.length > 0) {
//       setSelectedCounts([properties.length]);
//     }
//   }, [properties]);

//   const totalCount = properties.length;
//   const chunkSize = Math.ceil(totalCount / 4);

//   const countOptions = [
//     chunkSize.toString(),
//     (chunkSize * 2).toString(),
//     (chunkSize * 3).toString(),
//     totalCount.toString(),
//   ];

//   const platformOptions = [
//     ...new Set(properties.map((item) => item["Website Name"])), // Unique values
//   ];

//   const applyFilters = () => {
//     let filtered = properties;

//     if (selectedPlatforms.length > 0) {
//       filtered = filtered.filter((property) =>
//         selectedPlatforms.includes(property["Website Name"])
//       );
//     }

//     if (selectedCounts.length > 0) {
//       const count = parseInt(selectedCounts[0]);
//       filtered = filtered.slice(0, count);
//     }

//     setFilteredProperties(filtered);
//   };

//   const clearFilters = () => {
//     setSelectedCounts([properties.length]);
//     setSelectedPlatforms([]);
//     setFilteredProperties([]);
//     setIsFilterPanelOpen(false);
//   };

//   return (
//     <div
//       className={`bg-gray-100 z-20 absolute top-0 left-0 p-5 w-full md:w-72 h-full rounded-lg transition-transform duration-300 ${
//         isFilterPanelOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       <div className="flex items-center justify-between border border-gray-300 gap-6 py-2 px-2 rounded-lg">
//         <div className="flex items-center justify-center flex-col">
//           <p className="text-black text-md font-semibold">Total</p>
//           <p className="text-black text-sm font-semibold">{totalCount}</p>
//         </div>
//         <div className="flex items-center justify-center flex-col">
//           <p className="text-black text-md font-semibold">Net New</p>
//           <p className="text-black text-sm font-semibold">1.2M</p>
//         </div>
//         <div className="flex items-center justify-center flex-col">
//           <p className="text-black text-md font-semibold">Saved</p>
//           <p className="text-black text-sm font-semibold">1.2M</p>
//         </div>
//       </div>

//       <div
//         className="relative flex items-center justify-between cursor-pointer"
//         onMouseEnter={() => setIsDropdownOpen(true)}
//         onMouseLeave={() => setIsDropdownOpen(false)}
//       >
//         <div className="flex items-center justify-center gap-2 py-3">
//           <Factory size={20} strokeWidth={1.5} />
//           <p>Total Count</p>
//         </div>
//         <ChevronDown size={20} strokeWidth={3} />
//         {isDropdownOpen && (
//           <div className="absolute top-full right-0 w-40 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
//             {countOptions.map((count) => (
//               <p
//                 key={count}
//                 className={`p-2 hover:bg-gray-200 cursor-pointer ${
//                   selectedCounts.includes(count) && "bg-blue-300"
//                 }`}
//                 onClick={() => {
//                   setSelectedCounts([count]);
//                   setIsDropdownOpen(false);
//                 }}
//               >
//                 {count}
//               </p>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="p-4 border border-gray-300 flex gap-2 flex-wrap">
//         {selectedCounts.map((count) => (
//           <div
//             key={count}
//             className="flex items-center justify-center py-1 px-2 gap-1 bg-white rounded-lg"
//           >
//             <p className="text-sm font-semibold">{count}</p>
//             <CircleX
//               size={16}
//               strokeWidth={1.75}
//               onClick={() => setSelectedCounts([properties.length])}
//               className="cursor-pointer"
//             />
//           </div>
//         ))}
//       </div>

//       <div
//         className="relative flex items-center justify-between cursor-pointer"
//         onMouseEnter={() => setIsPlatformDropdownOpen(true)}
//         onMouseLeave={() => setIsPlatformDropdownOpen(false)}
//       >
//         <div className="flex items-center justify-center gap-2 py-3">
//           <Factory size={20} strokeWidth={1.5} />
//           <p>Platforms</p>
//         </div>
//         <ChevronDown size={20} strokeWidth={3} />
//         {isPlatformDropdownOpen && (
//           <div className="absolute top-full right-0 w-40 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
//             {platformOptions.map((platform) => (
//               <p
//                 key={platform}
//                 className={`p-2 hover:bg-gray-200 cursor-pointer ${
//                   selectedPlatforms.includes(platform) && "bg-blue-300"
//                 }`}
//                 onClick={() => {
//                   setSelectedPlatforms([...selectedPlatforms, platform]);
//                   setIsPlatformDropdownOpen(false);
//                 }}
//               >
//                 {platform}
//               </p>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="p-4 border border-gray-300 flex gap-2 flex-wrap">
//         {selectedPlatforms.map((platform) => (
//           <div
//             key={platform}
//             className="flex items-center justify-center py-1 px-2 gap-1 bg-white rounded-lg"
//           >
//             <p className="text-sm font-semibold">{platform}</p>
//             <CircleX
//               size={16}
//               strokeWidth={1.75}
//               onClick={() =>
//                 setSelectedPlatforms(
//                   selectedPlatforms.filter((p) => p !== platform)
//                 )
//               }
//               className="cursor-pointer"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center justify-center gap-2 pt-3">
//         <button
//           className="px-3 py-1 text-sm font-semibold cursor-pointer"
//           onClick={clearFilters}
//         >
//           Clear Filters
//         </button>
//         <button
//           onClick={() => {
//             applyFilters();
//             setIsFilterPanelOpen(false);
//           }}
//           className="px-3 py-1 border border-gray-300 rounded-lg text-sm font-semibold cursor-pointer"
//         >
//           Apply Filters
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FilterPanel;

import { ChevronDown, CircleX, Factory } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useProperty } from "../Context/PropertyContext";
import { useLocation } from "react-router-dom";

const FilterPanel = () => {
  const { properties, setFilteredProperties, delayedLeads, todayLeads } =
    useProperty();

  const [selectedCounts, setSelectedCounts] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const { setIsFilterPanelOpen, isFilterPanelOpen } = useProperty();
  const location = useLocation();

  // Check which data to filter based on URL
  const getFilteredData = () => {
    if (location.pathname === "/delayed-leads") {
      return delayedLeads;
    } else if (location.pathname === "/today-leads") {
      return todayLeads;
    } else {
      return properties;
    }
  };

  const filteredData = getFilteredData();

  useEffect(() => {
    if (selectedCounts.length === 0 && filteredData.length > 0) {
      setSelectedCounts([filteredData.length]);
    }
  }, [filteredData]);

  const totalCount = filteredData.length;
  const chunkSize = Math.ceil(totalCount / 4);

  const countOptions = [
    chunkSize.toString(),
    (chunkSize * 2).toString(),
    (chunkSize * 3).toString(),
    totalCount.toString(),
  ];

  const platformOptions = [
    ...new Set(filteredData.map((item) => item["website_name"])),
  ];

  const applyFilters = () => {
    let filtered = filteredData;

    if (selectedPlatforms.length > 0) {
      filtered = filtered.filter((property) =>
        selectedPlatforms.includes(property["website_name"])
      );
    }

    if (selectedCounts.length > 0) {
      const count = parseInt(selectedCounts[0]);
      filtered = filtered.slice(0, count);
    }

    setFilteredProperties(filtered);
  };

  const clearFilters = () => {
    setSelectedCounts([filteredData.length]);
    setSelectedPlatforms([]);
    setFilteredProperties(filteredData);
    setIsFilterPanelOpen(false);
  };

  return (
    <div
      className={`bg-gray-100 z-20 absolute top-0 left-0 p-5 w-full md:w-72 h-full rounded-lg transition-transform duration-300 ${
        isFilterPanelOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border border-gray-300 gap-6 py-2 px-2 rounded-lg">
        <div className="flex items-center justify-center flex-col">
          <p className="text-black text-md font-semibold">Total</p>
          <p className="text-black text-sm font-semibold">{totalCount}</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="text-black text-md font-semibold">Net New</p>
          <p className="text-black text-sm font-semibold">1.2M</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="text-black text-md font-semibold">Saved</p>
          <p className="text-black text-sm font-semibold">1.2M</p>
        </div>
      </div>

      <div
        className="relative flex items-center justify-between cursor-pointer"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <div className="flex items-center justify-center gap-2 py-3">
          <Factory size={20} strokeWidth={1.5} />
          <p>Total Count</p>
        </div>
        <ChevronDown size={20} strokeWidth={3} />
        {isDropdownOpen && (
          <div className="absolute top-full right-0 w-40 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
            {countOptions.map((count) => (
              <p
                key={count}
                className={`p-2 hover:bg-gray-200 cursor-pointer ${
                  selectedCounts.includes(count) && "bg-blue-300"
                }`}
                onClick={() => {
                  setSelectedCounts([count]);
                  setIsDropdownOpen(false);
                }}
              >
                {count}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border border-gray-300 flex gap-2 flex-wrap">
        {selectedCounts.map((count) => (
          <div
            key={count}
            className="flex items-center justify-center py-1 px-2 gap-1 bg-white rounded-lg"
          >
            <p className="text-sm font-semibold">{count}</p>
            <CircleX
              size={16}
              strokeWidth={1.75}
              onClick={() => setSelectedCounts([filteredData.length])}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div
        className="relative flex items-center justify-between cursor-pointer"
        onMouseEnter={() => setIsPlatformDropdownOpen(true)}
        onMouseLeave={() => setIsPlatformDropdownOpen(false)}
      >
        <div className="flex items-center justify-center gap-2 py-3">
          <Factory size={20} strokeWidth={1.5} />
          <p>Platforms</p>
        </div>
        <ChevronDown size={20} strokeWidth={3} />
        {isPlatformDropdownOpen && (
          <div className="absolute top-full right-0 w-40 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
            {platformOptions.map((platform) => (
              <p
                key={platform}
                className={`p-2 hover:bg-gray-200 cursor-pointer ${
                  selectedPlatforms.includes(platform) && "bg-blue-300"
                }`}
                onClick={() => {
                  setSelectedPlatforms([...selectedPlatforms, platform]);
                  setIsPlatformDropdownOpen(false);
                }}
              >
                {platform}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border border-gray-300 flex gap-2 flex-wrap">
        {selectedPlatforms.map((platform) => (
          <div
            key={platform}
            className="flex items-center justify-center py-1 px-2 gap-1 bg-white rounded-lg"
          >
            <p className="text-sm font-semibold">{platform}</p>
            <CircleX
              size={16}
              strokeWidth={1.75}
              onClick={() =>
                setSelectedPlatforms(
                  selectedPlatforms.filter((p) => p !== platform)
                )
              }
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 pt-3">
        <button
          className="px-3 py-1 text-sm font-semibold cursor-pointer"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
        <button
          onClick={() => {
            applyFilters();
            setIsFilterPanelOpen(false);
          }}
          className="px-3 py-1 border border-gray-300 rounded-lg text-sm font-semibold cursor-pointer"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
