"use client";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-left">
        <img
          src="rockLogoH.png"
          alt="RockYourContentLogoHorizontal"
          className="logo-img"
        />
      </div>
      <div className="footer-right">
        <a href="aronlopezseca@gmail.com" className="icon-btn">
          <FaEnvelope />
        </a>
        <a href="2235281227" className="icon-btn">
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/rock.your.content?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="icon-btn"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/rocio-guadalupe-martinez-/ "
          className="icon-btn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.linkedin.com/company/rock-your-content/ "
          className="icon-btn"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}
