import { motion } from 'framer-motion';

import man2Img from '@/assets/man.jpg';
import man1Img from '@/assets/manimages.jpg';
import starImg from '@/assets/star.png';
import womanImg from '@/assets/womanimages.jpg';

const TESTIMONIALS = [
    {
        name: 'John Doe',
        image: man1Img,
        text: 'Emerald Euphoria has been very easy to use. Purchase are instant, and my redeem was processed fast. Games run smooth on mobile on desktop.'
    },
    {
        name: 'John Doe', // Assuming same placeholder name, or we can use Jane Doe
        image: womanImg,
        text: 'Emerald Euphoria has been very easy to use. Purchase are instant, and my redeem was processed fast. Games run smooth on mobile on desktop.'
    },
    {
        name: 'John Doe',
        image: man2Img,
        text: 'Emerald Euphoria has been very easy to use. Purchase are instant, and my redeem was processed fast. Games run smooth on mobile on desktop.'
    }
];

export default function TestimonialSection() {
    return (
        <section className="w-full py-12 lg:py-20 relative z-20">
            <div className="container-custom max-w-[1280px] mx-auto">
                
                {/* Title */}
                <div className="text-center mb-[80px]">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[30px] md:text-[44px] leading-[100%] drop-shadow-[0_4px_2px_rgba(0,0,0,0.9)] [-webkit-text-stroke:1.5px_currentColor]" style={{ letterSpacing: '0', lineHeight: '1' }}>
                        <span className="text-white">TRUSTED BY</span>
                        <br />
                        <span className="text-[#68E203]">10,000+ PLAYERS</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-[40px] lg:gap-[30px]">
                    {TESTIMONIALS.map((t, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                            className="w-full max-w-[414px] lg:flex-1 h-[542px] rounded-[30px] p-[25px] flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                            style={{ 
                                background: 'var(--Shade-02, #051711)', 
                                border: '1px solid var(--Shade-03, #0F211B)' 
                            }}
                        >
                            {/* Image Container */}
                            <div className="w-full flex-1 min-h-[260px] rounded-[20px] overflow-hidden mb-[25px] relative">
                                <img 
                                    src={t.image} 
                                    alt={t.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                {/* Optional subtle overlay for style */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Stars */}
                            <div className="flex items-center gap-[6px] mb-[15px]">
                                {[...Array(5)].map((_, i) => (
                                    <motion.img 
                                        key={i} 
                                        src={starImg} 
                                        alt="Star" 
                                        className="w-[18px] h-[18px] object-contain"
                                        initial={{ opacity: 0.8, scale: 1 }}
                                        whileHover={{ scale: 1.2, opacity: 1, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    />
                                ))}
                            </div>

                            {/* Text Content */}
                            <h4 className="text-white font-['Montserrat'] font-bold text-[16px] mb-[12px] leading-[100%]" style={{ letterSpacing: '0' }}>{t.name}</h4>
                            
                            <p className="text-[#556761] font-['Montserrat'] font-bold text-[16px] leading-[110%]" style={{ letterSpacing: '0' }}>
                                {t.text}
                            </p>
                            
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
