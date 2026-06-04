import { fadeInUp, staggerContainer, revealUp } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import mascotImg from '@/assets/muscot.png';
import glowImg from '@/assets/backgroundglow.png';
import coin1Img from '@/assets/coin1.png';
import coin2Img from '@/assets/coin2.png';
import gemesBoxImg from '@/assets/gemes box.png';
import circalImg from '@/assets/circal.png';

export default function JoinUsSection() {
    return (
        <section className="section py-20 lg:py-32" id="join-us">
            <div className="container-custom relative">
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: '-40px' }} 
                    variants={revealUp}
                    className="relative w-full rounded-[30px] bg-gradient-to-r from-[#031c10] to-[#043319] sm:p-12 p-6 md:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl"
                    style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                >
                    {/* Left Side Content */}
                    <motion.div 
                        variants={staggerContainer(0.1, 0.1)} 
                        className="flex-1 w-full max-w-xl z-20 flex flex-col items-start text-left mb-16 lg:mb-0"
                    >
                        <motion.h2 
                            variants={fadeInUp}
                            className="font-['Montserrat'] font-black text-white text-[32px] sm:text-[45px] md:text-[55px] leading-[1.05] mb-8"
                        >
                            Join us Today for <br />
                            <span className="text-[#68E203]">Endless Winning</span> <br />
                            Opportunities!
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="mb-8 w-full flex flex-col items-start">
                            <h3 className="text-white font-bold text-xl mb-4 font-['Montserrat']">Register & Claim</h3>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-2 w-full max-w-[450px]">
                                <div className="relative flex items-center bg-[#0B120F] rounded-[12px] w-[175px] h-[48px] pl-[15px] border border-white/5">
                                    <span className="text-white font-bold text-[15px] font-['Montserrat'] whitespace-nowrap z-10">100% Sign Up  </span>
                                    <img
                                        src={gemesBoxImg}
                                        alt="Games Box"
                                        className="absolute w-[64px] h-[64px] top-[-8px] left-[125px] z-20"
                                        style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.25))' }}
                                    />
                                </div>

                                <span className="text-white font-bold text-3xl sm:px-2 leading-none z-10 hidden sm:block mt-[-4px]">+</span>

                                <div className="relative flex items-center bg-[#0B120F] rounded-[12px] w-[189px] h-[48px] pl-[15px] border border-white/5">
                                    <span className="text-white font-bold text-[15px] font-['Montserrat'] whitespace-nowrap z-10 ">20% All Deposit</span>
                                    <img
                                        src={circalImg}
                                        alt="Clover"
                                        className="absolute w-[64px] h-[64px] top-[-8px] left-[145px] z-20"
                                        style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.25))' }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-2">
                            <Link
                                to="/sign-up"
                                className="inline-flex items-center justify-center h-[54px] px-8 rounded-[12px] bg-gradient-to-r from-[#107015] to-[#68E203] text-white font-['Montserrat'] font-bold text-[17px] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(104,226,3,0.3)] hover:shadow-[0_0_30px_rgba(104,226,3,0.5)]"
                            >
                                Register & Claim
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side Mascot & Assets */}
                    <div className="relative w-full lg:w-auto flex justify-center items-center pointer-events-none mt-10 lg:mt-0 lg:static">
                        {/* Glow Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] md:w-[20%] lg:w-[100px] lg:left-[800px] lg:top-[50%] h-auto aspect-square z-0 mix-blend-screen opacity-90">
                             <img src={glowImg} alt="Glow Effect" className="w-full h-full object-contain" />
                        </div>
                        
                        {/* Mascot Image */}
                        <motion.div
                            className="relative z-10 w-full max-w-[400px] lg:absolute lg:w-[500px] lg:h-[523px] lg:top-[-30px] lg:left-[680px] lg:max-w-none lg:-translate-y-0"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <img 
                                src={mascotImg} 
                                alt="Leprechaun Mascot" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </motion.div>

                        {/* Floating Coins */}
                        <motion.img 
                            src={coin1Img} 
                            alt="Floating Coin 1" 
                            className="absolute z-20 w-[70px] md:w-[90px] lg:w-[100px] left-0 md:-left-10 lg:left-[450px] xl:left-[500px] top-[10%] lg:top-[55%] xl:top-[50%]"
                            animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }}
                        />
                        
                        <motion.img 
                            src={coin2Img} 
                            alt="Floating Coin 2" 
                            className="absolute z-20 w-[80px] md:w-[100px] lg:w-[120px] right-0 md:-right-10 lg:-right-[40px] bottom-0 lg:bottom-auto lg:top-[60%] xl:top-[65%]"
                            animate={{ y: [0, 20, 0], rotate: [0, -20, 20, 0] }}
                            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
