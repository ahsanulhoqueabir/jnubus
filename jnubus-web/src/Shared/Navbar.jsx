import React, { useState } from "react";
import { Link } from "react-router-dom";
import jnulogo from "../assets/jnulogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-[rgba(255,255,255,0.5)] shadow-lg lg:fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to={""} className=" text-2xl font-bold">
              <img src={jnulogo} className="size-10" alt="hi" />
            </Link>
          </div>
          {/* Menu button for mobile */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover: focus:outline-none focus:"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center">
            <Link
              to={"/"}
              className=" hover: px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to={"buses"}
              className=" hover: px-3 py-2 rounded-md text-sm font-medium"
            >
              Buses
            </Link>
            <Link
              to={"routes"}
              className=" hover: px-3 py-2 rounded-md text-sm font-medium"
            >
              Routes
            </Link>
            <Link
              to={"drivers"}
              className=" hover: px-3 py-2 rounded-md text-sm font-medium"
            >
              Drivers
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to={"/"}
              className=" hover: block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to={"buses"}
              className=" hover: block px-3 py-2 rounded-md text-base font-medium"
            >
              Buses
            </Link>
            <Link
              to={"routes"}
              className=" hover: block px-3 py-2 rounded-md text-base font-medium"
            >
              Routes{" "}
            </Link>
            <Link
              to={"drivers"}
              className=" hover: block px-3 py-2 rounded-md text-base font-medium"
            >
              Drivers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
