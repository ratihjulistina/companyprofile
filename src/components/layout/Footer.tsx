import SocialMedia from "@/static/SocialMedia";
import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[rgb(167,37,61)] opacity-90 h-max py-10 border-t-[1px] border-gray-500 px-10">
      <div className="flex flex-col justify-start items-start">
        <div className="font-extrabold text-6xl italic text-black">
          Numflics
        </div>
        <SocialMedia size={100} />
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
