import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Smartphones", path: "/smartphones" },
    { name: "Laptops", path: "/laptops" },
    { name: "Desktops", path: "/desktops" },
    { name: "About", path: "/about" },
  ];

  const linkStyles = ({ isActive }) =>
    `px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
    }`;

  const toggleCart = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    setIsCartOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    if (isCartOpen) setIsCartOpen(false);
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`w-full fixed ${
        isScrolled ? "bg-neutral-100 shadow-md" : "bg-neutral-100"
      } top-0 transition-all duration-300 flex justify-between items-center py-4 px-8 z-50`}
    >
      <h3 className="text-3xl font-bold">Lunatec</h3>

      <div className="flex items-center space-x-4">
        {/* Mobile Menu Icon */}
        {isMobile ? (
          <Hamburger
            size={30}
            rounded
            direction="right"
            toggled={isMenuOpen}
            toggle={toggleMenu}
          />
        ) : (
          // Desktop Nav Links
          <div className="flex space-x-4">
            {navLinks.map(({ name, path }) => (
              <NavLink key={path} to={path} className={linkStyles}>
                {name}
              </NavLink>
            ))}
          </div>
        )}

        {/* Cart Button */}
        <button
          onClick={toggleCart}
          className="relative p-2 rounded-full cursor-pointer hover:bg-gray-300 duration-300"
        >
          <AiOutlineShoppingCart size={isMobile ? 30 : 24} />
        </button>
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute top-16 right-4 w-56 bg-neutral-100 shadow-sm rounded-lg p-4 overflow-hidden">
          <p>Your cart is empty</p>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 left-0 w-full bg-neutral-100 flex flex-col items-center overflow-hidden"
          >
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                className={linkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
