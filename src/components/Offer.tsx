import React from "react";
import Image from "next/image";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="h-screen flex flex-col bg-black md:flex-row md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className="flex-1">
        <div className="flex flex-col justify-center items-center gap-8 h-full">
          <h1 className="text-5xl md:text-6xl xl:text-7xl text-center font-semibold text-white p-4 md:p-10">
            The best pizza to share with your family
          </h1>
          <p className="text-white md:text-xl text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus non
            aspernatur quod earum, quae adipisci qui reprehenderit voluptatibus
            pariatur veniam obcaecati maxime porro aut fuga unde!
          </p>
          <CountDown />
          <button className="p-4 bg-red-500 text-white cursor-pointer hover:bg-white hover:text-red-500 border-solid border-1 border-red-500 rounded">
            Order Now
          </button>
        </div>
      </div>
      <div className="flex-1 relative w-screen">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
