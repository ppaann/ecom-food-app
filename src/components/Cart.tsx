import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <div className="relative w-8 h-8 ">
        <Image src="/cart.png" alt="" fill />
      </div>
      <Link href="/cart">Cart (2)</Link>
    </div>
  );
};

export default Cart;
