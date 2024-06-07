import React from "react";
import { FaGlobe, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <p>
          <span>Transport Administrator : </span>{" "}
          <a href="tel:+01711205815">01711205815</a>
        </p>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://jnu.ac.bd/">
            <FaGlobe className="size-6 text-red-500" />
          </a>
          <a href="https://www.linkedin.com/school/jagannath-university-dhaka/">
            <FaLinkedin className="size-6 text-blue-500 " />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © 2024 -
          <a href="https://www.linkedin.com/in/AhsanulHoqueAbir/">
            MD Ahsanul Hoque Abir
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
