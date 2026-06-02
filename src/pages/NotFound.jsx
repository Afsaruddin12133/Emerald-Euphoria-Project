import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui'
import { PageWrapper } from '@/components/shared/PageWrapper'
import { fadeInUp, staggerContainer, ease } from '@/lib/animations'

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="section relative overflow-hidden min-h-[calc(100dvh-4rem)] flex items-center">
        {/* Background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="noise-overlay absolute inset-0" />

        <div className="container-custom relative z-10">
          <motion.div
            variants={staggerContainer(0.14, 0.1)}
            initial="hidden"
            animate="visible"
            className="text-center max-w-lg mx-auto"
          >
            {/* Animated 404 */}
            <motion.div
              variants={fadeInUp}
              className="relative inline-block mb-8"
            >
              <span className="text-[10rem] sm:text-[12rem] font-extrabold font-display leading-none gradient-text opacity-90">
                404
              </span>
              {/* Floating sparkle */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles size={28} className="text-accent-400" />
              </motion.div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-extrabold"
            >
              Page not found
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-surface-400 text-lg leading-relaxed"
            >
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-3 justify-center"
            >
              <Button variant="primary" size="lg" leftIcon={<Home size={18} />}>
                <Link to="/">Go Home</Link>
              </Button>
              <Button variant="secondary" size="lg" leftIcon={<ArrowLeft size={18} />}>
                <Link to={-1}>Go Back</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
