import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const url = useLocation();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedLog, setSelectedLog] = useState(null);
  const [delayedLeads, setDelayedLeads] = useState([]);
  const [todayLeads, setTodayLeads] = useState([]);
  const [callLogs, setCallLogs] = useState([]);
  const [callDetails, setCallDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCallLogs = async () => {
      try {
        const response = await axios.get(
          "https://plq0d3w0-5050.inc1.devtunnels.ms/api/call-logs"
        );
        setCallLogs(response.data.callLogs);
      } catch (error) {
        console.error(error);
      }
    };
    if (url.pathname === "/list") {
      getCallLogs();
    }
  }, [url]);
  useEffect(() => {
    const getCallDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://plq0d3w0-5050.inc1.devtunnels.ms/api/summaries"
        );
        setCallDetails(response.data.summaries);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    if (url.pathname === "/user") {
      getCallDetails();
    }
  }, [url]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://estate-agency-hazel.vercel.app/api/v1/fetch-properties"
        );

        setProperties(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        alert(error.message);
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <PropertyContext.Provider
      value={{
        properties,
        selectedProperty,
        setSelectedProperty,
        loading,
        setProperties,
        filteredProperties,
        setFilteredProperties,
        delayedLeads,
        setDelayedLeads,
        setLoading,
        todayLeads,
        setTodayLeads,
        isFilterPanelOpen,
        setIsFilterPanelOpen,
        callLogs,
        callDetails,
        selectedLog,
        setSelectedLog,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
