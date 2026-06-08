import { fadeInUp, revealUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import bluryImg from '@/assets/blury.png';
import circalImg from '@/assets/circal.png';
import coin1Img from '@/assets/coin1.png';
import coin2Img from '@/assets/coin2.png';
import gemesBoxImg from '@/assets/gemes box.png';
import mascotImg from '@/assets/muscot.png';

export default function JoinUsSection() {
    return (
        <section className="section py-12 lg:py-20 overflow-x-hidden" id="join-us">
            <div className="container-custom relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={revealUp}
                    className="relative w-full max-w-[1280px] lg:h-[493px] mx-auto rounded-[30px] bg-gradient-to-r from-[#031c10] to-[#043319] sm:p-12 p-6 md:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl"
                    style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                >
                    {/* Blurry Background */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[30px]">
                        <img src={bluryImg} alt="Blurry Background" className="w-full h-full object-cover mix-blend-screen opacity-100" />
                    </div>
                    {/* Left Side Content */}
                    <motion.div
                        variants={staggerContainer(0.1, 0.1)}
                        className="flex-1 w-full max-w-xl z-20 flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0 mx-auto lg:mx-0"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="font-['Montserrat'] text-white text-[32px] sm:text-[45px] md:text-[55px] leading-[1.05] mb-8 text-center lg:text-left"
                        >
                            Join us Today for <br />
                            <span
                                className="font-['Montserrat'] font-extrabold text-[50px] leading-[100%] inline-block"
                                style={{
                                    letterSpacing: '0',
                                    background: 'linear-gradient(180deg, #68E203 0%, #C6FF94 20%, #68E203 50%, #C6FF94 80%, #68E203 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                }}
                            >
                                Endless Winning
                            </span>
                            <br />
                            Opportunities!
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="mb-8 w-full flex flex-col items-center lg:items-start">
                            <h3 className="text-white font-['Montserrat'] font-bold text-[22px] leading-none tracking-normal mb-4">Register & Claim</h3>

                            <div className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-6 w-full max-w-[500px]">
                                <div className="relative flex items-center bg-[#0F211B] rounded-[8px] sm:rounded-[12px] w-auto sm:w-[175px] h-[36px] sm:h-[48px] pl-[10px] sm:pl-[15px] pr-[38px] sm:pr-0 border border-white/5 mr-0 sm:mr-2">
                                    <span className="text-white font-['Montserrat'] font-bold text-[10px] min-[375px]:text-[11px] sm:text-[14px] leading-none tracking-normal whitespace-nowrap z-10 pr-0 sm:pr-[20px]">100% Sign Up</span>
                                    <img
                                        src={gemesBoxImg}
                                        alt="Games Box"
                                        className="absolute w-[44px] sm:w-[64px] h-[44px] sm:h-[64px] top-[-4px] sm:top-[-8px] -right-[12px] sm:-right-[15px] z-20"
                                        style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.25))' }}
                                    />
                                </div>

                                <span className="text-white font-bold text-xl sm:text-3xl px-1 sm:px-2 leading-none z-10 block mt-[-4px]">+</span>

                                <div className="relative flex items-center bg-[#0F211B] rounded-[8px] sm:rounded-[12px] w-auto sm:w-[189px] h-[36px] sm:h-[48px] pl-[10px] sm:pl-[15px] pr-[38px] sm:pr-0 border border-white/5 ml-0 sm:ml-2">
                                    <span className="text-white font-['Montserrat'] font-bold text-[10px] min-[375px]:text-[11px] sm:text-[14px] leading-none tracking-normal whitespace-nowrap z-10 pr-0 sm:pr-[20px]">20% All Deposit</span>
                                    <img
                                        src={circalImg}
                                        alt="Clover"
                                        className="absolute w-[44px] sm:w-[64px] h-[44px] sm:h-[64px] top-[-4px] sm:top-[-8px] -right-[12px] sm:-right-[15px] z-20"
                                        style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.25))' }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-2 flex w-full justify-center lg:justify-start">
                            <Link
                                to="/sign-up"
                                className="inline-flex items-center justify-center h-[54px] px-8 rounded-[12px] bg-gradient-to-r from-[#107015] to-[#68E203] text-white font-['Montserrat'] font-bold text-[16px] leading-none tracking-[-0.02em] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(104,226,3,0.3)] hover:shadow-[0_0_30px_rgba(104,226,3,0.5)]"
                            >
                                Register & Claim
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side Mascot & Assets */}
                    <div className="relative w-full lg:w-auto flex justify-center items-center pointer-events-none mt-4 lg:mt-0 lg:static ">

                        {/* Spacer for Mobile Height */}
                        <div className="w-full h-[240px] sm:h-[280px] lg:hidden block" />

                        {/* Mobile Mascot — fades naturally at bottom via CSS mask, no hard clip visible */}
                        <div
                            className="absolute inset-x-0 bottom-0 top-[-100px] overflow-hidden pointer-events-none lg:hidden z-10"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                                maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
                            }}
                        >
                            <motion.div
                                className="absolute bottom-[-140px] sm:bottom-[-120px] left-1/2 -translate-x-1/2 w-[280px] sm:w-[340px] top-12"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img
                                    src={mascotImg}
                                    alt="Leprechaun Mascot"
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                />
                            </motion.div>
                        </div>

                        {/* Mobile Coins — kept inside card bounds, away from rounded corners */}
                        <motion.img
                            src={coin1Img}
                            alt="Floating Coin 1"
                            className="absolute lg:hidden z-20 w-[80px] sm:w-[80px] left-[-49px] sm:left-[20px] bottom-[-10px] sm:bottom-[30px]"
                            animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }}
                        />
                        <motion.img
                            src={coin2Img}
                            alt="Floating Coin 2"
                            className="absolute lg:hidden z-20 w-[90px] sm:w-[90px] right-[-49px] sm:right-[20px] bottom-[15px] sm:bottom-[25px]"
                            animate={{ y: [0, 20, 0], rotate: [0, -20, 20, 0] }}
                            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }}
                        />

                        {/* Mascot Image (Desktop with Bottom Clip) */}
                        <div className="hidden lg:block absolute inset-x-0 bottom-0 top-[-70px] pointer-events-none overflow-hidden z-10 rounded-b-[30px]">
                            <motion.div
                                className="absolute w-[680px] h-[800px] top-[50px] left-[530px] lg:max-w-none lg:-translate-y-0"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img
                                    src={mascotImg}
                                    alt="Leprechaun Mascot"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </motion.div>
                        </div>

                        {/* Desktop Floating Coins */}
                        <motion.img
                            src={coin1Img}
                            alt="Floating Coin 1"
                            className="hidden lg:block absolute z-20 lg:w-[100px] lg:left-[460px] xl:left-[590px] top-auto lg:top-[80%] xl:top-[70%]"
                            animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.5))' }}
                        />

                        <motion.img
                            src={coin2Img}
                            alt="Floating Coin 2"
                            className="hidden lg:block absolute z-20 lg:w-[120px] lg:-right-[40px] lg:bottom-auto lg:top-[60%] xl:top-[65%]"
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
