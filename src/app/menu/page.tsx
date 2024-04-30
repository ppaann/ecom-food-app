import React from "react";
import Link from "next/link";
import { menu } from "@/data";

const Menu = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 h-[calc(100vh-9rem)]  md:h-[calc(100vh-12rem)] lg:px-20 xl:px-40 justify-center items-center">
      {menu.map((item) => (
        <Link
          key={item.id}
          href={`/menu/${item.slug}`}
          className="flex-1 w-full h-1/3 md:h-1/2 p-8 bg-cover"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div
            className={`text-${item.color} w-1/2 flex flex-col  gap-6 justify-between`}
          >
            <h1 className="text-2xl md:text-4xl font-bold uppercase">
              {item.title}
            </h1>
            <p className="text-sm">{item.desc}</p>
            <button
              className={`hidden md:block py-2 px-4 rounded text-${
                item.color == "white" ? "red-500" : "white"
              } `}
              style={{
                backgroundColor: item.color == "white" ? "white" : "black",
              }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
