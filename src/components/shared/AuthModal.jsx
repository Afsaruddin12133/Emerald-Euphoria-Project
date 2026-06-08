import facebookImg from '@/assets/facebook.png';
import googleImg from '@/assets/google.png';
import sideframeImg from '@/assets/sideframe.png';
import { AnimatePresence, motion } from 'framer-motion';
import { Lock, Mail, Phone, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export function AuthModal({ isOpen, onClose, initialMode = 'signup' }) {
    const [mode, setMode] = useState(initialMode);

    useEffect(() => {
        setMode(initialMode);
    }, [initialMode, isOpen]);

    if (!isOpen) return null;

    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative w-full md:w-fit max-w-[95vw] md:max-w-fit max-h-[95vh] md:max-h-[90vh] bg-[#0c1311] rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/5 my-auto z-10 mx-auto"
                    >
                        {/* Left Side (Image & Promo) */}
                        <img
                            src={sideframeImg}
                            alt="Welcome to Emerald Euphoria"
                            className="hidden md:block w-auto self-stretch max-w-[260px] lg:max-w-[300px] object-cover shrink-0 bg-[#0a100e]"
                            style={{ objectPosition: 'top center' }}
                        />

                        {/* Right Side (Auth Form) */}
                        <div className="w-full md:w-[350px] lg:w-[380px] p-5 md:p-6 flex flex-col relative bg-[#0c1311] overflow-y-auto custom-scrollbar shrink-0">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-white font-bold text-xl font-['Montserrat']">Authorize</h2>
                                <button
                                    onClick={onClose}
                                    className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-lg bg-[#16211e] hover:bg-[#1f2e29] transition-colors text-gray-400 hover:text-white"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Mode Toggle */}
                            <div className="flex items-center bg-[#16211e] rounded-xl p-1 mb-5 w-full">
                                <button
                                    onClick={() => setMode('signin')}
                                    className={`flex-1 cursor-pointer py-2 rounded-lg text-sm font-bold transition-all ${mode === 'signin' ? 'bg-[#107015] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={() => setMode('signup')}
                                    className={`flex-1 cursor-pointer py-2 rounded-lg text-sm font-bold transition-all ${mode === 'signup' ? 'bg-[#107015] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Sign Up
                                </button>
                            </div>

                            {/* Form */}
                            <form className="flex flex-col gap-3 mb-4">
                                {mode === 'signup' && (
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                                            <User size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter full name"
                                            className="w-full h-[46px] bg-[#16211e] rounded-xl pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#68E203] border border-transparent transition-all font-['Montserrat'] font-bold text-[15px] leading-none"
                                            style={{ letterSpacing: '-0.02em', lineHeight: '1' }}
                                        />
                                    </div>
                                )}

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Enter your e-mail"
                                        className="w-full h-[46px] bg-[#16211e] rounded-xl pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#68E203] border border-transparent transition-all font-['Montserrat'] font-bold text-[15px] leading-none"
                                        style={{ letterSpacing: '-0.02em', lineHeight: '1' }}
                                    />
                                </div>

                                {mode === 'signup' && (
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                                            <Phone size={18} />
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="Enter phone number"
                                            className="w-full h-[46px] bg-[#16211e] rounded-xl pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#68E203] border border-transparent transition-all font-['Montserrat'] font-bold text-[15px] leading-none"
                                            style={{ letterSpacing: '-0.02em', lineHeight: '1' }}
                                        />
                                    </div>
                                )}

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                                        <Lock size={18} />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                        className="w-full h-[46px] bg-[#16211e] rounded-xl pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#68E203] border border-transparent transition-all font-['Montserrat'] font-bold text-[15px] leading-none"
                                        style={{ letterSpacing: '-0.02em', lineHeight: '1' }}
                                    />
                                </div>

                                {/* Forgot Password & Terms */}
                                <div className="flex flex-col gap-2 mt-1">
                                    {mode === 'signin' && (
                                        <div className="flex justify-start">
                                            <a href="#" className="text-sm font-semibold text-white hover:text-[#C6FF94] hover:underline transition-colors cursor-pointer">
                                                Forgot password?
                                            </a>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-3">
                                        <div className="flex items-center h-5 mt-[2px]">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                className="w-5 h-5 rounded-[4px] bg-[#16211e] border-transparent text-[#68E203] focus:ring-[#68E203] focus:ring-offset-0 focus:ring-1 cursor-pointer appearance-none checked:bg-[#68E203] checked:border-transparent relative after:content-[''] checked:after:block after:hidden after:absolute after:left-[6px] after:top-[2px] after:w-[6px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 transition-colors"
                                                defaultChecked
                                            />
                                        </div>
                                        <label htmlFor="terms" className="text-gray-400 text-sm leading-tight select-none cursor-pointer">
                                            By accessing I confirm that I'm at least 18 yo and agree to the <a href="#" className="text-white hover:underline transition-colors">Terms of Service</a>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="w-full cursor-pointer h-[48px] mt-3 rounded-xl bg-gradient-to-r from-[#107015] to-[#68E203] text-white font-bold text-[17px] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(104,226,3,0.2)]"
                                >
                                    {mode === 'signup' ? 'Sign Up' : 'Sign In'}
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-px bg-white/10 flex-1" />
                                <span className="text-gray-500 text-sm font-bold">OR</span>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            {/* Social Logins */}
                            <div className="flex items-center gap-4">
                                <button className="flex-1 cursor-pointer h-[44px] bg-[#16211e] hover:bg-[#1f2e29] rounded-xl flex items-center justify-center transition-colors border border-white/5">
                                    <img src={googleImg} alt="Google" className="w-5 h-5 object-contain" />
                                </button>
                                <button className="flex-1 cursor-pointer h-[44px] bg-[#16211e] hover:bg-[#1f2e29] rounded-xl flex items-center justify-center transition-colors border border-white/5">
                                    <img src={facebookImg} alt="Facebook" className="w-5 h-5 object-contain" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
