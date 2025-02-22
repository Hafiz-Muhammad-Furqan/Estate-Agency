import React from "react";
import Navbar from "../components/Navbar";
import LeadsTable from "../components/LeadsTable";
import LeadsHeader from "../components/LeadsHeader";

const List = () => {
  return (
    <>
      <Navbar
        Heading={"My Lists"}
        Class={"bg-[#ebf212] text-black px-2"}
        btnText={"Create a List"}
        StartIcon={<p className="text-lg font-semibold">+</p>}
      />
      <LeadsHeader />
      <LeadsTable />
    </>
  );
};

export default List;
