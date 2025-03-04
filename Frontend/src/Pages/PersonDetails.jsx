import React from "react";
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

function PersonDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
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

      <div className="flex flex-col lg:grid lg:grid-cols-12">
        {/* Left Column - Scrollable on mobile */}
        <div className="order-2 lg:order-1 lg:col-span-3 border-r overflow-y-auto">
          <div className="lg:h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Contact Information */}
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
                  <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-blue-600 truncate">
                      joyce@zwhr.consulting.com
                    </p>
                    <span className="text-xs text-gray-500">Business</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-gray-900 truncate">+8613918166511</p>
                    <span className="text-xs text-red-500">
                      Unsupported country
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-gray-900 truncate">+862131225000</p>
                    <span className="text-xs text-red-500">
                      Unsupported country
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Sections - Hidden on mobile by default */}
            <div className="hidden lg:block">
              <div className="p-4 border-t">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Contact Stage</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        Cold
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Contact Owner</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <User size={16} />
                      <span>AI bot</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Engagement</h3>
                    <div className="text-sm">0 Inbound · 0 Outbound</div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t">
                <div className="space-y-2">
                  <h2 className="font-medium">Last 12 Months</h2>
                  <div className="flex gap-1">
                    {[...Array(11)].map((_, i) => (
                      <div key={i} className="w-2 h-4 bg-gray-200 rounded-sm" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t">
                <h3 className="text-sm font-medium mb-2">Lists</h3>
                <p className="text-sm text-gray-600">
                  Present in Called Received List
                </p>
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">Local time</span>
                  <span className="text-sm">Jan 21, 2023 05:07 PM</span>
                </div>
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-medium">Work history</h2>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronDown size={18} />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">ZW HR Consulting</h3>
                      <p className="text-sm text-gray-600">CEO</p>
                      <p className="text-xs text-gray-500">
                        Current · 13 years
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        ZW HR Consulting Co., Ltd.
                      </h3>
                      <p className="text-sm text-gray-600">CEO</p>
                      <p className="text-xs text-gray-500">
                        Current · 20 years
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-medium">Tasks</h2>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Plus size={18} />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronDown size={18} />
                    </button>
                  </div>
                </div>
                <button className="w-full text-left text-sm text-gray-600 hover:bg-gray-50 p-2 rounded flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  Add Task Like Follow Up Call
                </button>
                <button className="w-full text-left text-sm text-gray-600 mt-2 hover:bg-gray-50 p-2 rounded">
                  Add task
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="order-1 lg:order-2 lg:col-span-9 p-4 lg:p-6 overflow-y-auto">
          <div className="lg:h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Description Section */}
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
                Shanghai in 1998. With 12 offices across Asia, ZWHR Consulting
                currently has over 400 employees. As of 2012, ZWHR Consulting
                has become an exclusive member of InterSearch Worldwide.
                Established in 1989, InterSearch ranks as one of the top
                international executive search organizations in the world, with
                100 offices in over...{" "}
                <button className="text-blue-600">Show More</button>
              </p>
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm whitespace-nowrap">
                  home
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm whitespace-nowrap">
                  Selling
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm whitespace-nowrap">
                  Buying
                </span>
                <button className="text-sm text-gray-600 whitespace-nowrap">
                  Show all 36 >
                </button>
              </div>
            </div>

            {/* Insights Section */}
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
                    Call Attended, Call Denied, Call Pending
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
                  <span className="text-sm truncate">Yes, No, Maybe</span>
                  <ChevronDown
                    size={18}
                    className="text-gray-500 flex-shrink-0"
                  />
                </div>
              </div>
            </div>

            {/* Call Summary */}
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
                <h3 className="text-sm font-medium">Today</h3>

                {/* Call Summary Items */}
                {[
                  "What is your budget for purchasing a property?",
                  "What is your budget for purchasing a property?",
                  "What is your budget for purchasing a property?",
                  "What are your top priorities when selecting a property?",
                  "What is your budget for purchasing a property?",
                  "What is your budget for purchasing a property?",
                ].map((question, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare size={16} className="text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium mb-1">{question}</p>
                      <p className="text-sm text-gray-600">
                        {index === 3
                          ? "My priorities are location, budget, and amenities. I prefer a family-friendly area near schools and transport, within my pre-approved mortgage range. Key amenities include parking, a modern kitchen, and outdoor space, with good resale potential for future flexibility"
                          : "Helps determine property options"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Jan 21, 2023, 2:06 PM
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonDetails;
