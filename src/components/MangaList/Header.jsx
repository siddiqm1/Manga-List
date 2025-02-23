import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between mb-2 text-color-accent">
      <h1 className="text-lg">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={`${linkHref}`} className="underline">
          <h3 className="text-lg">{linkTitle}</h3>
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
