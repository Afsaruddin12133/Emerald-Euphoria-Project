import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Bell, CheckCircle2, AlertTriangle, Info,
  Sparkles, ArrowRight, Zap, Rocket, Gift, AlertCircle
} from 'lucide-react'
import { Button, Badge, Card } from '@/components/ui'
import { PageWrapper } from '@/components/shared/PageWrapper'
import {
  fadeInUp, staggerContainer
} from '@/lib/animations'

// ─── Popup Variants ────────────────────────────────────────────────────────────
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
  exit: {
    opacity: 0, scale: 0.95, y: 10,
    transition: { duration: 0.15 },
  },
}

const slideUpVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 28 },
  },
  exit: {
    opacity: 0, y: '100%',
    transition: { duration: 0.2 },
  },
}

const toastVariants = {
  hidden: { opacity: 0, x: 80, scale: 0.9 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { type: 'spring', stiffness: 350, damping: 25 },
  },
  exit: {
    opacity: 0, x: 80, scale: 0.9,
    transition: { duration: 0.2 },
  },
}

// ─── Popup Config ──────────────────────────────────────────────────────────────
const POPUP_DEMOS = [
  {
    id: 'modal',
    title: 'Modal Dialog',
    description: 'Center-screen modal with spring animation and overlay.',
    icon: Sparkles,
    gradient: 'from-brand-400 to-brand-600',
  },
  {
    id: 'slideup',
    title: 'Bottom Sheet',
    description: 'Slides up from the bottom. Perfect for mobile-friendly prompts.',
    icon: Rocket,
    gradient: 'from-violet-400 to-purple-600',
  },
  {
    id: 'toast-success',
    title: 'Success Toast',
    description: 'Non-intrusive notification that auto-dismisses.',
    icon: CheckCircle2,
    gradient: 'from-emerald-400 to-emerald-600',
  },
  {
    id: 'toast-warning',
    title: 'Warning Toast',
    description: 'Alert notification with amber styling.',
    icon: AlertTriangle,
    gradient: 'from-amber-400 to-amber-600',
  },
  {
    id: 'toast-error',
    title: 'Error Toast',
    description: 'Critical error notification with red accent.',
    icon: AlertCircle,
    gradient: 'from-red-400 to-red-600',
  },
  {
    id: 'banner',
    title: 'Announcement Banner',
    description: 'Full-width promotional banner at the top.',
    icon: Gift,
    gradient: 'from-accent-400 to-amber-600',
  },
]

// ─── Component ─────────────────────────────────────────────────────────────────
export default function PopupDemo() {
  const [activePopup, setActivePopup] = useState(null)
  const [toasts, setToasts] = useState([])
  const [banner, setBanner] = useState(false)
  const toastIdRef = useRef(0)

  const openPopup = (id) => {
    if (id.startsWith('toast-')) {
      const type = id.replace('toast-', '')
      toastIdRef.current += 1
      const toast = { id: toastIdRef.current, type }
      setToasts((prev) => [...prev, toast])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id))
      }, 4000)
    } else if (id === 'banner') {
      setBanner(true)
    } else {
      setActivePopup(id)
    }
  }

  const closePopup = () => setActivePopup(null)

  return (
    <PageWrapper>
      {/* Banner */}
      <AnimatePresence>
        {banner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 text-white">
              <div className="container-custom flex items-center justify-between py-3 gap-4">
                <div className="flex items-center gap-3">
                  <Gift size={18} />
                  <p className="text-sm font-medium">
                    🎉 <strong>Limited offer!</strong> Get 50% off your first 3 months with code <code className="bg-white/20 px-1.5 py-0.5 rounded text-xs font-mono">EUPHORIA50</code>
                  </p>
                </div>
                <button
                  onClick={() => setBanner(false)}
                  className="shrink-0 p-1 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Dismiss banner"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="section relative overflow-hidden" id="popup-demo">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="noise-overlay absolute inset-0" />

        <div className="container-custom relative z-10">
          {/* Header */}
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            animate="visible"
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="accent" size="lg" dot pulse>
                <Bell size={14} className="mr-1" />
                Interactive Demos
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Popup & Toast{' '}
              <span className="gradient-text">Showcase</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg text-surface-300 leading-relaxed"
            >
              Click any card below to see beautifully animated popups, modals, toasts,
              and banners in action. All powered by Framer Motion.
            </motion.p>
          </motion.div>

          {/* Demo grid */}
          <motion.div
            variants={staggerContainer(0.08, 0.15)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
          >
            {POPUP_DEMOS.map((demo) => (
              <motion.div key={demo.id} variants={fadeInUp}>
                <Card
                  variant="default"
                  padding="lg"
                  hoverable
                  clickable
                  className="h-full group cursor-pointer"
                  onClick={() => openPopup(demo.id)}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${demo.gradient} mb-4`}>
                    <demo.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-100 font-display group-hover:text-brand-300 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="mt-2 text-sm text-surface-400 leading-relaxed">
                    {demo.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Try it <ArrowRight size={14} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activePopup === 'modal' && (
          <motion.div
            key="modal-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closePopup}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              key="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-surface-800 border border-surface-700/60 shadow-2xl overflow-hidden"
            >
              {/* Header gradient */}
              <div className="relative h-32 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles size={40} className="text-white/90" />
                </motion.div>
                <button
                  onClick={closePopup}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-surface-50 font-display">Welcome to Emerald Euphoria!</h2>
                <p className="mt-3 text-sm text-surface-400 leading-relaxed">
                  You've just triggered a beautiful spring-animated modal. This pattern is perfect for confirmations, forms, and important content.
                </p>
                <div className="mt-6 flex gap-3">
                  <Button variant="secondary" fullWidth onClick={closePopup}>
                    Cancel
                  </Button>
                  <Button variant="primary" fullWidth onClick={closePopup}>
                    Got it!
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom Sheet ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activePopup === 'slideup' && (
          <motion.div
            key="sheet-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closePopup}
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              key="sheet-content"
              variants={slideUpVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-t-3xl bg-surface-800 border-t border-surface-700/60 shadow-2xl"
            >
              {/* Handle */}
              <div className="flex justify-center pt-4 pb-2">
                <div className="w-10 h-1 rounded-full bg-surface-600" />
              </div>

              <div className="p-6 pt-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
                    <Rocket size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-surface-50 font-display">Quick Actions</h2>
                    <p className="text-xs text-surface-400">Choose an action below</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { label: 'Create New Project', icon: Zap },
                    { label: 'Invite Team Member', icon: Sparkles },
                    { label: 'View Analytics', icon: Info },
                  ].map((action) => (
                    <button
                      key={action.label}
                      onClick={closePopup}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-surface-200 hover:bg-surface-750 hover:text-white border border-transparent hover:border-surface-700/40 transition-all duration-200"
                    >
                      <action.icon size={18} className="text-brand-400 shrink-0" />
                      {action.label}
                      <ArrowRight size={14} className="ml-auto text-surface-500" />
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <Button variant="ghost" fullWidth onClick={closePopup}>
                    Dismiss
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toasts ────────────────────────────────────────────────────────────── */}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              variants={toastVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pointer-events-auto"
            >
              <Toast
                type={toast.type}
                onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </PageWrapper>
  )
}

// ─── Toast Sub-Component ───────────────────────────────────────────────────────
const toastConfig = {
  success: {
    icon: CheckCircle2,
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    accent: 'border-l-emerald-500 bg-emerald-500/5',
    iconColor: 'text-emerald-400',
  },
  warning: {
    icon: AlertTriangle,
    title: 'Warning',
    message: 'API rate limit approaching. Consider upgrading your plan.',
    accent: 'border-l-amber-500 bg-amber-500/5',
    iconColor: 'text-amber-400',
  },
  error: {
    icon: AlertCircle,
    title: 'Error',
    message: 'Deployment failed. Check your build configuration.',
    accent: 'border-l-red-500 bg-red-500/5',
    iconColor: 'text-red-400',
  },
}

function Toast({ type, onClose }) {
  const config = toastConfig[type]

  return (
    <div className={`flex items-start gap-3 w-80 px-4 py-3.5 rounded-xl border border-surface-700/60 bg-surface-800 shadow-xl border-l-4 ${config.accent}`}>
      <config.icon size={20} className={`${config.iconColor} shrink-0 mt-0.5`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-surface-100">{config.title}</p>
        <p className="text-xs text-surface-400 mt-0.5 leading-relaxed">{config.message}</p>
      </div>
      <button
        onClick={onClose}
        className="shrink-0 p-0.5 rounded text-surface-500 hover:text-surface-300 transition-colors"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  )
}
