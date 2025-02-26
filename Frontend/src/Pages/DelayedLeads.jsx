import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import { ChevronDown, PhoneIncoming, SlidersHorizontal } from "lucide-react";
import { useProperty } from "../Context/PropertyContext";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import FilterPanel from "../components/FilterPanel";
import DashboardHeader from "../components/DashboardHeader";

const DelayedLeads = () => {
  const {
    delayedLeads,
    setDelayedLeads,
    loading,
    setLoading,
    setSelectedProperty,
    filteredProperties,
    setIsFilterPanelOpen,
    isFilterPanelOpen,
  } = useProperty();
  useEffect(() => {
    const fetchDelayedLeads = async () => {
      setLoading(true);
      try {
        const response = await axios.get(import.meta.env.VITE_DELAYED_LEADS);
        console.log(response.data);

        setDelayedLeads(response.data.delayed_leads);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        alert(error.message);
        setLoading(false);
      }
    };
    if (delayedLeads.length === 0) {
      fetchDelayedLeads();
    }
  }, []);
  return (
    <>
      <Navbar
        Heading={"Delayed Leads"}
        btnText={"Import"}
        Class={"border border-gray-300"}
        EndIcon={<ChevronDown size={20} strokeWidth={3} />}
      />
      <DashboardHeader />
      <div
        className="flex items-center justify-center gap-2 lg:hidden cursor-pointer"
        onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
      >
        <SlidersHorizontal size={20} strokeWidth={1.25} />
        <p>Filters</p>
      </div>
      <div className="w-full flex items-center justify-center md:px-6 px-3 py-4 relative">
        <FilterPanel />
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
                  : delayedLeads
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
    </>
  );
};

export default DelayedLeads;
