"use client";
import { bagCountContext } from "@/app/layout";
import ProductCard from "../productCard/Index";
import React, { useContext } from "react";

export default function Produts() {
  const { products } = useContext(bagCountContext);

  return (
    <ul className="flex ml-24 flex-wrap  ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          asset={product.img}
        />
      ))}
    </ul>
  );
}
