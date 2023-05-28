"use client";
import Header from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import Footer from "@/components/footer/Footer";
import { useState, createContext } from "react";
import Products from "@/data/products";

const inter = Inter({ subsets: ["latin"] });

const data = { cartValue: 0, products: Products };

export const bagCountContext = createContext(data);

export const metadata = {
  title: "Doni Delivery",
  description: "Delivery de bebidas e petisco",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({ children }) {
  const [bagCount, setBagCount] = useState(0);
  const [products, setProducts] = useState(data.products);

  return (
    <html lang="pt-BR">
      <body className={inter.className} suppressHydrationWarning={true}>
        <bagCountContext.Provider
          value={{ bagCount, setBagCount, products, setProducts }}
        >
          <Header bagValue={bagCount}></Header>
          {children}
          <Footer></Footer>
        </bagCountContext.Provider>
      </body>
    </html>
  );
}
