import React from "react";
import logoApp from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div>
        <div className="flex justify-between ">
          <div className="flex items-center">
            <img className="w-[30px] h-[30px]" src={logoApp} alt="" />
            <a className="text-xl text-purple-600">HERO.IO</a>
          </div>
          <div>
            <p className="text-xl mb-3">Social Links</p>
            <div className="flex gap-5">
              <a
                className="text-xl"
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <FaFacebook />
              </a>
              <a
                className="text-xl"
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <FaInstagramSquare />
              </a>
              <a
                className="text-xl"
                target="_blank"
                rel="noopener noreferrer"
                href=""
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center mt-4 text-gray-500">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
