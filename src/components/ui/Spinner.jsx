import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

const sizeMap = {
  sm:  { outer: 'h-4 w-4',  stroke: 2,   dash: 10 },
  md:  { outer: 'h-6 w-6',  stroke: 2.5, dash: 14 },
  lg:  { outer: 'h-8 w-8',  stroke: 2.5, dash: 18 },
  xl:  { outer: 'h-12 w-12', stroke: 3,  dash: 26 },
}

const colorMap = {
  brand:  'text-brand-500',
  accent: 'text-accent-500',
  white:  'text-white',
  muted:  'text-surface-400',
}

/**
 * Spinner — animated SVG loading indicator.
 *
 * @prop {'sm'|'md'|'lg'|'xl'} size
 * @prop {'brand'|'accent'|'white'|'muted'} color
 */
export function Spinner({ size = 'md', color = 'brand', className }) {
  const { outer } = sizeMap[size]

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
      className={cn(outer, colorMap[color], className)}
      role="status"
      aria-label="Loading"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
        <circle
          cx="12" cy="12" r="10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeOpacity="0.15"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  )
}

/**
 * FullPageSpinner — centered full-screen loading state
 */
export function FullPageSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-surface-900/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="xl" color="brand" />
        <p className="text-surface-400 text-sm animate-pulse">Loading…</p>
      </div>
    </div>
  )
}
