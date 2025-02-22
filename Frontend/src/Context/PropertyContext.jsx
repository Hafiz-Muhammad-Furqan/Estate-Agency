import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);

        setProperties(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        alert(error.message);
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
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
