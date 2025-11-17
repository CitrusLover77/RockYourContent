"use client";
import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="RockYourContentLogo" className="logo-img" />
      </div>
      <div className="navbar-right">
        <a href="#" className="icon-btn">
          <FaInstagram />
        </a>
        <a href="#" className="icon-btn">
          <FaLinkedinIn />
        </a>
      </div>
    </nav>
  );
}
