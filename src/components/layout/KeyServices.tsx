import { rubik } from "@/static/Font";
import React from "react";

function KeyServices() {
  return (
    <div className="w-full bg-[rgb(167,37,61)] opacity-80 ">
      <div className="w-[87.4%] min-h-max m-auto py-10 opacity-100">
        <h1
          className={`${rubik.variable} font-sans text-3xl font-bold italic tracking-widest text-black`}
        >
          KEY SERVICES
        </h1>
        <div
          className={`${rubik.variable} font-sans grid grid-cols-3 gap-5 my-10 text-white`}
        >
          <button className="border rounded-lg py-5 px-3 border-y-4 border-x-4 text-xl font-medium hover:bg-zinc-200 hover:text-[rgb(217,8,45)]">
            Building and Constraction
          </button>
          <button className="border rounded-lg py-5 px-3 border-y-4 border-x-4 text-xl font-medium hover:bg-zinc-200 hover:text-[rgb(217,8,45)]">
            Data Centers
          </button>
          <button className="border rounded-lg py-5 px-3 border-y-4 border-x-4 text-xl font-medium hover:bg-zinc-200 hover:text-[rgb(217,8,45)]">
            FEA Analsysis
          </button>
          <button className="border rounded-lg py-5 px-3 border-y-4 border-x-4 text-xl font-medium hover:bg-zinc-200 hover:text-[rgb(217,8,45)]">
            Root Cause Analysis
          </button>
          <button className="border rounded-lg py-5 px-3 border-y-4 border-x-4 text-xl font-medium hover:bg-zinc-200 hover:text-[rgb(217,8,45)]">
            Acoustic Analysis
          </button>
          <button className="border rounded-lg py-5 px-3 border-y-4 border-x-4 text-xl font-medium hover:bg-zinc-200 hover:text-[rgb(217,8,45)]">
            Pipe Stress Analysis & Support Design
          </button>
        </div>
      </div>
    </div>
  );
}

export default KeyServices;
