"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import ScrollReveal from "./reactbits/ScrollReveal";

const PARTICIPANTS = [
    { id: 1, name: "Agus Kuncen", role: "Software Engineering '24", image: assets.User1 || assets.user_image, status: "Hadir" },
    { id: 2, name: "Ahmad Rizky", role: "Alumni Unbar '20", image: assets.User2 || assets.user_image, status: "Hadir" },
    { id: 3, name: "Siti Nurhaliza", role: "Alumni ATB '21", image: assets.User3 || assets.user_image, status: "Hadir" },
    { id: 4, name: "Budi Santoso", role: "Alumni UICM '19", image: assets.User4 || assets.user_image, status: "Hadir" },
    { id: 5, name: "Rina Anggraini", role: "Alumni Unbar '22", image: assets.User5 || assets.user_image, status: "Hadir" },
    { id: 6, name: "Alumni 6", role: "Alumni ATB '18", image: assets.User6 || assets.user_image, status: "Hadir" },
    { id: 7, name: "Alumni 7", role: "Alumni ATB '18", image: assets.User7 || assets.user_image, status: "Hadir" },
    { id: 8, name: "Alumni 8", role: "Alumni ATB '18", image: assets.User8 || assets.user_image, status: "Hadir" },
    { id: 9, name: "Alumni 9", role: "Alumni ATB '18", image: assets.User9 || assets.user_image, status: "Hadir" },
    { id: 10, name: "Alumni 10", role: "Alumni ATB '18", image: assets.User10 || assets.user_image, status: "Hadir" },
    { id: 11, name: "Alumni 11", role: "Alumni ATB '18", image: assets.User11 || assets.user_image, status: "Hadir" },
    { id: 12, name: "Alumni 12", role: "Alumni ATB '18", image: assets.User12 || assets.user_image, status: "Hadir" },
    { id: 13, name: "Alumni 13", role: "Alumni ATB '18", image: assets.User13 || assets.user_image, status: "Hadir" },
    { id: 14, name: "Alumni 14", role: "Alumni ATB '18", image: assets.User14 || assets.user_image, status: "Hadir" },
    { id: 15, name: "Alumni 15", role: "Alumni ATB '18", image: assets.User15 || assets.user_image, status: "Hadir" },
    { id: 16, name: "Alumni 16", role: "Alumni ATB '18", image: assets.User16 || assets.user_image, status: "Hadir" },
    { id: 17, name: "Alumni 17", role: "Alumni ATB '18", image: assets.User17 || assets.user_image, status: "Hadir" },
    { id: 18, name: "Alumni 18", role: "Alumni ATB '18", image: assets.User18 || assets.user_image, status: "Hadir" },
    { id: 19, name: "Alumni 19", role: "Alumni ATB '18", image: assets.User19 || assets.user_image, status: "Hadir" },
    { id: 20, name: "Alumni 20", role: "Alumni ATB '18", image: assets.User20 || assets.user_image, status: "Hadir" },
];

const ParticipantCard = ({ item }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="w-52 sm:w-64 bg-white border border-gray-200/90 rounded-2xl p-3 shadow-sm flex flex-col items-center shrink-0">
            <div className="w-full aspect-square relative rounded-xl overflow-hidden bg-gray-200">
                
                {!isLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse z-10 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-gray-300 border-t-amber-500 rounded-full animate-spin" />
                    </div>
                )}

                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 200px, 256px"
                    className={`object-cover select-none transition-opacity duration-500 ${
                        isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    draggable={false}
                    onLoad={() => setIsLoaded(true)}
                />

                <div className="absolute top-2 right-2 bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm z-20">
                    <BsCheckCircleFill className="w-2.5 h-2.5" />
                    {item.status}
                </div>
            </div>
        </div>
    );
};

const Gallery = () => {
    const carouselRef = useRef(null);
    const innerTrackRef = useRef(null);
    const [maxScroll, setMaxScroll] = useState(0);

    useEffect(() => {
        if (carouselRef.current && innerTrackRef.current) {
            const scrollWidth = innerTrackRef.current.scrollWidth;
            const clientWidth = carouselRef.current.clientWidth;
            setMaxScroll(scrollWidth - clientWidth);
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            id="participants"
            className="w-full max-w-6xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 py-20 overflow-hidden"
        >
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-xl md:text-5xl mb-1 font-Ovo font-medium text-black">
                <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block text-3xl sm:text-5xl text-center"
                >
                    Yang Akan Hadir
                </motion.span>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 font-sans text-sm sm:text-base max-w-xl mx-auto px-4"
            >
                Deretan kawan-kawan alumni yang telah mengkonfirmasi kehadiran dan memasang Twibbon Reuni Akbar 2026.
            </motion.p>

            <div ref={carouselRef} className="w-full relative py-6 overflow-hidden cursor-grab active:cursor-grabbing">
                <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                {/* ANIMATED AUTO SCROLL SUDAH DIHAPUS */}
                <motion.div
                    ref={innerTrackRef}
                    className="flex gap-5 w-max select-none"
                    drag="x"
                    dragConstraints={{ right: 0, left: -maxScroll }}
                    dragElastic={0.08}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {PARTICIPANTS.map((item) => (
                        <ParticipantCard key={item.id} item={item} />
                    ))}
                </motion.div>
            </div>

            <div className="w-full max-w-3xl mt-10 px-6 text-center font-Ovo">
                <ScrollReveal
                    baseOpacity={0.15}
                    enableBlur
                    baseRotation={2}
                    blurStrength={4}
                >
                    "Sampai jumpa di Reuni Akbar 2026. Mari kembali menyambung tali silaturahmi dan merajut kisah kenangan indah bersama."
                </ScrollReveal>
            </div>
        </motion.div>
    );
};

export default Gallery;