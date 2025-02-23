import React from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <>
      <div className="bg-color-accent flex flex-col justify-between p-4">
        <h1 className="text-center font-semibold text-2xl">MANGALIST</h1>
        <InputSearch />
      </div>
    </>
  );
};

export default Navbar;
