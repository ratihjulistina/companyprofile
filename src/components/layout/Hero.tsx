import Typing from "@/static/Typing";
import React from "react";
import ContactBtn from "../elements/ContactBtn";
import { rubik } from "@/static/Font";

function Hero() {
  return (
    <div>
      <div
        id="Hero"
        //className="flex items-center h-screen px-20 bg-gradient-to-r from-gradientLeft to-gradientRight"
        className="relative h-screen bg-[url(/Hero2.jpg)] bg-cover bg-center shadow-lg animate-scalepulse -mt-10"
      ></div>
      <div className="absolute top-0 right-0 w-full flex justify-evenly items-center my-20 px-20  mobile:flex-col-reverse mobile:ml-0 pt-0 ">
        <div className=" flex flex-col z-20 pointer-events-none text-black w-[87.4%] mobile:bg-[rgb(41,41,51)] mt-10 mobile:w-[100%] px-5 justify-center items-end m-auto mobile:pt-10">
          <div
            className={`${rubik.variable} text-[3vw] w-full font-sans text-left mobile:text-[4vw]`}
          >
            We are Engineering Simulation Consultant
          </div>
          <div
            className={`${rubik.variable} text-[2vw] w-full font-sans text-left flex flex-row justify-start items-center mobile:text-[4vw]`}
          >
            <p className="w-[30%]">Specialist In</p> <Typing />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-[#292933] w-[70%] m-auto gap-5 py-20 ">
          <ContactBtn title="Contact Us" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
