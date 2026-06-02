import { motion } from 'framer-motion';

export default function LogoBar() {
    const logos = ['TechForge', 'ScaleUp', 'NovaCraft', 'CloudPeak', 'DataFlow', 'Synapse']
    return (
        <section className="border-y border-surface-700/30 bg-surface-900/50 py-8">
            <div className="container-custom">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-xs text-surface-500 uppercase tracking-[0.2em] mb-6">
                    Trusted by industry leaders
                </motion.p>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
                    {logos.map((name) => (
                        <span key={name} className="text-surface-500/70 font-display font-bold text-lg tracking-tight hover:text-surface-300 transition-colors duration-300 cursor-default">
                            {name}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
