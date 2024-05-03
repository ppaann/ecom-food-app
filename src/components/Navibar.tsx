import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Cart from "./Cart";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navibar = () => {
  return (
    <nav className="h-12 md:h-24 flex flex-row justify-between text-red-500 items-center p-4 border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-xl flex-1 md:text-center md:font-bold">
        <Link href="/">BellaCibo</Link>
      </div>

      {/* mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* right menu */}
      <div className="hidden md:flex gap-4 justify-center items-center flex-1 ">
        <div className="flex justify-center bg-orange-300 py-1 px-2 rounded md:absolute right-4 top-2 lg:static">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>12342342</span>
        </div>
        <UserLinks />
        <Cart />
      </div>
    </nav>
  );
};

export default Navibar;
