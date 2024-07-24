import React from "react";
import Products from "../components/Products";
import Pages from "../components/Pages";

export default function Body() {
  return (
    <div>
      <div className="d-flex justify-content-evenly container text-center">
        <Products />
        <Pages />
      </div>
    </div>
  );
}
