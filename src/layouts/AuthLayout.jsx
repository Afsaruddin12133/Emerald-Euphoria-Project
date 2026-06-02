import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

/**
 * AuthLayout — minimal wrapper for Sign In / Sign Up pages.
 * No full navbar. Just a centered logo header + page content.
 */
export function AuthLayout({ children }) {
  return (
    <div className="flex flex-col min-h-dvh bg-surface-900">
      {/* Minimal auth header */}
      <header className="border-b border-surface-700/40">
        <div className="container-custom flex h-16 items-center">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500">
              <Zap size={16} className="text-white fill-white" />
            </div>
            <span className="font-display font-bold text-lg text-surface-50 tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </Link>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-surface-700/40 py-4">
        <p className="text-center text-xs text-surface-500">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
