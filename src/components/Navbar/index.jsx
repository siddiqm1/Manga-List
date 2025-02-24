import React from "react";
import InputSearch from "./InputSearch";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-color-accent flex flex-col justify-between p-4">
        <Link href={'/'}>
          <h1 className="text-center font-semibold text-2xl">MANGALIST</h1>
        </Link>
        <InputSearch />
      </div>
    </>
  );
};

export default Navbar;
