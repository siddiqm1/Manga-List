import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between mb-2 text-color-accent lg:py-2">
      <h1 className="text-lg sm:text-xl lg:text-2xl">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={`${linkHref}`} className="underline">
          <h3 className="text-lg sm:text-xl lg:text-2xl">{linkTitle}</h3>
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
