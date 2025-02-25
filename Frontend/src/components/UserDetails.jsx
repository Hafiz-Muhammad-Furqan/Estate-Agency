import { PhoneIncoming } from "lucide-react";
import React from "react";
import FilterPanel from "./FilterPanel";
import { Link } from "react-router-dom";
import { useProperty } from "../Context/PropertyContext";

const UserDetails = ({ isFilterPanelOpen, setIsFilterPanelOpen }) => {
  const { properties, setSelectedProperty, loading, filteredProperties } =
    useProperty();

  return (
    <div className="w-full flex items-center justify-center md:px-6 px-3 py-4 relative">
      <FilterPanel
        isFilterPanelOpen={isFilterPanelOpen}
        setIsFilterPanelOpen={setIsFilterPanelOpen}
      />

      <div className="bg-white rounded-lg shadow w-full overflow-auto">
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-12 h-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone Numbers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {(filteredProperties.length > 0
                ? filteredProperties
                : properties
              ).map((property, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to="/user-details"
                      className="text-md font-semibold underline"
                      onClick={() => setSelectedProperty(property)}
                    >
                      {property["Property Name"] ||
                        property.address.slice(0, 20)}
                      ...
                    </Link>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center gap-1 border border-gray-300 px-2 py-1 rounded-md">
                      <PhoneIncoming className="w-4 h-4 text-gray-500" />
                      <span className="whitespace-nowrap text-sm font-semibold">
                        {property["Phone Number"] || property.phone_number}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center gap-1 border border-gray-300 px-2 py-1 rounded-md">
                      € {property["Price (€)"] || property.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-white px-3 py-[5px] rounded-md flex items-center cursor-pointer bg-green-600 hover:bg-green-700 transition">
                      Call Attended
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
