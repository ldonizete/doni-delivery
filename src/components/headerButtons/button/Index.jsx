"use client";
import { bagCountContext } from "@/app/layout";
import "./Index.css";
import { useContext } from "react";
import Products from "@/data/products";

export default function HeadButton(props) {
  const { setProducts } = useContext(bagCountContext);

  function filterProducts(label) {
    const filteredNumbers = Products.filter((product) => product.tag == label);
    setProducts(filteredNumbers);
  }

  return (
    <button
      className="btnMenuHead"
      aria-label={props.name}
      onClick={() => filterProducts(props.label)}
    >
      <img src={`/assets/${props.label}.webp`} alt={props.name} tabIndex={0} />
      {props.name}
    </button>
  );
}
