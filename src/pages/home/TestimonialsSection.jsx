import { Badge, Card } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
    { quote: 'Emerald Euphoria transformed how our team ships. We went from monthly releases to multiple deploys per day.', author: 'Sarah Chen', role: 'CTO, TechForge', avatar: 'SC' },
    { quote: 'The analytics alone paid for the platform 10x over. We can predict user behavior before it happens.', author: 'Marcus Rodriguez', role: 'VP Product, ScaleUp', avatar: 'MR' },
    { quote: 'Switching from three separate tools to Emerald Euphoria saved us $40k/year and made everyone happier.', author: 'Aisha Patel', role: 'Engineering Lead, NovaCraft', avatar: 'AP' },
]

export default function TestimonialsSection() {
    return (
        <section className="section relative overflow-hidden" id="testimonials">
            <div className="container-custom">
                <motion.div variants={staggerContainer(0.12, 0.05)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div variants={fadeInUp}><Badge variant="accent" size="md">Testimonials</Badge></motion.div>
                    <motion.h2 variants={fadeInUp} className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold">Loved by <span className="gradient-text">teams worldwide</span></motion.h2>
                    <motion.p variants={fadeInUp} className="mt-4 text-surface-400 text-lg">Don't take our word for it. Here's what our customers have to say.</motion.p>
                </motion.div>

                <motion.div variants={staggerContainer(0.15, 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t) => (
                        <motion.div key={t.author} variants={fadeInUp}>
                            <Card variant="glass" padding="lg" hoverable className="h-full flex flex-col">
                                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => (<Star key={i} size={16} className="text-accent-400 fill-accent-400" />))}</div>
                                <p className="text-surface-200 leading-relaxed flex-1">"{t.quote}"</p>
                                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-surface-700/30">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-bold text-white shrink-0">{t.avatar}</div>
                                    <div>
                                        <p className="text-sm font-semibold text-surface-100">{t.author}</p>
                                        <p className="text-xs text-surface-400">{t.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
