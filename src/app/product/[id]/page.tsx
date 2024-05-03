import React from "react";
import Image from "next/image";
import { singleProduct } from "@/data";
import OptionController from "@/components/OptionController";

const Product = () => {
  return (
    <div className="flex flex-col justify-round h-screen md:flex-row md:items-center p-4 md:p-20 lg:p-40 text-red-500 gap-8">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h[70%]">
          <Image
            src={singleProduct.img}
            alt={singleProduct.title}
            fill
            className="object-contain"
          ></Image>{" "}
        </div>
      )}

      {/* PRODUCT CONTAINER */}
      <div className="flex flex-col gap-4">
        <h1 className="uppercase text-3xl font-bold">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        {/* OPTION CONTAINER */}
        <OptionController
          id={singleProduct.id}
          price={singleProduct.price}
          options={singleProduct.options}
        ></OptionController>
      </div>
    </div>
  );
};

export default Product;
