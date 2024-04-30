import React from "react";
import Image from "next/image";
import Link from "next/link";
import { pizzas } from "@/data";

const Category = () => {
  return (
    <div className="flex flex-wrap">
      {pizzas.map((product) => {
        return (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="w-full h-[60vh] border-b-2 border-r-2 border-red-500 flex flex-col justify-between group md:w-1/2 lg:w-1/3 lg:even:bg-fuchsia-50"
          >
            <div className="relative w-full h-full">
              {product.img && (
                <Image
                  src={product.img ?? ""}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                ></Image>
              )}
            </div>
            <div className="flex justify-between text-red-500 font-semibold p-4 items-center ">
              <div className="uppercase p-2">{product.title}</div>
              <p className="group-hover:hidden">${product.price}</p>
              <button className="p-2 bg-red-500 text-white rounded-md hidden group-hover:block">
                Add to cart
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
