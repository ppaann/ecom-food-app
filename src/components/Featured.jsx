import React from "react";
import Image from "next/image";
import { featuredProducts } from "../data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll">
      {/* wrapper */}
      <div className="flex w-max">
        {/* Single Item */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-4 justify-around items-center p-4 h-[60vh] xl:h-[90vh] hover:bg-fuchsia-50 w-screen md:w-[50vw] lg:w-[33vw]  transition-all duration-500"
          >
            {product.img && (
              <div className="relative flex-1 w-full hover:rotate-90 transition-all duration-500">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-contain"
                ></Image>
              </div>
            )}
            <div className="text-red-500 flex flex-col gap-8 flex-1 text-center">
              <h1 className="uppercase text-xl font-semibold">
                {product.title}
              </h1>
              <p>{product.desc}</p>
              <span className="font-bold">$ {product.price}</span>
              <buton className="p-2 rounded cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500 border-2 border-red-500">
                Add To Cart
              </buton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
