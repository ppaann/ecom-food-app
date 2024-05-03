"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* text container */}
      <div className="flex-1 flex flex-col justify-center items-center gap-8 ">
        <h1 className="text-5xl md:text-6xl xl:text-7xl text-center uppercase font-semibold text-red-500 p-4 md:p-10">
          {data[current].title}
        </h1>
        <button className="p-4 bg-red-500 text-white cursor-pointer hover:bg-white hover:text-red-500 border-solid border-1 border-red-500">
          Order Now
        </button>
      </div>
      {/* image container */}
      <div className="relative flex-1">
        <Image src={data[current].image} alt="" fill />
      </div>
    </div>
  );
};

export default Slider;
