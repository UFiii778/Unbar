"use client";

import React from "react";
import { motion } from "motion/react";
import RotatingText from "./reactbits/RotatingText";
import Aurora from "./reactbits/Aurora";
import CountdownTimer from "./CountdownTimer";
import { Calendar, BellRing } from "lucide-react";

const Header = () => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        "Reuni Akbar 2026 (UNBAR, ATB, UICM)"
    )}&dates=20261122T080000Z/20261122T170000Z&details=${encodeURIComponent(
        "Reuni Akbar Tak Putus, Warna yang Tak Pudar. Jangan lupa hadir!"
    )}&location=${encodeURIComponent("Bandung, Indonesia")}`;

    return (
        <div className="w-full min-h-screen relative flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">

            <div className="absolute inset-0 pointer-events-none z-0 opacity-40 w-full h-full">
                <Aurora
                    colorStops={["#27BEF5", "#918959", "#F5DA27"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.6}
                />
            </div>

            <div className="w-full max-w-4xl text-center mx-auto flex flex-col items-center justify-center gap-6 z-10">

                <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-5xl mb-1 font-Ovo font-medium text-black">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.4 }}
                        className="inline-block min-w-[150px] text-3xl sm:text-6xl lg:text-[46px] text-center">
                        Hallo Kami dari{""}
                        <RotatingText
                            texts={['UNBAR!', 'ATB!', 'UICM!']}
                            mainClassName="px-2 sm:px-3 bg-yellow-400 font-Pop text-white overflow-hidden py-1 justify-center rounded-lg inline-flex"
                            staggerFrom="last"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3000}
                        />
                    </motion.span>
                </div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }} 
                    className="text-3xl sm:text-5xl lg:text-[50px] font-Ovo leading-tight">
                    Kami mengundang Anda untuk hadir di Reuni Akbar IBB-2026
                </motion.h1>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full flex justify-center mt-2"
                >
                    <CountdownTimer targetDate="2026-11-22T00:00:00" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
                    
                    <a 
                        href="#rsvp" 
                        className="w-full sm:w-auto px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-sky-500/30 transition-all active:scale-95"
                    >
                        Konfirmasi Kehadiran <Calendar className="w-4 h-4" />
                    </a>

                    <a
                        href={googleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-7 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-medium border border-gray-200 flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
                    >
                        Ingatkan Ke Kalender <BellRing className="w-4 h-4 text-amber-500" />
                    </a>

                </motion.div>

            </div>
        </div>
    );
};

export default Header;