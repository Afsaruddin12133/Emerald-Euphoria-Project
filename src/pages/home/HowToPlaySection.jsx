import { motion } from 'framer-motion';

import mascotImg from '@/assets/muscot123.png';

// Games
import goldenDragonImg from '@/assets/goldendragron.png';
import orionStarsImg from '@/assets/orionstrars.png';
import fishImg from '@/assets/Fish.png';
import juwaImg from '@/assets/juwa.png';
import gameVaultImg from '@/assets/gamming.png';
import milkyWaysImg from '@/assets/milkyways.png';
import ultraPandaImg from '@/assets/ultrapanda.png';
import riverSweepsImg from '@/assets/riversweeps.png';

// Payments
import cryptoImg from '@/assets/cryptologo.png';
import visaImg from '@/assets/visa.png';
import mastercardImg from '@/assets/Mastercard-logo 1.png';
import dollarImg from '@/assets/dollersign.png';
import paypalImg from '@/assets/PayPal 1.png';
import tierlockImg from '@/assets/tierlock.png';

// Rewards
import chestImg from '@/assets/gemes box.png';
import cloverImg from '@/assets/lucky.png'; // Fallback if it's not the exact clover

const GAMES = [
    goldenDragonImg,
    orionStarsImg,
    fishImg,
    juwaImg,
    gameVaultImg,
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
            className={`w-full rounded-[25px] flex flex-col p-[35px] ${className}`}
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
            className="w-full h-[54px] rounded-[12px] text-white font-['Montserrat'] font-bold text-[16px] hover:opacity-90 transition-opacity mt-auto"
            style={{ 
                background: 'linear-gradient(90deg, #107015 0%, #68E203 100%)',
                padding: '19px 25px'
            }}
        >
            <span className="flex items-center justify-center leading-none h-full mt-[-2px]">
                Claim Now
            </span>
        </button>
    );
}

export default function HowToPlaySection() {
    return (
        <section className="w-full py-[80px] relative z-20">
            <div className="container-custom">
                
                {/* Title */}
                <div className="text-center mb-[60px] md:mb-[100px]">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[36px] md:text-[44px] leading-none tracking-normal">
                        <span className="text-white">HOW TO PLAY IN</span>
                        <br />
                        <span className="text-[#68E203]">3 EASY STEPS</span>
                    </h2>
                </div>

                {/* Main Content Layout */}
                <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[40px] lg:gap-0">
                    
                    {/* Left Side: Mascot */}
                    <div className="w-full lg:w-[600px] flex justify-center lg:justify-start lg:-ml-[50px] relative pointer-events-none">
                        <motion.img 
                            src={mascotImg} 
                            alt="Mascot" 
                            className="w-full max-w-[750px] h-auto object-contain mix-blend-lighten relative z-10"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ mixBlendMode: 'lighten' }}
                        />
                    </div>

                    {/* Right Side: 3 Steps */}
                    <div className="w-full lg:w-[640px] flex flex-col gap-[20px]">
                        
                        {/* Step 1 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <BlockContainer>
                                <h3 className="text-white font-['Montserrat'] font-bold text-[24px] mb-1">Register & claim</h3>
                                <p className="text-[#556761] font-['Montserrat'] font-medium text-[14px] mb-[24px]">Sign Up today & unlock instant rewards.</p>
                                
                                <div className="flex items-center gap-[10px] w-full mb-[24px]">
                                    <div className="flex-1 h-[54px] rounded-[12px] bg-[#0F211B] flex items-center justify-between px-4">
                                        <span className="text-white font-['Montserrat'] font-semibold text-[14px]">100% Sign Up</span>
                                        <img src={chestImg} alt="Chest" className="h-[40px] object-contain" />
                                    </div>
                                    <span className="text-white font-bold text-[24px]">+</span>
                                    <div className="flex-1 h-[54px] rounded-[12px] bg-[#0F211B] flex items-center justify-between px-4">
                                        <span className="text-white font-['Montserrat'] font-semibold text-[14px]">20% All Deposit</span>
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
                                <p className="text-[#556761] font-['Montserrat'] font-medium text-[14px] mb-[24px]">Unlimited fun with top casino games.</p>
                                
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
                                <p className="text-[#556761] font-['Montserrat'] font-medium text-[14px] mb-[24px]">Fast withdrawals always, better experience.</p>
                                
                                <div className="grid grid-cols-3 gap-[12px] mb-[24px]">
                                    {PAYMENTS.map((img, idx) => (
                                        <div 
                                            key={idx} 
                                            className="w-full h-[120px] rounded-[15px] flex items-center justify-center p-4 transition-transform hover:scale-105"
                                            style={{ background: 'var(--Shade-03, #0F211B)' }}
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
