/**
 * Centralized Framer Motion animation variants.
 * Import what you need — all variants follow the same { hidden, visible } API
 * so they compose cleanly with staggerContainer.
 */

// ─── Easing Curves ─────────────────────────────────────────────────────────────
export const ease = {
  smooth: [0.22, 1, 0.36, 1],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  snappy: [0.4, 0, 0.2, 1],
}

// ─── Fade Variants ─────────────────────────────────────────────────────────────
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: ease.smooth },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.smooth },
  },
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.smooth },
  },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: ease.smooth },
  },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: ease.smooth },
  },
}

// ─── Scale Variants ────────────────────────────────────────────────────────────
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: ease.smooth },
  },
}

export const scaleInBounce = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
}

// ─── Stagger Containers ────────────────────────────────────────────────────────
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const staggerContainerFast = staggerContainer(0.07, 0.05)
export const staggerContainerSlow = staggerContainer(0.18, 0.15)

// ─── Page Transition ───────────────────────────────────────────────────────────
export const pageTransition = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: ease.smooth },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: ease.snappy },
  },
}

// ─── Scroll-Triggered Reveal ───────────────────────────────────────────────────
/**
 * Use with:
 *   initial="hidden"
 *   whileInView="visible"
 *   viewport={{ once: true, margin: '-80px' }}
 */
export const revealUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.smooth },
  },
}

export const revealLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.smooth },
  },
}

export const revealRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.smooth },
  },
}

// ─── Hover & Tap Gestures ──────────────────────────────────────────────────────
export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.25, ease: ease.smooth } },
  whileTap: { scale: 0.97 },
}

export const hoverScale = {
  whileHover: { scale: 1.04, transition: { duration: 0.2 } },
  whileTap: { scale: 0.96 },
}

export const tapScale = {
  whileTap: { scale: 0.96, transition: { duration: 0.1 } },
}

// ─── Navbar Menu ──────────────────────────────────────────────────────────────
export const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: ease.snappy },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.35, ease: ease.smooth },
  },
}

export const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: ease.smooth },
  },
}

// ─── Float Animation (for hero decorative elements) ───────────────────────────
export const floatAnimation = {
  animate: {
    y: [0, -16, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const floatAnimationSlow = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1,
    },
  },
}

// ─── Spin (for loading states) ─────────────────────────────────────────────────
export const spinAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}
