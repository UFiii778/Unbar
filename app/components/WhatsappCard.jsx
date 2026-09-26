"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsappCard = () => {
    const admins = [
        {
            name: "Ceu Heavy",
            phone: "+62 812-1496-2181",
            role: "Panitia Pendaftaran",
            waLink:
                "https://wa.me/6281214962181?text=Halo%20Ceu%20Heavy,%20saya%20ingin%20mendaftar%20kehadiran%20Reuni%20Akbar%20UNBAR/UICM/ATB",
        },
        {
            name: "Ceu Lia",
            phone: "+62 815-7305-3208",
            role: "Panitia Konfirmasi",
            waLink:
                "https://wa.me/6281573053208?text=Halo%20Ceu%20Lia,%20saya%20ingin%20mendaftar%20kehadiran%20Reuni%20Akbar%20UNBAR/UICM/ATB",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden"
        >
            <div id="contach" className="absolute -top-16 left-1/2 -translate-x-1/2 w-full h-65 bg-emerald-500/15 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex justify-center mb-5 relative">
                <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 border border-emerald-300/30"
                >
                    <BsWhatsapp className="w-8 h-8 sm:w-10 sm:h-10 fill-current drop-shadow-md" />
                </motion.div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent mb-2">
                Pendaftaran Kehadiran Berbayar
            </h3>
            <p className="text-xs sm:text-sm text-gray-300/90 max-w-md mx-auto mb-8 font-light leading-relaxed">
                Ingin mendapatkan <span className="text-emerald-400 font-semibold">Official T-Shirt</span> eksklusif? Hubungi salah satu nomor WhatsApp Admin di bawah ini:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {admins.map((admin, index) => (
                    <motion.a
                        key={index}
                        href={admin.waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative flex flex-col justify-between bg-white/[0.03] hover:bg-emerald-500/[0.08] border border-white/10 hover:border-emerald-500/40 p-5 rounded-2xl transition-all duration-300 text-left shadow-lg overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400/80 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                                    {admin.role}
                                </span>
                                <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-emerald-500 text-gray-300 group-hover:text-white flex items-center justify-center transition-all duration-300">
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>

                            <h4 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors mb-1">
                                {admin.name}
                            </h4>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-emerald-200/80 transition-colors mt-3 pt-3 border-t border-white/5">
                            <Phone className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="font-mono tracking-wide">{admin.phone}</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default WhatsappCard;