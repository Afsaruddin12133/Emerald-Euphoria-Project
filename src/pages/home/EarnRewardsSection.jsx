import { motion } from 'framer-motion';

import moneyBagImg from '@/assets/moneybag.png';
import micImg from '@/assets/mic.png';
import moneyImg from '@/assets/money.png';
import giftBoxImg from '@/assets/giftbox.png';

/**
 * Configuration array representing the reward cards.
 * Extracted to the module level to optimize render performance and avoid array re-allocations on every render.
 */
const EARN_REWARDS_CARDS = [
    { 
        title: 'First Deposit\nBonus', 
        desc: 'Redeem your winnings\nfaster.', 
        img: moneyBagImg,
        bgTop: 'rgba(255, 120, 30, 0.4)' // Orange glow
    },
    { 
        title: 'Referral Bonus', 
        desc: 'Fast, friendly, and reliable\nsupport 24/7.', 
        img: micImg,
        bgTop: 'rgba(30, 150, 255, 0.4)' // Blue glow
    },
    { 
        title: 'Daily Deposits', 
        desc: 'Fast, friendly, and reliable\nsupport 24/7.', 
        img: moneyImg,
        bgTop: 'rgba(160, 60, 255, 0.4)' // Purple glow
    },
    { 
        title: 'Festival Bonus', 
        desc: 'Enjoy exclusive\nmember benefits.', 
        img: giftBoxImg,
        bgTop: 'rgba(104, 226, 3, 0.25)' // Brand Green glow
    },
];

/**
 * EarnRewardsSection Component
 * Renders the promotional rewards cards layout.
 * Supports desktop (4-column grid layout) and mobile (2-column layout) configurations.
 * Images feature Framer Motion bounce transitions and drop shadow accents.
 */
export default function EarnRewardsSection() {
    return (
        <section className="w-full relative py-12 lg:py-20">
            <div className="container-custom">
                <div className="text-center mb-[40px] md:mb-[150px]">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[30px] md:text-[44px] leading-[100%] drop-shadow-[0_4px_2px_rgba(0,0,0,0.9)] [-webkit-text-stroke:1.5px_currentColor]" style={{ letterSpacing: '0', lineHeight: '1' }}>
                        <span className="text-white">EARN </span>
                        <span className="text-[#68E203]">REWARDS</span>
                    </h2>
                </div>

                <div className="w-full flex items-start justify-center">
                    <div className="w-full max-w-[1280px] mx-auto">
                        
                        {/* Desktop View */}
                        <div className="hidden md:grid grid-cols-4 gap-[20px] items-stretch w-full cursor-pointer">
                            {EARN_REWARDS_CARDS.map((c, i) => (
                                <motion.div 
                                    key={c.title} 
                                    className="w-full h-full"
                                    initial={{ opacity: 0, y: 18, scale: 0.98 }} 
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                                    whileHover={{ scale: 1.03 }} 
                                    viewport={{ once: true }} 
                                    transition={{ type: 'spring', stiffness: 140, damping: 18, duration: 0.6, delay: i * 0.08 }}
                                >
                                    <div className="rounded-[25px] relative w-full h-full flex flex-col items-center text-center px-4 pb-8" style={{ border: '1px solid var(--Shade-03, #0F211B)', background: `linear-gradient(180deg, ${c.bgTop} 0%, #051711 60%)` }}>
                                        {/* Glowing Circle behind Icon */}
                                        <div className="absolute pointer-events-none" style={{ left: 53, top: -90, width: 150, height: 150 }}>
                                            <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full" style={{ background: c.bgTop.replace('0.4', '0.7'), filter: 'blur(20px)', opacity: 1 }} />
                                        </div>
                                        
                                        <motion.img 
                                            src={c.img} 
                                            alt={c.title.replace('\n', ' ')} 
                                            className="absolute pointer-events-none" 
                                            style={{ 
                                                width: c.img === micImg ? 185 : 185, 
                                                height: c.img === micImg ? 175 : 175, 
                                                left: c.img === micImg ? 35 : 53, 
                                                top: c.img === micImg ? -96 : -90, 
                                                filter: 'drop-shadow(0px 4px 40px rgba(0,0,0,0.25))' 
                                            }} 
                                            initial={{ y: -6 }} 
                                            animate={{ y: 6 }} 
                                            transition={{ y: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: i * 0.2 } }} 
                                        />
                                        
                                        {/* Content pushed down to make room for the protruding icon */}
                                        <div className="mt-[110px] flex-1 flex flex-col items-center justify-start relative z-10 w-full">
                                            <h3 className="text-[#FFFFFF] font-['Montserrat'] font-bold text-[22px] leading-[1.2] mb-[10px] h-[55px] flex items-center justify-center text-center whitespace-pre-line w-full">{c.title}</h3>
                                            <p className="text-[#556761] font-['Montserrat'] font-bold text-[16px] leading-none tracking-normal text-center whitespace-pre-line px-2 w-full">{c.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile View */}
                        <div className="md:hidden w-full grid grid-cols-2 gap-x-12 gap-y-[65px] sm:gap-x-4 sm:gap-y-[65px] pt-[60px] pb-12 justify-items-center">
                            {EARN_REWARDS_CARDS.map((c, i) => (
                                <motion.div 
                                    key={c.title} 
                                    className="w-[180px] h-[130px]" 
                                    initial={{ opacity: 0, y: 18 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    viewport={{ once: true }} 
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <div className="rounded-[20px] relative w-[180px] h-[130px] flex flex-col items-center text-center px-2 pb-3" style={{ border: '1px solid var(--Shade-03, #0F211B)', background: `linear-gradient(180deg, ${c.bgTop} 0%, #051711 60%)` }}>
                                        {/* Glowing Circle behind Icon */}
                                        <div className="absolute pointer-events-none left-1/2 -translate-x-1/2" style={{ top: -32, width: 60, height: 60 }}>
                                            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55px] h-[55px] rounded-full" style={{ background: c.bgTop.replace('0.4', '0.7'), filter: 'blur(12px)', opacity: 1 }} />
                                        </div>
                                        
                                        <motion.img 
                                            src={c.img} 
                                            alt={c.title.replace('\n', ' ')} 
                                            className="absolute pointer-events-none left-1/2 -translate-x-1/2" 
                                            style={{ 
                                                width: c.img === micImg ? 100 : c.img === moneyBagImg ? 109 : c.img === giftBoxImg ? 100 : 80, 
                                                height: c.img === micImg ? 83 : c.img === moneyBagImg ? 98 : c.img === giftBoxImg ? 90 : 80, 
                                                top: c.img === micImg ? -44 : c.img === moneyBagImg ? -48 : c.img === giftBoxImg ? -46 : -42, 
                                                filter: 'drop-shadow(0px 4px 20px rgba(0,0,0,0.25))' 
                                            }} 
                                            initial={{ y: -4 }} 
                                            animate={{ y: 4 }} 
                                            transition={{ y: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: i * 0.2 } }} 
                                        />
                                        
                                        <div className="mt-[53px] flex-1 flex flex-col items-center justify-start relative z-10 w-full">
                                            <h3 className="text-[#FFFFFF] font-['Montserrat'] font-bold text-[16px] leading-[1.2] mb-[4px] flex items-center justify-center text-center whitespace-pre-line w-full">{c.title}</h3>
                                            <p className="text-[#556761] font-['Montserrat'] font-bold text-[12px] leading-[1.2] text-center whitespace-pre-line px-1 w-full">{c.desc}</p>
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
