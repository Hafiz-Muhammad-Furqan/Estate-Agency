import React from "react";

const Navbar = ({ Heading, Class, StartIcon, EndIcon, btnText }) => {
  return (
    <div className="w-full flex items-center justify-between mt-5 md:px-6 px-2">
      <h2 className="font-semibold md:text-xl text-lg">{Heading}</h2>
      <button
        className={`flex items-center justify-center gap-1 rounded-md  p-1 ${Class}`}
      >
        {StartIcon}
        <p className="text-sm font-semibold">{btnText}</p>
        {EndIcon}
      </button>
    </div>
  );
};

export default Navbar;
