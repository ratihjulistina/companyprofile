import React from "react";
import { Catagories } from "../elements/Catagories";

export function Services() {
  return (
    <div id="Services" className="bg-[rgb(109,26,41)] pb-10">
      <Catagories filterKey="Building Construction" />
      <Catagories filterKey="Data Centers" />
      <Catagories filterKey="Power, Oil, and Gas" />
    </div>
  );
}
