import { rubik } from "@/static/Font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div id="About Us" className="w-full bg-[rgb(109,26,41)] min-h-sreen py-5">
      <div className="w-[87.4%] min-h-max m-auto mb-16">
        <h1
          className={`${rubik.variable} font-sans text-5xl font-bold italic tracking-widest text-white py-10`}
        >
          About Us
        </h1>
        <div className="flex flex-row justify-between gap-5">
          <div className="w-[50%]">
            <Image
              src={"/hero.jpg"}
              alt="Aboutimage"
              width={800}
              height={800}
              className="object-cover rounded-md border-orange-800"
            />
          </div>
          <div
            className={`${rubik.variable} font-sans w-1/2 flex flex-col justify-start items-start gap-5`}
          >
            <p className="text-white">
              Numflics is the largest simulation house specializing in providing
              advanced engineering services, including CFD Modelling, Finite
              Element Analysis, Piping Stress Analysis, Acoustic Analysis,
              Vibration, FIV/AIV, Flow Assurance Analysis and Surge Analysis.
              For nearly 20 years, we have delivered tailored solutions to
              diverse industries, including Building, Infrastructure, Power,
              Water, and Oil & Gas. Founded at Bandung, our team of over 50
              highly skilled engineers with multidisciplinary expertise
              continues to push the boundaries of innovation, earning us a
              reputation as a trusted partner for owners, contractors,
              consultants, and OEM suppliers.
            </p>
            <Link
              href={"/#"}
              className={`${rubik.variable} font-sans text-white font-semibold transition ease-in-out duration-300 border border-x-2 border-y-2 border-[rgb(217,8,45)] rounded-md m-auto px-3 py-2 text-center hover:bg-[rgb(217,8,45)] `}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
