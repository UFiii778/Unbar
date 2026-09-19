"use client";

import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { CgInstagram } from "react-icons/cg";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaDiscord, FaSpotify, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#030014] py-12 px-[5%] sm:px-[10%] flex flex-col items-center">
      <div className="w-full max-w-5xl pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} UNBAR-ATB-UICM. All rights reserved.</p>
        <p className="font-light">
          Designed with ❤️ based in <span className="font-medium text-gray-400">Bandung</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;