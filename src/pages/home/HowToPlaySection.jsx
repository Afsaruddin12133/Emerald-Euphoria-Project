import { motion } from 'framer-motion';

import mascotImg from '@/assets/muscot123.png';

// Games
import firekirinImg from '@/assets/firekirin.png';
import gameVaultAltImg from '@/assets/game vault.png';
import goldenDragonImg from '@/assets/goldendragron.png';
import juwaImg from '@/assets/juwa.png';
import milkyWaysImg from '@/assets/milkyways.png';
import orionStarsImg from '@/assets/orionstrars.png';
import riverSweepsImg from '@/assets/riversweeps.png';
import ultraPandaImg from '@/assets/ultrapanda.png';

// Payments
import cryptoImg from '@/assets/cryptologo.png';
import dollarImg from '@/assets/dollersign.png';
import mastercardImg from '@/assets/Mastercard-logo 1.png';
import paypalImg from '@/assets/PayPal 1.png';
import tierlockImg from '@/assets/tierlock.png';
import visaImg from '@/assets/visa.png';

// Rewards
import chestImg from '@/assets/gemes box.png';
import cloverImg from '@/assets/lucky.png'; // Fallback if it's not the exact clover

const GAMES = [
    goldenDragonImg,
    orionStarsImg,
    firekirinImg,
    juwaImg,
    gameVaultAltImg,
    milkyWaysImg,
    ultraPandaImg,
    riverSweepsImg
];

const PAYMENTS = [
    cryptoImg,
    visaImg,
    mastercardImg,
    dollarImg,
    paypalImg,
    tierlockImg
];

function BlockContainer({ children, className = "" }) {
    return (
        <div 
            className={`w-full rounded-[25px] flex flex-col p-[20px] sm:p-[35px] ${className}`}
            style={{ 
                background: 'var(--Shade-02, #051711)', 
                border: '1px solid var(--Shade-03, #0F211B)' 
            }}
        >
            {children}
        </div>
    );
}

function ClaimButton() {
    return (
        <button 
            className="w-full h-[54px] rounded-[12px] text-white font-['Montserrat'] font-bold text-[16px] leading-none tracking-[-0.02em] hover:opacity-90 transition-opacity mt-auto"
            style={{ 
                background: 'linear-gradient(90deg, #107015 0%, #68E203 100%)',
                padding: '19px 25px'
            }}
        >
            <span className="flex cursor-pointer items-center justify-center h-full mt-[-2px]">
                Claim Now
            </span>
        </button>
    );
}

export default function HowToPlaySection() {
    return (
        <section className="w-full py-12 lg:py-20 relative z-20">
            <div className="container-custom">
                
                {/* Title */}
                <div className="text-center mb-[40px] md:mb-[100px]">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[28px] sm:text-[36px] md:text-[44px] leading-[100%]" style={{ letterSpacing: '0', lineHeight: '1' }}>
                        <span className="text-white whitespace-nowrap">HOW TO PLAY IN</span>
                        <br />
                        <span className="text-[#68E203] whitespace-nowrap">3 EASY STEPS</span>
                    </h2>
                </div>

                {/* Main Content Layout */}
                <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[40px] lg:gap-0">
                    
                    {/* Left Side: Mascot */}
                    <div className="hidden lg:flex w-full lg:w-[600px] justify-center lg:justify-start lg:-ml-[50px] relative pointer-events-none">
                        <motion.img 
                            src={mascotImg} 
                            alt="Mascot" 
                            className="w-full max-w-[750px] h-auto object-contain mix-blend-lighten relative z-10"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ 
                                mixBlendMode: 'lighten',
                                WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                                maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
                            }}
                        />
                    </div>

                    {/* Right Side: 3 Steps */}
                    <div className="w-full lg:w-[640px] flex flex-col gap-[20px]">
                        
                        {/* Step 1 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <BlockContainer>
                                <h3 className="text-white font-['Montserrat'] font-bold text-[22px] leading-none tracking-normal mb-1">Register & Claim</h3>
                                <p className="text-[#556761] font-['Montserrat'] font-bold text-[16px] leading-none tracking-normal mb-[24px]">Sign Up today & unlock instant rewards.</p>
                                
                                <div className="flex items-center justify-center md:justify-between gap-2 sm:gap-[10px] w-full mb-[24px]">
                                    {/* Mobile: Overlapping image to prevent squishing */}
                                    <div className="md:hidden relative flex items-center bg-[#0F211B] rounded-[10px] sm:rounded-[12px] w-auto pr-[36px] sm:pr-[46px] h-[48px] sm:h-[54px] pl-[10px] sm:pl-[16px] flex-1 sm:flex-none max-w-[50%] sm:max-w-none">
                                        <span className="text-white font-['Montserrat'] font-bold text-[10px] min-[375px]:text-[11px] sm:text-[14px] leading-none tracking-normal whitespace-nowrap z-10">100% Sign Up</span>
                                        <img src={chestImg} alt="Chest" className="absolute w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] right-[-12px] sm:right-[-15px] top-1/2 -translate-y-1/2 z-20 object-contain" style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.25))' }} />
                                    </div>
                                    
                                    {/* Desktop: Original flex-1 layout */}
                                    <div className="hidden md:flex flex-1 h-[54px] rounded-[12px] bg-[#0F211B] items-center justify-between px-4">
                                        <span className="text-white font-['Montserrat'] font-bold text-[14px] leading-none tracking-normal">100% Sign Up</span>
                                        <img src={chestImg} alt="Chest" className="h-[40px] object-contain" />
                                    </div>

                                    <span className="text-white font-bold text-[18px] md:text-[24px] z-10 shrink-0 px-1">+</span>

                                    {/* Mobile: Overlapping image to prevent squishing */}
                                    <div className="md:hidden relative flex items-center bg-[#0F211B] rounded-[10px] sm:rounded-[12px] w-auto pr-[36px] sm:pr-[46px] h-[48px] sm:h-[54px] pl-[10px] sm:pl-[16px] flex-1 sm:flex-none max-w-[50%] sm:max-w-none">
                                        <span className="text-white font-['Montserrat'] font-bold text-[10px] min-[375px]:text-[11px] sm:text-[14px] leading-none tracking-normal whitespace-nowrap z-10">20% All Deposit</span>
                                        <img src={cloverImg} alt="Clover" className="absolute w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] right-[-12px] sm:right-[-15px] top-1/2 -translate-y-1/2 z-20 object-contain" style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.25))' }} />
                                    </div>

                                    {/* Desktop: Original flex-1 layout */}
                                    <div className="hidden md:flex flex-1 h-[54px] rounded-[12px] bg-[#0F211B] items-center justify-between px-4">
                                        <span className="text-white font-['Montserrat'] font-bold text-[14px] leading-none tracking-normal">20% All Deposit</span>
                                        <img src={cloverImg} alt="Clover" className="h-[40px] object-contain" />
                                    </div>
                                </div>

                                <ClaimButton />
                            </BlockContainer>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <BlockContainer>
                                <h3 className="text-white font-['Montserrat'] font-bold text-[24px] mb-1">Play your favorite games</h3>
                                <p className="text-[#556761] font-['Montserrat'] font-bold text-[16px] leading-none tracking-normal mb-[24px]">Unlimited fun with top casino games.</p>
                                
                                <div className="grid grid-cols-4 gap-[20px] mb-[24px]">
                                    {GAMES.map((img, idx) => (
                                        <div key={idx} className="w-full aspect-square rounded-[15px] overflow-hidden" style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.3))' }}>
                                            <img src={img} alt="Game" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>

                                <ClaimButton />
                            </BlockContainer>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <BlockContainer>
                                <h3 className="text-white font-['Montserrat'] font-bold text-[24px] mb-1">Withdrawal immediately</h3>
                                <p className="text-[#556761] font-['Montserrat'] font-bold text-[16px] leading-none tracking-normal mb-[24px]">Fast withdrawals always, better experience.</p>
                                
                                <div className="grid grid-cols-3 gap-[12px] mb-[24px]">
                                    {PAYMENTS.map((img, idx) => (
                                        <div 
                                            key={idx} 
                                            className="w-full h-[120px] rounded-[15px] flex items-center justify-center p-4 transition-transform hover:scale-105"
                                            style={{ 
                                                background: 'radial-gradient(50% 80% at 50% 0%, rgba(255,255,255,0.12) 0%, var(--Shade-03, #0F211B) 100%)'
                                            }}
                                        >
                                            <img src={img} alt="Payment" className="max-w-[80%] max-h-[60%] object-contain opacity-90" />
                                        </div>
                                    ))}
                                </div>

                                <ClaimButton />
                            </BlockContainer>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    )
}
