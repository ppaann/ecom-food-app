import React from "react";
import Image from "next/image";

const cart = () => {
  return (
    <div className="flex flex-col text-red-500 h-[calc(100vh-9rem)] md:h-[calc(100vh-12rem)] md:flex-row">
      {/* PRODUCT CONTAINER */}
      <div className="basis-1/2 md:basis-2/3 lg:basis-1/2 flex flex-col lg:p-20 xl:p-40 gap-4 justify-center p-4">
        {/* SINGLE PRODUCT */}
        <div className="flex justify-between gap-4 items-center">
          <Image
            src="/temporary/p1.png"
            alt=""
            width={100}
            height={100}
            className="object-contain"
          ></Image>
          <div className="flex flex-col">
            <h1 className="uppercase font-bold text-xl">Sicilian pizza</h1>
            <p>large</p>
          </div>
          <div className="font-bold">$23.12</div>
          <button>X</button>
        </div>{" "}
        <div className="flex justify-between gap-4 items-center">
          <Image
            src="/temporary/p1.png"
            alt=""
            width={100}
            height={100}
            className="object-contain"
          ></Image>
          <div className="flex flex-col">
            <h1 className="uppercase font-bold text-xl">Sicilian pizza</h1>
            <p>large</p>
          </div>
          <div className="font-bold">$23.12</div>
          <button>X</button>
        </div>
      </div>
      {/* PRICE CONTAINER  */}
      <div className="basis-1/2 md:basis-1/3 lg:basis-1/2 bg-fuchsia-50 py-20 px-4 flex flex-col gap-12 justify-center">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div>Subtotal(3 items)</div>
            <div>$3.12</div>
          </div>
          <div className="flex justify-between">
            <div>Service Cost</div>
            <div>$0.00</div>
          </div>
          <div className="flex justify-between">
            <div>Delivery Cost</div>
            <div className="text-green-500">$3.12</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between uppercase">
            <div>Total(incl. vat)</div>
            <div className=" font-bold">$26.24</div>
          </div>
          <hr />
          <button className="bg-red-500 text-white w-1/2 py-2 uppercase rounded self-end">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default cart;
