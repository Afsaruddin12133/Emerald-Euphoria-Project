import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/shared/Navbar'

/**
 * RootLayout — public-facing shell: Navbar + page content.
 * Footer removed; can be added back per-page if needed.
 */
export function RootLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <Outlet />
    </div>
  )
}
