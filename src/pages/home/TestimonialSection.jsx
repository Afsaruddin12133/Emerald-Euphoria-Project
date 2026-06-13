import { motion } from 'framer-motion';

import firstPersonImg from '@/assets/first_person.PNG';
import secondPersonImg from '@/assets/second_person.PNG';
import thirdPersonImg from '@/assets/third_person.PNG';
import fourthPersonImg from '@/assets/fouth_person.PNG';
import fifthPersonImg from '@/assets/fifth_person.PNG';
import sixPersonImg from '@/assets/six_person.PNG';
import starImg from '@/assets/star.png';

const TESTIMONIALS = [
    {
        name: 'Brandon W.',
        image: firstPersonImg,
        text: '“The redemption process was simple and support answered my question quickly. That’s the kind of thing that keeps me coming back.”'
    },
    {
        name: 'Mike R.',
        image: secondPersonImg,
        text: '“Signed up mainly because of the First Deposit Match and honestly the process was a lot easier than I expected. Account setup took less than a couple of minutes and everything was straightforward.”'
    },
    {
        name: 'Sarah T.',
        image: thirdPersonImg,
        text: '“My first redemption was processed much faster than I thought it would be. That’s usually the thing I worry about with any new site, so it definitely gave me confidence to keep playing.”'
    },
    {
        name: 'Chris D.',
        image: fourthPersonImg,
        text: '“I was hesitant to try a new platform, but the sign-up offer gave me a reason to test it out. Glad I did. Everything worked smoothly from registration to my first game.”'
    },
    {
        name: 'Amanda K.',
        image: fifthPersonImg,
        text: '“What stood out to me was how simple the website is. No confusing menus, no unnecessary steps. Depositing, finding games, and checking my balance was all easy.”'
    },
    {
        name: 'Emily P.',
        image: sixPersonImg,
        text: '“I’ve used a lot of gaming sites and this one feels very beginner-friendly. Even if you’ve never played before, it’s easy to figure out where everything is.”'
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
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[30px] justify-items-center">
                    {TESTIMONIALS.map((t, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (idx % 3) * 0.2, ease: "easeOut" }}
                            className="w-full max-w-[414px] h-[542px] rounded-[30px] p-[25px] flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                            style={{ 
                                background: 'var(--Shade-02, #051711)', 
                                border: '1px solid var(--Shade-03, #0F211B)' 
                            }}
                        >
                            {/* Image Container */}
                            <div className="w-full h-[240px] shrink-0 rounded-[20px] overflow-hidden mb-[25px] relative">
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
                            
                            <p className="text-[#556761] font-['Montserrat'] font-bold text-[14px] leading-[140%] flex-1 overflow-hidden" style={{ letterSpacing: '0' }}>
                                {t.text}
                            </p>
                            
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
