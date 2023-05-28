"use client";
import DialogLogin from "../dialogLogin/Index";
import "./Index.css";
import React from "react";

export default function Header(props) {
  return (
    <header
      data-testid="header"
      className="h-20 flex mobile:justify-between mobile:px-10 w-full fixed z-10 top-0"
    >
      <div className="flex items-center ">
        <img
          src="/assets/logo_ze.webp"
          alt="lodo do ze delivery"
          tabIndex={0}
        />
        <div className="ml-6 mobile:hidden ">
          <div tabIndex={0}>Receber agora em</div>
          <label className="text-yellow-300" tabIndex={0}>
            Seu endereço aqui, XXX - Lorem, SP ...
          </label>
        </div>
      </div>
      <div className="flex items-center">
        <DialogLogin />
        <div className="ml-4 relative">
          <div className="cartBadge" tabIndex={0}>
            {props.bagValue}
          </div>
          <img src="/assets/bag.svg" alt="sacolinha de compra" tabIndex={0} />
        </div>
      </div>
    </header>
  );
}
