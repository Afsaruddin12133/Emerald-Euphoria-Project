import { scaleIn, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Clock, Lock, Rocket, TrendingUp } from 'lucide-react';

const STATS = [
    { value: '99.99%', label: 'Uptime SLA', icon: TrendingUp },
    { value: '50ms', label: 'Avg Response', icon: Clock },
    { value: '10M+', label: 'API Calls/Day', icon: Rocket },
    { value: '256-bit', label: 'Encryption', icon: Lock },
]

export default function StatsSection() {
    return (
        <section className="py-16 relative" id="stats">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/40 via-surface-900 to-brand-950/40" />
            <div className="absolute inset-0 border-y border-brand-500/10" />

            <div className="container-custom relative z-10">
                <motion.div variants={staggerContainer(0.12, 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((stat) => (
                        <motion.div key={stat.label} variants={scaleIn} className="text-center group">
                            <div className="inline-flex p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 mb-3 group-hover:bg-brand-500/20 group-hover:border-brand-400/40 transition-all duration-300"><stat.icon size={20} className="text-brand-400" /></div>
                            <p className="text-3xl sm:text-4xl font-extrabold text-surface-50 font-display">{stat.value}</p>
                            <p className="mt-1 text-sm text-surface-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
