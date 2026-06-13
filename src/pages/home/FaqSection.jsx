import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
    {
        question: 'Do I need a promo code to get started?',
        answer: 'No. Our 100% First Deposit Match is available to all new players. Simply sign up, make your first deposit using any supported payment method, and your bonus credits will be added automatically.'
    },
    {
        question: 'How do I fund my wallet?',
        answer: 'Open your Wallet, select a supported deposit method, and follow the instructions provided. Once your payment is confirmed, your credits will be added to your account.'
    },
    {
        question: 'How fast are payouts?',
        answer: 'Most redemption requests are processed quickly, typically within 5–15 minutes. In some cases, additional verification, manual review, or payment provider delays may result in longer processing times.'
    },
    {
        question: 'Is there a minimum deposit amount?',
        answer: 'Yes. Minimum deposit requirements vary depending on the payment method selected. For Crypto deposits, the minimum deposit is $1. For Tierlock deposits, the minimum deposit is $19.99. The applicable minimum amount will be displayed before you complete your transaction.'
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
                <div className="text-center mb-[40px] lg:mb-[80px]">
                    <h2 className="font-['Montserrat'] uppercase font-black text-[30px] md:text-[44px] leading-[100%] drop-shadow-[0_4px_2px_rgba(0,0,0,0.9)] [-webkit-text-stroke:1.5px_currentColor]" style={{ letterSpacing: '0', lineHeight: '1' }}>
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
