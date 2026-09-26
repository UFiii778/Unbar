'use client'

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import GalleryBento from "./components/GalleryBento";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Rsvp from "./components/Rsvp";
import WhatsappCard from "./components/WhatsappCard";
import CurveDivider from "./components/CurveDivider";
import BankTransfer from "./components/BankTransfer";
import FooterBanner from "./components/FooterBanner";

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <Navbar />
        <Header />
        <About />
        <GalleryBento />
        <Gallery />
        <Location />
        <Rsvp />
        <CurveDivider />
        <main className="space-y-20 py-20 bg-[#030014]">
        <WhatsappCard />
        <BankTransfer />
        <FooterBanner />
        </main>
        <Footer />
      </div>
    </>
  );
}