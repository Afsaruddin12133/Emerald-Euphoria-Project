import { Badge, Card } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FEATURES = [
    { iconName: 'Zap', title: 'Lightning Fast', description: 'Sub-millisecond response times with our edge-first architecture. Deploy globally and serve users from the closest node.', gradient: 'from-brand-400 to-brand-600' },
    { iconName: 'Shield', title: 'Enterprise Security', description: 'SOC 2 Type II compliant with end-to-end encryption. Your data stays yours with zero-knowledge architecture.', gradient: 'from-sky-400 to-blue-600' },
    { iconName: 'Layers', title: 'Infinite Scale', description: 'From 10 to 10 million users — our infrastructure auto-scales seamlessly. No config changes, no downtime.', gradient: 'from-violet-400 to-purple-600' },
]

export default function FeaturesSection() {
    return (
        <section className="section relative overflow-hidden" id="features">
            <div className="container-custom">
                <motion.div variants={staggerContainer(0.12, 0.05)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div variants={fadeInUp}><Badge variant="brand" size="md">Features</Badge></motion.div>
                    <motion.h2 variants={fadeInUp} className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold">Everything you need to <span className="gradient-text">ship fast</span></motion.h2>
                    <motion.p variants={fadeInUp} className="mt-4 text-surface-400 text-lg">A complete toolkit for modern development teams. From infrastructure to insights, we've got you covered.</motion.p>
                </motion.div>

                <motion.div variants={staggerContainer(0.1, 0.15)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {FEATURES.map((feature) => (
                        <motion.div key={feature.title} variants={fadeInUp}>
                            <Card variant="default" padding="lg" hoverable className="h-full group">
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>{/* icon placeholder */}</div>
                                <h3 className="text-lg font-semibold text-surface-100 font-display group-hover:text-brand-300 transition-colors">{feature.title}</h3>
                                <p className="mt-2 text-sm text-surface-400 leading-relaxed">{feature.description}</p>
                                <div className="mt-4 flex items-center gap-1 text-sm text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn more <ArrowRight size={14} /></div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
