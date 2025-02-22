import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

export const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Smartphones", path: "/smartphones" },
    { name: "Laptops", path: "/laptops" },
    { name: "Desktops", path: "/desktops" },
    { name: "About Us", path: "/about" },
  ];

  const linkStyles = ({ isActive }) =>
    `px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <nav className="w-full fixed top-0 bg-white shadow-sm flex justify-between items-center p-4 z-50">
      <h3 className="text-3xl font-medium">Lunatec</h3>

      {/* Mobile Menu Icon */}
      {isMobile ? (
          <Hamburger
            size={30}
            rounded
            direction="right"
            toggled={isOpen}
            toggle={setIsOpen}
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

      {/* Mobile Dropdown Menu with Animation */}
      {isMobile && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-16 left-0 w-full bg-white shadow-sm flex flex-col items-center overflow-hidden"
        >
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={linkStyles}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
