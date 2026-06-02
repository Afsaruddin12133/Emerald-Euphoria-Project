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
                <div className="text-center mb-6">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[44px] leading-[100%]" style={{ letterSpacing: '0', lineHeight: '1' }}>
                        Discover The Thrill
                    </h2>
                </div>

                <div className="w-full h-[314px] flex items-start justify-center">
                    <div className="w-full max-w-[1280px] mx-auto h-full" style={{ height: 314 }}>
                        <div className="w-full h-full rounded-[20px] relative overflow-hidden" style={{ background: 'var(--Shade-02, #051711)', border: '1px solid var(--Shade-03, #0F211B)' }}>
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#051711] to-transparent z-10 pointer-events-none rounded-l-[20px]" />
                            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#051711] to-transparent z-10 pointer-events-none rounded-r-[20px]" />

                            <div className="relative w-full h-full flex items-center py-6">
                                <div className="hidden md:grid grid-cols-4 gap-x-8 md:gap-x-[80px] items-stretch h-full w-full">
                                    {cards.map((c, i) => (
                                        <motion.div key={c.title} className="w-full h-[190px]" initial={{ opacity: 0, y: 18, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.03 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 140, damping: 18, duration: 0.6, delay: i * 0.08 }}>
                                            <div className="rounded-[25px] border overflow-hidden relative h-full" style={{ border: '1px solid var(--Shade-03, #0F211B)', background: 'var(--Shade-02, #051711)' }}>
                                                <div className="absolute inset-0" style={{ background: c.bg, mixBlendMode: 'overlay', opacity: 0.12 }} />
                                                <div className="absolute top-[18px] left-[24px]" style={{ width: 176 }}>
                                                    <div className="text-white font-['Montserrat'] font-bold text-[26px] leading-[100%]" style={{ letterSpacing: '-0.02em' }}>{c.title}</div>
                                                </div>
                                                <button aria-label={`Go to ${c.title}`} className="absolute left-[24px] bottom-[16px] w-[44px] h-[44px] rounded-[12px] flex items-center justify-center bg-[var(--Shade-04,#192B25)] border border-[rgba(255,255,255,0.02)]">
                                                    <ArrowRight size={20} />
                                                </button>
                                                <motion.img src={c.img} alt="icon" className="absolute" style={{ width: 160, height: 160, right: 12, top: 15, transform: 'rotate(-15deg)' }} initial={{ y: -6 }} animate={{ y: 6 }} transition={{ y: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } }} />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="md:hidden w-full h-full flex items-center overflow-x-auto gap-4 px-4 no-scrollbar" style={{ whiteSpace: 'nowrap' }}>
                                    {cards.map((c, i) => (
                                        <motion.div key={c.title} className="flex-shrink-0 w-[220px] h-[190px] snap-start" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                                            <div className="rounded-[25px] border overflow-hidden relative h-full" style={{ border: '1px solid var(--Shade-03, #0F211B)', background: 'var(--Shade-02, #051711)' }}>
                                                <div className="absolute inset-0" style={{ background: c.bg, mixBlendMode: 'overlay', opacity: 0.12 }} />
                                                <div className="absolute top-[18px] left-[16px]" style={{ width: 140 }}>
                                                    <div className="text-white font-['Montserrat'] font-bold text-[22px] leading-[100%]" style={{ letterSpacing: '-0.02em' }}>{c.title}</div>
                                                </div>
                                                <button aria-label={`Go to ${c.title}`} className="absolute left-[16px] bottom-[12px] w-[44px] h-[44px] rounded-[12px] flex items-center justify-center bg-[var(--Shade-04,#192B25)] border border-[rgba(255,255,255,0.02)]">
                                                    <ArrowRight size={18} />
                                                </button>
                                                <motion.img src={c.img} alt="icon" className="absolute" style={{ width: 140, height: 140, right: 8, top: 12, transform: 'rotate(-15deg)' }} initial={{ y: -4 }} animate={{ y: 4 }} transition={{ y: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } }} />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
