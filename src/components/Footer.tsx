import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between h-12 p-4 md:h-24 lg:px-20 xl:px-40 items-center text-red-500">
      <Link href="/" className="font-bold text-xl">
        BellaCibo
      </Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
