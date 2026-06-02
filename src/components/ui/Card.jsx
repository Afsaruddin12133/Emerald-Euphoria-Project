import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

// ─── Variant Maps ──────────────────────────────────────────────────────────────
const variantClasses = {
  default: [
    'bg-surface-800/80 border border-surface-700/60',
    'hover:border-brand-500/40 hover:bg-surface-750/90',
  ],
  glass: [
    'glass',
    'hover:border-brand-500/30 hover:bg-surface-800/70',
  ],
  elevated: [
    'bg-surface-800 border border-surface-700/40',
    'shadow-[0_4px_24px_oklch(0_0_0/0.35)]',
    'hover:shadow-[0_16px_48px_oklch(0_0_0/0.5)] hover:border-surface-600/60',
  ],
  brand: [
    'bg-brand-950/60 border border-brand-500/30',
    'hover:border-brand-400/60 hover:bg-brand-900/40',
  ],
}

const paddingClasses = {
  none: '',
  sm:   'p-4',
  md:   'p-5',
  lg:   'p-6',
  xl:   'p-8',
}

// ─── Card Component ────────────────────────────────────────────────────────────
/**
 * @prop {string}  variant   — 'default' | 'glass' | 'elevated' | 'brand'
 * @prop {string}  padding   — 'none' | 'sm' | 'md' | 'lg' | 'xl'
 * @prop {boolean} hoverable — adds lift animation on hover
 * @prop {boolean} clickable — adds pointer cursor and tap scale
 * @prop {string}  className
 */
export function Card({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  clickable = false,
  className,
  children,
  ...props
}) {
  const hoverMotion = hoverable
    ? { whileHover: { y: -4, transition: { duration: 0.25 } } }
    : {}
  const tapMotion = clickable
    ? { whileTap: { scale: 0.98, transition: { duration: 0.1 } } }
    : {}

  return (
    <motion.div
      {...hoverMotion}
      {...tapMotion}
      className={cn(
        'rounded-2xl transition-all duration-300',
        variantClasses[variant],
        paddingClasses[padding],
        clickable && 'cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ─── Sub-components ────────────────────────────────────────────────────────────
export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={cn('text-lg font-semibold text-surface-100 font-display', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={cn('text-sm text-surface-400 mt-1 leading-relaxed', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn('mt-5 flex items-center gap-3', className)} {...props}>
      {children}
    </div>
  )
}
