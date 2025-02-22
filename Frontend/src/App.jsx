import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import List from "./Pages/List";
import LeadGeneration from "./Pages/LeadGeneration";
import UpgradePlan from "./Pages/UpgradePlan";
import DetailsPage from "./Pages/DetailsPage";
import { PropertyProvider } from "./Context/PropertyContext";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/lead-generation"
            element={
              <PropertyProvider>
                <LeadGeneration />
              </PropertyProvider>
            }
          />
          <Route path="/list" element={<List />} />
          <Route
            path="/user-details"
            element={
              <PropertyProvider>
                <DetailsPage />
              </PropertyProvider>
            }
          />
        </Route>
        <Route path="/upgrade-plan" element={<UpgradePlan />} />
      </Routes>
    </Router>
  );
};

export default App;
