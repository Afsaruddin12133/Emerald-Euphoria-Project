import { motion } from 'framer-motion';

import securityShieldImg from '@/assets/security shield.png';
import headphoneImg from '@/assets/headphone.png';
import cashMoneyImg from '@/assets/cash money.png';
import rewardImg from '@/assets/Reward probabiliry.png';

export default function ChooseUsSection() {
    const cards = [
        { 
            title: 'Safe & Secure', 
            desc: 'Your safety and security\ncome first.', 
            img: securityShieldImg,
            glow: 'rgba(68, 136, 255, 0.3)'
        },
        { 
            title: '24/7 Support', 
            desc: 'Fast, friendly, and reliable\nsupport 24/7.', 
            img: headphoneImg,
            glow: 'rgba(130, 9, 206, 0.3)'
        },
        { 
            title: 'Same day\nRedemption', 
            desc: 'Redeem your winnings\nfaster.', 
            img: cashMoneyImg,
            glow: 'rgba(0, 214, 50, 0.25)'
        },
        { 
            title: 'VIP Club', 
            desc: 'Enjoy exclusive\nmember benefits.', 
            img: rewardImg,
            glow: 'rgba(240, 7, 44, 0.3)'
        },
    ]

    return (
        <section className="w-full relative py-[80px]">
            <div className="container-custom">
                <div className="text-center mb-[120px]">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[44px] leading-[100%]" style={{ letterSpacing: '0', lineHeight: '1' }}>
                        <span className="text-white">WHY PLAYERS </span>
                        <br />
                        <span className="text-[#68E203]">CHOOSE US?</span>
                    </h2>
                </div>

                <div className="w-full flex items-start justify-center">
                    <div className="w-full max-w-[1280px] mx-auto">
                        
                        {/* Desktop View */}
                        <div className="hidden md:grid grid-cols-4 gap-[20px] items-stretch w-full cursor-pointer">
                            {cards.map((c, i) => (
                                <motion.div 
                                    key={c.title} 
                                    className="w-full h-[222px]"
                                    initial={{ opacity: 0, y: 18, scale: 0.98 }} 
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                                    whileHover={{ scale: 1.03 }} 
                                    viewport={{ once: true }} 
                                    transition={{ type: 'spring', stiffness: 140, damping: 18, duration: 0.6, delay: i * 0.08 }}
                                >
                                    <div className="rounded-[25px] relative w-full h-full flex flex-col items-center text-center px-4 pb-8" style={{ border: '1px solid var(--Shade-03, #0F211B)', background: 'var(--Shade-02, #051711)' }}>
                                        {/* Glow Effect */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] pointer-events-none rounded-full" style={{ background: c.glow, filter: 'blur(60px)', opacity: 0.8 }} />
                                        
                                        <motion.img 
                                            src={c.img} 
                                            alt={c.title} 
                                            className="absolute pointer-events-none" 
                                            style={{ width: 170, height: 170, left: 53, top: -90, filter: 'drop-shadow(0px 4px 40px rgba(0,0,0,0.25))' }} 
                                            initial={{ y: -6 }} 
                                            animate={{ y: 6 }} 
                                            transition={{ y: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: i * 0.2 } }} 
                                        />
                                        
                                        {/* Content pushed down to make room for the protruding icon */}
                                        <div className="mt-[110px] flex-1 flex flex-col items-center justify-start relative z-10">
                                            <h3 className="text-[#FFFFFF] font-['Montserrat'] font-bold text-[22px] leading-[1.2] mb-[10px] whitespace-pre-line">{c.title}</h3>
                                            <p className="text-[#556761] font-['Montserrat'] font-medium text-[14px] leading-[1.4] whitespace-pre-line">{c.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile View */}
                        <div className="md:hidden w-full flex items-center overflow-x-auto gap-[20px] no-scrollbar pb-8 pt-[100px] px-4 -mx-4" style={{ whiteSpace: 'normal' }}>
                            {cards.map((c, i) => (
                                <motion.div 
                                    key={c.title} 
                                    className="flex-shrink-0 snap-center" 
                                    style={{ width: 305, height: 222 }}
                                    initial={{ opacity: 0, y: 18 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    viewport={{ once: true }} 
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <div className="rounded-[25px] relative w-full h-full flex flex-col items-center text-center px-4 pb-8" style={{ border: '1px solid var(--Shade-03, #0F211B)', background: 'var(--Shade-02, #051711)' }}>
                                        {/* Glow Effect */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] pointer-events-none rounded-full" style={{ background: c.glow, filter: 'blur(60px)', opacity: 0.8 }} />
                                        
                                        <motion.img 
                                            src={c.img} 
                                            alt={c.title} 
                                            className="absolute pointer-events-none" 
                                            style={{ width: 200, height: 200, left: 53, top: -100, filter: 'drop-shadow(0px 4px 40px rgba(0,0,0,0.25))' }} 
                                            initial={{ y: -4 }} 
                                            animate={{ y: 4 }} 
                                            transition={{ y: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: i * 0.2 } }} 
                                        />
                                        
                                        <div className="mt-[110px] flex-1 flex flex-col items-center justify-start relative z-10">
                                            <h3 className="text-[#FFFFFF] font-['Montserrat'] font-bold text-[22px] leading-[1.2] mb-[10px] whitespace-pre-line">{c.title}</h3>
                                            <p className="text-[#556761] font-['Montserrat'] font-medium text-[14px] leading-[1.4] whitespace-pre-line">{c.desc}</p>
                                        </div>
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
