import { cn } from '@/lib/cn'

// ─── Variant Maps ──────────────────────────────────────────────────────────────
const variantClasses = {
  default: 'bg-surface-700/60 text-surface-300 border border-surface-600/40',
  brand:   'bg-brand-500/15 text-brand-300 border border-brand-500/30',
  accent:  'bg-accent-500/15 text-accent-400 border border-accent-500/30',
  success: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  warning: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
  danger:  'bg-red-500/15 text-red-400 border border-red-500/30',
  info:    'bg-sky-500/15 text-sky-400 border border-sky-500/30',
}

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5 gap-1',
  md: 'text-xs px-2.5 py-1 gap-1.5',
  lg: 'text-sm px-3 py-1 gap-2',
}

const dotColors = {
  default: 'bg-surface-400',
  brand:   'bg-brand-400',
  accent:  'bg-accent-400',
  success: 'bg-emerald-400',
  warning: 'bg-amber-400',
  danger:  'bg-red-400',
  info:    'bg-sky-400',
}

/**
 * Badge — status indicator pill.
 *
 * @prop {string}  variant   — 'default' | 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'info'
 * @prop {string}  size      — 'sm' | 'md' | 'lg'
 * @prop {boolean} dot       — shows a colored dot indicator (with pulse option)
 * @prop {boolean} pulse     — animates the dot (live status)
 */
export function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  pulse = false,
  className,
  children,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex items-center justify-center">
          {pulse && (
            <span
              className={cn(
                'absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping',
                dotColors[variant],
              )}
            />
          )}
          <span className={cn('rounded-full', dotColors[variant], size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2')} />
        </span>
      )}
      {children}
    </span>
  )
}
