import { motion } from 'framer-motion';

import cashMoneyImg from '@/assets/cash money.png';
import headphoneImg from '@/assets/headphone.png';
import rewardImg from '@/assets/Reward probabiliry.png';
import securityShieldImg from '@/assets/security shield.png';

export default function ChooseUsSection() {
    const cards = [
        {
            title: 'Safe & Secure',
            desc: 'Your safety and security\ncome first.',
            img: securityShieldImg,
            bgTop: 'rgba(42, 94, 201, 0.4)'
        },
        {
            title: '24/7 Support',
            desc: 'Fast, friendly, and reliable\nsupport 24/7.',
            img: headphoneImg,
            bgTop: 'rgba(107, 33, 168, 0.4)'
        },
        {
            title: 'Same day\nRedemption',
            desc: 'Redeem your winnings\nfaster.',
            img: cashMoneyImg,
            bgTop: 'rgba(4, 120, 87, 0.4)'
        },
        {
            title: 'VIP Club',
            desc: 'Enjoy exclusive\nmember benefits.',
            img: rewardImg,
            bgTop: 'rgba(185, 28, 28, 0.4)'
        },
    ]

    return (
        <section className="w-full relative py-12 lg:py-20">
            <div className="container-custom">
                <div className="text-center mb-[80px] md:mb-[120px]">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[30px] md:text-[44px] leading-[100%] drop-shadow-[0_4px_2px_rgba(0,0,0,0.9)] [-webkit-text-stroke:1.5px_currentColor]" style={{ letterSpacing: '0', lineHeight: '1' }}>
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
                                    className="w-full h-full"
                                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    whileHover={{ scale: 1.03 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 140, damping: 18, duration: 0.6, delay: i * 0.08 }}
                                >
                                    <div className="rounded-[25px] relative w-full h-full flex flex-col items-center text-center px-4 pb-8 " style={{ border: '1px solid var(--Shade-03, #0F211B)', background: `linear-gradient(180deg, ${c.bgTop} 0%, var(--Shade-02, #051711) 60%)` }}>
                                        {/* Glowing Circle behind Icon */}
                                        <div className="absolute pointer-events-none" style={{ left: 53, top: -90, width: 150, height: 150 }}>
                                            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full" style={{ background: c.bgTop.replace('0.4', '0.9'), filter: 'blur(20px)', opacity: 1 }} />
                                        </div>

                                        <motion.img
                                            src={c.img}
                                            alt={c.title}
                                            className="absolute pointer-events-none"
                                            style={{ width: 180, height: 180, left: 53, top: -90, filter: 'drop-shadow(0px 0px 40px rgba(0,0,0,0.25))' }}
                                            initial={{ y: -6 }}
                                            animate={{ y: 6 }}
                                            transition={{ y: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: i * 0.2 } }}
                                        />

                                        {/* Content pushed down to make room for the protruding icon */}
                                        <div className="mt-[110px] flex-1 flex flex-col items-center justify-start relative z-10 w-full">
                                            <h3 className="text-[#FFFFFF] font-['Montserrat'] font-bold text-[24px] leading-none tracking-[-0.02em] text-center mb-[10px] h-[55px] flex items-center justify-center whitespace-pre-line w-full">{c.title}</h3>
                                            <p className="text-[#556761] font-['Montserrat'] font-bold text-[16px] leading-none tracking-normal text-center whitespace-pre-line px-2 w-full">{c.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile View */}
                        <div className="md:hidden w-full grid grid-cols-2 gap-x-12 gap-y-[50px] sm:gap-x-4 sm:gap-y-[50px] pt-[50px] pb-12 justify-items-center">
                            {cards.map((c, i) => (
                                <motion.div
                                    key={c.title}
                                    className="w-[180px] h-[130px]"
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <div className="rounded-[20px] relative w-[180px] h-[130px] flex flex-col items-center text-center px-2 pb-4" style={{ border: '1px solid var(--Shade-03, #0F211B)', background: `linear-gradient(180deg, ${c.bgTop} 0%, var(--Shade-02, #051711) 60%)` }}>
                                        {/* Glowing Circle behind Icon */}
                                        <div className="absolute pointer-events-none left-1/2 -translate-x-1/2" style={{ top: -38, width: 70, height: 70 }}>
                                            <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full" style={{ background: c.bgTop.replace('0.4', '0.9'), filter: 'blur(12px)', opacity: 1 }} />
                                        </div>

                                        <motion.img
                                            src={c.img}
                                            alt={c.title}
                                            className="absolute pointer-events-none left-1/2 -translate-x-1/2"
                                            style={{ width: 90, height: 90, top: -38, filter: 'drop-shadow(0px 4px 20px rgba(0,0,0,0.25))' }}
                                            initial={{ y: -4 }}
                                            animate={{ y: 4 }}
                                            transition={{ y: { duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: i * 0.2 } }}
                                        />

                                        <div className="mt-[56px] flex-1 flex flex-col items-center justify-start relative z-10 w-full">
                                            <h3 className="text-[#FFFFFF] font-['Montserrat'] font-bold text-[16px] leading-[1.2] tracking-[-0.02em] text-center mb-[4px] flex items-center justify-center whitespace-pre-line w-full">{c.title}</h3>
                                            <p className="text-[#556761] font-['Montserrat'] font-bold text-[12px] leading-tight text-center whitespace-pre-line px-1 w-full">{c.desc}</p>
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
