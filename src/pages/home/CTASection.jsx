import { Button } from '@/components/ui';
import { revealUp } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="section" id="cta">
            <div className="container-custom">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={revealUp} className="relative overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-surface-800 to-brand-950/90" />
                    <div className="absolute inset-0 border border-brand-500/20 rounded-3xl" />
                    <div className="orb absolute -top-20 -right-20 w-[300px] h-[300px] bg-brand-500/25" />
                    <div className="orb absolute -bottom-16 -left-16 w-[250px] h-[250px] bg-accent-500/15" />
                    <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 text-center">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Ready to <span className="gradient-text">get started?</span></motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-4 text-surface-300 text-lg max-w-xl mx-auto">Join thousands of teams building the future with Emerald Euphoria. Free to start, powerful to scale.</motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-8 flex flex-wrap gap-4 justify-center">
                            <Button variant="primary" size="lg" rightIcon={<Rocket size={18} />}>Start Free Trial</Button>
                            <Button variant="ghost" size="lg">Talk to Sales</Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
