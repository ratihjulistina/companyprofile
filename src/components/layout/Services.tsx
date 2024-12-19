import React from "react";
import { Catagories } from "../elements/Catagories";

export function Services() {
  return (
    <div id="Services">
      <Catagories filterKey="Building Construction" />
      <Catagories filterKey="Data Centers" />
      <Catagories filterKey="Power, Oil, and Gas" />
    </div>
  );
}
