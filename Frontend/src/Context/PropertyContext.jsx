import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [delayedLeads, setDelayedLeads] = useState([]);
  const [todayLeads, setTodayLeads] = useState([]);
  const [loading, setLoading] = useState(true);

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
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
