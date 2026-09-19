"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, User, Users, MessageSquare, Send, ChevronDown, Check } from "lucide-react";
import Aurora from "./reactbits/Aurora";

const Rsvp = () => {
    const [formData, setFormData] = useState({
        name: "",
        attendance: "Hadir",
        guestCount: 1,
        message: "",
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const guestOptions = [1, 2, 3, 4, 5];

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [resultMsg, setResultMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);
        setResultMsg("Sending RSVP via server...");

        try {
            const response = await fetch("/api/rsvp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setResultMsg(result.message || "Konfirmasi berhasil dikirim!");
                setIsSuccess(true);
                setFormData({
                    name: "",
                    attendance: "Hadir",
                    guestCount: 1,
                    message: "",
                });

                setTimeout(() => {
                    setIsSuccess(false);
                    setResultMsg("");
                }, 5000);
            } else {
                setResultMsg(result.message || "Gagal mengirim konfirmasi.");
            }
        } catch (error) {
            setResultMsg("Terjadi kesalahan koneksi. Silakan coba lagi.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="rsvp"
            className="w-full bg-white text-black py-20 px-[5%] sm:px-[10%] min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-sans"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 mt-10 items-center"
            >
                <div className="lg:col-span-6 flex flex-col justify-center">
                    <span className="text-sm font-semibold text-yellow-900 mb-2 block tracking-wider uppercase">
                        RSVP & Attendance
                    </span>

                    <h2 className="text-3xl sm:text-5xl font-bold font-Ovo tracking-tight mb-4 text-slate-600">
                        Konfirmasi Kehadiran
                    </h2>

                    <p className="text-gray-600 mb-8 font-light leading-relaxed">
                        Kehadiran Anda sangat berarti bagi kami. Silakan isi formulir di bawah ini untuk mengonfirmasi kehadiran Anda pada acara kami.
                    </p>

                    <div className="space-y-4 text-sm text-gray-600">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-yellow-50 border border-amber-100 flex items-center justify-center text-yellow-600">
                                <User className="w-4 h-4" />
                            </div>
                            <span>Konfirmasi nama lengkap & status kehadiran</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-yellow-50 border border-amber-100 flex items-center justify-center text-yellow-600">
                                <Users className="w-4 h-4" />
                            </div>
                            <span>Pilih jumlah tamu yang akan hadir bersama Anda</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full bg-white/80 backdrop-blur-xl border border-gray-200/80 shadow-2xl rounded-3xl p-6 sm:p-8 min-h-[460px] flex flex-col justify-center relative overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.form
                                    key="rsvp-form"
                                    onSubmit={onSubmit}
                                    className="space-y-5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Nama Lengkap *
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Masukkan nama Anda"
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200/80 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-yellow-500 bg-white/80 transition-all text-gray-800"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Status Kehadiran *
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {["Hadir", "Tidak Hadir"].map((option) => (
                                                <button
                                                    type="button"
                                                    key={option}
                                                    onClick={() =>
                                                        setFormData((prev) => ({ ...prev, attendance: option }))
                                                    }
                                                    className={`py-2.5 px-4 rounded-xl border text-xs font-semibold transition-all ${formData.attendance === option
                                                        ? "bg-yellow-500 text-white border-yellow-500 shadow-md shadow-sky-500/20"
                                                        : "bg-white/80 border-gray-200 text-gray-600 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {formData.attendance === "Hadir" && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="relative z-20"
                                        >
                                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                                Jumlah Tamu
                                            </label>

                                            <button
                                                type="button"
                                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200/80 text-sm bg-white/80 backdrop-blur-md flex items-center justify-between text-gray-800 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all shadow-sm"
                                            >
                                                <span>{formData.guestCount} Orang</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-yellow-500" : ""
                                                        }`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <>
                                                        <div
                                                            className="fixed inset-0 z-10"
                                                            onClick={() => setIsDropdownOpen(false)}
                                                        />

                                                        <motion.div
                                                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                                            animate={{ opacity: 1, y: 4, scale: 1 }}
                                                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                                            transition={{ duration: 0.15 }}
                                                            className="absolute left-0 right-0 z-20 overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-1.5 space-y-1"
                                                        >
                                                            {guestOptions.map((num) => (
                                                                <button
                                                                    key={num}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setFormData((prev) => ({ ...prev, guestCount: num }));
                                                                        setIsDropdownOpen(false);
                                                                    }}
                                                                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${formData.guestCount === num
                                                                        ? "bg-yellow-500 text-white shadow-md shadow-sky-500/20"
                                                                        : "text-gray-700 hover:bg-sky-50/80 hover:text-yellow-600"
                                                                        }`}
                                                                >
                                                                    <span>{num} Orang</span>
                                                                    {formData.guestCount === num && (
                                                                        <Check className="w-4 h-4 text-white" />
                                                                    )}
                                                                </button>
                                                            ))}
                                                        </motion.div>
                                                    </>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )}

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Pesan & Ucapan
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={3}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tuliskan pesan atau doa Anda..."
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200/80 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-yellow-500 bg-white/80 resize-none transition-all text-gray-800"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 px-4 rounded-xl text-white font-medium text-sm bg-gradient-to-r from-yellow-500 to-amber-600 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-sky-500/20 disabled:opacity-75 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Kirim RSVP</span>
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>

                                    {resultMsg && !isSuccess && (
                                        <p className="text-xs text-center text-red-500 mt-2">{resultMsg}</p>
                                    )}
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success-message"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center text-center space-y-4 py-10"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [0, 1.2, 1] }}
                                        transition={{ delay: 0.1, duration: 0.5 }}
                                    >
                                        <CheckCircle2 className="w-16 h-16 text-emerald-500 drop-shadow" />
                                    </motion.div>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-xl font-bold text-gray-800"
                                    >
                                        RSVP Berhasil Dikirim!
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-sm text-gray-500 max-w-xs"
                                    >
                                        {resultMsg || "Terima kasih atas konfirmasi kehadiran Anda."}
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Rsvp;