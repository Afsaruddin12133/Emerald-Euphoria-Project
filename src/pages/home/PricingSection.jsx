import { Badge, Button, Card } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const PRICING_TIERS = [
    { name: 'Starter', price: '0', period: 'forever', description: 'Perfect for side projects and experiments.', features: ['5 projects', '10K API calls/mo', 'Community support', 'Basic analytics'], cta: 'Get Started Free', variant: 'secondary' },
    { name: 'Pro', price: '49', period: '/month', description: 'For growing teams that need more power.', features: ['Unlimited projects', '1M API calls/mo', 'Priority support', 'Advanced analytics', 'Team collaboration', 'Custom domains'], cta: 'Start Free Trial', variant: 'primary', popular: true },
    { name: 'Enterprise', price: 'Custom', period: '', description: 'For organizations with complex requirements.', features: ['Everything in Pro', 'Unlimited API calls', 'Dedicated support', 'SLA guarantee', 'SSO & SAML', 'On-premise option'], cta: 'Contact Sales', variant: 'outline' },
]

export default function PricingSection() {
    return (
        <section className="section relative overflow-hidden" id="pricing">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="container-custom relative z-10">
                <motion.div variants={staggerContainer(0.12, 0.05)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div variants={fadeInUp}><Badge variant="brand" size="md">Pricing</Badge></motion.div>
                    <motion.h2 variants={fadeInUp} className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold">Simple, <span className="gradient-text">transparent</span> pricing</motion.h2>
                    <motion.p variants={fadeInUp} className="mt-4 text-surface-400 text-lg">No hidden fees. No surprises. Start free and scale as you grow.</motion.p>
                </motion.div>

                <motion.div variants={staggerContainer(0.12, 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {PRICING_TIERS.map((tier) => (
                        <motion.div key={tier.name} variants={fadeInUp} className="relative">
                            {tier.popular && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"><Badge variant="accent" size="sm"><Sparkles size={12} className="mr-1" /> Most Popular</Badge></div>)}
                            <Card variant={tier.popular ? 'brand' : 'default'} padding="lg" hoverable className={`h-full flex flex-col ${tier.popular ? 'ring-1 ring-brand-500/40' : ''}`}>
                                <h3 className="text-lg font-semibold text-surface-100 font-display">{tier.name}</h3>
                                <p className="text-sm text-surface-400 mt-1">{tier.description}</p>
                                <div className="mt-6 mb-6">
                                    <span className="text-4xl font-extrabold text-surface-50 font-display">{tier.price === 'Custom' ? '' : '$'}{tier.price}</span>
                                    {tier.period && (<span className="text-surface-400 text-sm ml-1">{tier.period}</span>)}
                                </div>
                                <ul className="space-y-3 flex-1 mb-8">{tier.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm text-surface-300"><Check size={16} className="text-brand-400 shrink-0 mt-0.5" />{f}</li>))}</ul>
                                <Button variant={tier.variant} fullWidth>{tier.cta}</Button>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
