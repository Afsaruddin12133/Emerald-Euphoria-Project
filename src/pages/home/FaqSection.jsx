import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
    {
        question: 'How do I deposit on Emerald Euphoria?',
        answer: 'To deposit on Emerald Euphoria, go to your Wallet and click Top Up. Choose your preferred payment method, follow the on-screen instructions, and complete your deposit securely.'
    },
    {
        question: 'How do I deposit on Emerald Euphoria?',
        answer: 'To deposit on Emerald Euphoria, go to your Wallet and click Top Up. Choose your preferred payment method, follow the on-screen instructions, and complete your deposit securely.'
    },
    {
        question: 'How do I deposit on Emerald Euphoria?',
        answer: 'To deposit on Emerald Euphoria, go to your Wallet and click Top Up. Choose your preferred payment method, follow the on-screen instructions, and complete your deposit securely.'
    },
    {
        question: 'How do I deposit on Emerald Euphoria?',
        answer: 'To deposit on Emerald Euphoria, go to your Wallet and click Top Up. Choose your preferred payment method, follow the on-screen instructions, and complete your deposit securely.'
    },
    {
        question: 'How do I deposit on Emerald Euphoria?',
        answer: 'To deposit on Emerald Euphoria, go to your Wallet and click Top Up. Choose your preferred payment method, follow the on-screen instructions, and complete your deposit securely.'
    }
];

function FaqItem({ faq, isOpen, onClick }) {
    return (
        <div 
            className="w-full rounded-[15px] overflow-hidden cursor-pointer transition-colors duration-300"
            style={{ background: 'var(--Shade-03, #0F211B)' }}
            onClick={onClick}
        >
                <div className="w-full px-[24px] py-[22px] flex items-center justify-start gap-[16px]">
                <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5 text-[#556761]" />
                </motion.div>
                <h4 className="text-white font-['Montserrat'] font-bold text-[16px] leading-[100%]" style={{ letterSpacing: '0' }}>
                    {faq.question}
                </h4>
            </div>
            
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto", marginBottom: 24 },
                            collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-[24px] pl-[60px] text-[#556761] font-['Montserrat'] font-bold text-[16px] leading-[100%]" style={{ letterSpacing: '0' }}>
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full py-12 lg:py-20 relative z-20">
            <div className="container-custom max-w-[1280px] mx-auto">
                
                {/* Title */}
                <div className="text-center mb-[60px] md:mb-[80px]">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[44px] leading-[100%]" style={{ letterSpacing: '0', lineHeight: '1' }}>
                        <span className="text-white">FREQUENTLY ASKED </span>
                        <br />
                        <span className="text-[#68E203]">QUESTIONS</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="w-full flex flex-col gap-[16px]">
                    {FAQS.map((faq, index) => (
                        <FaqItem 
                            key={index} 
                            faq={faq} 
                            isOpen={index === openIndex} 
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)} 
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
