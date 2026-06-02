import { Link } from 'react-router-dom';
import logoImg from '@/assets/logo.png';
import ukFlagImg from '@/assets/ukflag.png';

const CustomXIcon = () => (
    <svg className="w-4 h-4 text-[#738c82] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L5.25 24H1.94l7.73-8.835L1.25 2.25h6.832l4.708 6.183L18.244 2.25zM16.91 21.75h1.833L7.09 4.25H5.15l11.76 17.5z" />
    </svg>
);

const CustomWhatsappIcon = () => (
    <svg className="w-5 h-5 text-[#738c82] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
);

const CustomFacebookIcon = () => (
    <svg className="w-5 h-5 text-[#738c82] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);

const CustomInstagramIcon = () => (
    <svg className="w-5 h-5 text-[#738c82] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
);

const CustomSendIcon = () => (
    <svg className="w-5 h-5 text-[#738c82] group-hover:text-white transition-colors -ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13"/>
        <path d="M22 2L15 22 11 13 2 9l20-7z"/>
    </svg>
);

const CustomChevronDown = () => (
    <svg className="w-4 h-4 ml-2 text-[#738c82]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"/>
    </svg>
);

export function Footer() {
    return (
        <footer className="bg-[#030d09] pt-16 pb-8 mt-auto w-full relative z-10 border-t border-white/5">
            <div className="container-custom">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                    <img src={logoImg} alt="Emerald Euphoria" className="w-[120px] h-[92px] object-contain" />
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-11 h-11 rounded-[12px] bg-[#0c1f17] flex items-center justify-center hover:bg-[#122e23] transition-colors group">
                            <CustomFacebookIcon />
                        </a>
                        <a href="#" className="w-11 h-11 rounded-[12px] bg-[#0c1f17] flex items-center justify-center hover:bg-[#122e23] transition-colors group">
                            <CustomInstagramIcon />
                        </a>
                        <a href="#" className="w-11 h-11 rounded-[12px] bg-[#0c1f17] flex items-center justify-center hover:bg-[#122e23] transition-colors group">
                            <CustomXIcon />
                        </a>
                        <a href="#" className="w-11 h-11 rounded-[12px] bg-[#0c1f17] flex items-center justify-center hover:bg-[#122e23] transition-colors group">
                            <CustomWhatsappIcon />
                        </a>
                        <a href="#" className="w-11 h-11 rounded-[12px] bg-[#0c1f17] flex items-center justify-center hover:bg-[#122e23] transition-colors group">
                            <CustomSendIcon />
                        </a>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 font-['Montserrat']">
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Games</h4>
                        <ul className="space-y-4">
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">15+ Platforms</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Slots</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Fish Games</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">More</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">About us</h4>
                        <ul className="space-y-4">
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">All Games</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Why Choose Us</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">How to Play</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Reviews</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Rewards</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Support/Legal</h4>
                        <ul className="space-y-4">
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Responsible Gambling</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Terms of Service</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Live Support</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Rules</h4>
                        <ul className="space-y-4">
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Privacy Policy</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">AML Policy</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Terms & Conditions</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">KYC Verify</Link></li>
                            <li><Link to="#" className="text-[#738c82] hover:text-white transition-colors font-medium">Withdrawal Of Funds</Link></li>
                        </ul>
                    </div>
                    
                    {/* Language Dropdown */}
                    <div className="lg:col-span-1 flex justify-start lg:justify-end">
                        <button className="flex items-center gap-3 bg-[#0a1e16] border border-white/5 rounded-[10px] px-5 h-[48px] text-white font-bold hover:bg-[#0c241a] transition-colors w-full lg:w-auto self-start">
                            <img src={ukFlagImg} alt="UK" className="w-5 h-auto rounded-sm" />
                            <span>English</span>
                            <CustomChevronDown />
                        </button>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white/[0.04] mb-8" />

                <div className="text-center font-['Montserrat']">
                    <p className="text-[#556761] text-[13px] leading-relaxed max-w-5xl mx-auto mb-6 font-semibold">
                        Emerald Euphoria is owned and operated by Rtech LTD (Registration No. 16110), registered in Hamchako, Mutsamudu, Autonomous Island of Anjouan,
                        Union of Comoros. It is licensed and regulated by the Government of Anjouan under License No. ALSI-202509056-F12, fully authorized for gaming and
                        wagering operations. For support: support@emeraldeuphoria.com
                    </p>
                    <p className="text-[#556761] text-[13px] font-semibold">
                        © 2026 | ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </footer>
    );
}
