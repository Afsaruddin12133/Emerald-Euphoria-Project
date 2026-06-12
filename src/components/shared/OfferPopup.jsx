import popupImg from '@/assets/popup.png';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OfferPopup() {
    const [isOpen, setIsOpen] = useState(false);
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
                        <img
                            src={popupImg}
                            alt="Special Offer"
                            className="w-full h-auto max-h-[85vh] object-contain cursor-pointer drop-shadow-[0_10px_40px_rgba(104,226,3,0.2)]"
                            onClick={handleClaim}
                        />

                        {/* Special Offer Text positioned overlaying the image */}
                        <div className="absolute md:top-[4%] top-[4%] sm:top-[12%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none w-full px-4">
                            <h2
                                className="font-['Montserrat'] font-black text-[45px] sm:text-[56px] text-center uppercase m-0 p-0 -webkit-text-stroke: 1.5px #68E203 drop-shadow-[0_4px_2px_rgba(0,0,0,0.9)] leading-[100%] tracking-[-0.09em]"
                                style={{
                                    background: 'linear-gradient(180deg, #68E203 0%, #C6FF94 20%, #68E203 50%, #C6FF94 80%, #68E203 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    color: 'transparent',
                                    WebkitTextStroke: '1.5px black',
                                    filter: 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))',
                                    width: '100%',
                                    maxWidth: '275px',
                                    letterSpacing: '0%',
                                    lineHeight: '1'
                                }}
                            >
                                Special Offer
                            </h2>
                            <p
                                className="font-['Montserrat'] font-extrabold text-[18px] sm:text-[22px] leading-[0.9] text-center uppercase text-white m-0 p-0 mt-3 sm:mt-5"
                                style={{
                                    filter: 'drop-shadow(4px 2px 10px rgba(0, 0, 0, 0.5))',
                                    letterSpacing: '-2%',
                                    width: '100%',
                                    maxWidth: '275px'
                                }}
                            >
                                Get 20 Coins for $10
                            </p>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(false);
                            }}
                            className="absolute top-[-5px] right-[0px] lg:top-[-5px] lg:right-[50px] md:top-[15%] md:right-[15%] z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#68E203] hover:text-black hover:border-transparent transition-all shadow-lg cursor-pointer"
                        >
                            <X size={18} />
                        </button>

                        {/* Claim Now button positioned overlaying the image */}
                        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-10">
                            <button
                                onClick={handleClaim}
                                className="cursor-pointer inline-flex items-center justify-center h-[36px] md:h-[48px] md:w-[125px] px-6 md:px-8 rounded-[10px] md:rounded-[14px] bg-gradient-to-r from-[#107015] to-[#68E203] text-white font-['Montserrat'] font-bold text-[13px] sm:text-[14px] md:text-[18px] leading-none tracking-[-0.02em] hover:scale-105 transition-all shadow-[0_8px_30px_rgba(104,226,3,0.3)] whitespace-nowrap"
                            >
                                Claim Now
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
