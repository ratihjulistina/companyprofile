import React from "react";
import ContactBtn from "@/components/elements/ContactBtn";

function Contact() {
  return (
    <div
      id="Contact"
      className="bg-[rgb(49,51,59)] h-screen border-x-2 border-b-2 border-[#ffc96b] pt-20 mobile:h-min "
    >
      {/* <img
        className="w-full h-44"
        src="transitions/transitions_grey.svg"
        alt="transition"
      /> */}

      <div className="flex flex-row justify-between items-center">
        <div className="w-[40%] h-0.5 bg-[#ffc96b]"></div>
        <div className="text-2xl font-bold font-serif text-[#f8f7f6]">
          Contact
        </div>
        <div className="w-[40%] h-0.5 bg-[#ffc96b]"></div>
      </div>
      <div className="flex flex-col justify-center items-center text-[#292933] w-[70%] m-auto gap-5 py-20">
        <ContactBtn title="Get in touch!" />
      </div>
    </div>
  );
}

export default Contact;
