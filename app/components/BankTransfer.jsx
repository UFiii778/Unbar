"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ChevronLeft, ChevronRight, CreditCard } from "lucide-react";

const BANK_CARDS = [
  {
    id: "bca",
    bankName: "BCA",
    accountNumber: "8100676126",
    accountHolder: "Yuniar",
    gradient: "from-blue-700 via-blue-600 to-indigo-900",
    accentColor: "bg-blue-400",
    logoPath: "/BCA.svg"
  },
  {
    id: "bni",
    bankName: "BNI",
    accountNumber: "2092146120",
    accountHolder: "Ayi Karyana",
    gradient: "from-orange-600 via-amber-600 to-red-800",
    accentColor: "bg-orange-300",
    logoPath: "/BNI.svg"
  },
  {
    id: "mandiri",
    bankName: "MANDIRI",
    accountNumber: "1300025098982",
    accountHolder: "Ikat Baraya Berdikari",
    gradient: "from-sky-600 via-blue-800 to-slate-950",
    accentColor: "bg-amber-400",
    logoPath: "/MANDIRI.svg"
  }
];

const BankTransfer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedId, setCopiedId] = useState(null);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % BANK_CARDS.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + BANK_CARDS.length) % BANK_CARDS.length);
  };

  const handleCopy = (num, id) => {
    navigator.clipboard.writeText(num);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="rsvp" className="w-full px-[6%] sm:px-[10%] py-20 scroll-mt-20 overflow-hidden">

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-5xl font-Ovo text-gray-100 font-bold tracking-tight">
          Rekening yang tersedia
        </h2>
        <p className="text-gray-400 font-sans text-sm sm:text-base mt-3 leading-relaxed">
          Salin No Rekening ini lalu Konfirmasi Ceu Heavy atau Ceu Lia Bahwa anda mengikuti acara Reuni Akbar IBB 2026!
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[300px] flex items-center justify-center perspective-1000">
        
        {BANK_CARDS.map((card, index) => {
          let offset = index - activeIndex;
          if (offset < -1) offset += BANK_CARDS.length;
          if (offset > 1) offset -= BANK_CARDS.length;

          const isActive = offset === 0;

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                x: `${offset * 55}%`,
                scale: isActive ? 1 : 0.82,
                rotateY: offset * -18,
                zIndex: isActive ? 30 : 10,
                opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.65,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-[290px] sm:w-[380px] h-[180px] sm:h-[230px] rounded-2xl p-5 sm:p-6 text-white shadow-2xl cursor-pointer bg-gradient-to-br ${card.gradient} border border-white/20 backdrop-blur-md flex flex-col justify-between select-none`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${card.accentColor} animate-pulse`} />
                  <div className="relative h-6 sm:h-8 w-20 sm:w-24">
                    <Image
                      src={card.logoPath}
                      alt={card.bankName}
                      fill
                      className="object-contain object-left filter brightness-0 invert"
                    />
                  </div>
                </div>
              </div>

              <div className="my-auto">
                <p className="text-[10px] sm:text-xs text-gray-300 font-mono tracking-widest uppercase mb-1">
                  Nomor Rekening
                </p>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-base sm:text-2xl font-bold tracking-wider">
                    {card.accountNumber}
                  </p>
                  
                  {isActive && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(card.accountNumber, card.id);
                      }}
                      className="p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all active:scale-90"
                      title="Salin No Rekening"
                    >
                      {copiedId === card.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-white" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-end text-xs sm:text-sm">
                <div>
                  <p className="text-[9px] sm:text-[10px] text-gray-300 uppercase tracking-wider">
                    Atas Nama
                  </p>
                  <p className="font-semibold tracking-wide truncate max-w-[180px] sm:max-w-[220px]">
                    {card.accountHolder}
                  </p>
                </div>
                <CreditCard className="w-6 h-6 opacity-60" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prevCard}
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all shadow-sm active:scale-90"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {BANK_CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-8 bg-amber-500" : "w-2.5 bg-gray-600"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all shadow-sm active:scale-90"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {copiedId && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center mt-4 text-sm font-medium text-emerald-400 bg-emerald-950/80 max-w-xs mx-auto py-1.5 px-4 rounded-full"
          >
            Nomor rekening berhasil disalin!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BankTransfer;