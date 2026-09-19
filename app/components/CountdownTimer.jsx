"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = ({ 
  targetDate = "2026-11-22T00:00:00", 
  title = "Acara Dimulai Dalam", 
  subtitle = "Hitung mundur menuju Reuni Akbar 2026" 
}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => String(num).padStart(2, "0");

  if (!isMounted) return null;

  const units = [
    { label: "Hari", value: formatNumber(timeLeft.days) },
    { label: "Jam", value: formatNumber(timeLeft.hours) },
    { label: "Menit", value: formatNumber(timeLeft.minutes) },
    { label: "Detik", value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-xl w-full text-center z-10">
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-700 font-normal text-xs sm:text-sm mb-6">
        {subtitle}
      </p>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center">
        {units.map((unit, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm rounded-xl py-3 flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {unit.value}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-800 uppercase mt-1">
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;