"use client";
import React from "react";
// import MenuItem from "../menu/elements/MenuItem";
import useScrollPos from "@/hooks/useScrollPos";
// import BurgerMenu from "../menu/BurgerMenu";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "../elements/MenuItem";
import { rubik } from "@/static/Font";

function Navbar() {
  const isAtTop2 = useScrollPos();
  return (
    <div
      id="Navbar"
      className={`sticky -mt-14 top-0 z-50 flex flex-row justify-around items-center ${
        isAtTop2
          ? "opacity-100"
          : "opacity-0 hover:opacity-100 transition-opacity duration-500"
      }  `}
      //bg-gradient-to-r from-transparent to-black text-white
    >
      <Link
        className="h-[100%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."
        href="/#Hero"
      >
        <Image
          className="object-cover h-[100%]"
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
        />
      </Link>
      <div
        className={`${rubik.variable} font-sans flex justify-end font-semibold text-0.5xl w-3/4 text-black gap-10 mr-10`}
      >
        <div className=" hover:text-[rgb(217,8,45)] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <MenuItem title="Home" />
        </div>
        <div className=" hover:text-[rgb(217,8,45)] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <MenuItem title="About Us" />
        </div>
        <div className=" hover:text-[rgb(217,8,45)] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <MenuItem title="Services" />
        </div>
        <div className=" hover:text-[rgb(217,8,45)] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
          <MenuItem title="Teams" />
        </div>
      </div>
      {/* <BurgerMenu /> */}
    </div>
  );
}

export default Navbar;
