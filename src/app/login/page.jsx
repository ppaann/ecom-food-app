import React from "react";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  return (
    <div className="flex justify-center md:h-[calc(100vh-12rem)] h-[calc(100vh-9rem)] p-4 items-center">
      <div className="h-full md:h-[70%] flex shadow-2xl flex-col md:flex-row md:w-full xl:w-[60%] xl:h-1/2 rounded-md">
        <div className="relative h-1/3 md:h-full w-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-fill"></Image>
        </div>
        <div className="flex flex-col p-10 gap-8 md:w-1/2">
          <h1 className="font-bold text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 justify-start rounded ring-1 ring-slate-300 p-4 hover:bg-slate-200">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            ></Image>
            <p>Sign in with Google</p>
          </button>
          <button className="flex gap-4 justify-start rounded ring-1 ring-slate-300 p-4 h">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            ></Image>
            <p>Sign in with Facebook</p>
          </button>
          <p>
            Have a problem?
            <Link className="underline" href="/">
              {" "}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
