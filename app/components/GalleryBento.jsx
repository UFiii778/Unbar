"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const BentoCard = ({ item, index, onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            onClick={() => onClick(item)}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100/50 flex flex-col justify-end p-5 sm:p-6 bg-gray-200 ${item.spanClass}`}
        >
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse z-10" />
            )}

            <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover group-hover:scale-108 transition-all duration-700 ease-out ${
                    isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                priority={index === 0}
                onLoad={() => setIsLoaded(true)}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300 z-10" />

            <div className="absolute top-4 left-4 z-20">
                <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-[11px] font-medium rounded-full border border-white/20 shadow-sm">
                    {item.tag}
                </span>
            </div>

            <div className="relative z-20 text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-semibold font-Ovo text-lg sm:text-xl md:text-2xl leading-snug">
                    {item.title}
                </h3>
                {item.description && (
                    <p className="text-gray-300 text-xs sm:text-sm font-sans mt-1 opacity-90 line-clamp-2">
                        {item.description}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

const GalleryBento = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const galleryList = [
        {
            id: 1,
            title: "Reuni Akbar & Temu Kangen",
            tag: "Crew",
            imageSrc: assets.Bento1 || assets.mainMe || assets.user_image,
            spanClass: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[440px]"
        },
        {
            id: 2,
            title: "Nostalgia",
            tag: "Nostalgia",
            imageSrc: assets.Bento2 || assets.cert_revou || assets.user_image,
            spanClass: "md:col-span-1 md:row-span-1 min-h-[200px]"
        },
        {
            id: 3,
            title: "Ramah Tamah",
            description: "Saling bertukar cerita perjalanan hidup & karir.",
            tag: "Silaturahmi",
            imageSrc: assets.Bento3 || assets.cert_react || assets.user_image,
            spanClass: "md:col-span-1 md:row-span-1 min-h-[200px]"
        },
        {
            id: 4,
            title: "Sesi Foto Angkatan",
            description: "Mengabadikan senyum dan kebersamaan sahabat lama.",
            tag: "Dokumentasi",
            imageSrc: assets.Bento5  || assets.cert_full || assets.user_image,
            spanClass: "md:col-span-1 md:row-span-1 min-h-[210px]"
        },
        {
            id: 5,
            title: "Panggung Hiburan & Musik",
            description: "Malam keakraban penuh gelak tawa dan hiburan nostalgia.",
            tag: "Musik",
            imageSrc: assets.Bento4 || assets.user_image,
            spanClass: "md:col-span-2 md:row-span-1 min-h-[210px]"
        }
    ];

    return (
        <div id="gallery" className="w-full px-[6%] sm:px-[10%] py-16 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-2xl mx-auto mb-12"
            >
                <h2 className="text-3xl sm:text-5xl font-Ovo text-gray-900">
                    Kenangan Kebersamaan
                </h2>
                <p className="text-gray-600 font-sans text-sm sm:text-base mt-3 leading-relaxed">
                    Kumpulan potret hangat dan cerita keceriaan kita saat berkumpul bersama kawan-kawan alumni.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {galleryList.map((item, index) => (
                    <BentoCard
                        key={item.id}
                        item={item}
                        index={index}
                        onClick={setSelectedPhoto}
                    />
                ))}
            </div>
        </div>
    );
};

export default GalleryBento;