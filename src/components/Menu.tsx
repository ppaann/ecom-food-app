"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      <div className="cursor-pointer">
        {open ? (
          <Image
            src="/close.png"
            alt=""
            width={20}
            height={20}
            onClick={() => {
              setOpen(false);
            }}
          />
        ) : (
          <Image
            src="/open.png"
            alt=""
            width={20}
            height={20}
            onClick={() => {
              setOpen(true);
            }}
          />
        )}
      </div>
      {open ? (
        <div className="absolute top-24 text-3xl z-10 left-0 bg-red-500 p-4 w-full text-white h-[calc(100vh-6rem)] flex flex-col gap-8 justify-center text-center items-center">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => {
                setOpen(false);
              }}
            >
              {link.title}
            </Link>
          ))}

          {user ? (
            <Link
              href="/orders"
              onClick={() => {
                setOpen(false);
              }}
            >
              orders
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={() => {
                setOpen(false);
              }}
            >
              login
            </Link>
          )}

          <Cart />
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
