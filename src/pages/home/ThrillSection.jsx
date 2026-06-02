import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import dabaElementsImg from '@/assets/dabaElements.png';
import fishGameImg from '@/assets/Fish.png';
import gammingImg from '@/assets/gamming.png';
import remoteImg from '@/assets/remotecontrolor.png';

export default function ThrillSection() {
    const cards = [
        { title: '15+ Platforms', bg: 'linear-gradient(77.11deg, rgba(0, 214, 50, 0.3) 20.23%, #00D632 85.69%)', img: dabaElementsImg },
        { title: 'Slots', bg: 'linear-gradient(77.11deg, rgba(0, 110, 190, 0.3) 20.23%, #006EBE 85.69%)', img: gammingImg },
        { title: 'Fish Games', bg: 'linear-gradient(77.11deg, rgba(240, 7, 44, 0.3) 20.23%, #F0072C 85.69%)', img: fishGameImg },
        { title: 'More', bg: 'linear-gradient(77.11deg, rgba(130, 9, 206, 0.3) 20.23%, #8209CE 85.69%)', img: remoteImg },
    ]

    return (
        <section className="w-full relative py-12">
            <div className="container-custom">
                <div className="text-center mb-[80px]">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[44px] leading-[100%]" style={{ letterSpacing: '0', lineHeight: '1' }}>
                        <span className="text-white">Discover The </span>
                        <span className="text-[#68E203]">Thrill</span>
                    </h2>
                </div>

                <div className="w-full flex items-start justify-center">
                    <div className="w-full max-w-[1280px] mx-auto">
                        
                        {/* Desktop View */}
                        <div className="hidden md:grid grid-cols-4 gap-[20px] items-stretch w-full">
                            {cards.map((c, i) => (
                                <motion.div 
                                    key={c.title} 
                                    className="w-full h-[180px] cursor-pointer"
                                    initial={{ opacity: 0, y: 18, scale: 0.98 }} 
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                                    whileHover={{ scale: 1.03 }} 
                                    viewport={{ once: true }} 
                                    transition={{ type: 'spring', stiffness: 140, damping: 18, duration: 0.6, delay: i * 0.08 }}
                                >
                                    <div className="rounded-[25px] overflow-hidden relative w-full h-full" style={{ border: '1px solid var(--Shade-03, #0F211B)', background: 'var(--Shade-02, #051711)' }}>
                                        {/* Corner Lighting Effect */}
                                        <div className="absolute right-0 top-0 w-[180px] h-[180px] pointer-events-none" style={{ background: c.bg, opacity: 0.8, maskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)' }} />
                                        
                                        <div className="absolute top-[30px] left-[30px]" style={{ width: 176 }}>
                                            <div className="text-[#FFFFFF] font-['Montserrat']  text-[22px] leading-[100%]" style={{ letterSpacing: '-0.02em' }}>{c.title}</div>
                                        </div>
                                        
                                        <button aria-label={`Go to ${c.title}`} className="absolute cursor-pointer top-[116px] left-[30px] w-[44px] h-[44px] rounded-[12px] flex items-center justify-center border-t border-[rgba(255,255,255,0.02)]" style={{ background: 'var(--Shade-04, #192B25)' }}>
                                            <ArrowRight size={20} color="#FFFFFF" />
                                        </button>
                                        
                                        <motion.img 
                                            src={c.img} 
                                            alt="icon" 
                                            className="absolute pointer-events-none" 
                                            style={{ width: 155, height: 165, left: 118.59, top: 50, transform: 'rotate(-15deg)' }} 
                                            initial={{ y: -6 }} 
                                            animate={{ y: 6 }} 
                                            transition={{ y: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } }} 
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile View */}
                        <div className="md:hidden w-full flex items-center overflow-x-auto gap-[20px] no-scrollbar pb-4" style={{ whiteSpace: 'nowrap' }}>
                            {cards.map((c, i) => (
                                <motion.div 
                                    key={c.title} 
                                    className="flex-shrink-0 snap-start" 
                                    style={{ width: 305, height: 190 }}
                                    initial={{ opacity: 0, y: 18 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    viewport={{ once: true }} 
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <div className="rounded-[25px] overflow-hidden relative w-full h-full" style={{ border: '1px solid var(--Shade-03, #0F211B)', background: 'var(--Shade-02, #051711)' }}>
                                        {/* Corner Lighting Effect */}
                                        <div className="absolute right-0 top-0 w-[180px] h-[180px] pointer-events-none" style={{ background: c.bg, opacity: 0.8, maskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)' }} />
                                        
                                        <div className="absolute top-[30px] left-[30px]" style={{ width: 176 }}>
                                            <div className="text-[#FFFFFF] font-['Montserrat'] font-bold text-[26px] leading-[100%]" style={{ letterSpacing: '-0.02em' }}>{c.title}</div>
                                        </div>
                                        
                                        <button aria-label={`Go to ${c.title}`} className="absolute top-[116px] left-[30px] w-[44px] h-[44px] rounded-[12px] flex items-center justify-center border-t border-[rgba(255,255,255,0.02)]" style={{ background: 'var(--Shade-04, #192B25)' }}>
                                            <ArrowRight size={20} color="#FFFFFF" />
                                        </button>
                                        
                                        <motion.img 
                                            src={c.img} 
                                            alt="icon" 
                                            className="absolute pointer-events-none" 
                                            style={{ width: 160, height: 160, left: 118.59, top: 33, transform: 'rotate(-15deg)' }} 
                                            initial={{ y: -4 }} 
                                            animate={{ y: 4 }} 
                                            transition={{ y: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } }} 
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
