"use client";

import React from "react";
import { motion } from "framer-motion";

const FooterBanner = () => {
    return (
        <section className="w-full bg-transparent pt-12 pb-6 overflow-hidden select-none flex justify-center items-center">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative inline-flex items-start justify-center"
            >
                <h1 className="text-[28vw] sm:text-[24vw] md:text-[22vw] leading-none font-extrabold tracking-tighter text-white font-sans">
                    IBB
                </h1>

                <span className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] font-bold text-amber-300 tracking-normal ml-1 sm:ml-2 mt-[1vw] sm:mt-[1.5vw]">
                    2026
                </span>
            </motion.div>
        </section>
    );
};

export default FooterBanner;