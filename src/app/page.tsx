"use client";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import React from "react";
import { GlobalStateContext } from "@/contexts/GlobalStateContext";
import { useGlobal } from "@/hooks/global.customhooks";
// import Contact from "@/components/layout/Contact";
import Modal from "@/components/layout/Modal";
import KeyServices from "@/components/layout/KeyServices";
import About from "@/components/layout/About";
import { Catagories, Services } from "@/components/layout/Services";

export default function Home() {
  const {
    isMenuOpen,
    toggleMenu,
    exitMenu,
    isModalOpen,
    toggleModal,
    exitModal,
  } = useGlobal();
  return (
    <GlobalStateContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        exitMenu,
        isModalOpen,
        toggleModal,
        exitModal,
      }}
    >
      <Navbar />
      <Modal />
      <Hero />
      <KeyServices />
      <About />
      <Services />
    </GlobalStateContext.Provider>
  );
}