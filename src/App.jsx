import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Smartphones } from "./pages/Smartphones";
import { Laptops } from "./pages/Laptops";
import { Desktops } from "./pages/Desktops";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/desktops" element={<Desktops />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
