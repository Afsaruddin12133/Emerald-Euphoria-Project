import {
    fadeInUp,
    staggerContainer
} from '@/lib/animations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import mascotImg from '@/assets/Mascot.png';
import bgImg from '@/assets/background image.png';
import circalImg from '@/assets/circal.png';
import gemesBoxImg from '@/assets/gemes box.png';
import trollyImg from '@/assets/magnific trolly.png';

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden pt-32 pb-20 min-h-screen flex items-center" id="hero">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${bgImg}')` }}
            >
                <div className="absolute inset-0 bg-black/40 lg:bg-black/20" />
            </div>

            <div className="container-custom relative w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Content */}
                    <motion.div
                        className="flex-1 w-full max-w-2xl relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer(0.1, 0.1)}
                    >
                        <motion.div variants={fadeInUp} className="mb-6 mt-6">
                            <h1
                                className="font-['Montserrat'] font-black font-extrabold uppercase text-[40px] sm:text-[55px] lg:text-[70px] leading-[0.9] tracking-[-0.03em] text-white"
                                style={{
                                    textShadow: "2px 0 0 currentColor, -1px 0 0 currentColor"
                                }}
                            >
                                Welcome  <span className='pl-2'>to</span>
                                <br />
                                <span
                                    className="text-transparent bg-clip-text whitespace-nowrap
             drop-shadow-[0_4px_2px_rgba(0,0,0,0.9)] tracking-[-0.06em]"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(180deg, #68E203 10%, #C6FF94 40%, #68E203 50%, #C6FF94 60%, #68E203 100%)',
                                    }}
                                >
                                    Emerald <span className="pl-2">Euphoria</span>
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            className="font-['Montserrat'] font-medium  text-[16px] sm:text-[18px] text-[#556761] leading-none tracking-normal max-w-[550px] mb-8"
                        >
                            Your favorite gameroom for slots, fish games and keno.
                            Enjoy more than 15 Platforms at one place and
                            <br className="hidden lg:block" />
                            <span> win Real Prizes!</span>
                        </motion.p>

                        <motion.div variants={fadeInUp} className="mb-8 w-full flex flex-col items-center lg:items-start">
                            <h2 className="text-white  text-2xl mb-4">Register & Claim</h2>

                            <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-[10px] w-full max-w-[405px] h-[48px] scale-[0.85] sm:scale-100 origin-center lg:origin-left">
                                <div className="relative flex items-center bg-[#0B120F] rounded-[12px] w-[175px] h-[48px] pl-[15px] bg-[#0F211B]">
                                    <span className="text-white text-[15px] font-['Montserrat'] whitespace-nowrap z-10">100% Sign Up  </span>
                                    <img
                                        src={gemesBoxImg}
                                        alt="Games Box"
                                        className="absolute w-[64px] h-[64px] top-[-8px] left-[125px] z-20"
                                        style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.25))' }}
                                    />
                                </div>

                                <span className="text-white font-bold text-3xl sm:pl-4 leading-none mt-[-4px] z-10">+</span>

                                <div className="relative flex items-center bg-[#0B120F] rounded-[12px] w-[189px] h-[48px] pl-[15px] bg-[#0F211B]">
                                    <span className="text-white  text-[15px] font-['Montserrat'] whitespace-nowrap z-10 ">20% All Deposit</span>
                                    <img
                                        src={circalImg}
                                        alt="Clover"
                                        className="absolute w-[64px] h-[64px] top-[-8px] left-[145px] z-20"
                                        style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.25))' }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mb-48 lg:mb-0 mt-2 sm:mt-0">
                            <Link
                                to="/sign-up"
                                className="inline-flex items-center justify-center w-[158px] h-[54px] pt-[19px] pr-[25px] pb-[19px] pl-[25px] gap-[10px] rounded-[12px] bg-gradient-to-r from-[#107015] to-[#68E203] text-white font-['Montserrat'] text-[17px] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(104,226,3,0.3)] hover:shadow-[0_0_30px_rgba(104,226,3,0.5)]"
                            >
                                Claim Now
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Mascot and Trolley */}
                    <motion.div
                        className="absolute inset-0 w-full max-w-[100vw] mx-auto pointer-events-none z-10"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div
                            className="absolute pointer-events-none rounded-full hidden lg:block"
                            style={{
                                width: '1000px',
                                height: '1400px',
                                top: '-252px',
                                left: '-780px',
                                transform: 'rotate(-90deg)',
                                background: '#00120C',
                                filter: 'blur(200px)',
                                WebkitFilter: 'blur(200px)',
                                zIndex: -1
                            }}
                        />

                        <div
                            className="absolute pointer-events-none rounded-full hidden lg:block"
                            style={{
                                width: '600px',
                                height: '600px',
                                top: '-150px',
                                left: '800px',
                                background: 'radial-gradient(circle, rgba(104, 226, 3, 0.25) 0%, rgba(104, 226, 3, 0) 70%)',
                                filter: 'blur(80px)',
                                WebkitFilter: 'blur(80px)',
                                zIndex: -1
                            }}
                        />

                        <motion.img
                            src={trollyImg}
                            alt="Magnificent Trolley"
                            className="absolute pointer-events-auto z-10 bottom-[-40px] lg:bottom-auto left-1/2 lg:left-[290px] -translate-x-1/2 lg:translate-x-0 lg:top-[96px] w-[350px] lg:w-[920px]"
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        <motion.img
                            src={mascotImg}
                            alt="Emerald Mascot"
                            className="absolute pointer-events-auto z-20 bottom-[-40px] lg:bottom-auto left-1/2 lg:left-[700px] -translate-x-1/2 lg:translate-x-0 lg:top-[-15px] w-[280px] lg:w-[510px]"
                            style={{
                                filter: 'drop-shadow(0px 40px 100px rgba(0,0,0,0.5))'
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        />
                    </motion.div>
                </div>
            </div>

            <div
                className="absolute top-0 left-0 w-[100%] md:w-[80%] h-full pointer-events-none z-0"
                style={{
                    background: 'linear-gradient(to right, var(--Shade-01, #00120C) 0%, rgba(0,18,12,0.8) 40%, transparent 100%)'
                }}
            />

            <div
                className="absolute bottom-0 left-0 w-full h-[260px] pointer-events-none z-[15]"
                style={{
                    background: 'linear-gradient(to top, var(--Shade-01, #00120C) 20%, rgba(0,18,12,0.9) 60%, transparent 100%)'
                }}
            />
        </section>
    )
}
