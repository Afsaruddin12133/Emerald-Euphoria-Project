import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import popupImg from '@/assets/popup.png';

export default function OfferPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup only if they haven't seen it in this session
        const hasSeen = sessionStorage.getItem('hasSeenOfferPopup');
        if (!hasSeen) {
            // Small delay for better UX so it doesn't instantly blast them
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem('hasSeenOfferPopup', 'true');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* Popup Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative inline-block bg-[#0c1311] rounded-[24px] p-[6px] shadow-[0_0_50px_rgba(104,226,3,0.3)] border border-white/10 mx-4"
                    >
                        {/* Close Button floating on the edge */}
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(false);
                            }}
                            className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-[#0c1311] border border-white/20 flex items-center justify-center text-white hover:bg-[#68E203] hover:text-black hover:border-transparent transition-all shadow-lg"
                        >
                            <X size={18} />
                        </button>

                        {/* Image Button - clicking anywhere on the image triggers the 'Claim Now' action */}
                        <button 
                            onClick={() => {
                                setIsOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="block w-full h-full hover:opacity-95 transition-opacity"
                        >
                            <img 
                                src={popupImg} 
                                alt="Special Offer - Claim Now" 
                                className="block max-w-full sm:max-w-[400px] max-h-[85vh] w-auto h-auto object-contain rounded-[18px]"
                            />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
