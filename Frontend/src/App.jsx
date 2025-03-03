import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import List from "./Pages/List";
import LeadGeneration from "./Pages/LeadGeneration";
import UpgradePlan from "./Pages/UpgradePlan";
import DetailsPage from "./Pages/DetailsPage";
import { PropertyProvider } from "./Context/PropertyContext";
import DelayedLeads from "./Pages/DelayedLeads";
import TodayLeads from "./Pages/TodayLeads";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/leads"
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
          <Route
            path="/delayed-leads"
            element={
              <PropertyProvider>
                <DelayedLeads />
              </PropertyProvider>
            }
          />
          <Route
            path="/today-leads"
            element={
              <PropertyProvider>
                <TodayLeads />
              </PropertyProvider>
            }
          />
        </Route>
        <Route path="/upgrade" element={<UpgradePlan />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
