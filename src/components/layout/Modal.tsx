"use client";

import { useContext } from "react";
import { GlobalStateContext } from "@/contexts/GlobalStateContext";
import ContactForm from "@/static/ContactForm";
import Close from "@/components/elements/Close";

function Modal() {
  const context = useContext(GlobalStateContext);

  return (
    <>
      {context?.isModalOpen ? (
        <>
          <div
            className="fixed top-0 right-0 p-2 z-[101]"
            onClick={context.exitModal}
          >
            <Close />
          </div>
          <div className="fixed top-0 left-0 text-white text-3xl bg-[rgb(217,8,45)] bg-opacity-20 backdrop-blur-md w-full h-screen min-h-screen z-[100]">
            <ContactForm />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
export default Modal;
