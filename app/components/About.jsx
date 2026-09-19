"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ScrollVelocity from "./reactbits/ScrollVelocity";
import { Quote, Sparkles, UserCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="w-full px-[6%] sm:px-[10%] py-20 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-200/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl font-Ovo text-gray-900 font-bold tracking-tight">
          Reuni Akbar 2026
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <div className="lg:col-span-7 space-y-6">
          <div className="relative pl-6 border-l-4 border-amber-400/80">
            <Quote className="absolute -top-3 -left-3 w-8 h-8 text-amber-400/20 -z-10" />
            <h3 className="text-2xl sm:text-3xl font-Ovo leading-snug text-gray-800 font-semibold">
              Perkenalkan Saya <span className="text-amber-600 font-bold">Agus Ridwan</span>, akrab dipanggil <span className="italic">Agus Kuncen</span>, Angkatan 91.
            </h3>
          </div>

          <p className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed pt-2">
            Yang diberi mandat oleh Ketua Umum IBB sebagai <strong className="text-gray-800 font-semibold">Ketua Pelaksana</strong> dalam Gelaran Acara Reuni Akbar IBB 2026.
          </p>

          <p className="text-gray-600 font-sans text-base leading-relaxed bg-amber-50/50 border border-amber-100 p-4 rounded-xl text-gray-700">
            "Saya mohon dukungan dan support kepada seluruh Anggota IBB, Alumni ATB - FT. UNBAR - UICM untuk terlaksananya acara Reuni Akbar IBB tahun 2026."
          </p>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-xl rounded-2xl p-3 relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            
            <div className="w-full h-80 relative rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={assets.Agus || assets.Agus}
                alt="Agus Ridwan - Ketua Pelaksana"
                fill
                sizes="(max-width: 640px) 90vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-4 text-center">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full mb-1">
                <UserCheck className="w-3.5 h-3.5" />
                Jabatan Panitia
              </div>
              <h4 className="text-lg font-bold text-gray-800 mt-1">
                Ketua Pelaksana
              </h4>
              <p className="text-xs text-gray-500 font-medium">Reuni Akbar IBB 2026</p>
            </div>

          </div>
        </div>
      </motion.div>

      <div className="mt-24 pt-10 border-t border-gray-200/60">
        <h4 className="text-xl sm:text-2xl text-center font-Ovo font-medium text-gray-700 mb-6">
          Ayo Hadiri & Sukseskan Acara Reuni Akbar 2026
        </h4>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden"
        >
          <ScrollVelocity
            texts={["Reuni Akbar 2026", "Benang Yang Tak Putus Warna Yang tak Pudar"]}
            velocity={60}
            className="custom-scroll-text text-amber-400/90 font-bold text-3xl sm:text-5xl md:text-7xl"
            numCopies={5}
            damping={50}
            stiffness={400}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;