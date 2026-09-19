"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
    HiOutlineMapPin, 
    HiOutlineClock, 
    HiOutlineClipboardDocumentCheck, 
    HiOutlineClipboard,
    HiOutlineArrowUpRight,
    HiOutlineSun,
    HiOutlineSparkles,
    HiOutlineBuildingStorefront
} from "react-icons/hi2";
import { ParkingCircleIcon } from "lucide-react";

const Location = () => {
    const [copied, setCopied] = useState(false);
    const addressText = "150 Coffee and Garden, Jl. Sulaksana No.50, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40282";

    const handleCopy = () => {
        navigator.clipboard.writeText(addressText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="location" className="w-full max-w-6xl mx-auto py-20 px-4 font-sans">
            <div className="text-center mb-12">
                <motion.span 
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xs sm:text-sm font-semibold tracking-widest text-sky-600 uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block mb-3"
                >
                    Venue & Location
                </motion.span>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-3xl sm:text-5xl font-Ovo font-medium text-gray-900"
                >
                    Lokasi Acara
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-5 bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6"
                >
                    <div>
                        <div className="flex items-center gap-3 text-emerald-600 font-medium text-sm mb-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            Outdoor Garden Venue
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold font-Ovo text-gray-800">
                            150 Coffee and Garden
                        </h3>

                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                            Jl. Sulaksana No.50, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40282
                        </p>

                        {/* Event Time & Date Details */}
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-3 text-gray-700 text-sm">
                                <div className="p-2.5 bg-gray-100 rounded-xl text-gray-700">
                                    <HiOutlineMapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Area</p>
                                    <p className="font-semibold">Cicaheum, Bandung</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-700 text-sm">
                                <div className="p-2.5 bg-gray-100 rounded-xl text-gray-700">
                                    <HiOutlineClock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Waktu Acara</p>
                                    <p className="font-semibold">09:00 WIB - Selesai</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Fasilitas Tempat</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200/60 rounded-xl text-xs font-medium text-gray-600">
                                    <HiOutlineSun className="w-4 h-4 text-emerald-600" /> Garden Area
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200/60 rounded-xl text-xs font-medium text-gray-600">
                                    <HiOutlineSparkles className="w-4 h-4 text-amber-600" /> Aesthetic Cafe
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200/60 rounded-xl text-xs font-medium text-gray-600">
                                    <ParkingCircleIcon className="w-4 h-4 text-blue-600" /> Parkiran Luas
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <a
                            href="https://maps.google.com/?q=150+Coffee+and+Garden+Bandung"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 hover:bg-black text-white rounded-2xl text-sm font-medium transition-all shadow-md hover:shadow-lg"
                        >
                            Petunjuk Arah <HiOutlineArrowUpRight className="w-4 h-4" />
                        </a>

                        <button
                            onClick={handleCopy}
                            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl text-sm font-medium transition-all"
                        >
                            {copied ? (
                                <>
                                    <HiOutlineClipboardDocumentCheck className="w-5 h-5 text-emerald-600" />
                                    <span>Tersalin!</span>
                                </>
                            ) : (
                                <>
                                    <HiOutlineClipboard className="w-5 h-5 text-gray-500" />
                                    <span>Salin Alamat</span>
                                </>
                            )}
                        </button>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-7 bg-gray-100 border border-gray-200/80 rounded-3xl overflow-hidden min-h-[380px] lg:min-h-full relative shadow-sm group"
                >
                    <iframe
                        title="150 Coffee and Garden Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.82585243176!2d107.64966627587425!3d-6.911422793088053!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7e1f1bb58d9%3A0xb3dbf469aa941c2d!2s150%20Coffee%20and%20Garden!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        className="w-full h-full min-h-[380px] border-0 filter grayscale-[20%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>

            </div>
        </section>
    );
};

export default Location;