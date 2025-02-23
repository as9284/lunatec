import React from "react";
import cartIcon from "../assets/cart.svg";

export const Home = () => {
  return (
    <div className="custom-container">
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src={cartIcon}
          alt="Shopping Cart"
          className="w-72 h-72 md:w-80 md:h-80"
        />
        <div className="w-full flex flex-col items-center justify-center gap-1 -mt-6 mb-2 text-center">
          <h1 className="text-xl md:text-3xl font-bold">
            Affordable, innovative and reliable
          </h1>
          <p className="text-sm md:text-base font-normal uppercase">
            Explore and find your own gadget
          </p>
        </div>
        <button className="main-btn">Explore</button>
      </div>
    </div>
  );
};
