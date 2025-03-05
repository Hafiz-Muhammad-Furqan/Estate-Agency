import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  Building2,
  ChevronDown,
  MoreHorizontal,
  Plus,
  Clock,
  User,
  Settings,
  MessageSquare,
  Menu,
} from "lucide-react";
import { useProperty } from "../Context/PropertyContext";

function PersonDetails() {
  const { loading, callDetails, todayLeads, selectedLog } = useProperty();
  const [data, setData] = useState({});
  console.log(selectedLog);
  console.log(data);

  useEffect(() => {
    if (!loading && selectedLog?.callSid) {
      const filteredData = callDetails.find(
        (call) => call.callSid === selectedLog.callSid
      );

      if (filteredData) {
        setData(filteredData);
      }
    }
  }, [callDetails, selectedLog, loading]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-12 h-12 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="p-4 flex items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.krqdzoE9HEPDuFNuRvF-oQHaHa&pid=Api&P=0&h=220"
                className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-lg font-semibold">Joyce Jing</h1>
                  <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-sm">
                    Warm Lead
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-1 flex-wrap">
                  <span>CEO</span>
                  <span>at</span>
                  <span className="font-medium">ZW HR Consulting</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">Shanghai, China</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm border rounded hover:bg-gray-50">
                <span>Add to list</span>
              </button>
              <button className="px-4 py-1.5 bg-green-500 text-white rounded text-sm hover:bg-green-600">
                Call
              </button>
              <button className="sm:hidden p-1 hover:bg-gray-100 rounded">
                <Menu size={20} className="text-gray-500" />
              </button>
              <button className="hidden sm:block p-1 hover:bg-gray-100 rounded">
                <MoreHorizontal size={20} className="text-gray-500" />
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-12 ">
            <div className="order-2 lg:order-1 lg:col-span-3 border-r ">
              <div className="lg:h-[calc(100vh-4rem)] ">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-medium">Contact information</h2>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Plus size={18} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ChevronDown size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-gray-900 truncate">+8613918166511</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-gray-900 truncate">
                          {selectedLog?.number}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="p-4 border-t">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">
                          Contact Stage
                        </h3>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="px-2 py-1 bg-gray-100 rounded">
                            {data?.summary?.leadStatus}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">
                          Contact Owner
                        </h3>
                        <div className="flex items-center gap-2 text-sm">
                          <User size={16} />
                          <span>AI bot</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t">
                    <div className="space-y-2">
                      <h2 className="font-medium">Last 12 Months</h2>
                      <div className="flex gap-1">
                        {[...Array(11)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-4 bg-gray-200 rounded-sm"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600">Local time</span>
                      <span className="text-sm">Jan 21, 2023 05:07 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-9 p-4 lg:p-6 ">
              <div className="lg:h-[calc(100vh-4rem)]">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4 border-b overflow-x-auto">
                    <button className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2 -mb-px whitespace-nowrap">
                      DESCRIPTION
                    </button>
                    <button className="text-sm text-gray-600 pb-2 whitespace-nowrap">
                      About
                    </button>
                    <button className="text-sm text-gray-600 pb-2 whitespace-nowrap">
                      Custom fields
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    ZWHR Consulting provides recruitment solutions focused on
                    mid-senior level professionals which originally founded in
                    Shanghai in 1998. With 12 offices across Asia, ZWHR
                    Consulting currently has over 400 employees. As of 2012,
                    ZWHR Consulting has become an exclusive member of
                    InterSearch Worldwide. Established in 1989, InterSearch
                    ranks as one of the top international executive search
                    organizations in the world, with 100 offices in over...{" "}
                    <button className="text-blue-600">Show More</button>
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-medium">Insights</h2>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Settings size={18} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ChevronDown size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Call Status</h3>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm truncate">
                        {selectedLog?.status === "Success"
                          ? "Call Attended"
                          : "Call Denied"}
                      </span>
                      <ChevronDown
                        size={18}
                        className="text-gray-500 flex-shrink-0"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Interest</h3>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm truncate">
                        {selectedLog?.status === "Success" ? "YES" : "No"}
                      </span>
                      <ChevronDown
                        size={18}
                        className="text-gray-500 flex-shrink-0"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-medium">Call Summary</h2>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Plus size={18} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ChevronDown size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p>{data?.summary?.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PersonDetails;
