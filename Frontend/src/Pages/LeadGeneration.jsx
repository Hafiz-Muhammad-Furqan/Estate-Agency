import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import { ChevronDown } from "lucide-react";

const LeadGeneration = () => {
  return (
    <>
      <Navbar
        Heading={"Lead Generation"}
        btnText={"Import"}
        Class={"border border-gray-300"}
        EndIcon={<ChevronDown size={20} strokeWidth={3} />}
      />
      <Dashboard />
    </>
  );
};

export default LeadGeneration;
