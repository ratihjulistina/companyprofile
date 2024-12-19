"use client";
import { GlobalStateContext } from "@/contexts/GlobalStateContext";
import { rubik } from "@/static/Font";

import React, { useContext, useEffect } from "react";

const ContactBtn = ({ title }: { title: string }) => {
  const context = useContext(GlobalStateContext);

  const handleClick = () => {
    context?.exitModal();
    context?.toggleModal();
  };

  useEffect(() => {
    if (context?.isModalOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [context?.isModalOpen]);

  return (
    <div
      className={`${rubik.variable} font-sans text-white font-semibold transition ease-in-out duration-300 border border-x-2 border-y-2 border-[rgb(217,8,45)] rounded-md m-auto px-3 py-2 text-center hover:bg-[rgb(217,8,45)] `}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default ContactBtn;
