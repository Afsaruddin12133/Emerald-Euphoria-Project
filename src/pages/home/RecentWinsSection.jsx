import { useEffect, useRef, useState } from 'react';

import magicCityImg from '@/assets/Magic city.png';
import coinImg from '@/assets/coin.png';
import juwaImg from '@/assets/juwa.png';
import luckyImg from '@/assets/lucky.png';
import ultraPandaImg from '@/assets/ultra panda.png';

const RECENT_WINS_DATA = [
    { id: 1, image: magicCityImg, user: '@bitwin', amount: '999.0' },
    { id: 2, image: luckyImg, user: '@bitwin', amount: '999.0' },
    { id: 3, image: juwaImg, user: '@bitwin', amount: '999.0' },
    { id: 4, image: luckyImg, user: '@bitwin', amount: '999.0' },
    { id: 5, image: magicCityImg, user: '@bitwin', amount: '999.0' },
    { id: 6, image: juwaImg, user: '@bitwin', amount: '999.0' },
    { id: 7, image: ultraPandaImg, user: '@bitwin', amount: '999.0' },
    { id: 8, image: magicCityImg, user: '@bitwin', amount: '999.0' },
    { id: 9, image: juwaImg, user: '@bitwin', amount: '999.0' },
    { id: 10, image: ultraPandaImg, user: '@bitwin', amount: '999.0' },
    { id: 11, image: magicCityImg, user: '@bitwin', amount: '999.0' },
    { id: 12, image: luckyImg, user: '@bitwin', amount: '999.0' },
];

function RecentWinsMarquee() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const content = el.querySelector('.marquee-inner')
        if (!content) return

        let rafId
        let lastTime = performance.now()
        const speed = 40 // px per second

        const step = (now) => {
            const dt = (now - lastTime) / 1000
            lastTime = now
            
            el.scrollLeft += speed * dt

            const singleWidth = content.scrollWidth / 2
            if (singleWidth > 0 && el.scrollLeft >= singleWidth) {
                el.scrollLeft -= singleWidth
            }

            rafId = requestAnimationFrame(step)
        }

        rafId = requestAnimationFrame(step)

        return () => {
            cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <div ref={ref} className="relative w-full overflow-x-hidden" style={{ padding: '14px' }}>
            <div className="marquee-inner flex items-center gap-6 flex-nowrap" style={{ whiteSpace: 'nowrap' }}>
                {[...RECENT_WINS_DATA, ...RECENT_WINS_DATA].map((win, idx) => (
                    <div key={`${win.id}-${idx}`} className="flex flex-col items-center justify-center cursor-pointer group" style={{ flex: '0 0 85px', height: '138px' }}>
                        <div className="w-[85px] h-[85px] rounded-[10px]  mb-[10px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(104,226,3,0.3)]">
                            <img src={win.image} alt="Game" className="object-cover" />
                        </div>
                        <div className="text-[#556761] text-[12px] font-['Montserrat'] mb-[6px] group-hover:text-white transition-colors duration-300">
                            {win.user}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="relative w-[14px] h-[14px] flex items-center justify-center top-[-1px]">
                                {/* Golden glow specifically below the coin */}
                                <div className="absolute -bottom-[3px] w-[12px] h-[6px] bg-[#FFAB00] rounded-full blur-[4px] opacity-100" />
                                <img src={coinImg} alt="Coin" className="w-full h-full relative z-10" />
                            </div>
                            <span className="text-white text-[14px] font-['Montserrat'] font-bold tracking-wide">{win.amount}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function RecentWinsSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-8 relative z-20 mt-[-40px]">
            <div className="container-custom mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#68E203] shadow-[0_0_8px_#68E203]" />
                <h3 className="text-white font-['Montserrat'] font-bold text-lg">Recent Wins</h3>
            </div>

            <div
                className="container-custom w-full h-[178px] overflow-hidden relative flex items-center"
                style={{
                    background: 'var(--Shade-02, #051711)',
                    border: '1px solid var(--Shade-03, #0F211B)',
                    borderRadius: '20px'
                }}
            >
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#051711] to-transparent z-10 pointer-events-none rounded-l-[20px]" />
                <div className="absolute right-0 top-0 bottom-0 w-[120px] md:w-[200px] lg:w-[280px] bg-gradient-to-l from-[#051711] via-[#051711]/90 to-transparent z-10 pointer-events-none rounded-r-[20px]" />
                <RecentWinsMarquee />
            </div>
        </section>
    )
}
