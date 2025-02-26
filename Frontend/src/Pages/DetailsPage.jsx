import React from "react";
import {
  Phone,
  MapPin,
  MoreHorizontal,
  Plus,
  User2,
  MessageSquare,
  Hand,
  Code,
  Check,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useProperty } from "../Context/PropertyContext";

const DetailsPage = () => {
  const { selectedProperty } = useProperty();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
              <button
                onClick={() => navigate(-1)}
                className="text-lg font-semibold text-gray-500 cursor-pointer"
              >
                ← Back
              </button>
              <h1 className="text-lg font-medium">Joyce Jing</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded">
                Warm Lead
              </span>
              <button className="px-3 py-1.5 border rounded-md text-sm whitespace-nowrap">
                Add to list
              </button>
              <button className="px-3 py-1.5 bg-green-500 text-white rounded-md text-sm whitespace-nowrap">
                Call
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 flex items-center justify-between border-b">
              <h2 className="font-medium">Contact Information</h2>
              <Plus className="w-5 h-5 text-gray-500" />
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm">
                    {selectedProperty["Phone Number"] ||
                      selectedProperty.phone_number}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                <div>
                  <p className="text-sm">
                    {selectedProperty.Address || selectedProperty.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium">Contact Stage</h2>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                Cold
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Contact Owner</span>
                <div className="flex items-center">
                  <User2 className="w-4 h-4 mr-1" />
                  <span>AI bot</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Engagement</span>
                <span>0 inbound · 0 outbound</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Last 12 Months</span>
                <div className="w-24 h-2 bg-blue-100 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 flex items-center justify-between border-b">
              <h2 className="font-medium">DESCRIPTION</h2>
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </div>
            <div className="w-full h-48 overflow-hidden">
              <img
                src={
                  selectedProperty["Image URL"] || selectedProperty.image_url
                }
                alt="Modern office building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                {selectedProperty.Description || selectedProperty.description}
              </p>
            </div>
            <div className="border-t">
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Property Details
                </h3>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    Price:{" "}
                    {selectedProperty["Price (€)"] || selectedProperty.price}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t">
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Address
                </h3>

                <p className="text-sm text-gray-600">
                  {selectedProperty.Address || selectedProperty.address}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow mb-10 md:mb-0">
            <div className="p-4 flex items-center justify-between border-b">
              <h2 className="font-medium">Call Summary</h2>
              <div className="flex items-center space-x-2">
                <Plus className="w-5 h-5 text-gray-500" />
                <MoreHorizontal className="w-5 h-5 text-gray-500" />
              </div>
            </div>
            <div className="p-4 space-y-4">
              {Array(3)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">
                        What is your budget for purchasing a property?
                      </p>
                      <p className="text-sm text-gray-600">
                        Helps determine property options
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Jan 21, 2024, 2:06 PM
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <button className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Hand className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Code className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md">
              Ask to edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
