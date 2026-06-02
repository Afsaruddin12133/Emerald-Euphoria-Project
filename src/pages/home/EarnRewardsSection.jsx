import { motion } from 'framer-motion';

import moneyBagImg from '@/assets/moneybag.png';
import micImg from '@/assets/mic.png';
import moneyImg from '@/assets/money.png';
import giftBoxImg from '@/assets/giftbox.png';

export default function EarnRewardsSection() {
    const cards = [
        { 
            title: 'First Deposit\nBonus', 
            desc: 'Redeem your winnings\nfaster.', 
            img: moneyBagImg,
            glow: 'rgba(255, 120, 30, 0.3)' // Orange glow
        },
        { 
            title: 'Referral Bonus', 
            desc: 'Fast, friendly, and reliable\nsupport 24/7.', 
            img: micImg,
            glow: 'rgba(30, 150, 255, 0.3)' // Blue glow
        },
        { 
            title: 'Daily Deposits', 
            desc: 'Fast, friendly, and reliable\nsupport 24/7.', 
            img: moneyImg,
            glow: 'rgba(160, 60, 255, 0.3)' // Purple glow
        },
        { 
            title: 'Festival Bonus', 
            desc: 'Enjoy exclusive\nmember benefits.', 
            img: giftBoxImg,
            glow: 'rgba(50, 220, 50, 0.3)' // Green glow
        },
    ]

    return (
        <section className="w-full relative py-[80px]">
            <div className="container-custom">
                <div className="text-center mb-[140px]">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[44px] leading-[100%]" style={{ letterSpacing: '0', lineHeight: '1' }}>
                        <span className="text-white">EARN </span>
                        <span className="text-[#68E203]">REWARDS</span>
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
                                    <div className="rounded-[25px] relative w-full h-full flex flex-col items-center text-center px-4 pb-8" style={{ background: '#161723' }}>
                                        {/* Glow Effect */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] pointer-events-none rounded-full" style={{ background: c.glow, filter: 'blur(60px)', opacity: 0.8 }} />
                                        
                                        <motion.img 
                                            src={c.img} 
                                            alt={c.title.replace('\n', ' ')} 
                                            className="absolute pointer-events-none" 
                                            style={{ width: 190, height: 190, left: 57, top: -95, filter: 'drop-shadow(0px 4px 40px rgba(0,0,0,0.25))' }} 
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
                                    <div className="rounded-[25px] relative w-full h-full flex flex-col items-center text-center px-4 pb-8" style={{ background: '#161723' }}>
                                        {/* Glow Effect */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] pointer-events-none rounded-full" style={{ background: c.glow, filter: 'blur(60px)', opacity: 0.8 }} />
                                        
                                        <motion.img 
                                            src={c.img} 
                                            alt={c.title.replace('\n', ' ')} 
                                            className="absolute pointer-events-none" 
                                            style={{ width: 190, height: 190, left: 57, top: -95, filter: 'drop-shadow(0px 4px 40px rgba(0,0,0,0.25))' }} 
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
