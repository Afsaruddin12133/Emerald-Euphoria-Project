import popupImg from '@/assets/popup.png';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * OfferPopup Component
 * Renders an overlay popup containing a special promotional offer.
 * The popup triggers automatically 2 seconds after the user loads the application,
 * provided they have not already seen it in their current browser session.
 */
export default function OfferPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    // Trigger popup on initial mount if not previously shown in the current session
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
                        className="relative w-full max-w-[500px] mx-4 flex flex-col items-center justify-center"
                    >
                        {/* Wrapper exactly matching the image size */}
                        <div className="relative inline-flex flex-col items-center justify-center">
                            <img
                                src={popupImg}
                                alt="Special Offer"
                                className="max-w-full w-auto h-auto max-h-[85vh] object-contain cursor-pointer drop-shadow-[0_10px_40px_rgba(104,226,3,0.2)]"
                                onClick={handleClaim}
                            />

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(false);
                                }}
                                className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#68E203] hover:text-black hover:border-transparent transition-all shadow-lg cursor-pointer"
                            >
                                <X size={18} />
                            </button>

                            {/* Claim Now button positioned overlaying the image */}
                            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-10 w-full flex justify-center">
                                <button
                                    onClick={handleClaim}
                                    className="cursor-pointer inline-flex items-center justify-center h-[36px] md:h-[50px] md:w-[140px] px-6 md:px-8 rounded-[10px] md:rounded-[14px] bg-gradient-to-r from-[#107015] to-[#68E203] text-white font-['Montserrat'] font-bold text-[13px] sm:text-[14px] md:text-[16px] leading-none tracking-[-0.02em] hover:scale-105 transition-all shadow-[0_8px_30px_rgba(104,226,3,0.3)] whitespace-nowrap"
                                >
                                    Claim Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
