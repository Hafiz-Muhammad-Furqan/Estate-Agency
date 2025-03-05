// import React from "react";
// import { ChevronDown, Users } from "lucide-react";
// import { useProperty } from "../Context/PropertyContext";

// const LeadsTable = () => {
//   const { callLogs } = useProperty();

//   return (
//     <div className="flex flex-col items-center justify-center gap-4 w-full px-2 md:px-6">
//       {/* Header Section */}
//       <div className="flex items-center justify-between w-full pb-2 border-b border-gray-300">
//         <p className="text-lg  font-normalsemibold">Leads</p>
//         <ChevronDown size={20} strokeWidth={3} />
//       </div>

//       {/* Table Section */}
//       <div className="w-full overflow-x-auto">
//         <table className="w-full border-collapse shadow-md rounded-lg min-w-[600px]">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="px-4 py-2 text-sm  font-normalsemibold text-left">
//                 Select
//               </th>
//               <th className="px-4 py-2 text-sm  font-normalsemibold text-left">
//                 Number
//               </th>
//               <th className="px-4 py-2 text-sm  font-normalsemibold text-center">
//                 Status
//               </th>
//               <th className="px-4 py-2 text-sm  font-normalsemibold text-center">
//                 Date
//               </th>
//               <th className="px-4 py-2 text-sm  font-normalsemibold text-right">
//                 Time
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {callLogs.length === 0 ? (
//               <tr>
//                 <td colSpan={5} className="text-center py-4">
//                   <div className="w-12 h-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
//                 </td>
//               </tr>
//             ) : (
//               callLogs.map((call) => {
//                 // Date aur Time ko alag karna
//                 const [date, time] = call?.time?.split(" ") || ["N/A", "N/A"];

//                 return (
//                   <tr key={call?.callSid} className="border-b border-gray-100">
//                     <td className="px-4 py-2 text-left">
//                       <input type="checkbox" />
//                     </td>
//                     <td className="px-4 py-2 text-md  font-normal text-left">
//                       {call.number}
//                     </td>
//                     <td className="px-4 py-2 text-md  font-normal text-center">
//                       {call?.status === "Success"
//                         ? "Call Attended"
//                         : "Call Failed"}
//                     </td>
//                     <td className="px-4 py-2 text-md  font-normal text-center">
//                       {date}
//                     </td>
//                     <td className="px-4 py-2 text-md  font-normal text-right">
//                       {time}
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default LeadsTable;

import React from "react";
import { ChevronDown } from "lucide-react";
import { useProperty } from "../Context/PropertyContext";
import { Link } from "react-router-dom";

const LeadsTable = () => {
  const { callLogs, setSelectedLog } = useProperty();

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full px-2 md:px-6">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full pb-2 border-b border-gray-300">
        <p className="text-lg  font-normalsemibold">Leads</p>
        <ChevronDown size={20} strokeWidth={3} />
      </div>

      {/* Table Section */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse shadow-md rounded-lg min-w-[600px]">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-3 py-1.5 text-sm  font-normalsemibold text-left">
                Select
              </th>
              <th className="px-3 py-1.5 text-sm  font-normalsemibold text-left">
                Number
              </th>
              <th className="px-3 py-1.5 text-sm  font-normalsemibold text-center">
                Status
              </th>
              <th className="px-3 py-1.5 text-sm  font-normalsemibold text-center">
                Date
              </th>
              <th className="px-3 py-1.5 text-sm  font-normalsemibold text-right">
                Time
              </th>
            </tr>
          </thead>

          <tbody>
            {callLogs.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  <div className="w-12 h-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
                </td>
              </tr>
            ) : (
              callLogs.map((call) => {
                // Date aur Time ko alag karna
                const [date, time] = call?.time?.split(" ") || ["N/A", "N/A"];
                const [min, sec] = time?.split(":") || ["N/A", "N/A"];

                return (
                  <tr key={call?.callSid} className="border-b border-gray-100">
                    <td className="px-3 py-1.5 text-left">
                      <input type="checkbox" />
                    </td>
                    <td className="px-3 py-1.5 text-md  font-normal text-left hover:underline">
                      <Link to="/user" onClick={() => setSelectedLog(call)}>
                        {call.number}
                      </Link>
                    </td>
                    <td
                      className={`px-3 py-1.5 text-md  font-normal text-center ${
                        call?.status === "Success"
                          ? " text-green-800"
                          : " text-red-800"
                      } rounded-md`}
                    >
                      {call?.status === "Success"
                        ? "Call Attended"
                        : "Call Failed"}
                    </td>
                    <td className="px-3 py-1.5 text-md  font-normal text-center">
                      {date}
                    </td>
                    <td className="px-3 py-1.5 text-md  font-normal text-right flex items-center justify-end gap-3">
                      <p>{min + " " + "min"}</p>
                      <p>{sec + " " + "sec"}</p>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
