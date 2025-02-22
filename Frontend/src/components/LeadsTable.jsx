import React from "react";
import { ChevronDown, Users } from "lucide-react";

const leadsData = [
  {
    id: 1,
    listName: "Call Pending",
    totalNo: 20,
    type: "People",
    createdBy: "Name",
    lastModified: "30 Seconds ago",
  },
  {
    id: 2,
    listName: "Call Denied",
    totalNo: 30,
    type: "People",
    createdBy: "Name",
    lastModified: "30 Seconds ago",
  },
  {
    id: 3,
    listName: "Call Ended",
    totalNo: 40,
    type: "People",
    createdBy: "Name",
    lastModified: "30 Seconds ago",
  },
  {
    id: 4,
    listName: "Startup Leads",
    totalNo: 60,
    type: "People",
    createdBy: "Name",
    lastModified: "30 Seconds ago",
  },
];

const LeadsTable = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full px-2 md:px-6">
      <div className="flex items-center justify-between w-full pb-2 border-b border-gray-300">
        <p className="text-lg font-semibold">Leads</p>
        <ChevronDown size={20} strokeWidth={3} />
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse shadow-md rounded-lg min-w-[600px]">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-sm font-semibold " colSpan={2}>
                List Name
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-start">
                Total No
              </th>
              <th className="px-4 py-2 text-sm font-semibold ">Type</th>
              <th className="px-4 py-2 text-sm font-semibold text-start">
                Created By
              </th>
              <th className="px-4 py-2 text-sm font-semibold flex items-center justify-start">
                Last Modified
                <ChevronDown size={16} strokeWidth={2} className="ml-1" />
              </th>
            </tr>
          </thead>

          <tbody>
            {leadsData.map((lead) => (
              <tr key={lead.id} className="border-b border-gray-100">
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 text-sm font-medium">
                  {lead.listName}
                </td>
                <td className="px-4 py-2 text-sm font-medium">
                  {lead.totalNo}
                </td>
                <td className="px-4 py-2 text-sm font-medium flex items-center justify-center">
                  <div className="px-2 py-1 bg-fuchsia-600/20 inline-flex items-center gap-1 rounded-md">
                    <Users size={16} strokeWidth={1} />
                    <p>{lead.type}</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-sm font-medium">
                  {lead.createdBy}
                </td>
                <td className="px-4 py-2 text-sm font-medium">
                  {lead.lastModified}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsTable;
