import { useEffect, useRef } from 'react';

import goldenDragonImg from '@/assets/goldendragron.png';
import juwaImg from '@/assets/juwa copy.png';
import juwa1Img from '@/assets/jawa1.png';
import luckyImg from '@/assets/lucky777.png';
import magicCityImg from '@/assets/magiccity.png';
import milkyWaysImg from '@/assets/milkyways.png';
import orionStarsImg from '@/assets/orionstrars.png';
import riverSweepsImg from '@/assets/riversweeps.png';
import ultraPandaImg from '@/assets/ultrapanda.png';

const PLATFORMS = [
    goldenDragonImg,
    juwaImg,
    juwa1Img,
    luckyImg,
    magicCityImg,
    milkyWaysImg,
    orionStarsImg,
    riverSweepsImg,
    ultraPandaImg
];

function SmoothMarquee({ items }) {
    const scrollRef = useRef(null);
    
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationFrameId;
        let isDown = false;
        let startX = 0;
        let scrollLeftStart = 0;
        let velocity = 0;
        let lastX = 0;
        let lastTime = performance.now();
        
        let targetSpeed = 1; // Default auto-scroll speed
        let currentSpeed = 1;

        const handlePointerDown = (e) => {
            isDown = true;
            startX = e.pageX - el.offsetLeft;
            scrollLeftStart = el.scrollLeft;
            lastX = e.pageX;
            lastTime = performance.now();
            velocity = 0;
            el.style.cursor = 'grabbing';
            el.style.userSelect = 'none';
        };

        const handlePointerMove = (e) => {
            if (isDown) {
                e.preventDefault();
                
                const x = e.pageX - el.offsetLeft;
                const walk = (startX - x);
                el.scrollLeft = scrollLeftStart + walk;
                
                // Calculate velocity for inertia
                const now = performance.now();
                const dt = now - lastTime;
                if (dt > 0) {
                    velocity = (lastX - e.pageX) / dt * 16;
                }
                lastX = e.pageX;
                lastTime = now;
            } else {
                // Hover tracking logic
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const center = rect.width / 2;
                
                // Normalized from -1 (left edge) to 1 (right edge)
                const normalizedX = (x - center) / center;
                
                // Dead zone in the center to just do default scroll
                if (Math.abs(normalizedX) < 0.15) {
                    targetSpeed = 1;
                } else {
                    // Max speed based on how far from center
                    targetSpeed = normalizedX * 8; 
                }
            }
        };

        const handlePointerUp = () => {
            isDown = false;
            el.style.cursor = 'grab';
            el.style.removeProperty('user-select');
        };
        
        const handlePointerLeave = () => {
            isDown = false;
            el.style.cursor = 'grab';
            el.style.removeProperty('user-select');
            targetSpeed = 1; // reset to default auto-scroll when mouse leaves
        };

        el.addEventListener('pointerdown', handlePointerDown);
        window.addEventListener('pointerup', handlePointerUp);
        el.addEventListener('pointermove', handlePointerMove);
        el.addEventListener('pointerleave', handlePointerLeave);

        const scroll = () => {
            if (!isDown) {
                // Apply inertia from drag or hover-based speed
                if (Math.abs(velocity) > 0.5) {
                    velocity *= 0.95; // friction
                    el.scrollLeft += velocity;
                } else {
                    velocity = 0;
                    // Smoothly interpolate currentSpeed towards targetSpeed
                    currentSpeed += (targetSpeed - currentSpeed) * 0.05;
                    el.scrollLeft += currentSpeed;
                }
            }

            const halfWidth = el.scrollWidth / 2;
            
            if (el.scrollLeft >= halfWidth) {
                 el.scrollLeft -= halfWidth;
                 if (isDown) {
                     scrollLeftStart -= halfWidth;
                 }
            } else if (el.scrollLeft <= 0) {
                 el.scrollLeft += halfWidth;
                 if (isDown) {
                     scrollLeftStart += halfWidth;
                 }
            }
            
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
            el.removeEventListener('pointerdown', handlePointerDown);
            window.removeEventListener('pointerup', handlePointerUp);
            el.removeEventListener('pointermove', handlePointerMove);
            el.removeEventListener('pointerleave', handlePointerLeave);
        };
    }, []);

    return (
        <div 
            className="w-full overflow-hidden" 
            style={{ 
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)'
            }}
        >
            <div 
                ref={scrollRef}
                className="flex items-center gap-[20px] overflow-x-hidden no-scrollbar" 
                style={{ cursor: 'grab', width: '100%', padding: '20px 0', touchAction: 'pan-y' }}
            >
                {[...items, ...items].map((img, idx) => (
                    <div 
                        key={idx} 
                        className="flex-shrink-0 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-[15px] overflow-hidden transition-transform duration-300 hover:scale-105"
                        style={{ filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.3))' }}
                    >
                        <img 
                            src={img} 
                            alt="Platform" 
                            className=" object-cover select-none pointer-events-none h-full" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TrustedPlatformsSection() {
    return (
        <section className="w-full py-[80px] relative z-20">
            <div className="container-custom">
                <div className="text-center mb-10">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[36px] sm:text-[44px] leading-none tracking-normal">
                        <span className="text-white">TRUSTED </span>
                        <span className="text-[#68E203]">PLATFORMS</span>
                    </h2>
                </div>
                
                {/* Constrained to max-w-[1280px] container to show exactly ~8 cards */}
                <div className="w-full max-w-[1280px] mx-auto">
                    <SmoothMarquee items={PLATFORMS} />
                </div>
            </div>
        </section>
    )
}
