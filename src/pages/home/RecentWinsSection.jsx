import { useEffect, useRef } from 'react';

import magicCityImg from '@/assets/Magic city.png';
import coinImg from '@/assets/coin.png';
import juwaImg from '@/assets/juwa.png';
import luckyImg from '@/assets/lucky.png';
import ultraPandaImg from '@/assets/ultra panda.png';
import fireKirinImg from '@/assets/firekirin.png';
import orionStarsImg from '@/assets/orionstrars.png';
import gameVaultImg from '@/assets/game vault.png';
import milkyWayImg from '@/assets/milkyways.png';
import goldenDragonImg from '@/assets/goldendragron.png';
import riverSweepsImg from '@/assets/riversweeps.png';

const vblinkImg = luckyImg;
const blueDragonImg = goldenDragonImg;
const vegasXImg = magicCityImg;
const yoloImg = ultraPandaImg;

const RECENT_WINS_DATA = [
    { id: 1, image: juwaImg, user: '@LuckyMike87', amount: '$187' },
    { id: 2, image: fireKirinImg, user: '@SpinQueen22', amount: '$942' },
    { id: 3, image: orionStarsImg, user: '@BigWinDave', amount: '$356' },
    { id: 4, image: gameVaultImg, user: '@JackpotAsh', amount: '$784' },
    { id: 5, image: milkyWayImg, user: '@MoonCash99', amount: '$521' },
    { id: 6, image: vblinkImg, user: '@VegasAce11', amount: '$963' },
    { id: 7, image: juwaImg, user: '@FastCoins77', amount: '$248' },
    { id: 8, image: fireKirinImg, user: '@PandaLuck55', amount: '$675' },
    { id: 9, image: orionStarsImg, user: '@OrionKing88', amount: '$892' },
    { id: 10, image: gameVaultImg, user: '@GoldRush24', amount: '$319' },
    { id: 11, image: milkyWayImg, user: '@StarPlayer66', amount: '$997' },
    { id: 12, image: vblinkImg, user: '@LuckyCharm9', amount: '$451' },
    { id: 13, image: juwaImg, user: '@CashHunter13', amount: '$734' },
    { id: 14, image: fireKirinImg, user: '@FireSpin88', amount: '$168' },
    { id: 15, image: orionStarsImg, user: '@MegaJackpot7', amount: '$581' },
    { id: 16, image: gameVaultImg, user: '@VaultMaster1', amount: '$928' },
    { id: 17, image: milkyWayImg, user: '@GalaxyWins2', amount: '$263' },
    { id: 18, image: vblinkImg, user: '@VBChampion8', amount: '$845' },
    { id: 19, image: juwaImg, user: '@WildReels17', amount: '$492' },
    { id: 20, image: fireKirinImg, user: '@KirinBoss99', amount: '$999' },
    { id: 21, image: orionStarsImg, user: '@SpinDoctor5', amount: '$227' },
    { id: 22, image: gameVaultImg, user: '@LuckyVault44', amount: '$651' },
    { id: 23, image: milkyWayImg, user: '@CosmicCash18', amount: '$783' },
    { id: 24, image: vblinkImg, user: '@TurboWins3', amount: '$395' },
    { id: 25, image: juwaImg, user: '@ReelKing77', amount: '$914' },
    { id: 26, image: fireKirinImg, user: '@DragonFire9', amount: '$287' },
    { id: 27, image: orionStarsImg, user: '@OrionLegend', amount: '$736' },
    { id: 28, image: gameVaultImg, user: '@CashVault21', amount: '$557' },
    { id: 29, image: milkyWayImg, user: '@MilkyJackpot', amount: '$178' },
    { id: 30, image: vblinkImg, user: '@BlinkWinner7', amount: '$881' },
    { id: 31, image: juwaImg, user: '@JuwaHero88', amount: '$624' },
    { id: 32, image: fireKirinImg, user: '@FireTiger11', amount: '$342' },
    { id: 33, image: orionStarsImg, user: '@StarCrusher4', amount: '$953' },
    { id: 34, image: gameVaultImg, user: '@GoldenVault5', amount: '$469' },
    { id: 35, image: milkyWayImg, user: '@LunarPlayer8', amount: '$816' },
    { id: 36, image: vblinkImg, user: '@VBMoney99', amount: '$214' },
    { id: 37, image: juwaImg, user: '@LuckyReels24', amount: '$771' },
    { id: 38, image: fireKirinImg, user: '@KirinPower77', amount: '$589' },
    { id: 39, image: orionStarsImg, user: '@OrionMasterX', amount: '$998' },
    { id: 40, image: gameVaultImg, user: '@VaultKing33', amount: '$301' },
    { id: 41, image: milkyWayImg, user: '@SpaceWinner1', amount: '$694' },
    { id: 42, image: vblinkImg, user: '@BlinkCash22', amount: '$873' },
    { id: 43, image: blueDragonImg, user: '@BlueAce88', amount: '$255' },
    { id: 44, image: vegasXImg, user: '@VegasPlayer7', amount: '$618' },
    { id: 45, image: luckyImg, user: '@SweepKing44', amount: '$945' },
    { id: 46, image: goldenDragonImg, user: '@GoldDragon9', amount: '$386' },
    { id: 47, image: magicCityImg, user: '@MagicWinner1', amount: '$727' },
    { id: 48, image: yoloImg, user: '@YOLOJackpot7', amount: '$167' },
    { id: 49, image: riverSweepsImg, user: '@RiverBoss88', amount: '$852' },
    { id: 50, image: juwaImg, user: '@JuwaNextGen', amount: '$538' },
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
            <div className="marquee-inner flex items-center gap-3 md:gap-6 flex-nowrap" style={{ whiteSpace: 'nowrap' }}>
                {[...RECENT_WINS_DATA, ...RECENT_WINS_DATA].map((win, idx) => (
                    <div key={`${win.id}-${idx}`} className="flex flex-col items-center justify-center cursor-pointer group md:hidden" style={{ flex: '0 0 68px', height: '118px' }}>
                        <div className="w-[68px] h-[68px] rounded-[8px] mb-[8px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(104,226,3,0.3)]">
                            <img src={win.image} alt="Game" className="w-full h-full object-cover rounded-[8px]" />
                        </div>
                        <div className="text-[#556761] text-[11px] font-['Montserrat'] font-bold leading-none tracking-[-0.02em] mb-[5px] group-hover:text-white transition-colors duration-300">
                            {win.user}
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="relative w-[12px] h-[12px] flex items-center justify-center top-[-1px]">
                                <div className="absolute -bottom-[3px] w-[10px] h-[5px] bg-[#FFAB00] rounded-full blur-[4px] opacity-100" />
                                <img src={coinImg} alt="Coin" className="w-full h-full relative z-10" />
                            </div>
                            <span className="text-white text-[11px] font-['Montserrat'] font-bold tracking-wide">{win.amount}</span>
                        </div>
                    </div>
                ))}
                {[...RECENT_WINS_DATA, ...RECENT_WINS_DATA].map((win, idx) => (
                    <div key={`desktop-${win.id}-${idx}`} className="hidden md:flex flex-col items-center justify-center cursor-pointer group" style={{ flex: '0 0 85px', height: '138px' }}>
                        <div className="w-[85px] h-[85px] rounded-[10px] mb-[10px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(104,226,3,0.3)]">
                            <img src={win.image} alt="Game" className="object-cover" />
                        </div>
                        <div className="text-[#556761] text-[14px] font-['Montserrat'] font-bold leading-none tracking-[-0.02em] mb-[6px] group-hover:text-white transition-colors duration-300">
                            {win.user}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="relative w-[14px] h-[14px] flex items-center justify-center top-[-1px]">
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
        <section className="w-full flex flex-col items-center justify-center py-12 lg:py-20 relative z-20 -mt-[80px] lg:-mt-0">
            <div className="container-custom w-full flex flex-col">
                <div className="mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#68E203] shadow-[0_0_8px_#68E203]" />
                    <h3 className="text-white font-['Montserrat'] font-bold text-lg">Recent Wins</h3>
                </div>

                <div
                    className="w-full h-[148px] md:h-[178px] overflow-hidden relative flex items-center"
                    style={{
                        background: 'var(--Shade-02, #051711)',
                        border: '1px solid var(--Shade-03, #0F211B)',
                        borderRadius: '20px'
                    }}
                >
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#051711] to-transparent z-10 pointer-events-none rounded-l-[20px]" />
                    <div className="absolute right-0 top-0 bottom-0 w-[60px] md:w-[200px] lg:w-[280px] bg-gradient-to-l from-[#051711] via-[#051711]/90 to-transparent z-10 pointer-events-none rounded-r-[20px]" />
                    <RecentWinsMarquee />
                </div>
            </div>
        </section>
    )
}
