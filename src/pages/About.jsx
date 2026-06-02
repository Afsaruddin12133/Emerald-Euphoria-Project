import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Heart, Target, Lightbulb, Users, Globe, Shield,
  ArrowRight, Github, Twitter, Linkedin, Sparkles
} from 'lucide-react'
import { Button, Badge, Card } from '@/components/ui'
import { PageWrapper } from '@/components/shared/PageWrapper'
import {
  fadeInUp, fadeInLeft, fadeInRight, revealUp,
  staggerContainer, scaleIn
} from '@/lib/animations'

// ─── Data ──────────────────────────────────────────────────────────────────────
const VALUES = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Every feature we build starts with one question: will this help our customers move faster?',
    color: 'brand',
  },
  {
    icon: Heart,
    title: 'Developer Love',
    description: 'We obsess over developer experience. Beautiful APIs, thorough docs, and instant support.',
    color: 'rose',
  },
  {
    icon: Lightbulb,
    title: 'Bold Innovation',
    description: 'We challenge the status quo. If everyone is going left, we ask why nobody\'s looking up.',
    color: 'accent',
  },
  {
    icon: Shield,
    title: 'Trust First',
    description: 'Security and privacy aren\'t features — they\'re foundations. Zero compromises, ever.',
    color: 'sky',
  },
]

const TEAM = [
  { name: 'Alex Rivera', role: 'CEO & Co-Founder', initials: 'AR', grad: 'from-brand-400 to-brand-700' },
  { name: 'Priya Sharma', role: 'CTO & Co-Founder', initials: 'PS', grad: 'from-violet-400 to-violet-700' },
  { name: 'Jordan Lee', role: 'VP Engineering', initials: 'JL', grad: 'from-sky-400 to-sky-700' },
  { name: 'Maya Chen', role: 'Head of Design', initials: 'MC', grad: 'from-rose-400 to-rose-700' },
  { name: 'Sam Torres', role: 'Head of Product', initials: 'ST', grad: 'from-accent-400 to-amber-700' },
  { name: 'Lina Okafor', role: 'VP Sales', initials: 'LO', grad: 'from-teal-400 to-teal-700' },
]

const MILESTONES = [
  { year: '2022', title: 'Founded', description: 'Two engineers frustrated with fragmented dev tools started building something better.' },
  { year: '2023', title: 'Seed Round', description: 'Raised $4M from top-tier investors. Launched private beta with 200 early adopters.' },
  { year: '2024', title: '10K Users', description: 'Crossed 10,000 active users. Launched our marketplace and enterprise tier.' },
  { year: '2025', title: 'Series A', description: 'Raised $18M. Expanded team to 45 people across 12 countries.' },
  { year: '2026', title: 'v2.0 Launch', description: 'Complete platform rewrite. AI-powered analytics. 300+ edge nodes worldwide.' },
]

const colorMap = {
  brand: 'bg-brand-500/15 text-brand-400 border-brand-500/30',
  rose: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
  accent: 'bg-accent-500/15 text-accent-400 border-accent-500/30',
  sky: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="section relative overflow-hidden" id="about-hero">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="noise-overlay absolute inset-0" />

        <div className="container-custom relative z-10">
          <motion.div
            variants={staggerContainer(0.14, 0.1)}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="brand" size="lg" dot>About Us</Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              We're on a mission to{' '}
              <span className="gradient-text">empower builders</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-surface-300 max-w-2xl mx-auto leading-relaxed"
            >
              Emerald Euphoria was born from a simple frustration: modern teams deserve
              modern tools. We're building the platform we always wished existed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section" id="values">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold">
              Our <span className="gradient-text">values</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-surface-400 text-lg">
              The principles that guide every decision we make.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={fadeInUp}>
                <Card variant="default" padding="lg" hoverable className="h-full group">
                  <div className={`inline-flex p-3 rounded-xl border ${colorMap[v.color]} mb-4`}>
                    <v.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-100 font-display group-hover:text-brand-300 transition-colors">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-surface-400 leading-relaxed">{v.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section relative" id="timeline">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/20 to-transparent" />

        <div className="container-custom relative z-10">
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold">
              Our <span className="gradient-text">journey</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-surface-400 text-lg">
              From a two-person garage project to a global platform.
            </motion.p>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/40 via-brand-500/20 to-transparent" />

            <motion.div
              variants={staggerContainer(0.15, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-10"
            >
              {MILESTONES.map((m) => (
                <motion.div key={m.year} variants={fadeInUp} className="flex gap-6 relative">
                  {/* Dot */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 border border-brand-500/30 shrink-0">
                    <span className="text-sm font-bold text-brand-300 font-display">{m.year}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-surface-100 font-display">{m.title}</h3>
                    <p className="mt-1 text-sm text-surface-400 leading-relaxed">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" id="team">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold">
              Meet the <span className="gradient-text">team</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-surface-400 text-lg">
              A global team united by a shared passion for building great tools.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {TEAM.map((member) => (
              <motion.div key={member.name} variants={scaleIn} className="text-center group">
                <div className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${member.grad} flex items-center justify-center text-xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  {member.initials}
                </div>
                <p className="text-sm font-semibold text-surface-100">{member.name}</p>
                <p className="text-xs text-surface-400 mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="about-cta">
        <div className="container-custom">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Want to <span className="gradient-text">join us?</span>
            </h2>
            <p className="mt-4 text-surface-400 text-lg max-w-xl mx-auto">
              We're always looking for talented builders who care deeply about craft.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
                View Open Roles
              </Button>
              <Button variant="ghost" size="lg">
                Our Culture
              </Button>
            </div>

            {/* Social links */}
            <div className="mt-12 flex justify-center gap-4">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-800 border border-surface-700/50 text-surface-400 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-200"
                >
                  <s.icon size={18} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
