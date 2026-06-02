import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind CSS classes safely, resolving conflicts intelligently.
 * Use this instead of raw `clsx` for all component class composition.
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-brand-500', className)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
