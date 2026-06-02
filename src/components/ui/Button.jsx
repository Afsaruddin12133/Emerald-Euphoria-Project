import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/cn'

// ─── Variant Maps ──────────────────────────────────────────────────────────────
const variantClasses = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-400 shadow-[0_0_20px_oklch(0.60_0.178_158/0.4)] hover:shadow-[0_0_32px_oklch(0.60_0.178_158/0.6)] border border-brand-400/30',
  secondary:
    'bg-surface-800 text-surface-100 hover:bg-surface-700 border border-surface-600/60 hover:border-surface-500/80',
  ghost:
    'bg-transparent text-surface-200 hover:bg-surface-800/70 hover:text-white border border-transparent hover:border-surface-700/50',
  outline:
    'bg-transparent text-brand-400 border border-brand-500/60 hover:bg-brand-500/10 hover:border-brand-400 hover:text-brand-300',
  accent:
    'bg-accent-500 text-surface-900 hover:bg-accent-400 font-semibold shadow-[0_0_20px_oklch(0.74_0.178_82/0.4)] hover:shadow-[0_0_32px_oklch(0.74_0.178_82/0.55)]',
  danger:
    'bg-red-600/20 text-red-400 border border-red-500/40 hover:bg-red-600/30 hover:border-red-400 hover:text-red-300',
}

const sizeClasses = {
  sm:  'h-8  px-3   text-sm   gap-1.5 rounded-lg',
  md:  'h-10 px-4   text-sm   gap-2   rounded-xl',
  lg:  'h-12 px-6   text-base gap-2.5 rounded-xl',
  xl:  'h-14 px-8   text-lg   gap-3   rounded-2xl',
}

// ─── Button Component ──────────────────────────────────────────────────────────
/**
 * Polymorphic Button — renders as `<motion.button>` by default.
 *
 * @prop {string}  variant    — 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent' | 'danger'
 * @prop {string}  size       — 'sm' | 'md' | 'lg' | 'xl'
 * @prop {boolean} loading    — shows spinner, disables interaction
 * @prop {boolean} fullWidth  — stretches to container width
 * @prop {node}    leftIcon   — icon node rendered before label
 * @prop {node}    rightIcon  — icon node rendered after label
 */
export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  className,
  children,
  ...props
}) {
  const isDisabled = disabled || loading

  return (
    <motion.button
      whileTap={{ scale: isDisabled ? 1 : 0.96 }}
      whileHover={isDisabled ? {} : { y: -1 }}
      transition={{ duration: 0.15 }}
      disabled={isDisabled}
      className={cn(
        // Base
        'relative inline-flex items-center justify-center font-medium',
        'select-none cursor-pointer transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900',
        // Variant + Size
        variantClasses[variant],
        sizeClasses[size],
        // States
        isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Loader2 className="animate-spin" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
        </motion.span>
      )}

      {/* Content */}
      <span className={cn('flex items-center gap-inherit', loading && 'invisible')}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </span>
    </motion.button>
  )
}
