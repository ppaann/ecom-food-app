"use client";
import React from "react";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const OptionController = ({ price, options, id }: Product) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotalPrice(
      quantity *
        (options ? price + options[selectedOption]?.additionalPrice : price)
    );
  }, [selectedOption, quantity, options, price]);
  return (
    <div className="flex flex-col gap-4">
      {/* PRICE */}
      <div className="text-red-500 font-bold text-2xl">
        ${totalPrice.toFixed(2)}
      </div>
      {/* OPTIONS */}
      <div className="flex gap-12">
        {options &&
          options.map((o, i) => {
            return (
              <button
                key={i}
                className="ring-1 ring-red-500 px-4 py-2 rounded"
                onClick={() => {
                  setSelectedOption(i);
                }}
                style={{
                  backgroundColor:
                    selectedOption === i ? "rgb(248 113 113)" : "white",
                  color: selectedOption === i ? "white" : "red",
                }}
              >
                {o.title}
              </button>
            );
          })}
      </div>
      {/* QUANTITY */}
      <div className="flex">
        <div className="flex ring-1 ring-red-500 justify-between w-full items-center px-3">
          <div>Quanitity</div>
          <div className="flex gap-3">
            <button
              onClick={() =>
                setQuantity((prev) => {
                  return prev > 1 ? prev - 1 : 1;
                })
              }
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() =>
                setQuantity((prev) => {
                  return prev < 9 ? prev + 1 : prev;
                })
              }
            >
              {">"}
            </button>
          </div>
        </div>
        <button className="bg-red-500 text-white uppercase w-56 p-3 ring-2 ring-red-500">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default OptionController;
