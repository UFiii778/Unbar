"use client";

import React from "react";
import { motion } from "framer-motion";

const FooterBanner = () => {
    return (
        <section className="w-full bg-[#030014] pt-10 pb-4 overflow-hidden select-none">
            <div className="w-full text-center flex justify-center items-center relative">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[22vw] leading-none font-bold tracking-tighter text-white font-sans relative inline-block"
                >
                    IBB
                    <span className="absolute top-[8%] right-[-12%] sm:right-[-8%] text-[3vw] font-semibold text-gray-100 tracking-normal">
                        2026
                    </span>
                </motion.h1>
            </div>
        </section>
    );
};

export default FooterBanner;