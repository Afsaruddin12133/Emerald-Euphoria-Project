import coin1Img from '@/assets/coin1.png';
import giftBoxImg from '@/assets/giftbox.png';
import moneyBagImg from '@/assets/moneybag.png';
import popupImg from '@/assets/popup.png';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SLIDES = [
    { id: 'a', image: popupImg, alt: 'Special Offer' },
    { id: 'b', image: giftBoxImg, alt: 'Festival Bonus' },
    { id: 'c', image: moneyBagImg, alt: 'First Deposit Bonus' },
    { id: 'd', image: coin1Img, alt: 'Limited Time Coins' }
];

export default function OfferPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const hasSeen = sessionStorage.getItem('hasSeenOfferPopup');
        if (!hasSeen) {
            const t = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem('hasSeenOfferPopup', 'true');
            }, 2000);
            return () => clearTimeout(t);
        }
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        timerRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % SLIDES.length);
        }, 1500); // auto-advance every 1.5s

        return () => clearInterval(timerRef.current);
    }, [isOpen]);

    const handlePrev = (e) => {
        e.stopPropagation();
        setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setIndex((i) => (i + 1) % SLIDES.length);
    };

    const handleClaim = (e) => {
        e.stopPropagation();
        setIsOpen(false);
        navigate('/sign-up');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative inline-block bg-[#0c1311] rounded-[24px] p-[8px] shadow-[0_0_50px_rgba(104,226,3,0.3)] border border-white/10 mx-4"
                        // auto-advances; no hover pause or controls per request
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(false);
                            }}
                            className="absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-[#0c1311] border border-white/20 flex items-center justify-center text-white hover:bg-[#68E203] hover:text-black hover:border-transparent transition-all shadow-lg"
                        >
                            <X size={18} />
                        </button>

                        {/* Slider viewport */}
                        <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
                            <div className="overflow-hidden rounded-[18px] bg-[#07140f] p-4">
                                <div className="relative h-[420px] flex items-center justify-center">
                                    <AnimatePresence initial={false} mode="wait">
                                        <motion.img
                                            key={SLIDES[index].id}
                                            src={SLIDES[index].image}
                                            alt={SLIDES[index].alt}
                                            initial={{ x: 60, opacity: 0, scale: 0.98 }}
                                            animate={{ x: 0, opacity: 1, scale: 1 }}
                                            exit={{ x: -60, opacity: 0, scale: 0.98 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            className="max-w-full max-h-[100%] object-contain rounded-md cursor-pointer"
                                            onClick={handleClaim}
                                        />
                                    </AnimatePresence>

                                    {/* Visible Claim Now button (overlay) */}
                                    <button
                                        onClick={handleClaim}
                                        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 inline-flex items-center justify-center h-[44px] px-6 rounded-[12px] bg-gradient-to-r from-[#107015] to-[#68E203] text-white font-['Montserrat'] font-bold text-[16px] leading-none tracking-[-0.02em] hover:opacity-95 transition-opacity shadow-[0_6px_20px_rgba(16,112,21,0.25)]"
                                    >
                                        Claim Now
                                    </button>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-between mt-3 px-2">
                                <div className="flex items-center gap-2">
                                    {SLIDES.map((s, i) => (
                                        <button
                                            key={s.id}
                                            onClick={() => setIndex(i)}
                                            className={`w-2 h-2 rounded-full ${i === index ? 'bg-[#68E203]' : 'bg-white/20'}`}
                                            aria-label={`Slide ${i + 1}`}
                                        />
                                    ))}
                                </div>

                                <div className="flex items-center gap-2">
                                    <button onClick={handlePrev} className="w-8 h-8 rounded-md flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                                        <ChevronLeft size={16} />
                                    </button>
                                    <button onClick={handleNext} className="w-8 h-8 rounded-md flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
