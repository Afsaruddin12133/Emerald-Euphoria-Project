import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
}

const bgMap = {
  brand: 'bg-gradient-to-br from-[#C6FF94] to-[#68E203] shadow-[0_0_8px_rgba(104,226,3,0.5)]',
  accent: 'bg-gradient-to-br from-[#C6FF94] to-[#107015]',
  white: 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]',
  muted: 'bg-surface-400',
}

/**
 * Spinner — animated diamond loading indicator for small elements (buttons, etc).
 *
 * @prop {'sm'|'md'|'lg'|'xl'} size
 * @prop {'brand'|'accent'|'white'|'muted'} color
 */
export function Spinner({ size = 'md', color = 'brand', className }) {
  return (
    <motion.div
      animate={{ 
        rotate: [45, 225, 405],
        scale: [1, 0.7, 1]
      }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity, 
        ease: 'easeInOut' 
      }}
      className={cn(sizeMap[size] || sizeMap.md, className, 'relative flex items-center justify-center')}
      role="status"
      aria-label="Loading"
    >
      <div className={cn("w-[75%] h-[75%] rounded-[2px]", bgMap[color] || bgMap.brand)} />
    </motion.div>
  )
}

/**
 * FullPageSpinner — highly creative animated emerald diamond full-screen loading state
 */
export function FullPageSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00120C]/90 backdrop-blur-md z-[9999]">
      <div className="relative flex flex-col items-center">
        {/* Backlight Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#68E203] rounded-full blur-[70px] opacity-20" />
        
        {/* Diamond Container */}
        <motion.div
          animate={{
            rotate: [45, 45, 225, 225],
            scale: [1, 1.1, 1.1, 1],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-16 h-16"
        >
          {/* Top Left Piece */}
          <motion.div 
            className="absolute top-0 left-0 w-[45%] h-[45%] bg-gradient-to-br from-[#C6FF94] to-[#68E203] rounded-[3px] shadow-[0_0_15px_rgba(104,226,3,0.3)]"
            animate={{
              x: [0, -12, -12, 0],
              y: [0, -12, -12, 0],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Top Right Piece */}
          <motion.div 
            className="absolute top-0 right-0 w-[45%] h-[45%] bg-gradient-to-bl from-[#C6FF94] to-[#107015] rounded-[3px] shadow-[0_0_15px_rgba(104,226,3,0.3)]"
            animate={{
              x: [0, 12, 12, 0],
              y: [0, -12, -12, 0],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Bottom Left Piece */}
          <motion.div 
            className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-gradient-to-tr from-[#107015] to-[#68E203] rounded-[3px] shadow-[0_0_15px_rgba(104,226,3,0.3)]"
            animate={{
              x: [0, -12, -12, 0],
              y: [0, 12, 12, 0],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Bottom Right Piece */}
          <motion.div 
            className="absolute bottom-0 right-0 w-[45%] h-[45%] bg-gradient-to-tl from-[#107015] to-[#68E203] rounded-[3px] shadow-[0_0_15px_rgba(104,226,3,0.3)]"
            animate={{
              x: [0, 12, 12, 0],
              y: [0, 12, 12, 0],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p 
          className="mt-16 font-['Montserrat'] font-bold tracking-[0.25em] text-[#C6FF94] text-sm uppercase"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading Euphoria
        </motion.p>
      </div>
    </div>
  )
}
